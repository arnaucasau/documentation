import { CheerioAPI, Cheerio, load, Element } from "cheerio";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";

import { ApiType } from "./Metadata";
import { getLastPartFromFullIdentifier } from "../stringUtils";

export type componentProps = {
  id?: string;
  name?: string;
  signature?: string;
  extraSignatures?: string[];
  githubSourceLink?: string;
  extraGithubSourceLink?: string[];
  type?: string;
  value?: string;
};

export async function processMdxComponent(
  $: CheerioAPI,
  $main: Cheerio<any>,
  signatures: Cheerio<Element>[],
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  apiType: string,
  id: string,
): Promise<[string, string]> {
  const $firstElement = signatures.shift()!;
  const githubSourceLink = prepareGitHubLink(
    $firstElement,
    apiType === "method",
  );

  findByText($, $main, "em.property", apiType).remove();

  if (apiType == "class") {
    const props = {
      id,
      signature: $firstElement.html()!,
      githubSourceLink,
    };
    return [generateClassComponent(props), `</${apiType}>`];
  }

  if (apiType == "property") {
    const props = processProperty(
      $firstElement,
      $dl,
      priorApiType,
      githubSourceLink,
      id,
    );
    if (props) {
      return [generatePropertyComponent(props), `</${apiType}>`];
    }
    return ["", ""];
  }

  if (apiType == "method") {
    const props = processMethod(
      $,
      $firstElement,
      $dl,
      priorApiType,
      githubSourceLink,
      id,
    );
    const extraProps = signatures.map(($child) =>
      processMethod(
        $,
        $child,
        $dl,
        apiType,
        prepareGitHubLink($child, true),
        id,
      ),
    );
    mergeProps(apiType, props, extraProps);
    return [generateMethodComponent(props), `</${apiType}>`];
  }

  if (apiType == "attribute") {
    const props = processAttribute(
      $firstElement,
      $dl,
      priorApiType,
      githubSourceLink,
      id,
    );
    if (props) {
      return [generateAttributeComponent(props), `</${apiType}>`];
    }
    return ["", ""];
  }

  if (apiType === "function") {
    const props = processFunctionOrException(
      $firstElement,
      $dl,
      id,
      githubSourceLink,
    );
    const extraProps = signatures.map(($child) =>
      processFunctionOrException(
        $child,
        $dl,
        id,
        prepareGitHubLink($child, false),
      ),
    );
    mergeProps(apiType, props, extraProps);
    return [await generateFunctionComponent(props), `</${apiType}>`];
  }

  if (apiType === "exception") {
    const props = processFunctionOrException(
      $firstElement,
      $dl,
      id,
      githubSourceLink,
    );
    const extraProps = signatures.map(($child) =>
      processFunctionOrException(
        $child,
        $dl,
        id,
        prepareGitHubLink($child, false),
      ),
    );
    mergeProps(apiType, props, extraProps);
    return [generateExceptionComponent(props), `</${apiType}>`];
  }

  throw new Error(`Unhandled Python type: ${apiType}`);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function generateClassComponent(props: componentProps): string {
  return `<span class="target" id="${props.id}"/><p><code>${props.signature}</code>${props.githubSourceLink}</p>`;
}

export function generatePropertyComponent(props: componentProps): string {
  return `<span class="target" id='${props.id}'/><p><code>${props.signature}</code>${props.githubSourceLink}</p>`;
}

export function generateMethodComponent(props: componentProps): string {
  if (props.id) {
    return `<span class="target" id='${props.id}'/><p><code>${props.signature}</code>${props.githubSourceLink}</p>`;
  }
  return `<p><code>${props.signature}</code>${props.githubSourceLink}</p>`;
}

export function generateAttributeComponent(props: componentProps): string {
  if (props.signature && props.githubSourceLink) {
    return `<span class="target" id='${props.id}'/><p><code>${props.signature}</code>${props.githubSourceLink}</p>`;
  }

  const output = [
    `<span class="target" id='${props.id}'/><h3>${props.name}</h3>`,
  ];
  if (props.type) {
    output.push(`<p><code>${props.type}</code></p>`);
  }
  if (props.value) {
    output.push(`<p><code>${props.value}</code></p>`);
  }
  return output.join("\n");
}

export async function generateFunctionComponent(
  props: componentProps,
): Promise<string> {
  const signature = (await htmlHeaderToMd(props.signature!)).replaceAll("\n", "").replaceAll("'",'&#x27;');
  const extraSignatures: string[] = [];
  for (const sig of props.extraSignatures ?? []) {
    extraSignatures.push(`'${(await htmlHeaderToMd(sig!)).replaceAll("\n", "").replaceAll("'",'&#x27;')}'`);
  }

  return `<function 
    id='${props.id}'
    apiName='${props.name}'
    signature='${signature}'
    dedicatedFunctionPage='${typeof props.name != undefined}'
    github="${props.githubSourceLink}"
    extraSignatures='[${extraSignatures.join(", ") ?? ''}]'
    extraGithubSourceLink='[${props.extraGithubSourceLink ? props.extraGithubSourceLink.join(", ") : ""}]'    
  `;
}

export function generateExceptionComponent(props: componentProps): string {
  const descriptionHtml = `<span class="target" id="${props.id}"/><p><code>${props.signature}</code>${props.githubSourceLink}</p>`;
  if (props.name) {
    return `<h3>${props.name}</h3>${descriptionHtml}`;
  }
  return descriptionHtml;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function processProperty(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string,
  id: string,
): componentProps | undefined {
  if (!priorApiType && id) {
    $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
  }

  const signature = $child.find("em").text()?.replace(/^:\s+/, "");
  if (signature.trim().length === 0) return;
  return {
    id,
    signature,
    githubSourceLink,
  };
}

function processMethod(
  $: CheerioAPI,
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string,
  id: string,
): componentProps {
  if (id) {
    if (!priorApiType) {
      $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
    } else if (!$child.attr("id")) {
      // Overload methods have more than one <dt> tag, but only the first one
      // contains an id.
      return {
        name: getLastPartFromFullIdentifier(id),
        signature: $child.html()!,
        githubSourceLink,
      };
    } else {
      // Inline methods
      $(`<h3>${getLastPartFromFullIdentifier(id)}</h3>`).insertBefore($dl);
    }
  }

  return {
    id,
    name: getLastPartFromFullIdentifier(id),
    signature: $child.html()!,
    githubSourceLink,
  };
}

function processAttribute(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  priorApiType: string | undefined,
  githubSourceLink: string,
  id: string,
): componentProps | undefined {
  if (!priorApiType) {
    if (id) {
      $dl.siblings("h1").text(getLastPartFromFullIdentifier(id));
    }

    const signature = $child.find("em").text()?.replace(/^:\s+/, "");
    if (signature.trim().length === 0) return;
    return {
      id,
      signature,
      githubSourceLink,
    };
  }

  // Else, the attribute is embedded on the class
  const text = $child.text();

  // Index of the default value of the attribute
  let equalIndex = text.indexOf("=");
  if (equalIndex == -1) {
    equalIndex = text.length;
  }
  // Index of the attribute's type. The type should be
  // found before the default value
  let colonIndex = text.slice(0, equalIndex).indexOf(":");
  if (colonIndex == -1) {
    colonIndex = text.length;
  }

  // The attributes have the following shape: name [: type] [= value]
  const name = text.slice(0, Math.min(colonIndex, equalIndex)).trim();
  const type = text
    .slice(Math.min(colonIndex + 1, equalIndex), equalIndex)
    .trim();
  const value = text.slice(equalIndex, text.length).trim();

  return {
    id,
    name,
    type,
    value,
  };
}

function processFunctionOrException(
  $child: Cheerio<any>,
  $dl: Cheerio<any>,
  id: string,
  githubSourceLink: string,
): componentProps {
  const pageHeading = $dl.siblings("h1").text();
  if (id.endsWith(pageHeading) && pageHeading != "") {
    // Page is already dedicated to apiType; no heading needed
    return {
      id,
      signature: $child.html()!,
      githubSourceLink,
    };
  }

  const apiName = id.split(".").slice(-1)[0];
  return {
    id,
    name: apiName,
    signature: $child.html()!,
    githubSourceLink,
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Removes the original link from sphinx.ext.viewcode and returns the HTML string for our own link.
 *
 * This returns the HTML string, rather than directly inserting into the HTML, because the insertion
 * logic is most easily handled by the calling code.
 *
 * This function works the same regardless of whether the Sphinx build used `sphinx.ext.viewcode`
 * or `sphinx.ext.linkcode` because they have the same HTML structure.
 *
 * If the link corresponds to a method, we only return a link if it has line numbers included,
 * which implies that the link came from `sphinx.ext.linkcode` rather than `sphinx.ext.viewcode`.
 * That's because the owning class will already have a link to the relevant file; it's
 * noisy and not helpful to repeat the same link without line numbers for the individual methods.
 */
export function prepareGitHubLink(
  $child: Cheerio<any>,
  isMethod: boolean,
): string {
  const originalLink = $child.find(".viewcode-link").closest("a");
  if (originalLink.length === 0) {
    return "";
  }
  const href = originalLink.attr("href")!;
  originalLink.first().remove();
  return !isMethod || href.includes(".py#") ? href : "";
}

/**
 * Find the element that both matches the `selector` and whose content is the same as `text`
 */
function findByText(
  $: CheerioAPI,
  $main: Cheerio<any>,
  selector: string,
  text: string,
): Cheerio<any> {
  return $main.find(selector).filter((i, el) => $(el).text().trim() === text);
}

export function mergeProps(
  apiType: ApiType,
  componentProps: componentProps,
  props: componentProps[],
): void {
  for (const prop of props) {
    if (apiType == "attribute" || !prop.signature) {
      continue;
    }

    if (!componentProps.extraSignatures) {
      componentProps.extraSignatures = [];
    }
    componentProps.extraSignatures.push(prop.signature);

    if (!componentProps.extraGithubSourceLink) {
      componentProps.extraGithubSourceLink = [];
    }
    if (prop.githubSourceLink)
      componentProps.extraGithubSourceLink.push(prop.githubSourceLink);
  }
}

async function htmlHeaderToMd(html: string): Promise<string> {
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkStringify)
    .process(html);

  return String(file);
}

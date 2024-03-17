export type componentProps = {
  id?: string;
  name?: string;
  signature: string;
  extraSignatures?: string[];
  githubSourceLink: string;
  extraGithubSourceLink?: string[];
};

export type attributeComponentProps = {
  id: string;
  name?: string;
  type?: string;
  value?: string;
  signature?: string;
  githubSourceLink?: string;
};

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

export function generateAttributeComponent(
  props: attributeComponentProps,
): string {
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

export function generateFunctionOrExceptionComponent(
  props: componentProps,
): string {
  const descriptionHtml = `<span class="target" id="${props.id}"/><p><code>${props.signature}</code>${props.githubSourceLink}</p>`;
  if (props.name) {
    return `<h3>${props.name}</h3>${descriptionHtml}`;
  }
  return descriptionHtml;
}

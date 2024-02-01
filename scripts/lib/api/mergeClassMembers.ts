// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { includes, isEmpty, orderBy, reject } from "lodash";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkStringify from "remark-stringify";
import { Content, Root } from "mdast";
import { visit } from "unist-util-visit";

import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";
import { remarkStringifyOptions } from "./commonParserConfig";

export async function mergeClassMembers<T extends HtmlToMdResultWithUrl>(
  results: T[],
): Promise<T[]> {
  const resultsWithName = results.filter(
    (result) => !isEmpty(result.meta.apiName),
  );
  const classes = resultsWithName.filter(
    (result) => result.meta.apiType === "class",
  );

  for (const clazz of classes) {
    const members = orderBy(
      resultsWithName.filter((result) => {
        if (
          !includes(
            ["method", "property", "attribute", "function"],
            result.meta.apiType,
          )
        )
          return false;
        return result.meta.apiName?.startsWith(`${clazz.meta.apiName}.`);
      }),
      (result) => result.meta.apiName,
    );

    const attributesAndProps = members.filter(
      (member) =>
        member.meta.apiType === "attribute" ||
        member.meta.apiType === "property",
    );
    const methods = members.filter(
      (member) => member.meta.apiType === "method",
    );

    try {
      // inject members markdown
      clazz.markdown = (
        await unified()
          .use(remarkParse)
          .use(remarkMdx)
          .use(remarkGfm)
          .use(remarkMath)
          .use(() => {
            return async (root: Root) => {
              for (const node of root.children) {
                await replaceMembersAfterTitle(
                  root,
                  node,
                  "Attributes",
                  attributesAndProps,
                );
                await replaceMembersAfterTitle(root, node, "Methods", methods);
                await replaceMembersAfterTitle(
                  root,
                  node,
                  "Methods Defined Here",
                  methods,
                );
              }
            };
          })
          .use(remarkStringify, remarkStringifyOptions)
          .process(clazz.markdown)
      ).toString();
    } catch (e) {
      console.log("Error found in", clazz.meta.apiName);
      console.log(clazz.markdown);
      throw e;
    }
  }

  // remove merged results
  const finalResults = reject(results, (result) =>
    includes(["method", "attribute", "property"], result.meta.apiType),
  );

  return finalResults;
}

async function replaceMembersAfterTitle(
  tree: Root,
  node: Content,
  title: string,
  members: HtmlToMdResultWithUrl[],
) {
  // Keep old content when no members to inline
  if (members.length == 0) return;

  if (node.type !== "heading") return;
  const nodeIndex = tree.children.indexOf(node);
  if (nodeIndex === -1) return;

  const nextNode = tree.children[nodeIndex + 1];
  const firstChild = node.children[0];

  if (
    firstChild?.type === "text" &&
    firstChild?.value === title &&
    nextNode?.type === "table"
  ) {
    const children: any[] = [];
    for (const member of members) {
      const updated = await parseMarkdownIncreasingHeading(member.markdown, 2);
      children.push(...updated.children);
    }
    tree.children.splice(nodeIndex + 1, 1, ...children);
  }
}

async function parseMarkdownIncreasingHeading(
  md: string,
  depthIncrease: number,
): Promise<Root> {
  const root = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkMdx)
    .parse(md);
  const changedTree = await unified()
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkMdx)
    .use(() => (root) => {
      visit(root, "heading", (node: any) => {
        node.depth = node.depth + depthIncrease;
      });
    })
    .run(root);
  return changedTree;
}

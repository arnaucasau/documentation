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

import { $ } from "zx";
import { getRoot } from "./fs";
import { parse } from "path";
import { Pkg } from "./sharedTypes";
import { readFile, writeFile, readdir } from "fs/promises";
import transformLinks from "transform-markdown-links";

interface releaseNoteEntry {
  title: string;
  url: string;
}

/**
 * Check for markdown files in `docs/api/package-name/release-notes/
 * then sort them and create entries for the TOC.
 */
export const findLegacyReleaseNotes = async (
  pkg: Pkg,
): Promise<releaseNoteEntry[]> => {
  if (!pkg.hasSeparateReleaseNotes) {
    return [];
  }
  const legacyReleaseNoteVersions = (
    await $`ls ${getRoot()}/docs/api/${pkg.name}/release-notes`.quiet()
  ).stdout
    .trim()
    .split("\n")
    .map((x) => parse(x).name)
    .filter((x) => x.match(/^\d/)) // remove index
    .sort((a: string, b: string) => {
      const aParts = a.split(".").map((x) => Number(x));
      const bParts = b.split(".").map((x) => Number(x));
      for (let i = 0; i < 2; i++) {
        if (aParts[i] > bParts[i]) {
          return 1;
        }
        if (aParts[i] < bParts[i]) {
          return -1;
        }
      }
      return 0;
    })
    .reverse();

  const legacyReleaseNoteEntries = [];
  for (let version of legacyReleaseNoteVersions) {
    legacyReleaseNoteEntries.push({
      title: version,
      url: `/api/${pkg.name}/release-notes/${version}`,
    });
  }
  return legacyReleaseNoteEntries;
};

export function addNewReleaseNotes(pkg: Pkg): void {
  if (pkg.releaseNoteEntries[0].title === pkg.versionWithoutPatch) {
    // Entries already includes most recent release notes
    return;
  }
  pkg.releaseNoteEntries.unshift({
    title: pkg.versionWithoutPatch,
    url: `/api/${pkg.name}/release-notes/${pkg.versionWithoutPatch}`,
  });
}

export function generateReleaseNotesIndex(pkg: Pkg): string {
  let markdown = `---
title: ${pkg.title} release notes
description: New features, bug fixes, and other changes in previous versions of ${pkg.title}.
---

# ${pkg.title} release notes

New features, bug fixes, and other changes in previous versions of ${pkg.title}.

## Release notes by version

`;
  for (const entry of pkg.releaseNoteEntries) {
    markdown += `* [${entry.title}](${entry.url})\n`;
  }
  return markdown;
}

/**
 * Path to release notes file for the version we're adding
 */
export function currentReleaseNotesPath(pkg: Pkg): string {
  return `${getRoot()}/docs/api/${pkg.name}/release-notes/${
    pkg.versionWithoutPatch
  }.md`;
}

/**
 * Adds a new entry for the release notes of the current API version to the _toc.json
 * of all historical API versions.
 */
export async function updateHistoricalTocFiles(pkg: Pkg): Promise<void> {
  console.log("Updating _toc.json files for the historical versions");

  const historicalFolders = (
    await readdir(`${getRoot()}/docs/api/${pkg.name}`, { withFileTypes: true })
  ).filter((file) => file.isDirectory() && file.name.match(/[0-9].*/));

  for (let folder of historicalFolders) {
    let tocFile = await readFile(
      `${getRoot()}/docs/api/${pkg.name}/${folder.name}/_toc.json`,
      {
        encoding: "utf8",
      },
    );

    let jsonData = JSON.parse(tocFile);

    // Add the new version if necessary
    for (let child of jsonData.children) {
      if (child.title == "Release notes") {
        addNewReleaseNoteToc(child, pkg.versionWithoutPatch);
      }
    }

    await writeFile(
      `${getRoot()}/docs/api/${pkg.name}/${folder.name}/_toc.json`,
      JSON.stringify(jsonData, null, 2) + "\n",
    );
  }
}

/**
 * Adds a new entry for the current API version to the JSON list of release notes
 */
function addNewReleaseNoteToc(releaseNotesNode: any, newVersion: string) {
  // Add the current API version in the second position of the list
  if (releaseNotesNode.children[0].title != newVersion) {
    releaseNotesNode.children.unshift({
      title: newVersion,
      url: `/api/qiskit/release-notes/${newVersion}`,
    });
  }
}

function sortVersions(version1: string, version2: string){
  const comparison = version1.localeCompare(version2);
  if(comparison == 0){
    if(version1.length > version2.length){
      return 1
    }

    return -1
  }

    return comparison;
}

export async function writeReleaseNotes(pkg: Pkg, releaseNoteMarkdown: string){
  const sectionsAux = releaseNoteMarkdown.split("\n## ");
  const sections: string[] = sectionsAux.slice(1, sectionsAux.length);

  const markdownByPatchVersion: {[id: string]: string;} = {};
  sections.forEach((section) => {
    const version = section.split("\n").slice(0,1)[0];
    const content = section.split("\n");
    content.shift();
    markdownByPatchVersion[version] = `## ${version}\n${content.join("\n")}`;
  });

  const sortableArray = Object.entries(markdownByPatchVersion);
  const sortedArray = sortableArray.sort(([, a], [, b]) => sortVersions(a,b));
  const sortedObject = Object.fromEntries(sortedArray);

  //Object.entries(sortedObject).forEach(([version,_]) => console.log(version));

  const markdownByMinorVersion: {[id: string]: string;} = {};
  Object.entries(sortedObject).forEach(([versionPatch, markdown]) => {
    const versionMinor = versionPatch.split(".").slice(0,2).join(".");
    if(!markdownByMinorVersion.hasOwnProperty(versionMinor)){
      markdownByMinorVersion[versionMinor] = `---
title: Qiskit ${versionMinor} release notes
description: New features and bug fixes
---

# Qiskit ${versionMinor} release notes

`;
    }
    markdownByMinorVersion[versionMinor] += `${markdown}\n`;
  })

  for(let [versionMinor, markdown] of Object.entries(markdownByMinorVersion)){
    const path = `${getRoot()}/docs/api/${pkg.name}/release-notes/${
      versionMinor
    }.md`;
    await writeFile(path, markdown);
  }
}

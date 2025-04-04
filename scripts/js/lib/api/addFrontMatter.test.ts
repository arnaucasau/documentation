// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { expect, test } from "@playwright/test";

import addFrontMatter from "./addFrontMatter.js";
import { Pkg, ReleaseNotesConfig } from "./Pkg.js";
import { HtmlToMdResultWithUrl } from "./HtmlToMdResult.js";

test("addFrontMatter()", () => {
  const results: HtmlToMdResultWithUrl[] = [
    {
      markdown: "# Hardcoded!",
      meta: {
        hardcodedFrontmatter: "title: hardcoded\ndescription: Hello world!",
      },
      images: [],
      isReleaseNotes: false,
      url: "/api/my-pkg/foo",
    },
    {
      markdown: "# Hardcoded with python_api_name!",
      meta: {
        hardcodedFrontmatter:
          "title: hardcoded with python_api_name\ndescription: Hello world!",
        apiName: "quantum_software.MyClass",
        apiType: "class",
      },
      images: [],
      isReleaseNotes: true,
      url: "/api/my-pkg/release-notes",
    },
    {
      markdown: "# Python API",
      meta: {
        apiName: "quantum_software.MyClass",
        apiType: "class",
      },
      images: [],
      isReleaseNotes: false,
      url: "/api/my-pkg/foo",
    },
    {
      markdown: "# My module",
      meta: {
        apiName: "quantum_software",
        apiType: "module",
      },
      images: [],
      isReleaseNotes: false,
      url: "/api/my-pkg/foo",
    },
    {
      markdown: "# Some release notes!",
      meta: {},
      images: [],
      isReleaseNotes: true,
      url: "/api/my-pkg/releaes-notes",
    },
    {
      markdown: "# Index page",
      meta: {},
      images: [],
      isReleaseNotes: false,
      url: "/api/my-pkg/index",
    },
  ];
  const pkg = Pkg.mock({
    releaseNotesConfig: new ReleaseNotesConfig({
      separatePagesVersions: ["0.1"],
    }),
  });

  addFrontMatter(results, pkg);
  expect(results.map((result) => result.markdown)).toEqual([
    `---
title: hardcoded
description: Hello world!
---

# Hardcoded!
`,
    `---
title: hardcoded with python_api_name
description: Hello world!
---

# Hardcoded with python_api_name!
`,
    `---
title: MyClass (latest version)
description: API reference for quantum_software.MyClass in the latest version of my-quantum-project
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: quantum_software.MyClass
---

# Python API
`,
    `---
title: quantum_software (latest version)
description: API reference for quantum_software in the latest version of my-quantum-project
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: quantum_software
---

# My module
`,
    `---
title: My Quantum Project 0.1 release notes
description: Changes made in My Quantum Project 0.1
in_page_toc_max_heading_level: 3
---

# Some release notes!
`,
    `---
title: My Quantum Project API documentation (latest version)
description: Index of all the modules in the latest version of my-quantum-project.
---

# Index page
`,
  ]);
});

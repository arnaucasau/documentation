#with open("legacy_release-notes.md") as f:
with open("0.45.md") as f:
    sections = f.read().split("\n## ")[1:]

print(sections[0].split("\n", 1)[1])

sections_dict = {
   # E.g. "0.18.2": markdown_string
   s.split()[0]: f"## {s.split()[0]}\n" + s.split("\n", 1)[1]
   for s in sections
   }

compiled_sections = {}
for patch_version, markdown in sorted(sections_dict.items(), key=lambda x: x[0]):
    print(patch_version.split(".")[:2])
    minor_version = ".".join(patch_version.split(".")[:2])
    if minor_version not in compiled_sections:
        compiled_sections[minor_version] = f"""---
title: Qiskit {minor_version} release notes
description: New features and bug fixes
---

# Qiskit {minor_version} release notes

"""
    compiled_sections[minor_version] += markdown+'\n'

for version, markdown in compiled_sections.items():
    with open(f"test/{version}.md", "w") as f:
        f.write(markdown)

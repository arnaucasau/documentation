---
title: validate_job_tags
description: API reference for qiskit.providers.ibmq.utils.validate_job_tags
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.ibmq.utils.validate_job_tags
---

<Admonition title="Warning" type="caution">
  The package `qiskit-ibmq-provider` is being deprecated and its repo is going to be archived soon. Please transition to the new packages. More information in [https://ibm.biz/provider\_migration\_guide](https://ibm.biz/provider_migration_guide)
</Admonition>

# qiskit.providers.ibmq.utils.validate\_job\_tags

<span id="qiskit.providers.ibmq.utils.validate_job_tags" />

`validate_job_tags(job_tags, exception)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.41/qiskit/providers/ibmq/utils/utils.py "view source code")

Validates input job tags.

**Parameters**

*   **job\_tags** (`Optional`\[`List`\[`str`]]) – Job tags to be validated.
*   **exception** (`Type`\[`Exception`]) – Exception to raise if the tags are invalid.

**Raises**

**Exception** – If the job tags are invalid.

**Return type**

`None`


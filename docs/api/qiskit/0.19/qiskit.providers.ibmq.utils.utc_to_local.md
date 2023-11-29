---
title: utc_to_local
description: API reference for qiskit.providers.ibmq.utils.utc_to_local
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.ibmq.utils.utc_to_local
---

# utc\_to\_local

<span id="qiskit.providers.ibmq.utils.utc_to_local" />

`utc_to_local(utc_dt)`

Convert a UTC `datetime` object or string to a local timezone `datetime`.

**Parameters**

**utc\_dt** (`Union`\[`datetime`, `str`]) – Input UTC datetime or string.

**Return type**

`datetime`

**Returns**

A `datetime` with the local timezone.

**Raises**

**TypeError** – If the input parameter value is not valid.


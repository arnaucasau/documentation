---
title: add_deprecation_to_docstring
description: API reference for qiskit.utils.add_deprecation_to_docstring
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.utils.add_deprecation_to_docstring
---

<span id="qiskit-utils-add-deprecation-to-docstring" />

# qiskit.utils.add\_deprecation\_to\_docstring

<span id="qiskit.utils.add_deprecation_to_docstring" />

`add_deprecation_to_docstring(func, msg, *, since, pending)`

Dynamically insert the deprecation message into `func`’s docstring.

**Parameters**

*   **func** (*Callable*) – The function to modify.
*   **msg** (*str*) – The full deprecation message.
*   **since** (*str | None*) – The version the deprecation started at.
*   **pending** (*bool*) – Is the deprecation still pending?


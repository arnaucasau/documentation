---
title: shannon_entropy
description: API reference for qiskit.tools.shannon_entropy
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.tools.shannon_entropy
---

# shannon\_entropy

<span id="qiskit.tools.shannon_entropy" />

`shannon_entropy(pvec, base=2)`

Compute the Shannon entropy of a probability vector.

The shannon entropy of a probability vector pv is defined as \$H(pv) = - sum\_j pv\[j] log\_b (pv\[j])\$ where \$0 log\_b 0 = 0\$.

**Parameters**

*   **pvec** (*array\_like*) – a probability vector.
*   **base** (*int*) – the base of the logarithm

**Returns**

The Shannon entropy H(pvec).

**Return type**

float


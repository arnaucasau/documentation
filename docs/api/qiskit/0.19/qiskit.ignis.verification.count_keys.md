---
title: count_keys
description: API reference for qiskit.ignis.verification.count_keys
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.ignis.verification.count_keys
---

# count\_keys

<span id="qiskit.ignis.verification.count_keys" />

`count_keys(num_qubits)`

Return ordered count keys.

**Parameters**

**num\_qubits** (`int`) – The number of qubits in the generated list.

**Return type**

`List`\[`str`]

**Returns**

The strings of all 0/1 combinations of the given number of qubits

## Example

```python
>>> count_keys(3)
['000', '001', '010', '011', '100', '101', '110', '111']
```


---
title: gate_length_values
description: API reference for qiskit.providers.aer.noise.device.gate_length_values
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.aer.noise.device.gate_length_values
---

# qiskit.providers.aer.noise.device.gate\_length\_values

<span id="qiskit.providers.aer.noise.device.gate_length_values" />

`gate_length_values(properties)`[GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.10/qiskit/providers/aer/noise/device/parameters.py "view source code")

Return gate length values from a devices BackendProperties.

**Parameters**

**properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – device backend properties

**Returns**

A list of tuples `(name, qubits, value)`. If gate length information is not available `None` will be returned for value.

**Return type**

list

## Additional Information:

Gate length values are returned in nanosecond (ns) units.


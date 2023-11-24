---
title: basic_device_readout_errors
description: API reference for qiskit_aer.noise.device.basic_device_readout_errors
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.noise.device.basic_device_readout_errors
---

# qiskit\_aer.noise.device.basic\_device\_readout\_errors[¶](#qiskit-aer-noise-device-basic-device-readout-errors "Permalink to this headline")

<span id="qiskit_aer.noise.device.basic_device_readout_errors" />

`basic_device_readout_errors(properties=None, target=None)`

Return readout error parameters from either of device Target or BackendProperties.

If `target` is supplied, `properties` will be ignored.

**Parameters**

*   **properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – device backend properties
*   **target** ([*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")) – device backend target

**Returns**

A list of pairs `(qubits, ReadoutError)` for qubits with non-zero readout error values.

**Return type**

list

**Raises**

**NoiseError** – if neither properties nor target is supplied.


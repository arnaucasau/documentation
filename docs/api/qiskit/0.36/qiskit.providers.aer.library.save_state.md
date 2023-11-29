---
title: save_state
description: API reference for qiskit.providers.aer.library.save_state
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.aer.library.save_state
---

# qiskit.providers.aer.library.save\_state

<span id="qiskit.providers.aer.library.save_state" />

`save_state(self, label=None, pershot=False, conditional=False)`

Save the current simulator quantum state.

**Parameters**

*   **label** (*str or None*) – Optional, the key for retrieving saved data from results. If None the key will be the state type of the simulator.
*   **pershot** (*bool*) – if True save a list of statevectors for each shot of the simulation \[Default: False].
*   **conditional** (*bool*) – if True save pershot data conditional on the current classical register values \[Default: False].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")


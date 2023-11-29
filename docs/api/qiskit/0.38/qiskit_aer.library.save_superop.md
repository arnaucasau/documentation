---
title: save_superop
description: API reference for qiskit_aer.library.save_superop
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.library.save_superop
---

# qiskit\_aer.library.save\_superop

<span id="qiskit_aer.library.save_superop" />

`save_superop(self, label='superop', pershot=False)`

Save the current state of the superop simulator.

**Parameters**

*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of SuperOp matrices for each shot of the simulation \[Default: False].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<Admonition title="Note" type="note">
  This instruction is always defined across all qubits in a circuit.
</Admonition>


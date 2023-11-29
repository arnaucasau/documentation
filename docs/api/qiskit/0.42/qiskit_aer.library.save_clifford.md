---
title: save_clifford
description: API reference for qiskit_aer.library.save_clifford
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.library.save_clifford
---

# qiskit\_aer.library.save\_clifford[¶](#qiskit-aer-library-save-clifford "Permalink to this headline")

<span id="qiskit_aer.library.save_clifford" />

`save_clifford(self, label='clifford', pershot=False)`

Save the current stabilizer simulator quantum state as a Clifford.

**Parameters**

*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of Cliffords for each shot of the simulation \[Default: False].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<Admonition title="Note" type="note">
  This instruction is always defined across all qubits in a circuit.
</Admonition>


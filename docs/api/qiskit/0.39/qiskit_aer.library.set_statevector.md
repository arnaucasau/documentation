---
title: set_statevector
description: API reference for qiskit_aer.library.set_statevector
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.library.set_statevector
---

# qiskit\_aer.library.set\_statevector

<span id="qiskit_aer.library.set_statevector" />

`set_statevector(self, state)`

Set the statevector state of the simulator.

**Parameters**

**state** ([*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) – A state matrix.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the state is the incorrect size for the current circuit.


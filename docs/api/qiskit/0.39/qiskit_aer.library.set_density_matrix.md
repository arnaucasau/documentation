---
title: set_density_matrix
description: API reference for qiskit_aer.library.set_density_matrix
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.library.set_density_matrix
---

# qiskit\_aer.library.set\_density\_matrix[¶](#qiskit-aer-library-set-density-matrix "Permalink to this headline")

<span id="qiskit_aer.library.set_density_matrix" />

`set_density_matrix(self, state)`

Set the density matrix state of the simulator.

**Parameters**

**state** ([*DensityMatrix*](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a density matrix.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the density matrix is the incorrect size for the current circuit.


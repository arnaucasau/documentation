---
title: set_matrix_product_state
description: API reference for qiskit_aer.library.set_matrix_product_state
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.library.set_matrix_product_state
---

# qiskit\_aer.library.set\_matrix\_product\_state[¶](#qiskit-aer-library-set-matrix-product-state "Permalink to this headline")

<span id="qiskit_aer.library.set_matrix_product_state" />

`set_matrix_product_state(self, state)`

Set the matrix product state of the simulator.

**Parameters**

**state** (*Tuple\[List\[Tuple\[np.array\[complex\_t]]]], List\[List\[float]]*) – A matrix\_product\_state.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – If the structure of the state is incorrect


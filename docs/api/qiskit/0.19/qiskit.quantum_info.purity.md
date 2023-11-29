---
title: purity
description: API reference for qiskit.quantum_info.purity
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.quantum_info.purity
---

# purity

<span id="qiskit.quantum_info.purity" />

`purity(state, validate=True)`

Calculate the purity of a quantum state.

The purity of a density matrix $\rho$ is

..code:

> text\{Purity}(rho) = Tr\[rho^2]

**Parameters**

*   **state** ([*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")  *or*[*DensityMatrix*](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a quantum state.
*   **validate** (*bool*) – check if input state is valid \[Default: True]

**Returns**

the purity $\Tr[\rho^2]$.

**Return type**

float

**Raises**

**QiskitError** – if the input isn’t a valid quantum state.


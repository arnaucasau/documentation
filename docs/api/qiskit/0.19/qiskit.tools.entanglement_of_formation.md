---
title: entanglement_of_formation
description: API reference for qiskit.tools.entanglement_of_formation
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.tools.entanglement_of_formation
---

# entanglement\_of\_formation

<span id="qiskit.tools.entanglement_of_formation" />

`entanglement_of_formation(state, d0, d1=None)`

Compute the entanglement of formation of quantum state.

The input quantum state must be either a bipartite state vector, or a 2-qubit density matrix.

**Parameters**

*   **state** (*array\_like*) – (N) array\_like or (4,4) array\_like, a bipartite quantum state.
*   **d0** (*int*) – the dimension of the first subsystem.
*   **d1** (*int or None*) – the dimension of the second subsystem.

**Returns**

The entanglement of formation.

**Return type**

float


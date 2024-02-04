---
title: choi_to_pauli
description: API reference for qiskit.tools.choi_to_pauli
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.tools.choi_to_pauli
---

# choi\_to\_pauli

<span id="qiskit.tools.choi_to_pauli" />

`choi_to_pauli(choi, order=1)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/tools/qi/qi.py "view source code")

Convert a Choi-matrix to a Pauli-basis superoperator.

Note that this function assumes that the Choi-matrix is defined in the standard column-stacking convention and is normalized to have trace 1. For a channel E this is defined as: $choi = (I \otimes E)(bell_state)$.

The resulting ‘rauli’ R acts on input states as

$$
\vert {\rho_{out}}_p\rangle = R \cdot \vert {\rho_{in}}_p\rangle.
$$

where $\vert {\rho}\rangle =$ `vectorize(rho, method='pauli')` for order=1 and $\vert {\rho}\rangle =$ `vectorize(rho, method='pauli_weights')` for order=0.

**Parameters**

*   **choi** (*matrix*) – the input Choi-matrix.
*   **order** (*int*) – ordering of the Pauli group vector. `order=1` (default) is standard lexicographic ordering (e.g. `[II, IX, IY, IZ, XI, XX, XY,...]`) `order=0` is ordered by weights (e.g. `[II, IX, IY, IZ, XI, XY, XZ, XX, XY,...]`)

**Returns**

A superoperator in the Pauli basis.

**Return type**

np.array


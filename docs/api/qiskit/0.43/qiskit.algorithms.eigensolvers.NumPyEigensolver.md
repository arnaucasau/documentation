---
title: NumPyEigensolver
description: API reference for qiskit.algorithms.eigensolvers.NumPyEigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.eigensolvers.NumPyEigensolver
---

# NumPyEigensolver

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolver" />

`NumPyEigensolver(k=1, filter_criterion=None)`

Bases: [`Eigensolver`](qiskit.algorithms.eigensolvers.Eigensolver "qiskit.algorithms.eigensolvers.eigensolver.Eigensolver")

The NumPy eigensolver algorithm.

The NumPy Eigensolver computes up to the first $k$ eigenvalues of a complex-valued square matrix of dimension $n \times n$, with $k \leq n$.

<Admonition title="Note" type="note">
  Operators are automatically converted to SciPy’s `spmatrix` as needed and this conversion can be costly in terms of memory and performance as the operator size, mostly in terms of number of qubits it represents, gets larger.
</Admonition>

**Parameters**

*   **k** (*int*) – Number of eigenvalues are to be computed, with a minimum value of 1.
*   **filter\_criterion** (*FilterType | None*) – Callable that allows to filter eigenvalues/eigenstates. Only feasible eigenstates are returned in the results. The callable has the signature `filter(eigenstate, eigenvalue, aux_values)` and must return a boolean to indicate whether to keep this value in the final returned result or not. If the number of elements that satisfies the criterion is smaller than `k`, then the returned list will have fewer elements and can even be empty.

## Methods

<span id="qiskit-algorithms-eigensolvers-numpyeigensolver-compute-eigenvalues" />

### compute\_eigenvalues

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolver.compute_eigenvalues" />

`NumPyEigensolver.compute_eigenvalues(operator, aux_operators=None)`

Computes the minimum eigenvalue. The `operator` and `aux_operators` are supplied here. While an `operator` is required by algorithms, `aux_operators` are optional.

**Parameters**

*   **operator** (*BaseOperator |* [*PauliSumOp*](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")) – Qubit operator of the observable.
*   **aux\_operators** (*ListOrDict\[BaseOperator |* [*PauliSumOp*](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.PauliSumOp")*] | None*) – Optional list of auxiliary operators to be evaluated with the eigenstate of the minimum eigenvalue main result and their expectation values returned. For instance, in chemistry, these can be dipole operators and total particle count operators, so we can get values for these at the ground state.

**Returns**

An eigensolver result.

**Return type**

[NumPyEigensolverResult](qiskit.algorithms.eigensolvers.NumPyEigensolverResult "qiskit.algorithms.eigensolvers.NumPyEigensolverResult")

<span id="qiskit-algorithms-eigensolvers-numpyeigensolver-supports-aux-operators" />

### supports\_aux\_operators

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolver.supports_aux_operators" />

`classmethod NumPyEigensolver.supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the eigensolver computes the eigenvalues of the main operator, then it can compute the expectation value of the `aux_operators` for that state. Otherwise they will be ignored.

**Returns**

`True` if `aux_operator` expectations can be evaluated, `False` otherwise.

**Return type**

bool

## Attributes

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolver.filter_criterion" />

### filter\_criterion

Return the filter criterion if set.

<span id="qiskit.algorithms.eigensolvers.NumPyEigensolver.k" />

### k

Return k (number of eigenvalues requested).


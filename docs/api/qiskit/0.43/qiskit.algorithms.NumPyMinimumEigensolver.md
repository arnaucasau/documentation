---
title: NumPyMinimumEigensolver
description: API reference for qiskit.algorithms.NumPyMinimumEigensolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.NumPyMinimumEigensolver
---

# NumPyMinimumEigensolver

<span id="qiskit.algorithms.NumPyMinimumEigensolver" />

`NumPyMinimumEigensolver(filter_criterion=None)`

Bases: [`MinimumEigensolver`](qiskit.algorithms.MinimumEigensolver "qiskit.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolver")

Deprecated: Numpy Minimum Eigensolver algorithm.

The NumPyMinimumEigensolver class has been superseded by the [`qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolver`](qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolver "qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolver") class. This class will be deprecated in a future release and subsequently removed after that.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.algorithms.minimum_eigen_solvers.numpy_minimum_eigen_solver.NumPyMinimumEigensolver` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. Instead, use the class `qiskit.algorithms.minimum_eigensolvers.NumPyMinimumEigensolver`. See [https://qisk.it/algo\_migration](https://qisk.it/algo_migration) for a migration guide.
</Admonition>

**Parameters**

**filter\_criterion** (*Callable\[\[list | np.ndarray, float, ListOrDict\[float] | None], bool]*) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.

## Methods

<span id="qiskit-algorithms-numpyminimumeigensolver-compute-minimum-eigenvalue" />

### compute\_minimum\_eigenvalue

<span id="qiskit.algorithms.NumPyMinimumEigensolver.compute_minimum_eigenvalue" />

`NumPyMinimumEigensolver.compute_minimum_eigenvalue(operator, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase")) – Qubit operator of the Observable
*   **aux\_operators** (*ListOrDict\[*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase")*] | None*) – Optional list of auxiliary operators to be evaluated with the eigenstate of the minimum eigenvalue main result and their expectation values returned. For instance in chemistry these can be dipole operators, total particle count operators so we can get values for these at the ground state.

**Returns**

MinimumEigensolverResult

**Return type**

[MinimumEigensolverResult](qiskit.algorithms.MinimumEigensolverResult "qiskit.algorithms.MinimumEigensolverResult")

<span id="qiskit-algorithms-numpyminimumeigensolver-supports-aux-operators" />

### supports\_aux\_operators

<span id="qiskit.algorithms.NumPyMinimumEigensolver.supports_aux_operators" />

`classmethod NumPyMinimumEigensolver.supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise

**Return type**

bool

## Attributes

<span id="qiskit.algorithms.NumPyMinimumEigensolver.filter_criterion" />

### filter\_criterion

returns the filter criterion if set


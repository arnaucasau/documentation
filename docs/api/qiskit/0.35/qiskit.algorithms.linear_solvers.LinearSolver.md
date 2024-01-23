---
title: LinearSolver
description: API reference for qiskit.algorithms.linear_solvers.LinearSolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.linear_solvers.LinearSolver
---

# LinearSolver

<span id="qiskit.algorithms.linear_solvers.LinearSolver" />

`LinearSolver`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/algorithms/linear_solvers/linear_solver.py "view source code")

Bases: `abc.ABC`

An abstract class for linear system solvers in Qiskit.

## Methods

### solve

<span id="qiskit.algorithms.linear_solvers.LinearSolver.solve" />

`abstract LinearSolver.solve(matrix, vector, observable=None, observable_circuit=None, post_processing=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/algorithms/linear_solvers/linear_solver.py "view source code")

Solve the system and compute the observable(s)

**Parameters**

*   **matrix** (`Union`\[`ndarray`, `QuantumCircuit`]) – The matrix specifying the system, i.e. A in Ax=b.
*   **vector** (`Union`\[`ndarray`, `QuantumCircuit`]) – The vector specifying the right hand side of the equation in Ax=b.
*   **observable** (`Union`\[`LinearSystemObservable`, `BaseOperator`, `List`\[`LinearSystemObservable`], `List`\[`BaseOperator`], `None`]) – Optional information to be extracted from the solution. Default is the probability of success of the algorithm.
*   **observable\_circuit** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`], `None`]) – Optional circuit to be applied to the solution to extract information. Default is `None`.
*   **post\_processing** (`Optional`\[`Callable`\[\[`Union`\[`float`, `List`\[`float`]]], `Union`\[`float`, `List`\[`float`]]]]) – Optional function to compute the value of the observable. Default is the raw value of measuring the observable.

**Return type**

`LinearSolverResult`

**Returns**

The result of the linear system.


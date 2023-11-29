---
title: NumPyLSsolver
description: API reference for qiskit.aqua.algorithms.NumPyLSsolver
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.NumPyLSsolver
---

# NumPyLSsolver

<span id="qiskit.aqua.algorithms.NumPyLSsolver" />

`NumPyLSsolver(matrix, vector)`

The Numpy LinearSystem algorithm (classical).

This linear system solver computes the eigenvalues of a complex-valued square matrix $A$ of dimension $n \times n$ and the solution to the systems of linear equations defined by $A\overrightarrow{x}=\overrightarrow{b}$ with input vector $\overrightarrow{b}$.

This is a classical counterpart to the [`HHL`](qiskit.aqua.algorithms.HHL "qiskit.aqua.algorithms.HHL") algorithm.

**Parameters**

*   **matrix** (`Union`\[`List`\[`List`\[`float`]], `ndarray`]) – The input matrix of linear system of equations
*   **vector** (`Union`\[`List`\[`float`], `ndarray`]) – The input vector of linear system of equations

## Attributes

### random

Return a numpy random.

## Methods

### run

<span id="qiskit.aqua.algorithms.NumPyLSsolver.run" />

`NumPyLSsolver.run()`

Execute the classical algorithm.

**Returns**

results of an algorithm.

**Return type**

dict


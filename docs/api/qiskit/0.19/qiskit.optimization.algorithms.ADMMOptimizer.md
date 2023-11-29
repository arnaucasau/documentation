---
title: ADMMOptimizer
description: API reference for qiskit.optimization.algorithms.ADMMOptimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.ADMMOptimizer
---

# ADMMOptimizer

<span id="qiskit.optimization.algorithms.ADMMOptimizer" />

`ADMMOptimizer(qubo_optimizer=None, continuous_optimizer=None, params=None)`

An implementation of the ADMM-based heuristic.

This algorithm is introduced in \[1].

**References:**

**\[1] Gambella, C., & Simonetto, A. (2020). Multi-block ADMM Heuristics for Mixed-Binary**

Optimization on Classical and Quantum Computers. arXiv preprint arXiv:2001.02069.

**Parameters**

*   **qubo\_optimizer** (`Optional`\[[`OptimizationAlgorithm`](qiskit.optimization.algorithms.OptimizationAlgorithm "qiskit.optimization.algorithms.optimization_algorithm.OptimizationAlgorithm")]) – An instance of OptimizationAlgorithm that can effectively solve QUBO problems.
*   **continuous\_optimizer** (`Optional`\[[`OptimizationAlgorithm`](qiskit.optimization.algorithms.OptimizationAlgorithm "qiskit.optimization.algorithms.optimization_algorithm.OptimizationAlgorithm")]) – An instance of OptimizationAlgorithm that can solve continuous problems.
*   **params** (`Optional`\[`ADMMParameters`]) – An instance of ADMMParameters.

**Raises**

**NameError** – CPLEX is not installed.

## Methods

### get\_compatibility\_msg

<span id="qiskit.optimization.algorithms.ADMMOptimizer.get_compatibility_msg" />

`ADMMOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`Optional`\[`str`]

**Returns**

Returns True if the problem is compatible, otherwise raises an error.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is not compatible with the ADMM optimizer.

### is\_compatible

<span id="qiskit.optimization.algorithms.ADMMOptimizer.is_compatible" />

`ADMMOptimizer.is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.

### solve

<span id="qiskit.optimization.algorithms.ADMMOptimizer.solve" />

`ADMMOptimizer.solve(problem)`

Tries to solves the given problem using ADMM algorithm.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved.

**Return type**

`ADMMOptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is not compatible with the ADMM optimizer.


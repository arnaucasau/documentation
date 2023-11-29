---
title: GroverOptimizer
description: API reference for qiskit.optimization.algorithms.GroverOptimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.GroverOptimizer
---

# GroverOptimizer

<span id="qiskit.optimization.algorithms.GroverOptimizer" />

`GroverOptimizer(num_value_qubits, num_iterations=3, quantum_instance=None)`

Uses Grover Adaptive Search (GAS) to find the minimum of a QUBO function.

**Parameters**

*   **num\_value\_qubits** (`int`) – The number of value qubits.
*   **num\_iterations** (`int`) – The number of iterations the algorithm will search with no improvement.
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Instance of selected backend, defaults to Aer’s statevector simulator.

## Attributes

### quantum\_instance

<span id="qiskit.optimization.algorithms.GroverOptimizer.quantum_instance" />

`qiskit.aqua.quantum_instance.QuantumInstance`

The quantum instance to run the circuits.

**Return type**

[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance")

**Returns**

The quantum instance used in the algorithm.

## Methods

### get\_compatibility\_msg

<span id="qiskit.optimization.algorithms.GroverOptimizer.get_compatibility_msg" />

`GroverOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Checks whether the given problem is compatible, i.e., whether the problem can be converted to a QUBO, and otherwise, returns a message explaining the incompatibility.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

A message describing the incompatibility.

### is\_compatible

<span id="qiskit.optimization.algorithms.GroverOptimizer.is_compatible" />

`GroverOptimizer.is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.

### solve

<span id="qiskit.optimization.algorithms.GroverOptimizer.solve" />

`GroverOptimizer.solve(problem)`

Tries to solves the given problem using the grover optimizer.

Runs the optimizer to try to solve the optimization problem. If the problem cannot be, converted to a QUBO, this optimizer raises an exception due to incompatibility.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved.

**Return type**

`OptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

*   **AttributeError** – If the quantum instance has not been set.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is incompatible with the optimizer.


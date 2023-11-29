---
title: CplexOptimizer
description: API reference for qiskit.optimization.algorithms.CplexOptimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.CplexOptimizer
---

# CplexOptimizer

<span id="qiskit.optimization.algorithms.CplexOptimizer" />

`CplexOptimizer(disp=False)`

The CPLEX optimizer wrapped as an Qiskit [`OptimizationAlgorithm`](qiskit.optimization.algorithms.OptimizationAlgorithm "qiskit.optimization.algorithms.OptimizationAlgorithm").

This class provides a wrapper for `cplex.Cplex` ([https://pypi.org/project/cplex/](https://pypi.org/project/cplex/)) to be used within the optimization module.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.algorithms import CplexOptimizer
>>> problem = QuadraticProgram()
>>> # specify problem here, if cplex is installed
>>> optimizer = CplexOptimizer() if CplexOptimizer.is_cplex_installed() else None
>>> if optimizer: result = optimizer.solve(problem)
```

Initializes the CplexOptimizer.

**Parameters**

**disp** (`Optional`\[`bool`]) – Whether to print CPLEX output or not.

**Raises**

**NameError** – CPLEX is not installed.

## Attributes

### disp

<span id="qiskit.optimization.algorithms.CplexOptimizer.disp" />

`bool`

Returns the display setting.

**Return type**

`bool`

**Returns**

Whether to print CPLEX information or not.

## Methods

### get\_compatibility\_msg

<span id="qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg" />

`CplexOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Returns `''` since CPLEX accepts all problems that can be modeled using the `QuadraticProgram`. CPLEX may throw an exception in case the problem is determined to be non-convex.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

An empty string.

### is\_compatible

<span id="qiskit.optimization.algorithms.CplexOptimizer.is_compatible" />

`CplexOptimizer.is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.

### is\_cplex\_installed

<span id="qiskit.optimization.algorithms.CplexOptimizer.is_cplex_installed" />

`static CplexOptimizer.is_cplex_installed()`

Returns True if cplex is installed

### solve

<span id="qiskit.optimization.algorithms.CplexOptimizer.solve" />

`CplexOptimizer.solve(problem)`

Tries to solves the given problem using the optimizer.

Runs the optimizer to try to solve the optimization problem. If problem is not convex, this optimizer may raise an exception due to incompatibility, depending on the settings.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved.

**Return type**

`OptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is incompatible with the optimizer.


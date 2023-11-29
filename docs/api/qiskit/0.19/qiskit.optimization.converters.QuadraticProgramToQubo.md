---
title: QuadraticProgramToQubo
description: API reference for qiskit.optimization.converters.QuadraticProgramToQubo
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.QuadraticProgramToQubo
---

# QuadraticProgramToQubo

<span id="qiskit.optimization.converters.QuadraticProgramToQubo" />

`QuadraticProgramToQubo(penalty=None)`

Convert a given optimization problem to a new problem that is a QUBO.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import QuadraticProgramToQubo
>>> problem = QuadraticProgram()
>>> # define a problem
>>> conv = QuadraticProgramToQubo()
>>> problem2 = conv.encode(problem)
```

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective.

## Methods

### decode

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.decode" />

`QuadraticProgramToQubo.decode(result)`

Convert a result of a converted problem into that of the original problem.

**Parameters**

**result** (`OptimizationResult`) – The result of the converted problem.

**Return type**

`OptimizationResult`

**Returns**

The result of the original problem.

### encode

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.encode" />

`QuadraticProgramToQubo.encode(problem)`

Convert a problem with linear equality constraints into new one with a QUBO form.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem with linear equality constraints to be solved.

**Return type**

[`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")

**Returns**

The problem converted in QUBO format.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – In case of an incompatible problem.

### get\_compatibility\_msg

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.get_compatibility_msg" />

`static QuadraticProgramToQubo.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Checks whether the given problem is compatible, i.e., whether the problem can be converted to a QUBO, and otherwise, returns a message explaining the incompatibility.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

A message describing the incompatibility.

### is\_compatible

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.is_compatible" />

`QuadraticProgramToQubo.is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.


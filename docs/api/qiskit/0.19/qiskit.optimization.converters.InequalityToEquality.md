---
title: InequalityToEquality
description: API reference for qiskit.optimization.converters.InequalityToEquality
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.InequalityToEquality
---

# InequalityToEquality

<span id="qiskit.optimization.converters.InequalityToEquality" />

`InequalityToEquality`

Convert inequality constraints into equality constraints by introducing slack variables.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import InequalityToEquality
>>> problem = QuadraticProgram()
>>> # define a problem
>>> conv = InequalityToEquality()
>>> problem2 = conv.encode(problem)
```

## Methods

### decode

<span id="qiskit.optimization.converters.InequalityToEquality.decode" />

`InequalityToEquality.decode(result)`

Convert a result of a converted problem into that of the original problem.

**Parameters**

**result** (`OptimizationResult`) – The result of the converted problem.

**Return type**

`OptimizationResult`

**Returns**

The result of the original problem.

### encode

<span id="qiskit.optimization.converters.InequalityToEquality.encode" />

`InequalityToEquality.encode(op, name=None, mode='auto')`

Convert a problem with inequality constraints into one with only equality constraints.

**Parameters**

*   **op** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved, that may contain inequality constraints.

*   **name** (`Optional`\[`str`]) – The name of the converted problem.

*   **mode** (`str`) –

    To chose the type of slack variables. There are 3 options for mode.

    *   ’integer’: All slack variables will be integer variables.

    *   ’continuous’: All slack variables will be continuous variables

    *   **’auto’: Try to use integer variables but if it’s not possible,**

        use continuous variables

**Return type**

[`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")

**Returns**

The converted problem, that contain only equality constraints.

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If a variable type is not supported.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported mode is selected.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported sense is specified.


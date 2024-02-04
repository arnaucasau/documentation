---
title: InequalityToEquality
description: API reference for qiskit.optimization.converters.InequalityToEquality
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.InequalityToEquality
---

# InequalityToEquality

<span id="qiskit.optimization.converters.InequalityToEquality" />

`InequalityToEquality(mode='auto')`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/converters/inequality_to_equality.py "view source code")

Bases: `qiskit.optimization.converters.quadratic_program_converter.QuadraticProgramConverter`

Convert inequality constraints into equality constraints by introducing slack variables.

**Examples**

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import InequalityToEquality
>>> problem = QuadraticProgram()
>>> # define a problem
>>> conv = InequalityToEquality()
>>> problem2 = conv.convert(problem)
```

**Parameters**

**mode** (`str`) –

To chose the type of slack variables. There are 3 options for mode.

*   ’integer’: All slack variables will be integer variables.

*   ’continuous’: All slack variables will be continuous variables

*   **’auto’: Try to use integer variables but if it’s not possible,**

    use continuous variables

## Methods

### convert

<span id="qiskit.optimization.converters.InequalityToEquality.convert" />

`InequalityToEquality.convert(problem)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/converters/inequality_to_equality.py "view source code")

Convert a problem with inequality constraints into one with only equality constraints.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved, that may contain inequality constraints.

**Return type**

`QuadraticProgram`

**Returns**

The converted problem, that contain only equality constraints.

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If a variable type is not supported.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported mode is selected.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported sense is specified.

### interpret

<span id="qiskit.optimization.converters.InequalityToEquality.interpret" />

`InequalityToEquality.interpret(x)`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/converters/inequality_to_equality.py "view source code")

Convert a result of a converted problem into that of the original problem.

**Parameters**

**x** (`Union`\[`ndarray`, `List`\[`float`]]) – The result of the converted problem or the given result in case of FAILURE.

**Return type**

`ndarray`

**Returns**

The result of the original problem.

## Attributes

<span id="qiskit.optimization.converters.InequalityToEquality.mode" />

### mode

Returns the mode of the converter

**Return type**

`str`

**Returns**

The mode of the converter used for additional slack variables


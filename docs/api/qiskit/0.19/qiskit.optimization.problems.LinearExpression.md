---
title: LinearExpression
description: API reference for qiskit.optimization.problems.LinearExpression
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.LinearExpression
---

# LinearExpression

<span id="qiskit.optimization.problems.LinearExpression" />

`LinearExpression(quadratic_program, coefficients)`

Representation of a linear expression by its coefficients.

Creates a new linear expression.

The linear expression can be defined via an array, a list, a sparse matrix, or a dictionary that uses variable names or indices as keys and stores the values internally as a dok\_matrix.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **coefficients** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`]]) – The (sparse) representation of the coefficients.

## Attributes

### coefficients

<span id="qiskit.optimization.problems.LinearExpression.coefficients" />

`scipy.sparse.dok.dok_matrix`

Returns the coefficients of the linear expression.

**Return type**

`dok_matrix`

**Returns**

The coefficients of the linear expression.

### quadratic\_program

<span id="qiskit.optimization.problems.LinearExpression.quadratic_program" />

`Any`

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

## Methods

### \_\_getitem\_\_

<span id="qiskit.optimization.problems.LinearExpression.__getitem__" />

`LinearExpression.__getitem__(i)`

Returns the i-th coefficient where i can be a variable name or index.

**Parameters**

**i** (`Union`\[`int`, `str`]) – the index or name of the variable corresponding to the coefficient.

**Return type**

`float`

**Returns**

The coefficient corresponding to the addressed variable.

### evaluate

<span id="qiskit.optimization.problems.LinearExpression.evaluate" />

`LinearExpression.evaluate(x)`

Evaluate the linear expression for given variables.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`float`

**Returns**

The value of the linear expression given the variable values.

### to\_array

<span id="qiskit.optimization.problems.LinearExpression.to_array" />

`LinearExpression.to_array()`

Returns the coefficients of the linear expression as array.

**Return type**

`ndarray`

**Returns**

An array with the coefficients corresponding to the linear expression.

### to\_dict

<span id="qiskit.optimization.problems.LinearExpression.to_dict" />

`LinearExpression.to_dict(use_name=False)`

Returns the coefficients of the linear expression as dictionary, either using variable names or indices as keys.

**Parameters**

**use\_name** (`bool`) – Determines whether to use index or names to refer to variables.

**Return type**

`Dict`\[`Union`\[`int`, `str`], `float`]

**Returns**

An dictionary with the coefficients corresponding to the linear expression.


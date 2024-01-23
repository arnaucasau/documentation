---
title: ParameterExpression
description: API reference for qiskit.circuit.ParameterExpression
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ParameterExpression
---

# ParameterExpression

<span id="qiskit.circuit.ParameterExpression" />

`ParameterExpression(symbol_map, expr)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Bases: `object`

ParameterExpression class to enable creating expressions of Parameters.

Create a new [`ParameterExpression`](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression").

Not intended to be called directly, but to be instantiated via operations on other [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") or [`ParameterExpression`](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression") objects.

**Parameters**

*   **symbol\_map** (*Dict\[*[*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")*, \[*[*ParameterExpression*](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*, float, or int]]*) – Mapping of [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") instances to the `sympy.Symbol` serving as their placeholder in expr.
*   **expr** (*sympy.Expr*) – Expression of `sympy.Symbol` s.

## Methods

### arccos

<span id="qiskit.circuit.ParameterExpression.arccos" />

`ParameterExpression.arccos()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Arccos of a ParameterExpression

### arcsin

<span id="qiskit.circuit.ParameterExpression.arcsin" />

`ParameterExpression.arcsin()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Arcsin of a ParameterExpression

### arctan

<span id="qiskit.circuit.ParameterExpression.arctan" />

`ParameterExpression.arctan()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Arctan of a ParameterExpression

### assign

<span id="qiskit.circuit.ParameterExpression.assign" />

`ParameterExpression.assign(parameter, value)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Assign one parameter to a value, which can either be numeric or another parameter expression.

**Parameters**

*   **parameter** ([*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – A parameter in this expression whose value will be updated.
*   **value** (`Union`\[`ParameterExpression`, `float`]) – The new value to bind to.

**Return type**

`ParameterExpression`

**Returns**

A new expression parameterized by any parameters which were not bound by assignment.

### bind

<span id="qiskit.circuit.ParameterExpression.bind" />

`ParameterExpression.bind(parameter_values)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Binds the provided set of parameters to their corresponding values.

**Parameters**

**parameter\_values** (`Dict`) – Mapping of Parameter instances to the numeric value to which they will be bound.

**Raises**

*   **CircuitError** –

    *   If parameter\_values contains Parameters outside those in self. - If a non-numeric value is passed in parameter\_values.

*   **ZeroDivisionError** –

    *   If binding the provided values requires division by zero.

**Return type**

`ParameterExpression`

**Returns**

A new expression parameterized by any parameters which were not bound by parameter\_values.

### conjugate

<span id="qiskit.circuit.ParameterExpression.conjugate" />

`ParameterExpression.conjugate()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Return the conjugate.

**Return type**

`ParameterExpression`

### cos

<span id="qiskit.circuit.ParameterExpression.cos" />

`ParameterExpression.cos()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Cosine of a ParameterExpression

### exp

<span id="qiskit.circuit.ParameterExpression.exp" />

`ParameterExpression.exp()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Exponential of a ParameterExpression

### gradient

<span id="qiskit.circuit.ParameterExpression.gradient" />

`ParameterExpression.gradient(param)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Get the derivative of a parameter expression w\.r.t. a specified parameter expression.

**Parameters**

**param** ([*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – Parameter w\.r.t. which we want to take the derivative

**Return type**

`Union`\[`ParameterExpression`, `complex`]

**Returns**

ParameterExpression representing the gradient of param\_expr w\.r.t. param or complex or float number

### is\_real

<span id="qiskit.circuit.ParameterExpression.is_real" />

`ParameterExpression.is_real()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Return whether the expression is real

### log

<span id="qiskit.circuit.ParameterExpression.log" />

`ParameterExpression.log()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Logarithm of a ParameterExpression

### sin

<span id="qiskit.circuit.ParameterExpression.sin" />

`ParameterExpression.sin()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Sine of a ParameterExpression

### subs

<span id="qiskit.circuit.ParameterExpression.subs" />

`ParameterExpression.subs(parameter_map)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Returns a new Expression with replacement Parameters.

**Parameters**

**parameter\_map** (`Dict`) – Mapping from Parameters in self to the ParameterExpression instances with which they should be replaced.

**Raises**

**CircuitError** –

*   If parameter\_map contains Parameters outside those in self. - If the replacement Parameters in parameter\_map would result in a name conflict in the generated expression.

**Return type**

`ParameterExpression`

**Returns**

A new expression with the specified parameters replaced.

### sympify

<span id="qiskit.circuit.ParameterExpression.sympify" />

`ParameterExpression.sympify()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Return symbolic expression as a raw Sympy or Symengine object.

Symengine is used preferentially; if both are available, the result will always be a `symengine` object. Symengine is a separate library but has integration with Sympy.

<Admonition title="Note" type="note">
  This is for interoperability only. Qiskit will not accept or work with raw Sympy or Symegine expressions in its parameters, because they do not contain the tracking information used in circuit-parameter binding and assignment.
</Admonition>

### tan

<span id="qiskit.circuit.ParameterExpression.tan" />

`ParameterExpression.tan()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/parameterexpression.py "view source code")

Tangent of a ParameterExpression

## Attributes

<span id="qiskit.circuit.ParameterExpression.parameters" />

### parameters

Returns a set of the unbound Parameters in the expression.

**Return type**

`Set`


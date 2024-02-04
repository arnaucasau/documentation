---
title: CircuitQFI
description: API reference for qiskit.aqua.operators.gradients.CircuitQFI
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.gradients.CircuitQFI
---

<span id="qiskit-aqua-operators-gradients-circuitqfi" />

# qiskit.aqua.operators.gradients.CircuitQFI

<span id="qiskit.aqua.operators.gradients.CircuitQFI" />

`CircuitQFI`[GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/operators/gradients/circuit_qfis/circuit_qfi.py "view source code")

Circuit to Quantum Fisher Information operator converter.

Converter for changing parameterized circuits into operators whose evaluation yields Quantum Fisher Information metric tensor with respect to the given circuit parameters

This is distinct from DerivativeBase converters which take gradients of composite operators and handle things like differentiating combo\_fn’s and enforcing product rules when operator coefficients are parameterized.

CircuitQFI - uses quantum techniques to get the QFI of circuits DerivativeBase - uses classical techniques to differentiate opflow data structures

### \_\_init\_\_

<span id="qiskit.aqua.operators.gradients.CircuitQFI.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                            |                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| [`__init__`](#qiskit.aqua.operators.gradients.CircuitQFI.__init__ "qiskit.aqua.operators.gradients.CircuitQFI.__init__")()                 | Initialize self.                |
| [`convert`](#qiskit.aqua.operators.gradients.CircuitQFI.convert "qiskit.aqua.operators.gradients.CircuitQFI.convert")(operator\[, params]) | **type operator**`OperatorBase` |

### convert

<span id="qiskit.aqua.operators.gradients.CircuitQFI.convert" />

`abstract convert(operator, params=None)`

**Parameters**

*   **operator** (`OperatorBase`) – The operator corresponding to the quantum state $\vert \psi(\omega)\rangle$ for which we compute the QFI.
*   **params** (`Union`\[`ParameterVector`, `ParameterExpression`, `List`\[`ParameterExpression`], `None`]) – The parameters $\omega$ with respect to which we are computing the QFI.

**Return type**

`OperatorBase`

**Returns**

An operator whose evaluation yields the QFI metric tensor.

**Raises**

**ValueError** – If `params` contains a parameter not present in `operator`.


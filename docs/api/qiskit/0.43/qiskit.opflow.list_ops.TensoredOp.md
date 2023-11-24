---
title: TensoredOp
description: API reference for qiskit.opflow.list_ops.TensoredOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.list_ops.TensoredOp
---

# TensoredOp

<span id="qiskit.opflow.list_ops.TensoredOp" />

`TensoredOp(oplist, coeff=1.0, abelian=False)`

Bases: [`ListOp`](qiskit.opflow.list_ops.ListOp "qiskit.opflow.list_ops.list_op.ListOp")

Deprecated: A class for lazily representing tensor products of Operators. Often Operators cannot be efficiently tensored to one another, but may be manipulated further so that they can be later. This class holds logic to indicate that the Operators in `oplist` are meant to be tensored together, and therefore if they reach a point in which they can be, such as after conversion to QuantumCircuits, they can be reduced by tensor product.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.list_ops.tensored_op.TensoredOp` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **oplist** (*List\[*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")*]*) – The Operators being tensored.
*   **coeff** (*complex |* [*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – A coefficient multiplying the operator
*   **abelian** (*bool*) – Indicates whether the Operators in `oplist` are known to mutually commute.

## Methods Defined Here

<span id="qiskit-opflow-list-ops-tensoredop-eval" />

### eval

<span id="qiskit.opflow.list_ops.TensoredOp.eval" />

`TensoredOp.eval(front=None)`

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

ListOp’s eval recursively evaluates each Operator in `oplist`, and combines the results using the recombination function `combo_fn`.

**Parameters**

**front** (*str | dict |* [*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")  *|*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")  *|*[*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector") *| None*) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function.

**Returns**

The output of the `oplist` Operators’ evaluation function, combined with the `combo_fn`. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

**Raises**

*   **NotImplementedError** – Raised if called for a subclass which is not distributive.
*   **TypeError** – Operators with mixed hierarchies, such as a ListOp containing both PrimitiveOps and ListOps, are not supported.
*   **NotImplementedError** – Attempting to call ListOp’s eval from a non-distributive subclass.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase") | complex

<span id="qiskit-opflow-list-ops-tensoredop-reduce" />

### reduce

<span id="qiskit.opflow.list_ops.TensoredOp.reduce" />

`TensoredOp.reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Returns**

The reduced `OperatorBase`.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

<span id="qiskit-opflow-list-ops-tensoredop-tensor" />

### tensor

<span id="qiskit.opflow.list_ops.TensoredOp.tensor" />

`TensoredOp.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, X.tensor(Y) produces an X on qubit 0 and an Y on qubit 1, or X⨂Y, but would produce a QuantumCircuit which looks like

> -\[Y]- -\[X]-

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `OperatorBase` to tensor product with self.

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

<span id="qiskit-opflow-list-ops-tensoredop-to-circuit" />

### to\_circuit

<span id="qiskit.opflow.list_ops.TensoredOp.to_circuit" />

`TensoredOp.to_circuit()`

Returns the quantum circuit, representing the tensored operator.

**Returns**

The circuit representation of the tensored operator.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – for operators where a single underlying circuit can not be produced.

**Return type**

[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

<span id="qiskit-opflow-list-ops-tensoredop-to-matrix" />

### to\_matrix

<span id="qiskit.opflow.list_ops.TensoredOp.to_matrix" />

`TensoredOp.to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Returns**

The NumPy `ndarray` equivalent to this Operator.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")

## Attributes

<span id="qiskit.opflow.list_ops.TensoredOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.list_ops.TensoredOp.abelian" />

### abelian

Whether the Operators in `oplist` are known to commute with one another.

**Returns**

A bool indicating whether the `oplist` is Abelian.

<span id="qiskit.opflow.list_ops.TensoredOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Returns**

The coefficient.

<span id="qiskit.opflow.list_ops.TensoredOp.coeffs" />

### coeffs

Return a list of the coefficients of the operators listed. Raises exception for nested Listops.

<span id="qiskit.opflow.list_ops.TensoredOp.combo_fn" />

### combo\_fn

The function defining how to combine `oplist` (or Numbers, or NumPy arrays) to produce the Operator’s underlying function. For example, SummedOp’s combination function is to add all of the Operators in `oplist`.

**Returns**

The combination function.

<span id="qiskit.opflow.list_ops.TensoredOp.distributive" />

### distributive

<span id="qiskit.opflow.list_ops.TensoredOp.grad_combo_fn" />

### grad\_combo\_fn

The gradient of `combo_fn`.

<span id="qiskit.opflow.list_ops.TensoredOp.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.list_ops.TensoredOp.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.list_ops.TensoredOp.oplist" />

### oplist

The list of `OperatorBases` defining the underlying function of this Operator.

**Returns**

The Operators defining the ListOp

<span id="qiskit.opflow.list_ops.TensoredOp.parameters" />

### parameters

<span id="qiskit.opflow.list_ops.TensoredOp.settings" />

### settings

Return settings.


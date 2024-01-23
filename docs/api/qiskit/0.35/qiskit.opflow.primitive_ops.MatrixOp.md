---
title: MatrixOp
description: API reference for qiskit.opflow.primitive_ops.MatrixOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.MatrixOp
---

# MatrixOp

<span id="qiskit.opflow.primitive_ops.MatrixOp" />

`MatrixOp(primitive, coeff=1.0)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Bases: `qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp`

Class for Operators represented by matrices, backed by Terra’s `Operator` module.

**Parameters**

*   **primitive** (`Union`\[`list`, `ndarray`, `spmatrix`, `Operator`]) – The matrix-like object which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the primitive

**Raises**

*   **TypeError** – invalid parameters.
*   **ValueError** – invalid parameters.

## Methods Defined Here

### add

<span id="qiskit.opflow.primitive_ops.MatrixOp.add" />

`MatrixOp.add(other)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** (`OperatorBase`) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

`Union`\[`MatrixOp`, `SummedOp`]

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

### adjoint

<span id="qiskit.opflow.primitive_ops.MatrixOp.adjoint" />

`MatrixOp.adjoint()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. For StateFns, this also turns the StateFn into a measurement.

**Return type**

`MatrixOp`

**Returns**

An `OperatorBase` equivalent to the adjoint of self.

### compose

<span id="qiskit.opflow.primitive_ops.MatrixOp.compose" />

`MatrixOp.compose(other, permutation=None, front=False)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.

Note: You must be conscious of Quantum Circuit vs. Linear Algebra ordering conventions. Meaning, X.compose(Y) produces an X∘Y on qubit 0, but would produce a QuantumCircuit which looks like

> -\[Y]-\[X]-

Because Terra prints circuits with the initial state at the left side of the circuit.

**Parameters**

*   **other** (`OperatorBase`) – The `OperatorBase` with which to compose self.
*   **permutation** (`Optional`\[`List`\[`int`]]) – `List[int]` which defines permutation on other operator.
*   **front** (`bool`) – If front==True, return `other.compose(self)`.

**Return type**

`OperatorBase`

**Returns**

An `OperatorBase` equivalent to the function composition of self and other.

### equals

<span id="qiskit.opflow.primitive_ops.MatrixOp.equals" />

`MatrixOp.equals(other)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Evaluate Equality between Operators, overloaded by `==`. Only returns True if self and other are of the same representation (e.g. a DictStateFn and CircuitStateFn will never be equal, even if their vector representations are equal), their underlying primitives are equal (this means for ListOps, OperatorStateFns, or EvolvedOps the equality is evaluated recursively downwards), and their coefficients are equal.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to compare to self.

**Return type**

`bool`

**Returns**

A bool equal to the equality of self and other.

### eval

<span id="qiskit.opflow.primitive_ops.MatrixOp.eval" />

`MatrixOp.eval(front=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Evaluate the Operator’s underlying function, either on a binary string or another Operator. A square binary Operator can be defined as a function taking a binary function to another binary function. This method returns the value of that function for a given StateFn or binary string. For example, `op.eval('0110').eval('1110')` can be seen as querying the Operator’s matrix representation by row 6 and column 14, and will return the complex value at those “indices.” Similarly for a StateFn, `op.eval('1011')` will return the complex value at row 11 of the vector representation of the StateFn, as all StateFns are defined to be evaluated from Zero implicitly (i.e. it is as if `.eval('0000')` is already called implicitly to always “indexing” from column 0).

If `front` is None, the matrix-representation of the operator is returned.

**Parameters**

**front** (`Union`\[`str`, `Dict`\[`str`, `complex`], `ndarray`, `OperatorBase`, `Statevector`, `None`]) – The bitstring, dict of bitstrings (with values being coefficients), or StateFn to evaluated by the Operator’s underlying function, or None.

**Return type**

`Union`\[`OperatorBase`, `complex`]

**Returns**

The output of the Operator’s evaluation function. If self is a `StateFn`, the result is a float or complex. If self is an Operator (`PrimitiveOp, ComposedOp, SummedOp, EvolvedOp,` etc.), the result is a StateFn. If `front` is None, the matrix-representation of the operator is returned, which is a `MatrixOp` for the operators and a `VectorStateFn` for state-functions. If either self or front contain proper `ListOps` (not ListOp subclasses), the result is an n-dimensional list of complex or StateFn results, resulting from the recursive evaluation by each OperatorBase in the ListOps.

### exp\_i

<span id="qiskit.opflow.primitive_ops.MatrixOp.exp_i" />

`MatrixOp.exp_i()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Return a `CircuitOp` equivalent to e^-iH for this operator H

**Return type**

`OperatorBase`

### permute

<span id="qiskit.opflow.primitive_ops.MatrixOp.permute" />

`MatrixOp.permute(permutation=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Creates a new MatrixOp that acts on the permuted qubits.

**Parameters**

**permutation** (`Optional`\[`List`\[`int`]]) – A list defining where each qubit should be permuted. The qubit at index j should be permuted to position permutation\[j].

**Return type**

`OperatorBase`

**Returns**

A new MatrixOp representing the permuted operator.

**Raises**

[**OpflowError**](qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – if indices do not define a new index for each qubit.

### primitive\_strings

<span id="qiskit.opflow.primitive_ops.MatrixOp.primitive_strings" />

`MatrixOp.primitive_strings()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Return a set of strings describing the primitives contained in the Operator. For example, `{'QuantumCircuit', 'Pauli'}`. For hierarchical Operators, such as `ListOps`, this can help illuminate the primitives represented in the various recursive levels, and therefore which conversions can be applied.

**Return type**

`Set`\[`str`]

**Returns**

A set of strings describing the primitives contained within the Operator.

### tensor

<span id="qiskit.opflow.primitive_ops.MatrixOp.tensor" />

`MatrixOp.tensor(other)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, X.tensor(Y) produces an X on qubit 0 and an Y on qubit 1, or X⨂Y, but would produce a QuantumCircuit which looks like

> -\[Y]- -\[X]-

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to tensor product with self.

**Return type**

`Union`\[`MatrixOp`, `TensoredOp`]

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

### to\_instruction

<span id="qiskit.opflow.primitive_ops.MatrixOp.to_instruction" />

`MatrixOp.to_instruction()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Returns an `Instruction` equivalent to this Operator.

**Return type**

`Instruction`

### to\_matrix

<span id="qiskit.opflow.primitive_ops.MatrixOp.to_matrix" />

`MatrixOp.to_matrix(massive=False)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Return type**

`ndarray`

**Returns**

The NumPy `ndarray` equivalent to this Operator.

### to\_matrix\_op

<span id="qiskit.opflow.primitive_ops.MatrixOp.to_matrix_op" />

`MatrixOp.to_matrix_op(massive=False)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/primitive_ops/matrix_op.py "view source code")

Returns a `MatrixOp` equivalent to this Operator.

**Return type**

`MatrixOp`

## Attributes

<span id="qiskit.opflow.primitive_ops.MatrixOp.INDENTATION" />

### INDENTATION

`= ' '`

<span id="qiskit.opflow.primitive_ops.MatrixOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

**Returns**

The coefficient.

<span id="qiskit.opflow.primitive_ops.MatrixOp.instance_id" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.MatrixOp.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.MatrixOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.MatrixOp.primitive" />

### primitive

`qiskit.quantum_info.operators.operator.Operator`

The primitive defining the underlying function of the Operator.

**Return type**

`Union`\[`QuantumCircuit`, `Operator`, `Pauli`, `SparsePauliOp`, `OperatorBase`]

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.MatrixOp.settings" />

### settings

Return operator settings.

**Return type**

`Dict`


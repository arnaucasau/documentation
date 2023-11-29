---
title: PTM
description: API reference for qiskit.quantum_info.PTM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.PTM
---

# PTM

<span id="qiskit.quantum_info.PTM" />

`PTM(data, input_dims=None, output_dims=None)`

Pauli Transfer Matrix (PTM) representation of a Quantum Channel.

The PTM representation of an $n$-qubit quantum channel $\mathcal{E}$ is an $n$-qubit [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") $R$ defined with respect to vectorization in the Pauli basis instead of column-vectorization. The elements of the PTM $R$ are given by

$$
R_{i,j} = \mbox{Tr}\left[P_i \mathcal{E}(P_j) \right]
$$

where $[P_0, P_1, ..., P_{4^{n}-1}]$ is the $n$-qubit Pauli basis in lexicographic order.

Evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ with respect to the PTM is given by

$$
|\mathcal{E}(\rho)\rangle\!\rangle_P = S_P |\rho\rangle\!\rangle_P
$$

where $|A\rangle\!\rangle_P$ denotes vectorization in the Pauli basis $\langle i | A\rangle\!\rangle_P = \mbox{Tr}[P_i A]$.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a PTM quantum channel operator.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data is not an N-qubit channel or cannot be initialized as a PTM.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. The PTM representation is only valid for N-qubit channels.

## Attributes

### atol

The default absolute tolerance parameter for float comparisons.

### data

Return data.

### dim

Return tuple (input\_shape, output\_shape).

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

### qargs

Return the qargs for the operator.

### rtol

The relative tolerance parameter for float comparisons.

## Methods

### \_\_call\_\_

<span id="qiskit.quantum_info.PTM.__call__" />

`PTM.__call__(qargs)`

Return a clone with qargs set

### \_\_mul\_\_

<span id="qiskit.quantum_info.PTM.__mul__" />

`PTM.__mul__(other)`

### add

<span id="qiskit.quantum_info.PTM.add" />

`PTM.add(other)`

Return the linear operator self + other.

DEPRECATED: use `operator + other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self + other.

**Return type**

BaseOperator

### adjoint

<span id="qiskit.quantum_info.PTM.adjoint" />

`PTM.adjoint()`

Return the adjoint of the operator.

### compose

<span id="qiskit.quantum_info.PTM.compose" />

`PTM.compose(other, qargs=None, front=False)`

Return the composed quantum channel self @ other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The quantum channel self @ other.

**Return type**

[PTM](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

**Raises**

**QiskitError** – if other has incompatible dimensions.

#### Additional Information:

Composition (`@`) is defined as left matrix multiplication for [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") matrices. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](qiskit.quantum_info.PTM#dot "qiskit.quantum_info.PTM.dot") method.

### conjugate

<span id="qiskit.quantum_info.PTM.conjugate" />

`PTM.conjugate()`

Return the conjugate of the QuantumChannel.

### copy

<span id="qiskit.quantum_info.PTM.copy" />

`PTM.copy()`

Make a deep copy of current operator.

### dot

<span id="qiskit.quantum_info.PTM.dot" />

`PTM.dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** (*BaseOperator*) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The operator self \* other.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

### expand

<span id="qiskit.quantum_info.PTM.expand" />

`PTM.expand(other)`

Return the tensor product channel other ⊗ self.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel other ⊗ self as a PTM object.

**Return type**

[PTM](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### input\_dims

<span id="qiskit.quantum_info.PTM.input_dims" />

`PTM.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_cp

<span id="qiskit.quantum_info.PTM.is_cp" />

`PTM.is_cp(atol=None, rtol=None)`

Test if Choi-matrix is completely-positive (CP)

### is\_cptp

<span id="qiskit.quantum_info.PTM.is_cptp" />

`PTM.is_cptp(atol=None, rtol=None)`

Return True if completely-positive trace-preserving (CPTP).

### is\_tp

<span id="qiskit.quantum_info.PTM.is_tp" />

`PTM.is_tp(atol=None, rtol=None)`

Test if a channel is completely-positive (CP)

### is\_unitary

<span id="qiskit.quantum_info.PTM.is_unitary" />

`PTM.is_unitary(atol=None, rtol=None)`

Return True if QuantumChannel is a unitary channel.

### multiply

<span id="qiskit.quantum_info.PTM.multiply" />

`PTM.multiply(other)`

Return the linear operator other \* self.

DEPRECATED: use `other * operator` instead.

**Parameters**

**other** (*complex*) – a complex number.

**Returns**

the linear operator other \* self.

**Return type**

BaseOperator

**Raises**

**NotImplementedError** – if subclass does not support multiplication.

### output\_dims

<span id="qiskit.quantum_info.PTM.output_dims" />

`PTM.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.PTM.power" />

`PTM.power(n)`

The matrix power of the channel.

**Parameters**

**n** (*int*) – compute the matrix power of the superoperator matrix.

**Returns**

the matrix power of the SuperOp converted to a PTM channel.

**Return type**

[PTM](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

**Raises**

**QiskitError** – if the input and output dimensions of the QuantumChannel are not equal, or the power is not an integer.

### reshape

<span id="qiskit.quantum_info.PTM.reshape" />

`PTM.reshape(input_dims=None, output_dims=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

#### Arg:

#### input\_dims (None or tuple): new subsystem input dimensions.

If None the original input dims will be preserved \[Default: None].

#### output\_dims (None or tuple): new subsystem output dimensions.

If None the original output dims will be preserved \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

### set\_atol

<span id="qiskit.quantum_info.PTM.set_atol" />

`classmethod PTM.set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

### set\_rtol

<span id="qiskit.quantum_info.PTM.set_rtol" />

`classmethod PTM.set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

### subtract

<span id="qiskit.quantum_info.PTM.subtract" />

`PTM.subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `operator - other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self - other.

**Return type**

BaseOperator

### tensor

<span id="qiskit.quantum_info.PTM.tensor" />

`PTM.tensor(other)`

Return the tensor product channel self ⊗ other.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel self ⊗ other as a PTM object.

**Return type**

[PTM](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### to\_instruction

<span id="qiskit.quantum_info.PTM.to_instruction" />

`PTM.to_instruction()`

Convert to a Kraus or UnitaryGate circuit instruction.

If the channel is unitary it will be added as a unitary gate, otherwise it will be added as a kraus simulator instruction.

**Returns**

A kraus instruction for the channel.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**QiskitError** – if input data is not an N-qubit CPTP quantum channel.

### to\_operator

<span id="qiskit.quantum_info.PTM.to_operator" />

`PTM.to_operator()`

Try to convert channel to a unitary representation Operator.

### transpose

<span id="qiskit.quantum_info.PTM.transpose" />

`PTM.transpose()`

Return the transpose of the QuantumChannel.


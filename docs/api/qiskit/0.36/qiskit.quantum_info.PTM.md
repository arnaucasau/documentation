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

Bases: `qiskit.quantum_info.operators.channel.quantum_channel.QuantumChannel`

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

## Methods

### adjoint

<span id="qiskit.quantum_info.PTM.adjoint" />

`PTM.adjoint()`

Return the adjoint quantum channel.

<Admonition title="Note" type="note">
  This is equivalent to the matrix Hermitian conjugate in the [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") representation ie. for a channel $\mathcal{E}$, the SuperOp of the adjoint channel $\mathcal{{E}}^\dagger$ is $S_{\mathcal{E}^\dagger} = S_{\mathcal{E}}^\dagger$.
</Admonition>

### compose

<span id="qiskit.quantum_info.PTM.compose" />

`PTM.compose(other, qargs=None, front=False)`

Return the operator composition with another PTM.

**Parameters**

*   **other** ([*PTM*](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")) – a PTM object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The composed PTM.

**Return type**

[PTM](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while `@` (equivalent to [`dot()`](qiskit.quantum_info.PTM#dot "qiskit.quantum_info.PTM.dot")) is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B @ A == B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit.quantum_info.PTM#dot "qiskit.quantum_info.PTM.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>

### conjugate

<span id="qiskit.quantum_info.PTM.conjugate" />

`PTM.conjugate()`

Return the conjugate quantum channel.

<Admonition title="Note" type="note">
  This is equivalent to the matrix complex conjugate in the [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") representation ie. for a channel $\mathcal{E}$, the SuperOp of the conjugate channel $\overline{{\mathcal{{E}}}}$ is $S_{\overline{\mathcal{E}^\dagger}} = \overline{S_{\mathcal{E}}}$.
</Admonition>

### copy

<span id="qiskit.quantum_info.PTM.copy" />

`PTM.copy()`

Make a deep copy of current operator.

### dot

<span id="qiskit.quantum_info.PTM.dot" />

`PTM.dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).

**Returns**

The right matrix multiplied Operator.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

<Admonition title="Note" type="note">
  The dot product can be obtained using the `@` binary operator. Hence `a.dot(b)` is equivalent to `a @ b`.
</Admonition>

### expand

<span id="qiskit.quantum_info.PTM.expand" />

`PTM.expand(other)`

Return the reverse-order tensor product with another PTM.

**Parameters**

**other** ([*PTM*](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")) – a PTM object.

**Returns**

**the tensor product $b \otimes a$, where $a$**

is the current PTM, and $b$ is the other PTM.

**Return type**

[PTM](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

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

Test if a channel is trace-preserving (TP)

### is\_unitary

<span id="qiskit.quantum_info.PTM.is_unitary" />

`PTM.is_unitary(atol=None, rtol=None)`

Return True if QuantumChannel is a unitary channel.

### output\_dims

<span id="qiskit.quantum_info.PTM.output_dims" />

`PTM.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.PTM.power" />

`PTM.power(n)`

Return the power of the quantum channel.

**Parameters**

**n** (*float*) – the power exponent.

**Returns**

the channel $\mathcal{{E}} ^n$.

**Return type**

[SuperOp](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

**Raises**

**QiskitError** – if the input and output dimensions of the SuperOp are not equal.

<Admonition title="Note" type="note">
  For non-positive or non-integer exponents the power is defined as the matrix power of the [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") representation ie. for a channel $\mathcal{{E}}$, the SuperOp of the powered channel $\mathcal{{E}}^\n$ is $S_{{\mathcal{{E}}^n}} = S_{{\mathcal{{E}}}}^n$.
</Admonition>

### reshape

<span id="qiskit.quantum_info.PTM.reshape" />

`PTM.reshape(input_dims=None, output_dims=None, num_qubits=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

**Parameters**

*   **input\_dims** (*None or tuple*) – new subsystem input dimensions. If None the original input dims will be preserved \[Default: None].
*   **output\_dims** (*None or tuple*) – new subsystem output dimensions. If None the original output dims will be preserved \[Default: None].
*   **num\_qubits** (*None or int*) – reshape to an N-qubit operator \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

### tensor

<span id="qiskit.quantum_info.PTM.tensor" />

`PTM.tensor(other)`

Return the tensor product with another PTM.

**Parameters**

**other** ([*PTM*](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")) – a PTM object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current PTM, and $b$ is the other PTM.

**Return type**

[PTM](qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>

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

Return the transpose quantum channel.

<Admonition title="Note" type="note">
  This is equivalent to the matrix transpose in the [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") representation, ie. for a channel $\mathcal{E}$, the SuperOp of the transpose channel $\mathcal{{E}}^T$ is $S_{mathcal{E}^T} = S_{\mathcal{E}}^T$.
</Admonition>

## Attributes

<span id="qiskit.quantum_info.PTM.atol" />

### atol

`= 1e-08`

<span id="qiskit.quantum_info.PTM.data" />

### data

Return data.

<span id="qiskit.quantum_info.PTM.dim" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="qiskit.quantum_info.PTM.num_qubits" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="qiskit.quantum_info.PTM.qargs" />

### qargs

Return the qargs for the operator.

<span id="qiskit.quantum_info.PTM.rtol" />

### rtol

`= 1e-05`

<span id="qiskit.quantum_info.PTM.settings" />

### settings

Return settings.


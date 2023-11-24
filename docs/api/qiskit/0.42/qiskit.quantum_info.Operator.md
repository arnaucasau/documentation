---
title: Operator
description: API reference for qiskit.quantum_info.Operator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Operator
---

# Operator[¶](#operator "Permalink to this headline")

<span id="qiskit.quantum_info.Operator" />

`Operator(data, input_dims=None, output_dims=None)`

Bases: `qiskit.quantum_info.operators.linear_op.LinearOp`

Matrix operator class

This represents a matrix operator $M$ that will [`evolve()`](qiskit.quantum_info.Statevector#evolve "qiskit.quantum_info.Statevector.evolve") a [`Statevector`](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector") $|\psi\rangle$ by matrix-vector multiplication

$$
|\psi\rangle \mapsto M|\psi\rangle,
$$

and will [`evolve()`](qiskit.quantum_info.DensityMatrix#evolve "qiskit.quantum_info.DensityMatrix.evolve") a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ by left and right multiplication

$$
\rho \mapsto M \rho M^\dagger.
$$

Initialize an operator object.

**Parameters**

*   **data** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Operation*](qiskit.circuit.Operation "qiskit.circuit.Operation") *or BaseOperator or matrix*) – data to initialize operator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as an operator.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (2\*\*N, 2\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

## Methods

### adjoint

<span id="qiskit.quantum_info.Operator.adjoint" />

`Operator.adjoint()`

Return the adjoint of the Operator.

### compose

<span id="qiskit.quantum_info.Operator.compose" />

`Operator.compose(other, qargs=None, front=False)`

Return the operator composition with another Operator.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a Operator object.
*   **qargs** (*list or None*) – Optional, a list of subsystem positions to apply other on. If None apply on all subsystems (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The composed Operator.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while `@` (equivalent to [`dot()`](qiskit.quantum_info.Operator#dot "qiskit.quantum_info.Operator.dot")) is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B @ A == B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit.quantum_info.Operator#dot "qiskit.quantum_info.Operator.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>

### conjugate

<span id="qiskit.quantum_info.Operator.conjugate" />

`Operator.conjugate()`

Return the conjugate of the Operator.

### copy

<span id="qiskit.quantum_info.Operator.copy" />

`Operator.copy()`

Make a deep copy of current operator.

### dot

<span id="qiskit.quantum_info.Operator.dot" />

`Operator.dot(other, qargs=None)`

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

### equiv

<span id="qiskit.quantum_info.Operator.equiv" />

`Operator.equiv(other, rtol=None, atol=None)`

Return True if operators are equivalent up to global phase.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.
*   **rtol** (*float*) – relative tolerance value for comparison.
*   **atol** (*float*) – absolute tolerance value for comparison.

**Returns**

True if operators are equivalent up to global phase.

**Return type**

bool

### expand

<span id="qiskit.quantum_info.Operator.expand" />

`Operator.expand(other)`

Return the reverse-order tensor product with another Operator.

**Parameters**

**other** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a Operator object.

**Returns**

**the tensor product $b \otimes a$, where $a$**

is the current Operator, and $b$ is the other Operator.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

### from\_circuit

<span id="qiskit.quantum_info.Operator.from_circuit" />

`classmethod Operator.from_circuit(circuit, ignore_set_layout=False, layout=None, final_layout=None)`

Create a new Operator object from a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

While a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") object can passed directly as `data` to the class constructor this provides no options on how the circuit is used to create an [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator"). This constructor method lets you control how the [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") is created so it can be adjusted for a particular use case.

By default this constructor method will permute the qubits based on a configured initial layout (i.e. after it was transpiled). It also provides an option to manually provide a [`Layout`](qiskit.transpiler.Layout "qiskit.transpiler.Layout") object directly.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") to create an Operator object from.
*   **ignore\_set\_layout** (*bool*) – When set to `True` if the input `circuit` has a layout set it will be ignored
*   **layout** ([*Layout*](qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – If specified this kwarg can be used to specify a particular layout to use to permute the qubits in the created [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator"). If this is specified it will be used instead of a layout contained in the `circuit` input. If specified the virtual bits in the [`Layout`](qiskit.transpiler.Layout "qiskit.transpiler.Layout") must be present in the `circuit` input.
*   **final\_layout** ([*Layout*](qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – If specified this kwarg can be used to represent the output permutation caused by swap insertions during the routing stage of the transpiler.

**Returns**

An operator representing the input circuit

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

### from\_label

<span id="qiskit.quantum_info.Operator.from_label" />

`classmethod Operator.from_label(label)`

Return a tensor product of single-qubit operators.

**Parameters**

**label** (*string*) – single-qubit operator string.

**Returns**

The N-qubit operator.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if the label contains invalid characters, or the length of the label is larger than an explicitly specified num\_qubits.

#### Additional Information:

The labels correspond to the single-qubit matrices: ‘I’: \[\[1, 0], \[0, 1]] ‘X’: \[\[0, 1], \[1, 0]] ‘Y’: \[\[0, -1j], \[1j, 0]] ‘Z’: \[\[1, 0], \[0, -1]] ‘H’: \[\[1, 1], \[1, -1]] / sqrt(2) ‘S’: \[\[1, 0], \[0 , 1j]] ‘T’: \[\[1, 0], \[0, (1+1j) / sqrt(2)]] ‘0’: \[\[1, 0], \[0, 0]] ‘1’: \[\[0, 0], \[0, 1]] ‘+’: \[\[0.5, 0.5], \[0.5 , 0.5]] ‘-‘: \[\[0.5, -0.5], \[-0.5 , 0.5]] ‘r’: \[\[0.5, -0.5j], \[0.5j , 0.5]] ‘l’: \[\[0.5, 0.5j], \[-0.5j , 0.5]]

### input\_dims

<span id="qiskit.quantum_info.Operator.input_dims" />

`Operator.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_unitary

<span id="qiskit.quantum_info.Operator.is_unitary" />

`Operator.is_unitary(atol=None, rtol=None)`

Return True if operator is a unitary matrix.

### output\_dims

<span id="qiskit.quantum_info.Operator.output_dims" />

`Operator.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.Operator.power" />

`Operator.power(n)`

Return the matrix power of the operator.

**Parameters**

**n** (*float*) – the power to raise the matrix to.

**Returns**

the resulting operator `O ** n`.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal.

### reshape

<span id="qiskit.quantum_info.Operator.reshape" />

`Operator.reshape(input_dims=None, output_dims=None, num_qubits=None)`

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

### reverse\_qargs

<span id="qiskit.quantum_info.Operator.reverse_qargs" />

`Operator.reverse_qargs()`

Return an Operator with reversed subsystem ordering.

For a tensor product operator this is equivalent to reversing the order of tensor product subsystems. For an operator $A = A_{n-1} \otimes ... \otimes A_0$ the returned operator will be $A_0 \otimes ... \otimes A_{n-1}$.

**Returns**

the operator with reversed subsystem order.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

### tensor

<span id="qiskit.quantum_info.Operator.tensor" />

`Operator.tensor(other)`

Return the tensor product with another Operator.

**Parameters**

**other** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a Operator object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Operator, and $b$ is the other Operator.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>

### to\_instruction

<span id="qiskit.quantum_info.Operator.to_instruction" />

`Operator.to_instruction()`

Convert to a UnitaryGate instruction.

### to\_matrix

<span id="qiskit.quantum_info.Operator.to_matrix" />

`Operator.to_matrix()`

Convert operator to NumPy matrix.

### to\_operator

<span id="qiskit.quantum_info.Operator.to_operator" />

`Operator.to_operator()`

Convert operator to matrix operator class

### transpose

<span id="qiskit.quantum_info.Operator.transpose" />

`Operator.transpose()`

Return the transpose of the Operator.

## Attributes

<span id="qiskit.quantum_info.Operator.atol" />

### atol

`= 1e-08`

<span id="qiskit.quantum_info.Operator.data" />

### data

Return data.

<span id="qiskit.quantum_info.Operator.dim" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="qiskit.quantum_info.Operator.num_qubits" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="qiskit.quantum_info.Operator.qargs" />

### qargs

Return the qargs for the operator.

<span id="qiskit.quantum_info.Operator.rtol" />

### rtol

`= 1e-05`

<span id="qiskit.quantum_info.Operator.settings" />

### settings

Return operator settings.


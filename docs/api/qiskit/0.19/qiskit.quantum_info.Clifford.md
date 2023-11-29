---
title: Clifford
description: API reference for qiskit.quantum_info.Clifford
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Clifford
---

# Clifford

<span id="qiskit.quantum_info.Clifford" />

`Clifford(data, validate=True)`

An N-qubit unitary operator from the Clifford group.

**Representation**

An *N*-qubit Clifford operator is stored as a length *2N* [`StabilizerTable`](qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable") using the convention from reference \[1].

*   Rows 0 to *N-1* are the *destabilizer* group generators
*   Rows *N-1* to *2N-1* are the *stabilizer* group generators.

The internal [`StabilizerTable`](qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable") for the Clifford can be accessed using the [`table`](qiskit.quantum_info.Clifford#table "qiskit.quantum_info.Clifford.table") attribute. The destabilizer or stabilizer rows can each be accessed as a length-N Stabilizer table using [`destabilizer`](qiskit.quantum_info.Clifford#destabilizer "qiskit.quantum_info.Clifford.destabilizer") and [`stabilizer`](qiskit.quantum_info.Clifford#stabilizer "qiskit.quantum_info.Clifford.stabilizer") attributes.

A more easily human readible representation of the Clifford operator can be obtained by calling the [`to_dict()`](qiskit.quantum_info.Clifford#to_dict "qiskit.quantum_info.Clifford.to_dict") method. This representation is also used if a Clifford object is printed as in the following example

```python
from qiskit import QuantumCircuit
from qiskit.quantum_info import Clifford

# Bell state generation circuit
qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)
cliff = Clifford(qc)

# Print the Clifford
print(cliff)

# Print the Clifford destabilizer rows
print(cliff.destabilizer)

# Print the Clifford stabilizer rows
print(cliff.stabilizer)
```

```python
Clifford: Stabilizer = ['+XX', '+ZZ'], Destabilizer = ['+IZ', '+XI']
StabilizerTable: ['+IZ', '+XI']
StabilizerTable: ['+XX', '+ZZ']
```

**Circuit Conversion**

Clifford operators can be initialized from circuits containing *only* the following Clifford gates: `IGate`, `XGate`, `YGate`, `ZGate`, `HGate`, `SGate`, `SdgGate`, `CXGate`, `CZGate`, `SwapGate`. They can be converted back into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"), or [`Gate`](qiskit.circuit.Gate "qiskit.circuit.Gate") object using the [`to_circuit()`](qiskit.quantum_info.Clifford#to_circuit "qiskit.quantum_info.Clifford.to_circuit") or [`to_instruction()`](qiskit.quantum_info.Clifford#to_instruction "qiskit.quantum_info.Clifford.to_instruction") methods respectively. Note that this decomposition is not necessarily optimal in terms of number of gates.

<Admonition title="Note" type="note">
  A minimally generating set of gates for Clifford circuits is the `HGate` and `SGate` gate and *either* the `CXGate` or `CZGate` two-qubit gate.
</Admonition>

Clifford operators can also be converted to [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") objects using the [`to_operator()`](qiskit.quantum_info.Clifford#to_operator "qiskit.quantum_info.Clifford.to_operator") method. This is done via decomposing to a circuit, and then simulating the circuit as a unitary operator.

## References

1.  S. Aaronson, D. Gottesman, *Improved Simulation of Stabilizer Circuits*, Phys. Rev. A 70, 052328 (2004). [arXiv:quant-ph/0406196](https://arxiv.org/abs/quant-ph/0406196)

Initialize an operator object.

## Attributes

### atol

The default absolute tolerance parameter for float comparisons.

### destabilizer

Return the destabilizer block of the StabilizerTable.

### dim

Return tuple (input\_shape, output\_shape).

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

### qargs

Return the qargs for the operator.

### rtol

The relative tolerance parameter for float comparisons.

### stabilizer

Return the stabilizer block of the StabilizerTable.

### table

Return StabilizerTable

## Methods

### \_\_call\_\_

<span id="qiskit.quantum_info.Clifford.__call__" />

`Clifford.__call__(qargs)`

Return a clone with qargs set

### \_\_getitem\_\_

<span id="qiskit.quantum_info.Clifford.__getitem__" />

`Clifford.__getitem__(key)`

Return a stabilizer Pauli row

### \_\_mul\_\_

<span id="qiskit.quantum_info.Clifford.__mul__" />

`Clifford.__mul__(other)`

### add

<span id="qiskit.quantum_info.Clifford.add" />

`Clifford.add(other)`

Return the linear operator self + other.

DEPRECATED: use `operator + other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self + other.

**Return type**

BaseOperator

### adjoint

<span id="qiskit.quantum_info.Clifford.adjoint" />

`Clifford.adjoint()`

Return the conjugate transpose of the Clifford

### compose

<span id="qiskit.quantum_info.Clifford.compose" />

`Clifford.compose(other, qargs=None, front=False)`

Return the composed operator.

**Parameters**

*   **other** ([*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The operator self @ other.

**Return type**

[Clifford](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

**Raises**

**QiskitError** – if operators have incompatible dimensions for composition.

#### Additional Information:

Composition (`@`) is defined as left matrix multiplication for matrix operators. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](qiskit.quantum_info.Clifford#dot "qiskit.quantum_info.Clifford.dot") method.

### conjugate

<span id="qiskit.quantum_info.Clifford.conjugate" />

`Clifford.conjugate()`

Return the conjugate of the Clifford.

### copy

<span id="qiskit.quantum_info.Clifford.copy" />

`Clifford.copy()`

Make a deep copy of current operator.

### dot

<span id="qiskit.quantum_info.Clifford.dot" />

`Clifford.dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The operator self \* other.

**Return type**

[Clifford](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

**Raises**

**QiskitError** – if operators have incompatible dimensions for composition.

### expand

<span id="qiskit.quantum_info.Clifford.expand" />

`Clifford.expand(other)`

Return the tensor product operator other ⊗ self.

**Parameters**

**other** ([*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – an operator object.

**Returns**

the tensor product operator other ⊗ self.

**Return type**

[Clifford](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

### from\_circuit

<span id="qiskit.quantum_info.Clifford.from_circuit" />

`static Clifford.from_circuit(circuit)`

Initialize from a QuantumCircuit or Instruction.

**Parameters**

**circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – instruction to initialize.

**Returns**

the Clifford object for the instruction.

**Return type**

[Clifford](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

**Raises**

**QiskitError** – if the input instruction is non-Clifford or contains classical register instruction.

### from\_dict

<span id="qiskit.quantum_info.Clifford.from_dict" />

`static Clifford.from_dict(obj)`

Load a Clifford from a dictionary

### from\_label

<span id="qiskit.quantum_info.Clifford.from_label" />

`static Clifford.from_label(label)`

Return a tensor product of single-qubit Clifford gates.

**Parameters**

**label** (*string*) – single-qubit operator string.

**Returns**

The N-qubit Clifford operator.

**Return type**

[Clifford](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

**Raises**

**QiskitError** – if the label contains invalid characters.

#### Additional Information:

The labels correspond to the single-qubit Cliffords are

*   *   Label
    *   Stabilizer
    *   Destabilizer
*   *   `"I"`
    *   +Z
    *   +X
*   *   `"X"`
    *   -Z
    *   +X
*   *   `"Y"`
    *   -Z
    *   -X
*   *   `"Z"`
    *   +Z
    *   -X
*   *   `"H"`
    *   +X
    *   +Z
*   *   `"S"`
    *   +Z
    *   +Y

### input\_dims

<span id="qiskit.quantum_info.Clifford.input_dims" />

`Clifford.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_unitary

<span id="qiskit.quantum_info.Clifford.is_unitary" />

`Clifford.is_unitary()`

Return True if the Clifford table is valid.

### multiply

<span id="qiskit.quantum_info.Clifford.multiply" />

`Clifford.multiply(other)`

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

<span id="qiskit.quantum_info.Clifford.output_dims" />

`Clifford.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.Clifford.power" />

`Clifford.power(n)`

Return the compose of a operator with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composed operator.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

### reshape

<span id="qiskit.quantum_info.Clifford.reshape" />

`Clifford.reshape(input_dims=None, output_dims=None)`

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

<span id="qiskit.quantum_info.Clifford.set_atol" />

`classmethod Clifford.set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

### set\_rtol

<span id="qiskit.quantum_info.Clifford.set_rtol" />

`classmethod Clifford.set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

### subtract

<span id="qiskit.quantum_info.Clifford.subtract" />

`Clifford.subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `operator - other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self - other.

**Return type**

BaseOperator

### tensor

<span id="qiskit.quantum_info.Clifford.tensor" />

`Clifford.tensor(other)`

Return the tensor product operator self ⊗ other.

**Parameters**

**other** ([*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – a operator subclass object.

**Returns**

the tensor product operator self ⊗ other.

**Return type**

[Clifford](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

### to\_circuit

<span id="qiskit.quantum_info.Clifford.to_circuit" />

`Clifford.to_circuit()`

Return a QuantumCircuit implementing the Clifford.

For N \<= 3 qubits this is based on optimal CX cost decomposition from reference \[1]. For N > 3 qubits this is done using the general non-optimal compilation routine from reference \[2].

**Returns**

a circuit implementation of the Clifford.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

#### References

1.  S. Bravyi, D. Maslov, *Hadamard-free circuits expose the structure of the Clifford group*, [arXiv:2003.09412 \[quant-ph\]](https://arxiv.org/abs/2003.09412)
2.  S. Aaronson, D. Gottesman, *Improved Simulation of Stabilizer Circuits*, Phys. Rev. A 70, 052328 (2004). [arXiv:quant-ph/0406196](https://arxiv.org/abs/quant-ph/0406196)

### to\_dict

<span id="qiskit.quantum_info.Clifford.to_dict" />

`Clifford.to_dict()`

Return dictionary represenation of Clifford object.

### to\_instruction

<span id="qiskit.quantum_info.Clifford.to_instruction" />

`Clifford.to_instruction()`

Return a Gate instruction implementing the Clifford.

### to\_matrix

<span id="qiskit.quantum_info.Clifford.to_matrix" />

`Clifford.to_matrix()`

Convert operator to Numpy matrix.

### to\_operator

<span id="qiskit.quantum_info.Clifford.to_operator" />

`Clifford.to_operator()`

Convert to an Operator object.

### transpose

<span id="qiskit.quantum_info.Clifford.transpose" />

`Clifford.transpose()`

Return the transpose of the Clifford.


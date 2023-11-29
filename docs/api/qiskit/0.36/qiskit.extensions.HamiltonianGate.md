---
title: HamiltonianGate
description: API reference for qiskit.extensions.HamiltonianGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.HamiltonianGate
---

# HamiltonianGate

<span id="qiskit.extensions.HamiltonianGate" />

`HamiltonianGate(data, time, label=None)`

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Class for representing evolution by a Hermitian Hamiltonian operator as a gate. This gate resolves to a UnitaryGate U(t) = exp(-1j \* t \* H), which can be decomposed into basis gates if it is 2 qubits or less, or simulated directly in Aer for more qubits.

Create a gate from a hamiltonian operator and evolution time parameter t

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a hermitian operator.
*   **time** (*float*) – time evolution parameter.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Methods

### add\_decomposition

<span id="qiskit.extensions.HamiltonianGate.add_decomposition" />

`HamiltonianGate.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### adjoint

<span id="qiskit.extensions.HamiltonianGate.adjoint" />

`HamiltonianGate.adjoint()`

Return the adjoint of the unitary.

### assemble

<span id="qiskit.extensions.HamiltonianGate.assemble" />

`HamiltonianGate.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.extensions.HamiltonianGate.broadcast_arguments" />

`HamiltonianGate.broadcast_arguments(qargs, cargs)`

Validation and handling of the arguments and its relationship.

For example, `cx([q[0],q[1]], q[2])` means `cx(q[0], q[2]); cx(q[1], q[2])`. This method yields the arguments in the right grouping. In the given example:

```python
in: [[q[0],q[1]], q[2]],[]
outs: [q[0], q[2]], []
      [q[1], q[2]], []
```

The general broadcasting rules are:

> *   If len(qargs) == 1:
>
>     ```python
>     [q[0], q[1]] -> [q[0]],[q[1]]
>     ```
>
> *   If len(qargs) == 2:
>
>     ```python
>     [[q[0], q[1]], [r[0], r[1]]] -> [q[0], r[0]], [q[1], r[1]]
>     [[q[0]], [r[0], r[1]]]       -> [q[0], r[0]], [q[0], r[1]]
>     [[q[0], q[1]], [r[0]]]       -> [q[0], r[0]], [q[1], r[0]]
>     ```
>
> *   If len(qargs) >= 3:
>
>     ```python
>     [q[0], q[1]], [r[0], r[1]],  ...] -> [q[0], r[0], ...], [q[1], r[1], ...]
>     ```

**Parameters**

*   **qargs** (`List`) – List of quantum bit arguments.
*   **cargs** (`List`) – List of classical bit arguments.

**Return type**

`Tuple`\[`List`, `List`]

**Returns**

A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.extensions.HamiltonianGate.c_if" />

`HamiltonianGate.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### conjugate

<span id="qiskit.extensions.HamiltonianGate.conjugate" />

`HamiltonianGate.conjugate()`

Return the conjugate of the Hamiltonian.

### control

<span id="qiskit.extensions.HamiltonianGate.control" />

`HamiltonianGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** (`int`) – number of controls to add to gate (default=1)
*   **label** (`Optional`\[`str`]) – optional gate label
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

Controlled version of gate. This default algorithm uses num\_ctrl\_qubits-1 ancillae qubits so returns a gate of size num\_qubits + 2\*num\_ctrl\_qubits - 1.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

**QiskitError** – unrecognized mode or invalid ctrl\_state

### copy

<span id="qiskit.extensions.HamiltonianGate.copy" />

`HamiltonianGate.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.extensions.HamiltonianGate.inverse" />

`HamiltonianGate.inverse()`

Return the adjoint of the unitary.

### is\_parameterized

<span id="qiskit.extensions.HamiltonianGate.is_parameterized" />

`HamiltonianGate.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### power

<span id="qiskit.extensions.HamiltonianGate.power" />

`HamiltonianGate.power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

### qasm

<span id="qiskit.extensions.HamiltonianGate.qasm" />

`HamiltonianGate.qasm()`

Raise an error, as QASM is not defined for the HamiltonianGate.

### repeat

<span id="qiskit.extensions.HamiltonianGate.repeat" />

`HamiltonianGate.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

### reverse\_ops

<span id="qiskit.extensions.HamiltonianGate.reverse_ops" />

`HamiltonianGate.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.extensions.HamiltonianGate.soft_compare" />

`HamiltonianGate.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.extensions.HamiltonianGate.to_matrix" />

`HamiltonianGate.to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### transpose

<span id="qiskit.extensions.HamiltonianGate.transpose" />

`HamiltonianGate.transpose()`

Return the transpose of the Hamiltonian.

### validate\_parameter

<span id="qiskit.extensions.HamiltonianGate.validate_parameter" />

`HamiltonianGate.validate_parameter(parameter)`

Hamiltonian parameter has to be an ndarray, operator or float.

## Attributes

<span id="qiskit.extensions.HamiltonianGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.extensions.HamiltonianGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.extensions.HamiltonianGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.extensions.HamiltonianGate.duration" />

### duration

Get the duration.

<span id="qiskit.extensions.HamiltonianGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.extensions.HamiltonianGate.name" />

### name

Return the name.

<span id="qiskit.extensions.HamiltonianGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.extensions.HamiltonianGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.extensions.HamiltonianGate.params" />

### params

return instruction params.

<span id="qiskit.extensions.HamiltonianGate.unit" />

### unit

Get the time unit of duration.


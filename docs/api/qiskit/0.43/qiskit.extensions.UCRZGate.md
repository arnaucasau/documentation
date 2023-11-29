---
title: UCRZGate
description: API reference for qiskit.extensions.UCRZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.UCRZGate
---

# UCRZGate

<span id="qiskit.extensions.UCRZGate" />

`UCRZGate(angle_list)`

Bases: [`UCPauliRotGate`](qiskit.extensions.UCPauliRotGate "qiskit.extensions.quantum_initializer.uc_pauli_rot.UCPauliRotGate")

Uniformly controlled rotations (also called multiplexed rotations). The decomposition is based on ‘Synthesis of Quantum Logic Circuits’ by V. Shende et al. ([https://arxiv.org/pdf/quant-ph/0406176.pdf](https://arxiv.org/pdf/quant-ph/0406176.pdf))

Create a new gate.

**Parameters**

*   **name** – The Qobj name of the gate.
*   **num\_qubits** – The number of qubits the gate acts on.
*   **params** – A list of parameters.
*   **label** – An optional label for the gate.

## Methods

<span id="qiskit-extensions-ucrzgate-add-decomposition" />

### add\_decomposition

<span id="qiskit.extensions.UCRZGate.add_decomposition" />

`UCRZGate.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="qiskit-extensions-ucrzgate-assemble" />

### assemble

<span id="qiskit.extensions.UCRZGate.assemble" />

`UCRZGate.assemble()`

Assemble a QasmQobjInstruction

<span id="qiskit-extensions-ucrzgate-broadcast-arguments" />

### broadcast\_arguments

<span id="qiskit.extensions.UCRZGate.broadcast_arguments" />

`UCRZGate.broadcast_arguments(qargs, cargs)`

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

*   **qargs** (*list*) – List of quantum bit arguments.
*   **cargs** (*list*) – List of classical bit arguments.

**Returns**

A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

**Return type**

Iterable\[tuple\[list, list]]

<span id="qiskit-extensions-ucrzgate-c-if" />

### c\_if

<span id="qiskit.extensions.UCRZGate.c_if" />

`UCRZGate.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

<span id="qiskit-extensions-ucrzgate-control" />

### control

<span id="qiskit.extensions.UCRZGate.control" />

`UCRZGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of controls to add to gate (default=1)
*   **label** (*str | None*) – optional gate label
*   **ctrl\_state** (*int | str | None*) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

Controlled version of gate. This default algorithm uses num\_ctrl\_qubits-1 ancillae qubits so returns a gate of size num\_qubits + 2\*num\_ctrl\_qubits - 1.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

**QiskitError** – unrecognized mode or invalid ctrl\_state

<span id="qiskit-extensions-ucrzgate-copy" />

### copy

<span id="qiskit.extensions.UCRZGate.copy" />

`UCRZGate.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="qiskit-extensions-ucrzgate-inverse" />

### inverse

<span id="qiskit.extensions.UCRZGate.inverse" />

`UCRZGate.inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

<span id="qiskit-extensions-ucrzgate-is-parameterized" />

### is\_parameterized

<span id="qiskit.extensions.UCRZGate.is_parameterized" />

`UCRZGate.is_parameterized()`

Return True .IFF. instruction is parameterized else False

<span id="qiskit-extensions-ucrzgate-power" />

### power

<span id="qiskit.extensions.UCRZGate.power" />

`UCRZGate.power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

<span id="qiskit-extensions-ucrzgate-qasm" />

### qasm

<span id="qiskit.extensions.UCRZGate.qasm" />

`UCRZGate.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

<span id="qiskit-extensions-ucrzgate-repeat" />

### repeat

<span id="qiskit.extensions.UCRZGate.repeat" />

`UCRZGate.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

<span id="qiskit-extensions-ucrzgate-reverse-ops" />

### reverse\_ops

<span id="qiskit.extensions.UCRZGate.reverse_ops" />

`UCRZGate.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="qiskit-extensions-ucrzgate-soft-compare" />

### soft\_compare

<span id="qiskit.extensions.UCRZGate.soft_compare" />

`UCRZGate.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

<span id="qiskit-extensions-ucrzgate-to-matrix" />

### to\_matrix

<span id="qiskit.extensions.UCRZGate.to_matrix" />

`UCRZGate.to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

<span id="qiskit-extensions-ucrzgate-validate-parameter" />

### validate\_parameter

<span id="qiskit.extensions.UCRZGate.validate_parameter" />

`UCRZGate.validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

## Attributes

<span id="qiskit.extensions.UCRZGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.extensions.UCRZGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.extensions.UCRZGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.extensions.UCRZGate.duration" />

### duration

Get the duration.

<span id="qiskit.extensions.UCRZGate.label" />

### label

Return instruction label

<span id="qiskit.extensions.UCRZGate.name" />

### name

Return the name.

<span id="qiskit.extensions.UCRZGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.extensions.UCRZGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.extensions.UCRZGate.params" />

### params

return instruction params.

<span id="qiskit.extensions.UCRZGate.unit" />

### unit

Get the time unit of duration.


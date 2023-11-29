---
title: SetStabilizer
description: API reference for qiskit.providers.aer.library.SetStabilizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.library.SetStabilizer
---

# SetStabilizer

<span id="qiskit.providers.aer.library.SetStabilizer" />

`SetStabilizer(state)`

Bases: [`qiskit.circuit.instruction.Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

Set the Clifford stabilizer state of the simulator

Create new instruction to set the Clifford stabilizer state of the simulator.

**Parameters**

**state** ([*StabilizerState*](qiskit.quantum_info.StabilizerState "qiskit.quantum_info.StabilizerState")  *or*[*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – A clifford operator.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

### add\_decomposition

<span id="qiskit.providers.aer.library.SetStabilizer.add_decomposition" />

`SetStabilizer.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.library.SetStabilizer.assemble" />

`SetStabilizer.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.providers.aer.library.SetStabilizer.broadcast_arguments" />

`SetStabilizer.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.library.SetStabilizer.c_if" />

`SetStabilizer.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.providers.aer.library.SetStabilizer.copy" />

`SetStabilizer.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.providers.aer.library.SetStabilizer.inverse" />

`SetStabilizer.inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

### is\_parameterized

<span id="qiskit.providers.aer.library.SetStabilizer.is_parameterized" />

`SetStabilizer.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.providers.aer.library.SetStabilizer.qasm" />

`SetStabilizer.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.library.SetStabilizer.repeat" />

`SetStabilizer.repeat(n)`

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

<span id="qiskit.providers.aer.library.SetStabilizer.reverse_ops" />

`SetStabilizer.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.providers.aer.library.SetStabilizer.soft_compare" />

`SetStabilizer.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit.providers.aer.library.SetStabilizer.validate_parameter" />

`SetStabilizer.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.providers.aer.library.SetStabilizer.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.providers.aer.library.SetStabilizer.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.providers.aer.library.SetStabilizer.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.providers.aer.library.SetStabilizer.duration" />

### duration

Get the duration.

<span id="qiskit.providers.aer.library.SetStabilizer.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.providers.aer.library.SetStabilizer.name" />

### name

Return the name.

<span id="qiskit.providers.aer.library.SetStabilizer.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.providers.aer.library.SetStabilizer.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.providers.aer.library.SetStabilizer.params" />

### params

return instruction params.

<span id="qiskit.providers.aer.library.SetStabilizer.unit" />

### unit

Get the time unit of duration.


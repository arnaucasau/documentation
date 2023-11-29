---
title: SaveClifford
description: API reference for qiskit_aer.library.SaveClifford
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_aer.library.SaveClifford
---

# SaveClifford

<span id="qiskit_aer.library.SaveClifford" />

`SaveClifford(num_qubits, label='clifford', pershot=False)`

Bases: `qiskit_aer.library.save_instructions.save_data.SaveSingleData`

Save Clifford instruction

Create new instruction to save the stabilizer simulator state as a Clifford.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits of the
*   **label** (*str*) – the key for retrieving saved data from results.
*   **pershot** (*bool*) – if True save a list of Cliffords for each shot of the simulation rather than a single statevector \[Default: False].

<Admonition title="Note" type="note">
  This save instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

### add\_decomposition

<span id="qiskit_aer.library.SaveClifford.add_decomposition" />

`SaveClifford.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit_aer.library.SaveClifford.assemble" />

`SaveClifford.assemble()`

Return the QasmQobjInstruction for the intructions.

### broadcast\_arguments

<span id="qiskit_aer.library.SaveClifford.broadcast_arguments" />

`SaveClifford.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit_aer.library.SaveClifford.c_if" />

`SaveClifford.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit_aer.library.SaveClifford.copy" />

`SaveClifford.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit_aer.library.SaveClifford.inverse" />

`SaveClifford.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit_aer.library.SaveClifford.is_parameterized" />

`SaveClifford.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit_aer.library.SaveClifford.qasm" />

`SaveClifford.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit_aer.library.SaveClifford.repeat" />

`SaveClifford.repeat(n)`

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

<span id="qiskit_aer.library.SaveClifford.reverse_ops" />

`SaveClifford.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit_aer.library.SaveClifford.soft_compare" />

`SaveClifford.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit_aer.library.SaveClifford.validate_parameter" />

`SaveClifford.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit_aer.library.SaveClifford.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit_aer.library.SaveClifford.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit_aer.library.SaveClifford.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit_aer.library.SaveClifford.duration" />

### duration

Get the duration.

<span id="qiskit_aer.library.SaveClifford.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit_aer.library.SaveClifford.name" />

### name

Return the name.

<span id="qiskit_aer.library.SaveClifford.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit_aer.library.SaveClifford.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit_aer.library.SaveClifford.params" />

### params

return instruction params.

<span id="qiskit_aer.library.SaveClifford.unit" />

### unit

Get the time unit of duration.


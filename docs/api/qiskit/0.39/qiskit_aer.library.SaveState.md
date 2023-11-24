---
title: SaveState
description: API reference for qiskit_aer.library.SaveState
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_aer.library.SaveState
---

# SaveState[¶](#savestate "Permalink to this headline")

<span id="qiskit_aer.library.SaveState" />

`SaveState(num_qubits, label=None, pershot=False, conditional=False)`

Bases: `qiskit_aer.library.save_instructions.save_data.SaveSingleData`

Save simulator state

The format of the saved state depends on the simulation method used.

Create new instruction to save the simualtor state.

The format of the saved state depends on the simulation method used.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits of the
*   **label** (*str or None*) – Optional, the key for retrieving saved data from results. If None the key will be the state type of the simulator.
*   **pershot** (*bool*) – if True save a list of states for each shot of the simulation rather than a single state \[Default: False].
*   **conditional** (*bool*) – if True save data conditional on the current classical register values \[Default: False].

<Admonition title="Note" type="note">
  This save instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

### add\_decomposition

<span id="qiskit_aer.library.SaveState.add_decomposition" />

`SaveState.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit_aer.library.SaveState.assemble" />

`SaveState.assemble()`

Return the QasmQobjInstruction for the intructions.

### broadcast\_arguments

<span id="qiskit_aer.library.SaveState.broadcast_arguments" />

`SaveState.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit_aer.library.SaveState.c_if" />

`SaveState.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit_aer.library.SaveState.copy" />

`SaveState.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit_aer.library.SaveState.inverse" />

`SaveState.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit_aer.library.SaveState.is_parameterized" />

`SaveState.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit_aer.library.SaveState.qasm" />

`SaveState.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit_aer.library.SaveState.repeat" />

`SaveState.repeat(n)`

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

<span id="qiskit_aer.library.SaveState.reverse_ops" />

`SaveState.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit_aer.library.SaveState.soft_compare" />

`SaveState.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit_aer.library.SaveState.validate_parameter" />

`SaveState.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit_aer.library.SaveState.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit_aer.library.SaveState.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit_aer.library.SaveState.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit_aer.library.SaveState.duration" />

### duration

Get the duration.

<span id="qiskit_aer.library.SaveState.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit_aer.library.SaveState.name" />

### name

Return the name.

<span id="qiskit_aer.library.SaveState.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit_aer.library.SaveState.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit_aer.library.SaveState.params" />

### params

return instruction params.

<span id="qiskit_aer.library.SaveState.unit" />

### unit

Get the time unit of duration.


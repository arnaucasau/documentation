---
title: Barrier
description: API reference for qiskit.circuit.Barrier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Barrier
---

# Barrier

<span id="qiskit.circuit.Barrier" />

`Barrier(num_qubits)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/barrier.py "view source code")

Bases: `qiskit.circuit.instruction.Instruction`

Barrier instruction.

Create new barrier instruction.

## Methods

### add\_decomposition

<span id="qiskit.circuit.Barrier.add_decomposition" />

`Barrier.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.Barrier.assemble" />

`Barrier.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.Barrier.broadcast_arguments" />

`Barrier.broadcast_arguments(qargs, cargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/barrier.py "view source code")

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.circuit.Barrier.c_if" />

`Barrier.c_if(classical, val)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/barrier.py "view source code")

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.circuit.Barrier.copy" />

`Barrier.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.Barrier.inverse" />

`Barrier.inverse()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/barrier.py "view source code")

Special case. Return self.

### is\_parameterized

<span id="qiskit.circuit.Barrier.is_parameterized" />

`Barrier.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.circuit.Barrier.qasm" />

`Barrier.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.Barrier.repeat" />

`Barrier.repeat(n)`

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

<span id="qiskit.circuit.Barrier.reverse_ops" />

`Barrier.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.Barrier.soft_compare" />

`Barrier.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit.circuit.Barrier.validate_parameter" />

`Barrier.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.circuit.Barrier.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.Barrier.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.Barrier.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.Barrier.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.Barrier.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.Barrier.name" />

### name

Return the name.

<span id="qiskit.circuit.Barrier.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.Barrier.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.Barrier.params" />

### params

return instruction params.

<span id="qiskit.circuit.Barrier.unit" />

### unit

Get the time unit of duration.


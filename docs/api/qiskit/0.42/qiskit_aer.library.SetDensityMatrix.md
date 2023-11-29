---
title: SetDensityMatrix
description: API reference for qiskit_aer.library.SetDensityMatrix
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_aer.library.SetDensityMatrix
---

# SetDensityMatrix[¶](#setdensitymatrix "Permalink to this headline")

<span id="qiskit_aer.library.SetDensityMatrix" />

`SetDensityMatrix(state)`

Bases: [`qiskit.circuit.instruction.Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

Set density matrix state of the simulator

Create new instruction to set the density matrix state of the simulator.

**Parameters**

**state** ([*DensityMatrix*](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix")) – a density matrix.

**Raises**

**ExtensionError** – if the input density matrix is not valid.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

### add\_decomposition

<span id="qiskit_aer.library.SetDensityMatrix.add_decomposition" />

`SetDensityMatrix.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit_aer.library.SetDensityMatrix.assemble" />

`SetDensityMatrix.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit_aer.library.SetDensityMatrix.broadcast_arguments" />

`SetDensityMatrix.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit_aer.library.SetDensityMatrix.c_if" />

`SetDensityMatrix.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit_aer.library.SetDensityMatrix.copy" />

`SetDensityMatrix.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit_aer.library.SetDensityMatrix.inverse" />

`SetDensityMatrix.inverse()`

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

<span id="qiskit_aer.library.SetDensityMatrix.is_parameterized" />

`SetDensityMatrix.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit_aer.library.SetDensityMatrix.qasm" />

`SetDensityMatrix.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit_aer.library.SetDensityMatrix.repeat" />

`SetDensityMatrix.repeat(n)`

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

<span id="qiskit_aer.library.SetDensityMatrix.reverse_ops" />

`SetDensityMatrix.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit_aer.library.SetDensityMatrix.soft_compare" />

`SetDensityMatrix.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit_aer.library.SetDensityMatrix.validate_parameter" />

`SetDensityMatrix.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit_aer.library.SetDensityMatrix.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit_aer.library.SetDensityMatrix.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit_aer.library.SetDensityMatrix.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit_aer.library.SetDensityMatrix.duration" />

### duration

Get the duration.

<span id="qiskit_aer.library.SetDensityMatrix.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit_aer.library.SetDensityMatrix.name" />

### name

Return the name.

<span id="qiskit_aer.library.SetDensityMatrix.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit_aer.library.SetDensityMatrix.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit_aer.library.SetDensityMatrix.params" />

### params

return instruction params.

<span id="qiskit_aer.library.SetDensityMatrix.unit" />

### unit

Get the time unit of duration.


---
title: SnapshotStabilizer
description: API reference for qiskit.providers.aer.extensions.SnapshotStabilizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.extensions.SnapshotStabilizer
---

# SnapshotStabilizer

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer" />

`SnapshotStabilizer(label, num_qubits=0)`

Snapshot instruction for stabilizer method of Qasm simulator.

Create a stabilizer state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the instruction barrier size \[Default: 0].

**Raises**

**ExtensionError** – if snapshot is invalid.

**Additional Information:**

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

## Attributes

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### label

Return snapshot label

### params

return instruction params.

### snapshot\_type

Return snapshot type

## Methods

### add\_decomposition

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.add_decomposition" />

`SnapshotStabilizer.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.assemble" />

`SnapshotStabilizer.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.broadcast_arguments" />

`SnapshotStabilizer.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.c_if" />

`SnapshotStabilizer.c_if(classical, val)`

Add classical condition on register classical and value val.

### copy

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.copy" />

`SnapshotStabilizer.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### define\_snapshot\_register

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.define_snapshot_register" />

`static SnapshotStabilizer.define_snapshot_register(circuit, label, qubits=None)`

Defines qubits to snapshot for all snapshot methods

### inverse

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.inverse" />

`SnapshotStabilizer.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.is_parameterized" />

`SnapshotStabilizer.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.mirror" />

`SnapshotStabilizer.mirror()`

For a composite instruction, reverse the order of sub-gates.

This is done by recursively mirroring all sub-instructions. It does not invert any gate.

**Returns**

a fresh gate with sub-gates reversed

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### qasm

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.qasm" />

`SnapshotStabilizer.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.extensions.SnapshotStabilizer.repeat" />

`SnapshotStabilizer.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.


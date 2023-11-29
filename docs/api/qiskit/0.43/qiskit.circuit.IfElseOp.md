---
title: IfElseOp
description: API reference for qiskit.circuit.IfElseOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.IfElseOp
---

# IfElseOp

<span id="qiskit.circuit.IfElseOp" />

`IfElseOp(condition, true_body, false_body=None, label=None)`

Bases: [`ControlFlowOp`](qiskit.circuit.ControlFlowOp "qiskit.circuit.controlflow.control_flow.ControlFlowOp")

A circuit operation which executes a program (`true_body`) if a provided condition (`condition`) evaluates to true, and optionally evaluates another program (`false_body`) otherwise.

**Parameters**

*   **condition** (*Tuple\[*[*ClassicalRegister*](qiskit.circuit.ClassicalRegister "qiskit.circuit.classicalregister.ClassicalRegister")  *|*[*Clbit*](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")*, int]*) – A condition to be evaluated at circuit runtime which, if true, will trigger the evaluation of `true_body`. Can be specified as either a tuple of a `ClassicalRegister` to be tested for equality with a given `int`, or as a tuple of a `Clbit` to be compared to either a `bool` or an `int`.
*   **true\_body** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")) – A program to be executed if `condition` evaluates to true.
*   **false\_body** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit") *| None*) – A optional program to be executed if `condition` evaluates to false.
*   **label** (*str | None*) – An optional label for identifying the instruction.

If provided, `false_body` must be of the same `num_qubits` and `num_clbits` as `true_body`.

The classical bits used in `condition` must be a subset of those attached to the circuit on which this `IfElseOp` will be appended.

**Circuit symbol:**

```python
     ┌───────────┐
q_0: ┤0          ├
     │           │
q_1: ┤1          ├
     │  if_else  │
q_2: ┤2          ├
     │           │
c_0: ╡0          ╞
     └───────────┘
```

Create a new instruction.

**Parameters**

*   **name** (*str*) – instruction name
*   **num\_qubits** (*int*) – instruction’s qubit width
*   **num\_clbits** (*int*) – instruction’s clbit width
*   **params** (*list\[int|float|complex|str|ndarray|list|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*]*) – list of parameters
*   **duration** (*int or float*) – instruction’s duration. it must be integer if `unit` is ‘dt’
*   **unit** (*str*) – time unit of duration
*   **label** (*str or None*) – An optional label for identifying the instruction.

**Raises**

*   **CircuitError** – when the register is not in the correct format.
*   **TypeError** – when the optional label is provided, but it is not a string.

## Methods

<span id="qiskit-circuit-ifelseop-add-decomposition" />

### add\_decomposition

<span id="qiskit.circuit.IfElseOp.add_decomposition" />

`IfElseOp.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="qiskit-circuit-ifelseop-assemble" />

### assemble

<span id="qiskit.circuit.IfElseOp.assemble" />

`IfElseOp.assemble()`

Assemble a QasmQobjInstruction

<span id="qiskit-circuit-ifelseop-broadcast-arguments" />

### broadcast\_arguments

<span id="qiskit.circuit.IfElseOp.broadcast_arguments" />

`IfElseOp.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

<span id="qiskit-circuit-ifelseop-c-if" />

### c\_if

<span id="qiskit.circuit.IfElseOp.c_if" />

`IfElseOp.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

<span id="qiskit-circuit-ifelseop-copy" />

### copy

<span id="qiskit.circuit.IfElseOp.copy" />

`IfElseOp.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="qiskit-circuit-ifelseop-inverse" />

### inverse

<span id="qiskit.circuit.IfElseOp.inverse" />

`IfElseOp.inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

<span id="qiskit-circuit-ifelseop-is-parameterized" />

### is\_parameterized

<span id="qiskit.circuit.IfElseOp.is_parameterized" />

`IfElseOp.is_parameterized()`

Return True .IFF. instruction is parameterized else False

<span id="qiskit-circuit-ifelseop-qasm" />

### qasm

<span id="qiskit.circuit.IfElseOp.qasm" />

`IfElseOp.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

<span id="qiskit-circuit-ifelseop-repeat" />

### repeat

<span id="qiskit.circuit.IfElseOp.repeat" />

`IfElseOp.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

<span id="qiskit-circuit-ifelseop-replace-blocks" />

### replace\_blocks

<span id="qiskit.circuit.IfElseOp.replace_blocks" />

`IfElseOp.replace_blocks(blocks)`

Replace blocks and return new instruction.

**Parameters**

**blocks** (*Iterable\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")*]*) – Iterable of circuits for “if” and “else” condition. If there is no “else” circuit it may be set to None or ommited.

**Returns**

New IfElseOp with replaced blocks.

**Return type**

[*IfElseOp*](qiskit.circuit.IfElseOp "qiskit.circuit.controlflow.if_else.IfElseOp")

<span id="qiskit-circuit-ifelseop-reverse-ops" />

### reverse\_ops

<span id="qiskit.circuit.IfElseOp.reverse_ops" />

`IfElseOp.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="qiskit-circuit-ifelseop-soft-compare" />

### soft\_compare

<span id="qiskit.circuit.IfElseOp.soft_compare" />

`IfElseOp.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

<span id="qiskit-circuit-ifelseop-validate-parameter" />

### validate\_parameter

<span id="qiskit.circuit.IfElseOp.validate_parameter" />

`IfElseOp.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.circuit.IfElseOp.blocks" />

### blocks

<span id="qiskit.circuit.IfElseOp.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.IfElseOp.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.IfElseOp.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.IfElseOp.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.IfElseOp.label" />

### label

Return instruction label

<span id="qiskit.circuit.IfElseOp.name" />

### name

Return the name.

<span id="qiskit.circuit.IfElseOp.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.IfElseOp.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.IfElseOp.params" />

### params

<span id="qiskit.circuit.IfElseOp.unit" />

### unit

Get the time unit of duration.


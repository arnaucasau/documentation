---
title: IntegerComparator
description: API reference for qiskit.circuit.library.IntegerComparator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.IntegerComparator
---

# IntegerComparator[¶](#integercomparator "Permalink to this headline")

<span id="qiskit.circuit.library.IntegerComparator" />

`IntegerComparator(num_state_qubits=None, value=None, geq=True, name='cmp')`

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`

Integer Comparator.

Operator compares basis states $|i\rangle_n$ against a classically given integer $L$ of fixed value and flips a target qubit if $i \geq L$ (or $<$ depending on the parameter `geq`):

$$
|i\rangle_n |0\rangle \mapsto |i\rangle_n |i \geq L\rangle
$$

This operation is based on two’s complement implementation of binary subtraction but only uses carry bits and no actual result bits. If the most significant carry bit (the results bit) is 1, the $\geq$ condition is `True` otherwise it is `False`.

Create a new fixed value comparator circuit.

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – Number of state qubits. If this is set it will determine the number of qubits required for the circuit.
*   **value** (`Optional`\[`int`]) – The fixed value to compare with.
*   **geq** (`bool`) – If True, evaluate a `>=` condition, else `<`.
*   **name** (`str`) – Name of the circuit.

## Attributes

<span id="qiskit.circuit.library.IntegerComparator.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.IntegerComparator.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

**Return type**

`dict`

<span id="qiskit.circuit.library.IntegerComparator.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.IntegerComparator.data" />

### data

<span id="qiskit.circuit.library.IntegerComparator.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.IntegerComparator.geq" />

### geq

Return whether the comparator compares greater or less equal.

**Return type**

`bool`

**Returns**

True, if the comparator compares `>=`, False if `<`.

<span id="qiskit.circuit.library.IntegerComparator.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.IntegerComparator.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.IntegerComparator.instances" />

### instances

`= 2111`

<span id="qiskit.circuit.library.IntegerComparator.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.IntegerComparator.num_ancilla_qubits" />

### num\_ancilla\_qubits

Deprecated. Use num\_ancillas instead.

<span id="qiskit.circuit.library.IntegerComparator.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.IntegerComparator.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.IntegerComparator.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.IntegerComparator.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.IntegerComparator.num_state_qubits" />

### num\_state\_qubits

The number of qubits encoding the state for the comparison.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.IntegerComparator.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.IntegerComparator.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.IntegerComparator.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.IntegerComparator.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.IntegerComparator.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]

<span id="qiskit.circuit.library.IntegerComparator.value" />

### value

The value to compare the qubit register to.

**Return type**

`int`

**Returns**

The value against which the value of the qubit register is compared.


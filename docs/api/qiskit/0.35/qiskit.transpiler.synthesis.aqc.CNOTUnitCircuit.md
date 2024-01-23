---
title: CNOTUnitCircuit
description: API reference for qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit
---

# CNOTUnitCircuit

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit" />

`CNOTUnitCircuit(num_qubits, cnots, tol=0.0, name=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/transpiler/synthesis/aqc/cnot_unit_circuit.py "view source code")

Bases: `qiskit.transpiler.synthesis.aqc.approximate.ApproximateCircuit`

A class that represents an approximate circuit based on CNOT unit blocks.

**Parameters**

*   **num\_qubits** (`int`) – the number of qubits in this circuit.
*   **cnots** (`ndarray`) – an array of dimensions `(2, L)` indicating where the CNOT units will be placed.
*   **tol** (`Optional`\[`float`]) – angle parameter less or equal this (small) value is considered equal zero and corresponding gate is not inserted into the output circuit (because it becomes identity one in this case).
*   **name** (`Optional`\[`str`]) – name of this circuit

**Raises**

**ValueError** – if an unsupported parameter is passed.

## Methods Defined Here

### build

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.build" />

`CNOTUnitCircuit.build(thetas)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/transpiler/synthesis/aqc/cnot_unit_circuit.py "view source code")

#### Constructs a Qiskit quantum circuit out of the parameters (angles) of this circuit. If a

parameter value is less in absolute value than the specified tolerance then the corresponding rotation gate will be skipped in the circuit.

**Return type**

`None`

## Attributes

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.instances" />

### instances

`= 9`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.thetas" />

### thetas

Returns a vector of rotation angles used by CNOT units in this circuit.

**Return type**

`ndarray`

**Returns**

Parameters of the rotation gates in this circuit.


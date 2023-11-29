---
title: Permutation
description: API reference for qiskit.circuit.library.Permutation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.Permutation
---

# Permutation

<span id="qiskit.circuit.library.Permutation" />

`Permutation(num_qubits, pattern=None, seed=None)`

Bases: [`qiskit.circuit.quantumcircuit.QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

An n\_qubit circuit that permutes qubits.

Return an n\_qubit permutation circuit implemented using SWAPs.

**Parameters**

*   **num\_qubits** (`int`) – circuit width.
*   **pattern** (`Optional`\[`List`\[`int`]]) – permutation pattern. If None, permute randomly.
*   **seed** (`Optional`\[`int`]) – random seed in case a random permutation is requested.

**Raises**

**CircuitError** – if permutation pattern is malformed.

**Reference Circuit:**

![../\_images/qiskit.circuit.library.Permutation\_0\_0.png](/images/api/qiskit/0.36/qiskit.circuit.library.Permutation_0_0.png)

**Expanded Circuit:**

## Attributes

<span id="qiskit.circuit.library.Permutation.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.Permutation.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.Permutation.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.Permutation.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.Permutation.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.Permutation.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.Permutation.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.Permutation.instances" />

### instances

`= 87`

<span id="qiskit.circuit.library.Permutation.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.Permutation.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.Permutation.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.Permutation.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.Permutation.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.Permutation.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.Permutation.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.Permutation.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.Permutation.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]


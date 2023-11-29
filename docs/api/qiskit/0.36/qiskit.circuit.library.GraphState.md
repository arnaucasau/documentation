---
title: GraphState
description: API reference for qiskit.circuit.library.GraphState
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.GraphState
---

# GraphState

<span id="qiskit.circuit.library.GraphState" />

`GraphState(adjacency_matrix)`

Bases: [`qiskit.circuit.quantumcircuit.QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

Circuit to prepare a graph state.

Given a graph G = (V, E), with the set of vertices V and the set of edges E, the corresponding graph state is defined as

$$
|G\rangle = \prod_{(a,b) \in E} CZ_{(a,b)} {|+\rangle}^{\otimes V}
$$

Such a state can be prepared by first preparing all qubits in the $+$ state, then applying a $CZ$ gate for each corresponding graph edge.

Graph state preparation circuits are Clifford circuits, and thus easy to simulate classically. However, by adding a layer of measurements in a product basis at the end, there is evidence that the circuit becomes hard to simulate \[2].

**Reference Circuit:**

**References:**

**\[1] M. Hein, J. Eisert, H.J. Briegel, Multi-party Entanglement in Graph States,**

[arXiv:0307130](https://arxiv.org/pdf/quant-ph/0307130.pdf)

**\[2] D. Koh, Further Extensions of Clifford Circuits & their Classical Simulation Complexities.**

[arXiv:1512.07892](https://arxiv.org/pdf/1512.07892.pdf)

Create graph state preparation circuit.

**Parameters**

**adjacency\_matrix** (`Union`\[`List`, `array`]) – input graph as n-by-n list of 0-1 lists

**Raises**

**CircuitError** – If adjacency\_matrix is not symmetric.

The circuit prepares a graph state with the given adjacency matrix.

## Attributes

<span id="qiskit.circuit.library.GraphState.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.GraphState.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.GraphState.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.GraphState.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.GraphState.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.GraphState.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.GraphState.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.GraphState.instances" />

### instances

`= 87`

<span id="qiskit.circuit.library.GraphState.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.GraphState.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GraphState.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.GraphState.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.GraphState.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GraphState.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.GraphState.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.GraphState.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.GraphState.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]


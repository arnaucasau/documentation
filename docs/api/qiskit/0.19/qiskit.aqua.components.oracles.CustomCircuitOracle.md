---
title: CustomCircuitOracle
description: API reference for qiskit.aqua.components.oracles.CustomCircuitOracle
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.oracles.CustomCircuitOracle
---

# CustomCircuitOracle

<span id="qiskit.aqua.components.oracles.CustomCircuitOracle" />

`CustomCircuitOracle(variable_register=None, output_register=None, ancillary_register=None, circuit=None, evaluate_classically_callback=None)`

The Custom Circuit-based Quantum Oracle.

A helper class to, in essence, ‘wrap’ a user-supplied quantum circuit such that it becomes of type [`Oracle`](qiskit.aqua.components.oracles.Oracle "qiskit.aqua.components.oracles.Oracle") and hence can be used by algorithms taking an oracle as input.

This class is provided for easy creation of oracles using custom circuits. It is geared towards programmatically experimenting with oracles, where a user directly provides a QuantumCircuit object, corresponding to the intended oracle function, together with the various QuantumRegister objects involved.

**Parameters**

*   **variable\_register** (`Optional`\[[`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.quantumregister.QuantumRegister")]) – The register holding variable qubit(s) for the oracle function
*   **output\_register** (`Optional`\[[`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.quantumregister.QuantumRegister")]) – The register holding output qubit(s) for the oracle function
*   **ancillary\_register** (`Optional`\[[`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.quantumregister.QuantumRegister")]) – The register holding ancillary qubit(s)
*   **circuit** (`Optional`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]) – The quantum circuit corresponding to the intended oracle function
*   **evaluate\_classically\_callback** (`Optional`\[`Callable`\[\[`str`], `Tuple`\[`bool`, `List`\[`int`]]]]) – The classical callback function for evaluating the oracle, for example, to use with [`Grover`](qiskit.aqua.algorithms.Grover "qiskit.aqua.algorithms.Grover")’s search

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Invalid input

## Attributes

### ancillary\_register

returns ancillary register

### circuit

### output\_register

returns output register

### variable\_register

returns variable register

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.oracles.CustomCircuitOracle.construct_circuit" />

`CustomCircuitOracle.construct_circuit()`

Construct the oracle circuit.

**Returns**

A quantum circuit for the oracle.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")


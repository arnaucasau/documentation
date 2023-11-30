---
title: Standard
description: API reference for qiskit.aqua.components.iqfts.Standard
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.iqfts.Standard
---

# Standard

<span id="qiskit.aqua.components.iqfts.Standard" />

`Standard(num_qubits)`

The Standard IQFT.

The standard version of the IQFT is simply the inverse of a plain QFT.

**Parameters**

**num\_qubits** (`int`) – The number of qubits

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.iqfts.Standard.construct_circuit" />

`Standard.construct_circuit(mode='circuit', qubits=None, circuit=None, do_swaps=True)`

Construct the circuit.

**Parameters**

*   **mode** (*str*) – ‘matrix’ or ‘circuit’
*   **qubits** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister") *or qubits*) – register or qubits to build the circuit on.
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – circuit for construction.
*   **do\_swaps** (*bool*) – include the swaps.

**Returns**

The matrix or circuit depending on the specified mode.

**Return type**

numpy.ndarray

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Unrecognized mode

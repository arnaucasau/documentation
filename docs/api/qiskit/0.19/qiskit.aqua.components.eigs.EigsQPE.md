---
title: EigsQPE
description: API reference for qiskit.aqua.components.eigs.EigsQPE
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.eigs.EigsQPE
---

# EigsQPE

<span id="qiskit.aqua.components.eigs.EigsQPE" />

`EigsQPE(operator, iqft, num_time_slices=1, num_ancillae=1, expansion_mode='trotter', expansion_order=1, evo_time=None, negative_evals=False, ne_qfts=None)`

Eigenvalues using Quantum Phase Estimation.

Specifically, this class is based on PhaseEstimationCircuit with no measurements and has additional handling of negative eigenvalues, e.g. for [`HHL`](qiskit.aqua.algorithms.HHL "qiskit.aqua.algorithms.HHL"). It depends on [`QFT`](qiskit.aqua.components.qfts#module-qiskit.aqua.components.qfts "qiskit.aqua.components.qfts") and [`IQFT`](qiskit.aqua.components.iqfts#module-qiskit.aqua.components.iqfts "qiskit.aqua.components.iqfts") components.

**Parameters**

*   **operator** ([`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator")) – The Hamiltonian Operator object
*   **iqft** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`IQFT`](qiskit.aqua.components.iqfts.IQFT "qiskit.aqua.components.iqfts.iqft.IQFT")]) – The Inverse Quantum Fourier Transform component
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_ancillae** (`int`) – The number of ancillary qubits to use for the measurement, has a minimum value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’ | ‘suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a minimum value of 1.
*   **evo\_time** (`Optional`\[`float`]) – An optional evolution time which should scale the eigenvalue onto the range $(0,1]$ (or $(-0.5,0.5]$ for negative eigenvalues). Defaults to `None` in which case a suitably estimated evolution time is internally computed.
*   **negative\_evals** (`bool`) – Set `True` to indicate negative eigenvalues need to be handled
*   **ne\_qfts** (`Optional`\[`List`]) – The QFT and IQFT components for handling negative eigenvalues

## Methods

### construct\_circuit

<span id="qiskit.aqua.components.eigs.EigsQPE.construct_circuit" />

`EigsQPE.construct_circuit(mode, register=None)`

Construct the eigenvalues estimation using the PhaseEstimationCircuit

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the register to use for the quantum state

**Returns**

object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ValueError** – QPE is only possible as a circuit not as a matrix

### construct\_inverse

<span id="qiskit.aqua.components.eigs.EigsQPE.construct_inverse" />

`EigsQPE.construct_inverse(mode, circuit)`

Construct the inverse eigenvalue estimation quantum circuit.

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the quantum circuit to invert

**Returns**

**object for of the inverted eigenvalue estimation**

circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **NotImplementedError** – not implemented for matrix mode
*   **ValueError** – Circuit was not constructed beforehand

### get\_register\_sizes

<span id="qiskit.aqua.components.eigs.EigsQPE.get_register_sizes" />

`EigsQPE.get_register_sizes()`

get register sizes

### get\_scaling

<span id="qiskit.aqua.components.eigs.EigsQPE.get_scaling" />

`EigsQPE.get_scaling()`

get scaling


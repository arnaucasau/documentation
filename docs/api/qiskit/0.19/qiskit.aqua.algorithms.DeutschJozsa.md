---
title: DeutschJozsa
description: API reference for qiskit.aqua.algorithms.DeutschJozsa
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.DeutschJozsa
---

# DeutschJozsa

<span id="qiskit.aqua.algorithms.DeutschJozsa" />

`DeutschJozsa(oracle, quantum_instance=None)`

The Deutsch-Jozsa algorithm.

The Deutsch-Jozsa algorithm was one of the first known quantum algorithms that showed an exponential speedup compared to a deterministic (non-probabilistic) classical algorithm, given a black box oracle function. The algorithm determines whether the given function $f:\{0,1\}^n \rightarrow \{0,1\}$ is constant or balanced. A constant function maps all inputs to 0 or 1, and a balanced function maps half of its inputs to 0 and the other half to 1.

Note: the [`TruthTableOracle`](qiskit.aqua.components.oracles.TruthTableOracle "qiskit.aqua.components.oracles.TruthTableOracle") facilitates creating a constant or balanced function but any oracle can be used as long as the boolean function implemented by the oracle indeed satisfies the constraint of being either constant or balanced.

**Parameters**

*   **oracle** ([`Oracle`](qiskit.aqua.components.oracles.Oracle "qiskit.aqua.components.oracles.oracle.Oracle")) – The oracle component
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

## Attributes

### backend

<span id="qiskit.aqua.algorithms.DeutschJozsa.backend" />

`qiskit.providers.basebackend.BaseBackend`

Returns backend.

**Return type**

[`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend")

### quantum\_instance

<span id="qiskit.aqua.algorithms.DeutschJozsa.quantum_instance" />

`Union[None, qiskit.aqua.quantum_instance.QuantumInstance]`

Returns quantum instance.

**Return type**

`Optional`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance")]

### random

Return a numpy random.

## Methods

### construct\_circuit

<span id="qiskit.aqua.algorithms.DeutschJozsa.construct_circuit" />

`DeutschJozsa.construct_circuit(measurement=False)`

Construct the quantum circuit

**Parameters**

**measurement** (*bool*) – Boolean flag to indicate if measurement should be included in the circuit.

**Returns**

the QuantumCircuit object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### run

<span id="qiskit.aqua.algorithms.DeutschJozsa.run" />

`DeutschJozsa.run(quantum_instance=None, **kwargs)`

Execute the algorithm with selected backend.

**Parameters**

*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – the experimental setting.
*   **kwargs** (*dict*) – kwargs

**Returns**

results of an algorithm.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided

### set\_backend

<span id="qiskit.aqua.algorithms.DeutschJozsa.set_backend" />

`DeutschJozsa.set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`


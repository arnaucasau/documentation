---
title: MatrixExponential
description: API reference for qiskit.synthesis.MatrixExponential
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.synthesis.MatrixExponential
---

# MatrixExponential

<span id="qiskit.synthesis.MatrixExponential" />

`MatrixExponential`

Bases: [`qiskit.synthesis.evolution.evolution_synthesis.EvolutionSynthesis`](qiskit.synthesis.EvolutionSynthesis "qiskit.synthesis.evolution.evolution_synthesis.EvolutionSynthesis")

Exact operator evolution via matrix exponentiation and unitary synthesis.

This class synthesis the exponential of operators by calculating their exponentially-sized matrix representation and using exact matrix exponentiation followed by unitary synthesis to obtain a circuit. This process is not scalable and serves as comparison or benchmark for small systems.

## Methods

### synthesize

<span id="qiskit.synthesis.MatrixExponential.synthesize" />

`MatrixExponential.synthesize(evolution)`

Synthesize an `qiskit.circuit.library.PauliEvolutionGate`.

**Parameters**

**evolution** ([*PauliEvolutionGate*](qiskit.circuit.library.PauliEvolutionGate "qiskit.circuit.library.PauliEvolutionGate")) – The evolution gate to synthesize.

**Returns**

A circuit implementing the evolution.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

## Attributes

<span id="qiskit.synthesis.MatrixExponential.settings" />

### settings

Return the settings in a dictionary, which can be used to reconstruct the object.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

A dictionary containing the settings of this product formula.

**Raises**

**NotImplementedError** – The interface does not implement this method.


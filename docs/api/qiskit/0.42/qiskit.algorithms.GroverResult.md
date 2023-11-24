---
title: GroverResult
description: API reference for qiskit.algorithms.GroverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.GroverResult
---

# GroverResult[¶](#groverresult "Permalink to this headline")

<span id="qiskit.algorithms.GroverResult" />

`GroverResult`

Bases: `qiskit.algorithms.amplitude_amplifiers.amplitude_amplifier.AmplitudeAmplifierResult`

Grover Result.

## Methods

### combine

<span id="qiskit.algorithms.GroverResult.combine" />

`GroverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.GroverResult.assignment" />

### assignment

The post-processed value of the most likely bitstring.

**Return type**

`Any`

**Returns**

The output of the `post_processing` function of the respective `AmplificationProblem`, where the input is the `top_measurement`. The type is the same as the return type of the post-processing function.

<span id="qiskit.algorithms.GroverResult.circuit_results" />

### circuit\_results

Return the circuit results. Can be a statevector or counts dictionary.

**Return type**

`Union`\[`List`\[`ndarray`], `List`\[`Dict`\[`str`, `int`]], `None`]

<span id="qiskit.algorithms.GroverResult.iterations" />

### iterations

All the powers of the Grover operator that have been tried.

**Return type**

`List`\[`int`]

**Returns**

The powers of the Grover operator tested.

<span id="qiskit.algorithms.GroverResult.max_probability" />

### max\_probability

Return the maximum sampling probability.

**Return type**

`float`

<span id="qiskit.algorithms.GroverResult.oracle_evaluation" />

### oracle\_evaluation

Whether the classical oracle evaluation of the top measurement was True or False.

**Return type**

`bool`

**Returns**

The classical oracle evaluation of the top measurement.

<span id="qiskit.algorithms.GroverResult.top_measurement" />

### top\_measurement

The most frequently measured output as bitstring.

**Return type**

`Optional`\[`str`]

**Returns**

The most frequently measured output state.


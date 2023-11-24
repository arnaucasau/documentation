---
title: AmplitudeAmplifier
description: API reference for qiskit.algorithms.AmplitudeAmplifier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeAmplifier
---

# AmplitudeAmplifier[¶](#amplitudeamplifier "Permalink to this headline")

<span id="qiskit.algorithms.AmplitudeAmplifier" />

`AmplitudeAmplifier`

Bases: `abc.ABC`

The interface for amplification algorithms.

## Methods

### amplify

<span id="qiskit.algorithms.AmplitudeAmplifier.amplify" />

`abstract AmplitudeAmplifier.amplify(amplification_problem)`

Run the amplification algorithm.

**Parameters**

**amplification\_problem** ([`AmplificationProblem`](qiskit.algorithms.AmplificationProblem "qiskit.algorithms.amplitude_amplifiers.amplification_problem.AmplificationProblem")) – The amplification problem.

**Return type**

`AmplitudeAmplifierResult`

**Returns**

The result as a `AmplificationResult`, where e.g. the most likely state can be queried as `result.top_measurement`.


---
title: AmplitudeEstimator
description: API reference for qiskit.algorithms.AmplitudeEstimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeEstimator
---

# AmplitudeEstimator[¶](#amplitudeestimator "Permalink to this headline")

<span id="qiskit.algorithms.AmplitudeEstimator" />

`AmplitudeEstimator`

Bases: `abc.ABC`

The Amplitude Estimation interface.

## Methods

### estimate

<span id="qiskit.algorithms.AmplitudeEstimator.estimate" />

`abstract AmplitudeEstimator.estimate(estimation_problem)`

Run the amplitude estimation algorithm.

**Parameters**

**estimation\_problem** ([`EstimationProblem`](qiskit.algorithms.EstimationProblem "qiskit.algorithms.amplitude_estimators.estimation_problem.EstimationProblem")) – An `EstimationProblem` containing all problem-relevant information such as the state preparation and the objective qubits.

**Return type**

[AmplitudeEstimatorResult](qiskit.algorithms.AmplitudeEstimatorResult "qiskit.algorithms.AmplitudeEstimatorResult")


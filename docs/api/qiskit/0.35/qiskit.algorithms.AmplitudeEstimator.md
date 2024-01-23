---
title: AmplitudeEstimator
description: API reference for qiskit.algorithms.AmplitudeEstimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeEstimator
---

# AmplitudeEstimator

<span id="qiskit.algorithms.AmplitudeEstimator" />

`AmplitudeEstimator`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/algorithms/amplitude_estimators/amplitude_estimator.py "view source code")

Bases: `abc.ABC`

The Amplitude Estimation interface.

## Methods

### estimate

<span id="qiskit.algorithms.AmplitudeEstimator.estimate" />

`abstract AmplitudeEstimator.estimate(estimation_problem)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/algorithms/amplitude_estimators/amplitude_estimator.py "view source code")

Run the amplitude estimation algorithm.

**Parameters**

**estimation\_problem** (`EstimationProblem`) – An `EstimationProblem` containing all problem-relevant information such as the state preparation and the objective qubits.

**Return type**

`AmplitudeEstimatorResult`


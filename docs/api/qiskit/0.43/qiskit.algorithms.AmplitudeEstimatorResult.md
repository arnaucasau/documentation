---
title: AmplitudeEstimatorResult
description: API reference for qiskit.algorithms.AmplitudeEstimatorResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.AmplitudeEstimatorResult
---

# AmplitudeEstimatorResult

<span id="qiskit.algorithms.AmplitudeEstimatorResult" />

`AmplitudeEstimatorResult`

Bases: `AlgorithmResult`

The results object for amplitude estimation algorithms.

## Methods

<span id="qiskit-algorithms-amplitudeestimatorresult-combine" />

### combine

<span id="qiskit.algorithms.AmplitudeEstimatorResult.combine" />

`AmplitudeEstimatorResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

## Attributes

<span id="qiskit.algorithms.AmplitudeEstimatorResult.circuit_results" />

### circuit\_results

Return the circuit results. Can be a statevector or counts dictionary.

<span id="qiskit.algorithms.AmplitudeEstimatorResult.confidence_interval" />

### confidence\_interval

Return the confidence interval for the amplitude (95% interval by default).

<span id="qiskit.algorithms.AmplitudeEstimatorResult.confidence_interval_processed" />

### confidence\_interval\_processed

Return the post-processed confidence interval (95% interval by default).

<span id="qiskit.algorithms.AmplitudeEstimatorResult.estimation" />

### estimation

Return the estimation for the amplitude in $[0, 1]$.

<span id="qiskit.algorithms.AmplitudeEstimatorResult.estimation_processed" />

### estimation\_processed

Return the estimation for the amplitude after the post-processing has been applied.

<span id="qiskit.algorithms.AmplitudeEstimatorResult.num_oracle_queries" />

### num\_oracle\_queries

Return the number of Grover oracle queries.

<span id="qiskit.algorithms.AmplitudeEstimatorResult.post_processing" />

### post\_processing

Return a handle to the post processing function.

<span id="qiskit.algorithms.AmplitudeEstimatorResult.shots" />

### shots

Return the number of shots used. Is 1 for statevector-based simulations.


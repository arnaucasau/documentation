---
title: MinimumEigensolverResult
description: API reference for qiskit.algorithms.MinimumEigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.MinimumEigensolverResult
---

# MinimumEigensolverResult[¶](#minimumeigensolverresult "Permalink to this headline")

<span id="qiskit.algorithms.MinimumEigensolverResult" />

`MinimumEigensolverResult`

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

Pending deprecation: Minimum Eigensolver Result.

The MinimumEigensolverResult class has been superseded by the [`qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult`](qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult "qiskit.algorithms.minimum_eigensolvers.MinimumEigensolverResult") class. This class will be deprecated in a future release and subsequently removed after that.

## Methods

### combine

<span id="qiskit.algorithms.MinimumEigensolverResult.combine" />

`MinimumEigensolverResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

## Attributes

<span id="qiskit.algorithms.MinimumEigensolverResult.aux_operator_eigenvalues" />

### aux\_operator\_eigenvalues

Return aux operator expectation values.

These values are in fact tuples formatted as (mean, standard deviation).

**Return type**

`Union`\[`List`\[`Optional`\[`Tuple`\[`complex`, `complex`]]], `Dict`\[`str`, `Tuple`\[`complex`, `complex`]], `None`]

<span id="qiskit.algorithms.MinimumEigensolverResult.eigenstate" />

### eigenstate

return eigen state

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.algorithms.MinimumEigensolverResult.eigenvalue" />

### eigenvalue

returns eigen value

**Return type**

`Optional`\[`complex`]


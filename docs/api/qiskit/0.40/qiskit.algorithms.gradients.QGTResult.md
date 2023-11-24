---
title: QGTResult
description: API reference for qiskit.algorithms.gradients.QGTResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.gradients.QGTResult
---

# QGTResult[¶](#qgtresult "Permalink to this headline")

<span id="qiskit.algorithms.gradients.QGTResult" />

`QGTResult(qgts, derivative_type, metadata, options)`

Bases: `object`

Result of QGT.

## Attributes

<span id="qiskit.algorithms.gradients.QGTResult.qgts" />

### qgts

`list[np.ndarray]`

The QGT.

<span id="qiskit.algorithms.gradients.QGTResult.derivative_type" />

### derivative\_type

`DerivativeType`

The type of derivative.

<span id="qiskit.algorithms.gradients.QGTResult.metadata" />

### metadata

`list[dict[str, Any]]`

Additional information about the job.

<span id="qiskit.algorithms.gradients.QGTResult.options" />

### options

`Options`

Primitive runtime options for the execution of the job.


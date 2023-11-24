---
title: ParameterVector
description: API reference for qiskit.circuit.ParameterVector
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ParameterVector
---

# ParameterVector[¶](#parametervector "Permalink to this headline")

<span id="qiskit.circuit.ParameterVector" />

`ParameterVector(name, length=0)`

Bases: `object`

ParameterVector class to quickly generate lists of parameters.

## Methods

### index

<span id="qiskit.circuit.ParameterVector.index" />

`ParameterVector.index(value)`

Returns first index of value.

### resize

<span id="qiskit.circuit.ParameterVector.resize" />

`ParameterVector.resize(length)`

Resize the parameter vector.

If necessary, new elements are generated. If length is smaller than before, the previous elements are cached and not re-generated if the vector is enlarged again. This is to ensure that the parameter instances do not change.

## Attributes

<span id="qiskit.circuit.ParameterVector.name" />

### name

Returns the name of the ParameterVector.

<span id="qiskit.circuit.ParameterVector.params" />

### params

Returns the list of parameters in the ParameterVector.


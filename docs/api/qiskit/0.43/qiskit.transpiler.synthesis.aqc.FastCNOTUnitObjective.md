---
title: FastCNOTUnitObjective
description: API reference for qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective
---

# FastCNOTUnitObjective

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective" />

`FastCNOTUnitObjective(num_qubits, cnots)`

Bases: [`CNOTUnitObjective`](qiskit.transpiler.synthesis.aqc.CNOTUnitObjective "qiskit.transpiler.synthesis.aqc.cnot_unit_objective.CNOTUnitObjective")

Implementation of objective function and gradient calculator, which is similar to `DefaultCNOTUnitObjective` but several times faster.

**Parameters**

*   **num\_qubits** (*int*) – number of qubits.
*   **cnots** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")) – a CNOT structure to be used in the optimization procedure.

## Methods Defined Here

<span id="qiskit-transpiler-synthesis-aqc-fastcnotunitobjective-gradient" />

### gradient

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.gradient" />

`FastCNOTUnitObjective.gradient(param_values)`

Computes the gradient of objective function. See description of the base class method.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")

<span id="qiskit-transpiler-synthesis-aqc-fastcnotunitobjective-objective" />

### objective

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.objective" />

`FastCNOTUnitObjective.objective(param_values)`

Computes the objective function and some intermediate data for the subsequent gradient computation. See description of the base class method.

**Return type**

float

## Attributes

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.num_cnots" />

### num\_cnots

Returns: A number of CNOT units to be used by the approximate circuit.

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.num_thetas" />

### num\_thetas

Returns: Number of parameters (angles) of rotation gates in this circuit.

<span id="qiskit.transpiler.synthesis.aqc.FastCNOTUnitObjective.target_matrix" />

### target\_matrix

Returns: a matrix being approximated


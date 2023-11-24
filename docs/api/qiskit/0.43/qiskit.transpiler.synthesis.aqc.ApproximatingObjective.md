---
title: ApproximatingObjective
description: API reference for qiskit.transpiler.synthesis.aqc.ApproximatingObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.ApproximatingObjective
---

# ApproximatingObjective

<span id="qiskit.transpiler.synthesis.aqc.ApproximatingObjective" />

`ApproximatingObjective`

Bases: `ABC`

A base class for an optimization problem definition. An implementing class must provide at least an implementation of the `objective` method. In such case only gradient free optimizers can be used. Both method, `objective` and `gradient`, preferable to have in an implementation.

## Methods Defined Here

<span id="qiskit-transpiler-synthesis-aqc-approximatingobjective-gradient" />

### gradient

<span id="qiskit.transpiler.synthesis.aqc.ApproximatingObjective.gradient" />

`abstract ApproximatingObjective.gradient(param_values)`

Computes a gradient with respect to parameters given a vector of parameter values.

**Parameters**

**param\_values** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")) – a vector of parameter values for the optimization problem.

**Returns**

an array of gradient values.

**Return type**

[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")

<span id="qiskit-transpiler-synthesis-aqc-approximatingobjective-objective" />

### objective

<span id="qiskit.transpiler.synthesis.aqc.ApproximatingObjective.objective" />

`abstract ApproximatingObjective.objective(param_values)`

Computes a value of the objective function given a vector of parameter values.

**Parameters**

**param\_values** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")) – a vector of parameter values for the optimization problem.

**Returns**

a float value of the objective function.

**Return type**

float

## Attributes

<span id="qiskit.transpiler.synthesis.aqc.ApproximatingObjective.num_thetas" />

### num\_thetas

Returns: the number of parameters in this optimization problem.

<span id="qiskit.transpiler.synthesis.aqc.ApproximatingObjective.target_matrix" />

### target\_matrix

Returns: a matrix being approximated


---
title: AerPauliExpectation
description: API reference for qiskit.opflow.expectations.AerPauliExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.expectations.AerPauliExpectation
---

# AerPauliExpectation

<span id="qiskit.opflow.expectations.AerPauliExpectation" />

`AerPauliExpectation`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/expectations/aer_pauli_expectation.py "view source code")

Bases: `qiskit.opflow.expectations.expectation_base.ExpectationBase`

An Expectation converter for using Aer’s operator snapshot to take expectations of quantum state circuits over Pauli observables.

## Methods Defined Here

### compute\_variance

<span id="qiskit.opflow.expectations.AerPauliExpectation.compute_variance" />

`AerPauliExpectation.compute_variance(exp_op)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/expectations/aer_pauli_expectation.py "view source code")

Compute the variance of the expectation estimator. Because Aer takes this expectation with matrix multiplication, the estimation is exact and the variance is always 0, but we need to return those values in a way which matches the Operator’s structure.

**Parameters**

**exp\_op** (`OperatorBase`) – The full expectation value Operator after sampling.

**Return type**

`Union`\[`list`, `float`]

**Returns**

The variances or lists thereof (if exp\_op contains ListOps) of the expectation value estimation, equal to 0.

### convert

<span id="qiskit.opflow.expectations.AerPauliExpectation.convert" />

`AerPauliExpectation.convert(operator)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/expectations/aer_pauli_expectation.py "view source code")

Accept an Operator and return a new Operator with the Pauli measurements replaced by AerSnapshot-based expectation circuits.

**Parameters**

**operator** (`OperatorBase`) – The operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted operator.


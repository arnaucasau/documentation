---
title: ExpectationFactory
description: API reference for qiskit.aqua.operators.expectations.ExpectationFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.expectations.ExpectationFactory
---

# ExpectationFactory

<span id="qiskit.aqua.operators.expectations.ExpectationFactory" />

`ExpectationFactory`

A factory class for convenient automatic selection of an Expectation based on the Operator to be converted and backend used to sample the expectation value.

## Methods

### build

<span id="qiskit.aqua.operators.expectations.ExpectationFactory.build" />

`static ExpectationFactory.build(operator, backend=None, include_custom=True)`

A factory method for convenient automatic selection of an Expectation based on the Operator to be converted and backend used to sample the expectation value.

**Parameters**

*   **operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The Operator whose expectation value will be taken.
*   **backend** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – The backend which will be used to sample the expectation value.
*   **include\_custom** (`bool`) – Whether the factory will include the (Aer) specific custom expectations if their behavior against the backend might not be as expected. For instance when using Aer qasm\_simulator with paulis the Aer snapshot can be used but the outcome lacks shot noise and hence does not intuitively behave overall as people might expect when choosing a qasm\_simulator. It is however fast as long as the more state vector like behavior is acceptable.

**Return type**

[`ExpectationBase`](qiskit.aqua.operators.expectations.ExpectationBase "qiskit.aqua.operators.expectations.expectation_base.ExpectationBase")

**Returns**

The expectation algorithm which best fits the Operator and backend.

**Raises**

**ValueError** – If operator is not of a composition for which we know the best Expectation method.


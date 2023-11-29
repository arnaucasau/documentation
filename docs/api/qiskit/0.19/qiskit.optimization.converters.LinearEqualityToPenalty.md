---
title: LinearEqualityToPenalty
description: API reference for qiskit.optimization.converters.LinearEqualityToPenalty
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.LinearEqualityToPenalty
---

# LinearEqualityToPenalty

<span id="qiskit.optimization.converters.LinearEqualityToPenalty" />

`LinearEqualityToPenalty`

Convert a problem with only equality constraints to unconstrained with penalty terms.

## Methods

### encode

<span id="qiskit.optimization.converters.LinearEqualityToPenalty.encode" />

`LinearEqualityToPenalty.encode(op, penalty_factor=100000.0, name=None)`

Convert a problem with equality constraints into an unconstrained problem.

**Parameters**

*   **op** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved, that does not contain inequality constraints.
*   **penalty\_factor** (`float`) – Penalty terms in the objective function is multiplied with this factor.
*   **name** (`Optional`\[`str`]) – The name of the converted problem.

**Return type**

[`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")

**Returns**

The converted problem, that is an unconstrained problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an inequality constraint exists.


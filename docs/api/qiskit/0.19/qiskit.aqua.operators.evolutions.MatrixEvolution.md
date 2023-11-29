---
title: MatrixEvolution
description: API reference for qiskit.aqua.operators.evolutions.MatrixEvolution
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.MatrixEvolution
---

# MatrixEvolution

<span id="qiskit.aqua.operators.evolutions.MatrixEvolution" />

`MatrixEvolution`

Performs Evolution by classical matrix exponentiation, constructing a circuit with `UnitaryGates` or `HamiltonianGates` containing the exponentiation of the Operator.

## Methods

### convert

<span id="qiskit.aqua.operators.evolutions.MatrixEvolution.convert" />

`MatrixEvolution.convert(operator)`

Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing `UnitaryGates` or `HamiltonianGates` (if self.coeff is a `ParameterExpression`) equalling the exponentiation of -i \* operator. This is done by converting the `EvolvedOp.primitive` to a `MatrixOp` and simply calling `.exp_i()` on that.

**Parameters**

**operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The Operator to convert.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted operator.


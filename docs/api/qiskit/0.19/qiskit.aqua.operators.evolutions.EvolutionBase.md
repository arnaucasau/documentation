---
title: EvolutionBase
description: API reference for qiskit.aqua.operators.evolutions.EvolutionBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.EvolutionBase
---

# EvolutionBase

<span id="qiskit.aqua.operators.evolutions.EvolutionBase" />

`EvolutionBase`

A base for Evolution converters. Evolutions are converters which traverse an Operator tree, replacing any `EvolvedOp` e with a Schrodinger equation-style evolution `CircuitOp` equalling or approximating the matrix exponential of -i \* the Operator contained inside (e.primitive). The Evolutions are essentially implementations of Hamiltonian Simulation algorithms, including various methods for Trotterization.

## Methods

### convert

<span id="qiskit.aqua.operators.evolutions.EvolutionBase.convert" />

`EvolutionBase.convert(operator)`

Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`.

> #### Args:
>
> operator: The Operator to convert.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted Operator, with `EvolutionOps` replaced by `CircuitOps`.


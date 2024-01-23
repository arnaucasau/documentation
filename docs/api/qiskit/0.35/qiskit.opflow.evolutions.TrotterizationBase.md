---
title: TrotterizationBase
description: API reference for qiskit.opflow.evolutions.TrotterizationBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.TrotterizationBase
---

# TrotterizationBase

<span id="qiskit.opflow.evolutions.TrotterizationBase" />

`TrotterizationBase(reps=1)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/evolutions/trotterizations/trotterization_base.py "view source code")

Bases: `qiskit.opflow.evolutions.evolution_base.EvolutionBase`

A base for Trotterization methods, algorithms for approximating exponentiations of operator sums by compositions of exponentiations.

## Methods Defined Here

### convert

<span id="qiskit.opflow.evolutions.TrotterizationBase.convert" />

`abstract TrotterizationBase.convert(operator)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/evolutions/trotterizations/trotterization_base.py "view source code")

Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`.

**Parameters**

**operator** (`OperatorBase`) – The `SummedOp` to evolve.

**Return type**

`OperatorBase`

**Returns**

The Operator approximating op\_sum’s evolution.

**Raises**

**TypeError** – A non-SummedOps Operator is passed into `convert`.

## Attributes

<span id="qiskit.opflow.evolutions.TrotterizationBase.reps" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`


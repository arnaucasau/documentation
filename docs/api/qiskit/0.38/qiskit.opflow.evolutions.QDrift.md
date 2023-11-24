---
title: QDrift
description: API reference for qiskit.opflow.evolutions.QDrift
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.QDrift
---

# QDrift[¶](#qdrift "Permalink to this headline")

<span id="qiskit.opflow.evolutions.QDrift" />

`QDrift(reps=1)`

Bases: [`qiskit.opflow.evolutions.trotterizations.trotterization_base.TrotterizationBase`](qiskit.opflow.evolutions.TrotterizationBase "qiskit.opflow.evolutions.trotterizations.trotterization_base.TrotterizationBase")

The QDrift Trotterization method, which selects each each term in the Trotterization randomly, with a probability proportional to its weight. Based on the work of Earl Campbell in [https://arxiv.org/abs/1811.08017](https://arxiv.org/abs/1811.08017).

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Methods Defined Here

### convert

<span id="qiskit.opflow.evolutions.QDrift.convert" />

`QDrift.convert(operator)`

Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`.

**Parameters**

**operator** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `SummedOp` to evolve.

**Return type**

[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

**Returns**

The Operator approximating op\_sum’s evolution.

**Raises**

**TypeError** – A non-SummedOps Operator is passed into `convert`.

## Attributes

<span id="qiskit.opflow.evolutions.QDrift.reps" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`


---
title: Suzuki
description: API reference for qiskit.opflow.evolutions.Suzuki
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.Suzuki
---

# Suzuki

<span id="qiskit.opflow.evolutions.Suzuki" />

`Suzuki(reps=1, order=2)`

Bases: [`TrotterizationBase`](qiskit.opflow.evolutions.TrotterizationBase "qiskit.opflow.evolutions.trotterizations.trotterization_base.TrotterizationBase")

Deprecated: Suzuki Trotter expansion, composing the evolution circuits of each Operator in the sum together by a recursive “bookends” strategy, repeating the whole composed circuit `reps` times.

Detailed in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf).

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.evolutions.trotterizations.suzuki.Suzuki` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **reps** (*int*) – The number of times to repeat the expansion circuit.
*   **order** (*int*) – The order of the expansion to perform.

## Methods Defined Here

<span id="qiskit-opflow-evolutions-suzuki-convert" />

### convert

<span id="qiskit.opflow.evolutions.Suzuki.convert" />

`Suzuki.convert(operator)`

Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`.

**Parameters**

**operator** ([*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The `SummedOp` to evolve.

**Returns**

The Operator approximating op\_sum’s evolution.

**Raises**

**TypeError** – A non-SummedOps Operator is passed into `convert`.

**Return type**

[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

## Attributes

<span id="qiskit.opflow.evolutions.Suzuki.order" />

### order

returns order

<span id="qiskit.opflow.evolutions.Suzuki.reps" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.


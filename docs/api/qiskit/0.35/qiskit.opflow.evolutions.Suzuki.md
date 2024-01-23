---
title: Suzuki
description: API reference for qiskit.opflow.evolutions.Suzuki
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.Suzuki
---

# Suzuki

<span id="qiskit.opflow.evolutions.Suzuki" />

`Suzuki(reps=1, order=2)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/evolutions/trotterizations/suzuki.py "view source code")

Bases: `qiskit.opflow.evolutions.trotterizations.trotterization_base.TrotterizationBase`

Suzuki Trotter expansion, composing the evolution circuits of each Operator in the sum together by a recursive “bookends” strategy, repeating the whole composed circuit `reps` times.

Detailed in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf).

**Parameters**

*   **reps** (`int`) – The number of times to repeat the expansion circuit.
*   **order** (`int`) – The order of the expansion to perform.

## Methods Defined Here

### convert

<span id="qiskit.opflow.evolutions.Suzuki.convert" />

`Suzuki.convert(operator)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/opflow/evolutions/trotterizations/suzuki.py "view source code")

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

<span id="qiskit.opflow.evolutions.Suzuki.order" />

### order

returns order

**Return type**

`int`

<span id="qiskit.opflow.evolutions.Suzuki.reps" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`


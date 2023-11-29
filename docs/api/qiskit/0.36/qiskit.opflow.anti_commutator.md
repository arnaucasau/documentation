---
title: anti_commutator
description: API reference for qiskit.opflow.anti_commutator
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.opflow.anti_commutator
---

# qiskit.opflow\.anti\_commutator

<span id="qiskit.opflow.anti_commutator" />

`anti_commutator(op_a, op_b)`

Compute anti-commutator of op\_a and op\_b.

$$
AB + BA.
$$

**Parameters**

*   **op\_a** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – Operator A
*   **op\_b** ([`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – Operator B

**Returns**

the anti-commutator

**Return type**

[OperatorBase](qiskit.opflow.OperatorBase "qiskit.opflow.OperatorBase")


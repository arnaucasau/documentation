---
title: check_commutativity
description: API reference for qiskit.aqua.operators.legacy.check_commutativity
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.aqua.operators.legacy.check_commutativity
---

# check\_commutativity

<span id="qiskit.aqua.operators.legacy.check_commutativity" />

`check_commutativity(op_1, op_2, anti=False)`

Check the (anti-)commutativity between two operators.

**Parameters**

*   **op\_1** ([*WeightedPauliOperator*](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")) – operator
*   **op\_2** ([*WeightedPauliOperator*](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")) – operator
*   **anti** (*bool*) – if True, check anti-commutativity, otherwise check commutativity.

**Returns**

whether or not two operators are commuted or anti-commuted.

**Return type**

bool


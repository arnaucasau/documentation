---
title: CommutationChecker
description: API reference for qiskit.circuit.CommutationChecker
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.CommutationChecker
---

# CommutationChecker

<span id="qiskit.circuit.CommutationChecker" />

`CommutationChecker`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.39/qiskit/circuit/commutation_checker.py "view source code")

Bases: `object`

This code is essentially copy-pasted from commutative\_analysis.py. This code cleverly hashes commutativity and non-commutativity results between DAG nodes and seems quite efficient for large Clifford circuits. They may be other possible efficiency improvements: using rule-based commutativity analysis, evicting from the cache less useful entries, etc.

## Methods

### commute

<span id="qiskit.circuit.CommutationChecker.commute" />

`CommutationChecker.commute(op1, qargs1, cargs1, op2, qargs2, cargs2)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.39/qiskit/circuit/commutation_checker.py "view source code")

Checks if two Operations commute.

**Parameters**

*   **op1** ([`Operation`](qiskit.circuit.Operation "qiskit.circuit.operation.Operation")) – first operation.
*   **qargs1** (`List`) – first operation’s qubits.
*   **cargs1** (`List`) – first operation’s clbits.
*   **op2** ([`Operation`](qiskit.circuit.Operation "qiskit.circuit.operation.Operation")) – second operation.
*   **qargs2** (`List`) – second operation’s qubits.
*   **cargs2** (`List`) – second operation’s clbits.

**Returns**

whether two operations commute.

**Return type**

bool


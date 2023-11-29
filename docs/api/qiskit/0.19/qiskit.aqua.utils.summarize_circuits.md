---
title: summarize_circuits
description: API reference for qiskit.aqua.utils.summarize_circuits
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.aqua.utils.summarize_circuits
---

# summarize\_circuits

<span id="qiskit.aqua.utils.summarize_circuits" />

`summarize_circuits(circuits)`

## Summarize circuits based on QuantumCircuit, and five metrics are summarized.

*   Number of qubits
*   Number of classical bits
*   Number of operations
*   Depth of circuits
*   Counts of different gate operations

The average statistic of the first four is provided if multiple circuits are provided.

**Parameters**

**circuits** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or \[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – the to-be-summarized circuits

**Returns**

a formatted string records the summary

**Return type**

str


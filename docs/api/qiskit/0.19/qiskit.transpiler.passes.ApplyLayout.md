---
title: ApplyLayout
description: API reference for qiskit.transpiler.passes.ApplyLayout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ApplyLayout
---

# ApplyLayout

<span id="qiskit.transpiler.passes.ApplyLayout" />

`ApplyLayout(*args, **kwargs)`

Transform a circuit with virtual qubits into a circuit with physical qubits.

Transforms a DAGCircuit with virtual qubits into a DAGCircuit with physical qubits by applying the Layout given in property\_set. Requires either of passes to set/select Layout, e.g. SetLayout, TrivialLayout. Assumes the Layout has full physical qubits.

## Attributes

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.ApplyLayout.name" />

`ApplyLayout.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ApplyLayout.run" />

`ApplyLayout.run(dag)`

Run the ApplyLayout pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

A mapped DAG (with physical qubits).

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if no layout is found in property\_set or no full physical qubits.


---
title: InverseCancellation
description: API reference for qiskit.transpiler.passes.InverseCancellation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.InverseCancellation
---

# InverseCancellation

<span id="qiskit.transpiler.passes.InverseCancellation" />

`InverseCancellation(*args, **kwargs)`

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Cancel specific Gates which are inverses of each other when they occur back-to- back.

Initialize InverseCancellation pass.

**Parameters**

**gates\_to\_cancel** – list of gates to cancel

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – Initalization raises an error when the input is not a self-inverse gate or a two-tuple of inverse gates.

## Methods

<span id="qiskit-transpiler-passes-inversecancellation-name" />

### name

<span id="qiskit.transpiler.passes.InverseCancellation.name" />

`InverseCancellation.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-inversecancellation-run" />

### run

<span id="qiskit.transpiler.passes.InverseCancellation.run" />

`InverseCancellation.run(dag)`

Run the InverseCancellation pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")) – the directed acyclic graph to run on.

**Returns**

Transformed DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.InverseCancellation.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.InverseCancellation.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


---
title: HoareOptimizer
description: API reference for qiskit.transpiler.passes.HoareOptimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.HoareOptimizer
---

# HoareOptimizer[¶](#hoareoptimizer "Permalink to this headline")

<span id="qiskit.transpiler.passes.HoareOptimizer" />

`HoareOptimizer(*args, **kwargs)`

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

This is a transpiler pass using Hoare logic circuit optimization. The inner workings of this are detailed in: [https://arxiv.org/abs/1810.00375](https://arxiv.org/abs/1810.00375)

**Parameters**

**size** (*int*) – size of gate cache, in number of gates

**Raises**

**MissingOptionalLibraryError** – if unable to import z3 solver

## Methods

### name

<span id="qiskit.transpiler.passes.HoareOptimizer.name" />

`HoareOptimizer.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.HoareOptimizer.run" />

`HoareOptimizer.run(dag)`

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the directed acyclic graph to run on.

**Returns**

Transformed DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.HoareOptimizer.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.HoareOptimizer.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


---
title: DAGLongestPath
description: API reference for qiskit.transpiler.passes.DAGLongestPath
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.DAGLongestPath
---

# DAGLongestPath[¶](#daglongestpath "Permalink to this headline")

<span id="qiskit.transpiler.passes.DAGLongestPath" />

`DAGLongestPath(*args, **kwargs)`

Bases: [`qiskit.transpiler.basepasses.AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

Return the longest path in a DAGcircuit as a list of DAGOpNodes, DAGInNodes, and DAGOutNodes.

## Methods

### name

<span id="qiskit.transpiler.passes.DAGLongestPath.name" />

`DAGLongestPath.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.DAGLongestPath.run" />

`DAGLongestPath.run(dag)`

Run the DAGLongestPath pass on dag.

## Attributes

<span id="qiskit.transpiler.passes.DAGLongestPath.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.DAGLongestPath.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


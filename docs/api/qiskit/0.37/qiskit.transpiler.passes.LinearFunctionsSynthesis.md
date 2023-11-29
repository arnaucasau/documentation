---
title: LinearFunctionsSynthesis
description: API reference for qiskit.transpiler.passes.LinearFunctionsSynthesis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.LinearFunctionsSynthesis
---

# LinearFunctionsSynthesis

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis" />

`LinearFunctionsSynthesis(*args, **kwargs)`

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Synthesize linear functions. Under the hood, this runs cnot\_synth which implements the Patel–Markov–Hayes algorithm.

## Methods

### name

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis.name" />

`LinearFunctionsSynthesis.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis.run" />

`LinearFunctionsSynthesis.run(dag)`

Run the LinearFunctionsSynthesis pass on dag. :type dag: [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit") :param dag: input dag.

**Return type**

[`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")

**Returns**

Output dag with LinearFunctions synthesized.

## Attributes

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.LinearFunctionsSynthesis.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


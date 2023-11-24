---
title: LinearFunctionsToPermutations
description: API reference for qiskit.transpiler.passes.LinearFunctionsToPermutations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.LinearFunctionsToPermutations
---

# LinearFunctionsToPermutations

<span id="qiskit.transpiler.passes.LinearFunctionsToPermutations" />

`LinearFunctionsToPermutations(*args, **kwargs)`

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Promotes linear functions to permutations when possible.

## Methods

<span id="qiskit-transpiler-passes-linearfunctionstopermutations-name" />

### name

<span id="qiskit.transpiler.passes.LinearFunctionsToPermutations.name" />

`LinearFunctionsToPermutations.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-linearfunctionstopermutations-run" />

### run

<span id="qiskit.transpiler.passes.LinearFunctionsToPermutations.run" />

`LinearFunctionsToPermutations.run(dag)`

Run the LinearFunctionsToPermutations pass on dag. :param dag: input dag.

**Returns**

Output dag with LinearFunctions synthesized.

**Return type**

[*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.LinearFunctionsToPermutations.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.LinearFunctionsToPermutations.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


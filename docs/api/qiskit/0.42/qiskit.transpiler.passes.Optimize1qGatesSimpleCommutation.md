---
title: Optimize1qGatesSimpleCommutation
description: API reference for qiskit.transpiler.passes.Optimize1qGatesSimpleCommutation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Optimize1qGatesSimpleCommutation
---

# Optimize1qGatesSimpleCommutation[¶](#optimize1qgatessimplecommutation "Permalink to this headline")

<span id="qiskit.transpiler.passes.Optimize1qGatesSimpleCommutation" />

`Optimize1qGatesSimpleCommutation(*args, **kwargs)`

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Optimizes 1Q gate strings interrupted by 2Q gates by commuting the components and re- synthesizing the results. The commutation rules are stored in commutation\_table.

**NOTE: In addition to those mentioned in commutation\_table, this pass has some limitations:**

*   Does not handle multiple commutations in a row without intermediate progress.
*   Can only commute into positions where there are pre-existing runs.
*   Does not exhaustively test all the different ways commuting gates can be assigned to either side of a barrier to try to find low-depth configurations. (This is particularly evident if all the gates in a run commute with both the predecessor and the successor barriers.)

**Parameters**

*   **basis** (*List\[str]*) – See also Optimize1qGatesDecomposition.
*   **run\_to\_completion** (*bool*) – If True, this pass retries until it is unable to do any more work. If False, it finds and performs one optimization, and for full optimization the user is obligated to re-call the pass until the output stabilizes.

## Methods

### name

<span id="qiskit.transpiler.passes.Optimize1qGatesSimpleCommutation.name" />

`Optimize1qGatesSimpleCommutation.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Optimize1qGatesSimpleCommutation.run" />

`Optimize1qGatesSimpleCommutation.run(dag)`

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.Optimize1qGatesSimpleCommutation.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.Optimize1qGatesSimpleCommutation.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


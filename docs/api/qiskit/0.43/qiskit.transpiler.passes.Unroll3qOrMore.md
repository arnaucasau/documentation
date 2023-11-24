---
title: Unroll3qOrMore
description: API reference for qiskit.transpiler.passes.Unroll3qOrMore
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Unroll3qOrMore
---

# Unroll3qOrMore

<span id="qiskit.transpiler.passes.Unroll3qOrMore" />

`Unroll3qOrMore(*args, **kwargs)`

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Recursively expands 3q+ gates until the circuit only contains 2q or 1q gates.

Initialize the Unroll3qOrMore pass

**Parameters**

*   **target** ([*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")) – The target object reprsenting the compilation target. If specified any multiqubit instructions in the circuit when the pass is run that are supported by the target device will be left in place. If both this and `basis_gates` are specified only the target will be checked.
*   **basis\_gates** (*list*) – A list of basis gate names that the target device supports. If specified any gate names in the circuit which are present in this list will not be unrolled. If both this and `target` are specified only the target will be used for checking which gates are supported.

## Methods

<span id="qiskit-transpiler-passes-unroll3qormore-name" />

### name

<span id="qiskit.transpiler.passes.Unroll3qOrMore.name" />

`Unroll3qOrMore.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-unroll3qormore-run" />

### run

<span id="qiskit.transpiler.passes.Unroll3qOrMore.run" />

`Unroll3qOrMore.run(dag)`

Run the Unroll3qOrMore pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – input dag

**Returns**

output dag with maximum node degrees of 2

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

**QiskitError** – if a 3q+ gate is not decomposable

## Attributes

<span id="qiskit.transpiler.passes.Unroll3qOrMore.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.Unroll3qOrMore.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


---
title: Unroller
description: API reference for qiskit.transpiler.passes.Unroller
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Unroller
---

# Unroller

<span id="qiskit.transpiler.passes.Unroller" />

`Unroller(*args, **kwargs)`

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Unroll a circuit to a given basis.

Unroll (expand) non-basis, non-opaque instructions recursively to a desired basis, using decomposition rules defined for each instruction.

Unroller initializer.

**Parameters**

*   **basis** (*list\[str] or None*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’] . If None, does not unroll any gate.
*   **target** ([*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")) – The [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") representing the target backend, if both `basis` and this are specified then this argument will take precedence and `basis` will be ignored.

## Methods

<span id="qiskit-transpiler-passes-unroller-name" />

### name

<span id="qiskit.transpiler.passes.Unroller.name" />

`Unroller.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-unroller-run" />

### run

<span id="qiskit.transpiler.passes.Unroller.run" />

`Unroller.run(dag)`

Run the Unroller pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – input dag

**Raises**

*   **QiskitError** – if unable to unroll given the basis due to undefined
*   **decomposition rules**\*\* (****such as a bad basis****) or \*\***excessive recursion.** –

**Returns**

output unrolled dag

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

## Attributes

<span id="qiskit.transpiler.passes.Unroller.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.Unroller.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


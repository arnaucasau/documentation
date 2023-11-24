---
title: CXDirection
description: API reference for qiskit.transpiler.passes.CXDirection
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CXDirection
---

# CXDirection

<span id="qiskit.transpiler.passes.CXDirection" />

`CXDirection(*args, **kwargs)`

Bases: [`GateDirection`](qiskit.transpiler.passes.GateDirection "qiskit.transpiler.passes.utils.gate_direction.GateDirection")

Deprecated: use [`qiskit.transpiler.passes.GateDirection`](qiskit.transpiler.passes.GateDirection "qiskit.transpiler.passes.GateDirection") pass instead.

<Admonition title="Deprecated since version 0.21.0" type="danger">
  The class `qiskit.transpiler.passes.utils.cx_direction.CXDirection` is deprecated as of qiskit-terra 0.21.0. It will be removed no earlier than 3 months after the release date. Instead, use the more generic [`GateDirection`](qiskit.transpiler.passes.GateDirection "qiskit.transpiler.passes.GateDirection") pass.
</Admonition>

## Methods

<span id="qiskit-transpiler-passes-cxdirection-name" />

### name

<span id="qiskit.transpiler.passes.CXDirection.name" />

`CXDirection.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-cxdirection-run" />

### run

<span id="qiskit.transpiler.passes.CXDirection.run" />

`CXDirection.run(dag)`

Run the GateDirection pass on dag.

Flips the cx nodes to match the directed coupling map. Modifies the input dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

The rearranged dag for the coupling map

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If the circuit cannot be mapped just by flipping the cx nodes.

## Attributes

<span id="qiskit.transpiler.passes.CXDirection.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.CXDirection.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


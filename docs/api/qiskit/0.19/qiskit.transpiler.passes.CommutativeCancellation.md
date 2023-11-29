---
title: CommutativeCancellation
description: API reference for qiskit.transpiler.passes.CommutativeCancellation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CommutativeCancellation
---

# CommutativeCancellation

<span id="qiskit.transpiler.passes.CommutativeCancellation" />

`CommutativeCancellation(*args, **kwargs)`

Cancel the redundant (self-adjoint) gates through commutation relations.

Pass for cancelling self-inverse gates/rotations. The cancellation utilizes the commutation relations in the circuit. Gates considered include:

```python
H, X, Y, Z, CX, CY, CZ
```

## Attributes

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.CommutativeCancellation.name" />

`CommutativeCancellation.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CommutativeCancellation.run" />

`CommutativeCancellation.run(dag)`

Run the CommutativeCancellation pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – when the 1-qubit rotation gates are not found


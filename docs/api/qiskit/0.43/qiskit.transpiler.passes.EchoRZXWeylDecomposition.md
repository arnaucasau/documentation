---
title: EchoRZXWeylDecomposition
description: API reference for qiskit.transpiler.passes.EchoRZXWeylDecomposition
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.EchoRZXWeylDecomposition
---

# EchoRZXWeylDecomposition

<span id="qiskit.transpiler.passes.EchoRZXWeylDecomposition" />

`EchoRZXWeylDecomposition(*args, **kwargs)`

Bases: [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Rewrite two-qubit gates using the Weyl decomposition.

This transpiler pass rewrites two-qubit gates in terms of echoed cross-resonance gates according to the Weyl decomposition. A two-qubit gate will be replaced with at most six non-echoed RZXGates. Each pair of RZXGates forms an echoed RZXGate.

EchoRZXWeylDecomposition pass.

**Parameters**

*   **instruction\_schedule\_map** ([*InstructionScheduleMap*](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap")) – the mapping from circuit [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") names and arguments to [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule")s.
*   **target** ([*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")) – The [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") representing the target backend, if both `instruction_schedule_map` and this are specified then this argument will take precedence and `instruction_schedule_map` will be ignored.

## Methods

<span id="qiskit-transpiler-passes-echorzxweyldecomposition-name" />

### name

<span id="qiskit.transpiler.passes.EchoRZXWeylDecomposition.name" />

`EchoRZXWeylDecomposition.name()`

Return the name of the pass.

<span id="qiskit-transpiler-passes-echorzxweyldecomposition-run" />

### run

<span id="qiskit.transpiler.passes.EchoRZXWeylDecomposition.run" />

`EchoRZXWeylDecomposition.run(dag)`

Run the EchoRZXWeylDecomposition pass on dag.

Rewrites two-qubit gates in an arbitrary circuit in terms of echoed cross-resonance gates by computing the Weyl decomposition of the corresponding unitary. Modifies the input dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to rewrite.

**Returns**

The modified dag.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If the circuit cannot be rewritten.

## Attributes

<span id="qiskit.transpiler.passes.EchoRZXWeylDecomposition.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.EchoRZXWeylDecomposition.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


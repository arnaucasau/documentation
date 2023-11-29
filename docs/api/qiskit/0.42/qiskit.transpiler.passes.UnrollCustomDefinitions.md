---
title: UnrollCustomDefinitions
description: API reference for qiskit.transpiler.passes.UnrollCustomDefinitions
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.UnrollCustomDefinitions
---

# UnrollCustomDefinitions[¶](#unrollcustomdefinitions "Permalink to this headline")

<span id="qiskit.transpiler.passes.UnrollCustomDefinitions" />

`UnrollCustomDefinitions(*args, **kwargs)`

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Unrolls instructions with custom definitions.

Unrolls instructions with custom definitions.

**Parameters**

*   **equivalence\_library** ([*EquivalenceLibrary*](qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")) – The equivalence library which will be used by the BasisTranslator pass. (Instructions in this library will not be unrolled by this pass.)
*   **basis\_gates** (*Optional\[list\[str]]*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’]. Ignored if `target` is also specified.
*   **target** (*Optional\[*[*Target*](qiskit.transpiler.Target "qiskit.transpiler.Target")*]*) – The [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") object corresponding to the compilation target. When specified, any argument specified for `basis_gates` is ignored.

## Methods

### name

<span id="qiskit.transpiler.passes.UnrollCustomDefinitions.name" />

`UnrollCustomDefinitions.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.UnrollCustomDefinitions.run" />

`UnrollCustomDefinitions.run(dag)`

Run the UnrollCustomDefinitions pass on dag.

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

<span id="qiskit.transpiler.passes.UnrollCustomDefinitions.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.UnrollCustomDefinitions.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


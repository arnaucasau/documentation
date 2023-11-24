---
title: Collect2qBlocks
description: API reference for qiskit.transpiler.passes.Collect2qBlocks
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Collect2qBlocks
---

# Collect2qBlocks[¶](#collect2qblocks "Permalink to this headline")

<span id="qiskit.transpiler.passes.Collect2qBlocks" />

`Collect2qBlocks(*args, **kwargs)`

Bases: [`qiskit.transpiler.basepasses.AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

Collect two-qubit subcircuits.

## Methods

### name

<span id="qiskit.transpiler.passes.Collect2qBlocks.name" />

`Collect2qBlocks.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Collect2qBlocks.run" />

`Collect2qBlocks.run(dag)`

Run the Collect2qBlocks pass on dag.

The blocks contain “op” nodes in topological order such that all gates in a block act on the same qubits and are adjacent in the circuit.

After the execution, `property_set['block_list']` is set to a list of tuples of “op” node.

## Attributes

<span id="qiskit.transpiler.passes.Collect2qBlocks.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.Collect2qBlocks.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


---
title: ConsolidateBlocks
description: API reference for qiskit.transpiler.passes.ConsolidateBlocks
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ConsolidateBlocks
---

# ConsolidateBlocks

<span id="qiskit.transpiler.passes.ConsolidateBlocks" />

`ConsolidateBlocks(*args, **kwargs)`

Replace each block of consecutive gates by a single Unitary node.

Pass to consolidate sequences of uninterrupted gates acting on the same qubits into a Unitary node, to be resynthesized later, to a potentially more optimal subcircuit.

## Notes

This pass assumes that the ‘blocks\_list’ property that it reads is given such that blocks are in topological order. The blocks are collected by a previous pass, such as Collect2qBlocks.

ConsolidateBlocks initializer.

**Parameters**

*   **kak\_basis\_gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – Basis gate for KAK decomposition.
*   **force\_consolidate** (*bool*) – Force block consolidation

## Attributes

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.ConsolidateBlocks.name" />

`ConsolidateBlocks.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ConsolidateBlocks.run" />

`ConsolidateBlocks.run(dag)`

Run the ConsolidateBlocks pass on dag.

Iterate over each block and replace it with an equivalent Unitary on the same wires.


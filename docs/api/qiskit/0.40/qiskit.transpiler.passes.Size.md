---
title: Size
description: API reference for qiskit.transpiler.passes.Size
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Size
---

# Size[¶](#size "Permalink to this headline")

<span id="qiskit.transpiler.passes.Size" />

`Size(*args, **kwargs)`

Bases: [`qiskit.transpiler.basepasses.AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

Calculate the size of a DAG circuit.

The result is saved in `property_set['size']` as an integer.

**Parameters**

**recurse** – whether to allow recursion into control flow. If this is `False` (default), the pass will throw an error when control flow is present, to avoid returning a number with little meaning.

## Methods

### name

<span id="qiskit.transpiler.passes.Size.name" />

`Size.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Size.run" />

`Size.run(dag)`

Run the Size pass on dag.

## Attributes

<span id="qiskit.transpiler.passes.Size.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.Size.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


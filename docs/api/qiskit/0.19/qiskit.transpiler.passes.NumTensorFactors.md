---
title: NumTensorFactors
description: API reference for qiskit.transpiler.passes.NumTensorFactors
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.NumTensorFactors
---

# NumTensorFactors

<span id="qiskit.transpiler.passes.NumTensorFactors" />

`NumTensorFactors(*args, **kwargs)`

Calculate the number of tensor factors of a DAG circuit.

The result is saved in `property_set['num_tensor_factors']` as an integer.

## Attributes

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

## Methods

### name

<span id="qiskit.transpiler.passes.NumTensorFactors.name" />

`NumTensorFactors.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.NumTensorFactors.run" />

`NumTensorFactors.run(dag)`

Run the NumTensorFactors pass on dag.


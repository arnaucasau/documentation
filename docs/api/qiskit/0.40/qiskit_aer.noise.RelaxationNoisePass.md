---
title: RelaxationNoisePass
description: API reference for qiskit_aer.noise.RelaxationNoisePass
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_aer.noise.RelaxationNoisePass
---

# RelaxationNoisePass[¶](#relaxationnoisepass "Permalink to this headline")

<span id="qiskit_aer.noise.RelaxationNoisePass" />

`RelaxationNoisePass(t1s, t2s, dt=None, op_types=None, excited_state_populations=None)`

Bases: [`qiskit_aer.noise.passes.local_noise_pass.LocalNoisePass`](qiskit_aer.noise.LocalNoisePass "qiskit_aer.noise.passes.local_noise_pass.LocalNoisePass")

Add duration dependent thermal relaxation noise after instructions.

Initialize RelaxationNoisePass.

**Parameters**

*   **t1s** (`List`\[`float`]) – List of T1 times in seconds for each qubit.
*   **t2s** (`List`\[`float`]) – List of T2 times in seconds for each qubit.
*   **dt** (`Optional`\[`float`]) – Backend sample time (resolution) in seconds. This is required for converting dt-unit op durations to times in scheduled circuits.
*   **op\_types** (`Union`\[`type`, `Sequence`\[`type`], `None`]) – Optional, the operation types to add relaxation to. If None relaxation will be added to all operations.
*   **excited\_state\_populations** (`Optional`\[`List`\[`float`]]) – Optional, list of excited state populations for each qubit at thermal equilibrium. If not supplied or obtained from the backend this will be set to 0 for each qubit.

## Methods

### name

<span id="qiskit_aer.noise.RelaxationNoisePass.name" />

`RelaxationNoisePass.name()`

Return the name of the pass.

### run

<span id="qiskit_aer.noise.RelaxationNoisePass.run" />

`RelaxationNoisePass.run(dag)`

Run the LocalNoisePass pass on dag. :type dag: [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit") :param dag: DAG to be changed.

**Return type**

[`DAGCircuit`](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.dagcircuit.DAGCircuit")

**Returns**

A changed DAG.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if generated operation is not valid.

## Attributes

<span id="qiskit_aer.noise.RelaxationNoisePass.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit_aer.noise.RelaxationNoisePass.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


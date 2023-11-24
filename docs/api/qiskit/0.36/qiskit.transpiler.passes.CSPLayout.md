---
title: CSPLayout
description: API reference for qiskit.transpiler.passes.CSPLayout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CSPLayout
---

# CSPLayout[¶](#csplayout "Permalink to this headline")

<span id="qiskit.transpiler.passes.CSPLayout" />

`CSPLayout(*args, **kwargs)`

Bases: [`qiskit.transpiler.basepasses.AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.basepasses.AnalysisPass")

If possible, chooses a Layout as a CSP, using backtracking.

If possible, chooses a Layout as a CSP, using backtracking.

If not possible, does not set the layout property. In all the cases, the property CSPLayout\_stop\_reason will be added with one of the following values:

*   solution found: If a perfect layout was found.
*   nonexistent solution: If no perfect layout was found and every combination was checked.
*   call limit reached: If no perfect layout was found and the call limit was reached.
*   time limit reached: If no perfect layout was found and the time limit was reached.

**Parameters**

*   **coupling\_map** (*Coupling*) – Directed graph representing a coupling map.
*   **strict\_direction** (*bool*) – If True, considers the direction of the coupling map. Default is False.
*   **seed** (*int*) – Sets the seed of the PRNG.
*   **call\_limit** (*int*) – Amount of times that `constraint.RecursiveBacktrackingSolver.recursiveBacktracking` will be called. None means no call limit. Default: 1000.
*   **time\_limit** (*int*) – Amount of seconds that the pass will try to find a solution. None means no time limit. Default: 10 seconds.

## Methods

### name

<span id="qiskit.transpiler.passes.CSPLayout.name" />

`CSPLayout.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.CSPLayout.run" />

`CSPLayout.run(dag)`

run the layout method

## Attributes

<span id="qiskit.transpiler.passes.CSPLayout.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.CSPLayout.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


---
title: ASAPScheduleAnalysis
description: API reference for qiskit.transpiler.passes.ASAPScheduleAnalysis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ASAPScheduleAnalysis
---

# ASAPScheduleAnalysis[¶](#asapscheduleanalysis "Permalink to this headline")

<span id="qiskit.transpiler.passes.ASAPScheduleAnalysis" />

`ASAPScheduleAnalysis(durations)`

Bases: `qiskit.transpiler.passes.scheduling.scheduling.base_scheduler.BaseScheduler`

ASAP Scheduling pass, which schedules the start time of instructions as early as possible..

See the [Scheduling Stage](transpiler#scheduling-stage) section in the [`qiskit.transpiler`](transpiler#module-qiskit.transpiler "qiskit.transpiler") module documentation for the detailed behavior of the control flow operation, i.e. `c_if`.

Scheduler initializer.

**Parameters**

**durations** ([`InstructionDurations`](qiskit.transpiler.InstructionDurations "qiskit.transpiler.instruction_durations.InstructionDurations")) – Durations of instructions to be used in scheduling

## Methods

### name

<span id="qiskit.transpiler.passes.ASAPScheduleAnalysis.name" />

`ASAPScheduleAnalysis.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.ASAPScheduleAnalysis.run" />

`ASAPScheduleAnalysis.run(dag)`

Run the ASAPSchedule pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to schedule.

**Returns**

A scheduled DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   [**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the circuit is not mapped on physical qubits.
*   [**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if conditional bit is added to non-supported instruction.

## Attributes

<span id="qiskit.transpiler.passes.ASAPScheduleAnalysis.CONDITIONAL_SUPPORTED" />

### CONDITIONAL\_SUPPORTED

`= (, )`

<span id="qiskit.transpiler.passes.ASAPScheduleAnalysis.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.ASAPScheduleAnalysis.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).


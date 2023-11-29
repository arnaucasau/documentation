---
title: ScheduleConfig
description: API reference for qiskit.scheduler.ScheduleConfig
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.scheduler.ScheduleConfig
---

# ScheduleConfig

<span id="qiskit.scheduler.ScheduleConfig" />

`ScheduleConfig(inst_map, meas_map)`

Configuration for pulse scheduling.

Container for information needed to schedule a QuantumCircuit into a pulse Schedule.

**Parameters**

*   **inst\_map** ([`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.instruction_schedule_map.InstructionScheduleMap")) – The schedule definition of all gates supported on a backend.
*   **meas\_map** (`List`\[`List`\[`int`]]) – A list of groups of qubits which have to be measured together.

## Methods


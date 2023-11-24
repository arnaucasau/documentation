---
title: block_to_schedule
description: API reference for qiskit.pulse.transforms.block_to_schedule
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.transforms.block_to_schedule
---

# qiskit.pulse.transforms.block\_to\_schedule[¶](#qiskit-pulse-transforms-block-to-schedule "Permalink to this headline")

<span id="qiskit.pulse.transforms.block_to_schedule" />

`block_to_schedule(block)`

Convert `ScheduleBlock` to `Schedule`.

**Parameters**

**block** ([`ScheduleBlock`](qiskit.pulse.ScheduleBlock "qiskit.pulse.schedule.ScheduleBlock")) – A `ScheduleBlock` to convert.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

Scheduled pulse program.

**Raises**

*   **UnassignedDurationError** – When any instruction duration is not assigned.
*   [**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When the alignment context duration is shorter than the schedule duration.

<Admonition title="Note" type="note">
  This transform may insert barriers in between contexts.
</Admonition>


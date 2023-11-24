---
title: flatten
description: API reference for qiskit.pulse.transforms.flatten
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.transforms.flatten
---

# qiskit.pulse.transforms.flatten[¶](#qiskit-pulse-transforms-flatten "Permalink to this headline")

<span id="qiskit.pulse.transforms.flatten" />

`flatten(program)`

Flatten (inline) any called nodes into a Schedule tree with no nested children.

**Parameters**

**program** ([`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Pulse program to remove nested structure.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

Flatten pulse program.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When invalid data format is given.


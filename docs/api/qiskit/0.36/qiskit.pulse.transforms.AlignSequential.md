---
title: AlignSequential
description: API reference for qiskit.pulse.transforms.AlignSequential
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.transforms.AlignSequential
---

# AlignSequential[¶](#alignsequential "Permalink to this headline")

<span id="qiskit.pulse.transforms.AlignSequential" />

`AlignSequential`

Bases: [`qiskit.pulse.transforms.alignments.AlignmentKind`](pulse#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

Align instructions sequentially.

Instructions played on different channels are also arranged in a sequence. No buffer time is inserted in between instructions.

Create new sequential context.

## Methods

### align

<span id="qiskit.pulse.transforms.AlignSequential.align" />

`AlignSequential.align(schedule)`

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** ([`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Schedule to align.

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

**Returns**

Schedule with reallocated instructions.

### to\_dict

<span id="qiskit.pulse.transforms.AlignSequential.to_dict" />

`AlignSequential.to_dict()`

Returns dictionary to represent this alignment.

**Return type**

`Dict`\[`str`, `Any`]

## Attributes

<span id="qiskit.pulse.transforms.AlignSequential.is_sequential" />

### is\_sequential

**Return type**

`bool`


---
title: AlignRight
description: API reference for qiskit.pulse.transforms.AlignRight
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.transforms.AlignRight
---

# AlignRight

<span id="qiskit.pulse.transforms.AlignRight" />

`AlignRight`

Bases: [`AlignmentKind`](pulse#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

Align instructions in as-late-as-possible manner.

Instructions are placed at latest available timeslots.

Create new right-justified context.

## Methods

<span id="qiskit-pulse-transforms-alignright-align" />

### align

<span id="qiskit.pulse.transforms.AlignRight.align" />

`AlignRight.align(schedule)`

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Schedule to align.

**Returns**

Schedule with reallocated instructions.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

<span id="qiskit-pulse-transforms-alignright-to-dict" />

### to\_dict

<span id="qiskit.pulse.transforms.AlignRight.to_dict" />

`AlignRight.to_dict()`

Returns dictionary to represent this alignment.

<Admonition title="Deprecated since version 0.21" type="danger">
  The method `qiskit.pulse.transforms.alignments.AlignmentKind.to_dict()` is deprecated as of qiskit-terra 0.21. It will be removed no earlier than 3 months after the release date.
</Admonition>

**Return type**

*Dict*\[str, *Any*]

## Attributes

<span id="qiskit.pulse.transforms.AlignRight.is_sequential" />

### is\_sequential


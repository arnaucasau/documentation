---
title: AlignSequential
description: API reference for qiskit.pulse.transforms.AlignSequential
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.transforms.AlignSequential
---

# AlignSequential

<span id="qiskit.pulse.transforms.AlignSequential" />

`AlignSequential`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/transforms/alignments.py "view source code")

Bases: `qiskit.pulse.transforms.alignments.AlignmentKind`

Align instructions sequentially.

Instructions played on different channels are also arranged in a sequence. No buffer time is inserted in between instructions.

Create new context.

## Methods

### align

<span id="qiskit.pulse.transforms.AlignSequential.align" />

`AlignSequential.align(schedule)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/transforms/alignments.py "view source code")

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** (`Schedule`) – Schedule to align.

**Return type**

`Schedule`

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

`= True`


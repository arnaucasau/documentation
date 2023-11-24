---
title: AlignEquispaced
description: API reference for qiskit.pulse.transforms.AlignEquispaced
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.transforms.AlignEquispaced
---

# AlignEquispaced

<span id="qiskit.pulse.transforms.AlignEquispaced" />

`AlignEquispaced(duration)`

Bases: [`AlignmentKind`](pulse#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

Align instructions with equispaced interval within a specified duration.

Instructions played on different channels are also arranged in a sequence. This alignment is convenient to create dynamical decoupling sequences such as PDD.

Create new equispaced context.

**Parameters**

**duration** (*int |* [*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – Duration of this context. This should be larger than the schedule duration. If the specified duration is shorter than the schedule duration, no alignment is performed and the input schedule is just returned. This duration can be parametrized.

## Methods

<span id="qiskit-pulse-transforms-alignequispaced-align" />

### align

<span id="qiskit.pulse.transforms.AlignEquispaced.align" />

`AlignEquispaced.align(schedule)`

Reallocate instructions according to the policy.

Only top-level sub-schedules are aligned. If sub-schedules are nested, nested schedules are not recursively aligned.

**Parameters**

**schedule** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Schedule to align.

**Returns**

Schedule with reallocated instructions.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

<span id="qiskit-pulse-transforms-alignequispaced-to-dict" />

### to\_dict

<span id="qiskit.pulse.transforms.AlignEquispaced.to_dict" />

`AlignEquispaced.to_dict()`

Returns dictionary to represent this alignment.

<Admonition title="Deprecated since version 0.21" type="danger">
  The method `qiskit.pulse.transforms.alignments.AlignEquispaced.to_dict()` is deprecated as of qiskit-terra 0.21. It will be removed no earlier than 3 months after the release date.
</Admonition>

**Return type**

*Dict*\[str, *Any*]

## Attributes

<span id="qiskit.pulse.transforms.AlignEquispaced.duration" />

### duration

Return context duration.

<span id="qiskit.pulse.transforms.AlignEquispaced.is_sequential" />

### is\_sequential


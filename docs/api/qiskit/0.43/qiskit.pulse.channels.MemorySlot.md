---
title: MemorySlot
description: API reference for qiskit.pulse.channels.MemorySlot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.MemorySlot
---

# MemorySlot

<span id="qiskit.pulse.channels.MemorySlot" />

`MemorySlot(*args, **kwargs)`

Bases: `ClassicalIOChannel`

Memory slot channels represent classical memory storage.

Channel class.

**Parameters**

**index** – Index of channel.

## Methods

<span id="qiskit-pulse-channels-memoryslot-is-parameterized" />

### is\_parameterized

<span id="qiskit.pulse.channels.MemorySlot.is_parameterized" />

`MemorySlot.is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

bool

## Attributes

<span id="qiskit.pulse.channels.MemorySlot.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

<span id="qiskit.pulse.channels.MemorySlot.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

<span id="qiskit.pulse.channels.MemorySlot.parameters" />

### parameters

Parameters which determine the channel index.

<span id="qiskit.pulse.channels.MemorySlot.prefix" />

### prefix

`str | None`

`= 'm'`

A shorthand string prefix for characterizing the channel type.


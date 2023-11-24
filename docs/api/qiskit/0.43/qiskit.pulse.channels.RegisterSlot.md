---
title: RegisterSlot
description: API reference for qiskit.pulse.channels.RegisterSlot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.RegisterSlot
---

# RegisterSlot

<span id="qiskit.pulse.channels.RegisterSlot" />

`RegisterSlot(*args, **kwargs)`

Bases: `ClassicalIOChannel`

Classical resister slot channels represent classical registers (low-latency classical memory).

Channel class.

**Parameters**

**index** – Index of channel.

## Methods

<span id="qiskit-pulse-channels-registerslot-is-parameterized" />

### is\_parameterized

<span id="qiskit.pulse.channels.RegisterSlot.is_parameterized" />

`RegisterSlot.is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

bool

## Attributes

<span id="qiskit.pulse.channels.RegisterSlot.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

<span id="qiskit.pulse.channels.RegisterSlot.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

<span id="qiskit.pulse.channels.RegisterSlot.parameters" />

### parameters

Parameters which determine the channel index.

<span id="qiskit.pulse.channels.RegisterSlot.prefix" />

### prefix

`str | None`

`= 'c'`

A shorthand string prefix for characterizing the channel type.


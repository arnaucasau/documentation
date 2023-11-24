---
title: MemorySlot
description: API reference for qiskit.pulse.channels.MemorySlot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.MemorySlot
---

# MemorySlot[¶](#memoryslot "Permalink to this headline")

<span id="qiskit.pulse.channels.MemorySlot" />

`MemorySlot(index)`

Bases: `qiskit.pulse.channels.ClassicalIOChannel`

Memory slot channels represent classical memory storage.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

## Methods

### is\_parameterized

<span id="qiskit.pulse.channels.MemorySlot.is_parameterized" />

`MemorySlot.is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

`bool`

## Attributes

<span id="qiskit.pulse.channels.MemorySlot.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`Union`\[`int`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

<span id="qiskit.pulse.channels.MemorySlot.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

<span id="qiskit.pulse.channels.MemorySlot.parameters" />

### parameters

Parameters which determine the channel index.

**Return type**

`Set`

<span id="qiskit.pulse.channels.MemorySlot.prefix" />

### prefix

`Optional[str]`

`= 'm'`

A shorthand string prefix for characterizing the channel type.


---
title: SnapshotChannel
description: API reference for qiskit.pulse.channels.SnapshotChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.SnapshotChannel
---

# SnapshotChannel

<span id="qiskit.pulse.channels.SnapshotChannel" />

`SnapshotChannel(*args, **kwargs)`

Bases: [`qiskit.pulse.channels.ClassicalIOChannel`](pulse#qiskit.pulse.channels.ClassicalIOChannel "qiskit.pulse.channels.ClassicalIOChannel")

Snapshot channels are used to specify instructions for simulators.

Create new snapshot channel.

## Methods

### is\_parameterized

<span id="qiskit.pulse.channels.SnapshotChannel.is_parameterized" />

`SnapshotChannel.is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

`bool`

## Attributes

<span id="qiskit.pulse.channels.SnapshotChannel.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`Union`\[`int`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

<span id="qiskit.pulse.channels.SnapshotChannel.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

<span id="qiskit.pulse.channels.SnapshotChannel.parameters" />

### parameters

Parameters which determine the channel index.

**Return type**

`Set`

<span id="qiskit.pulse.channels.SnapshotChannel.prefix" />

### prefix

`Optional[str]`

`= 's'`

A shorthand string prefix for characterizing the channel type.


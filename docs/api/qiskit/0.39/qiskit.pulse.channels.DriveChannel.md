---
title: DriveChannel
description: API reference for qiskit.pulse.channels.DriveChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.DriveChannel
---

# DriveChannel

<span id="qiskit.pulse.channels.DriveChannel" />

`DriveChannel(index)`

Bases: `qiskit.pulse.channels.PulseChannel`

Drive channels transmit signals to qubits which enact gate operations.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

## Methods

### is\_parameterized

<span id="qiskit.pulse.channels.DriveChannel.is_parameterized" />

`DriveChannel.is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

`bool`

## Attributes

<span id="qiskit.pulse.channels.DriveChannel.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`Union`\[`int`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

<span id="qiskit.pulse.channels.DriveChannel.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

<span id="qiskit.pulse.channels.DriveChannel.parameters" />

### parameters

Parameters which determine the channel index.

**Return type**

`Set`

<span id="qiskit.pulse.channels.DriveChannel.prefix" />

### prefix

`Optional[str]`

`= 'd'`

A shorthand string prefix for characterizing the channel type.


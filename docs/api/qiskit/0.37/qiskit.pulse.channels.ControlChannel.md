---
title: ControlChannel
description: API reference for qiskit.pulse.channels.ControlChannel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.channels.ControlChannel
---

# ControlChannel

<span id="qiskit.pulse.channels.ControlChannel" />

`ControlChannel(index)`

Bases: `qiskit.pulse.channels.PulseChannel`

Control channels provide supplementary control over the qubit to the drive channel. These are often associated with multi-qubit gate operations. They may not map trivially to a particular qubit index.

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

## Methods

### is\_parameterized

<span id="qiskit.pulse.channels.ControlChannel.is_parameterized" />

`ControlChannel.is_parameterized()`

Return True iff the channel is parameterized.

**Return type**

`bool`

## Attributes

<span id="qiskit.pulse.channels.ControlChannel.index" />

### index

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`Union`\[`int`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

<span id="qiskit.pulse.channels.ControlChannel.name" />

### name

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

<span id="qiskit.pulse.channels.ControlChannel.parameters" />

### parameters

Parameters which determine the channel index.

**Return type**

`Set`

<span id="qiskit.pulse.channels.ControlChannel.prefix" />

### prefix

`Optional[str]`

`= 'u'`

A shorthand string prefix for characterizing the channel type.


---
title: RegisterSlot
description: API reference for qiskit.pulse.RegisterSlot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.RegisterSlot
---

# RegisterSlot

<span id="qiskit.pulse.RegisterSlot" />

`RegisterSlot(index)`

Classical resister slot channels represent classical registers (low-latency classical memory).

Channel class.

**Parameters**

**index** (`int`) – Index of channel.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `index` is not a nonnegative integer.

## Attributes

### index

<span id="qiskit.pulse.RegisterSlot.index" />

`int`

Return the index of this channel. The index is a label for a control signal line typically mapped trivially to a qubit index. For instance, `DriveChannel(0)` labels the signal line driving the qubit labeled with index 0.

**Return type**

`int`

### name

<span id="qiskit.pulse.RegisterSlot.name" />

`str`

Return the shorthand alias for this channel, which is based on its type and index.

**Return type**

`str`

### prefix

<span id="qiskit.pulse.RegisterSlot.prefix" />

`= 'c'`

A shorthand string prefix for characterizing the channel type.

## Methods


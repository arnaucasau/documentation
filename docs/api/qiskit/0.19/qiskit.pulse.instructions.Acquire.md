---
title: Acquire
description: API reference for qiskit.pulse.instructions.Acquire
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Acquire
---

# Acquire

<span id="qiskit.pulse.instructions.Acquire" />

`Acquire(duration, channel=None, mem_slot=None, reg_slots=None, mem_slots=None, reg_slot=None, kernel=None, discriminator=None, name=None)`

The Acquire instruction is used to trigger the ADC associated with a particular qubit; e.g. instantiated with AcquireChannel(0), the Acquire command will trigger data collection for the channel associated with qubit 0 readout. This instruction also provides acquisition metadata:

> *   the number of cycles during which to acquire (in terms of dt),
> *   the register slot to store classified, intermediary readout results,
> *   the memory slot to return classified results,
> *   the kernel to integrate raw data for each shot, and
> *   the discriminator to classify kerneled IQ points.

Create a new Acquire instruction.

**Parameters**

*   **duration** (`int`) – Length of time to acquire data in terms of dt.
*   **channel** (`Union`\[[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel"), `List`\[[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")], `None`]) – The channel that will acquire data.
*   **mem\_slot** (`Union`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot"), `List`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")], `None`]) – The classical memory slot in which to store the classified readout result.
*   **mem\_slots** (`Optional`\[`List`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")]]) – Deprecated list form of `mem_slot`.
*   **reg\_slots** (`Union`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot"), `List`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")], `None`]) – Deprecated list form of `reg_slot`.
*   **reg\_slot** (`Optional`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")]) – The fast-access register slot in which to store the classified readout result for fast feedback.
*   **kernel** (`Optional`\[`Kernel`]) – A `Kernel` for integrating raw data.
*   **discriminator** (`Optional`\[`Discriminator`]) – A `Discriminator` for discriminating kerneled IQ data into 0/1 results.
*   **name** (`Optional`\[`str`]) – Name of the instruction for display purposes.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If channels are supplied, and the number of register and/or memory slots does not equal the number of channels.

## Attributes

### acquire

<span id="qiskit.pulse.instructions.Acquire.acquire" />

`qiskit.pulse.channels.AcquireChannel`

Acquire channel to acquire data. The `AcquireChannel` index maps trivially to qubit index.

**Return type**

[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

### acquires

<span id="qiskit.pulse.instructions.Acquire.acquires" />

`List[qiskit.pulse.channels.AcquireChannel]`

Acquire channels to be acquired on.

**Return type**

`List`\[[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")]

### channel

<span id="qiskit.pulse.instructions.Acquire.channel" />

`qiskit.pulse.channels.AcquireChannel`

Return the [`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") that this instruction is scheduled on.

**Return type**

[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

### channels

<span id="qiskit.pulse.instructions.Acquire.channels" />

`Tuple[qiskit.pulse.channels.Channel]`

Returns channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]

### command

<span id="qiskit.pulse.instructions.Acquire.command" />

`qiskit.pulse.commands.command.Command`

The associated command. Commands are deprecated, so this method will be deprecated shortly.

**Return type**

`Command`

### discriminator

<span id="qiskit.pulse.instructions.Acquire.discriminator" />

`qiskit.pulse.configuration.Discriminator`

Return discrimination settings.

**Return type**

`Discriminator`

### duration

<span id="qiskit.pulse.instructions.Acquire.duration" />

`int`

Duration of this instruction.

**Return type**

`int`

### id

<span id="qiskit.pulse.instructions.Acquire.id" />

`int`

Unique identifier for this instruction.

**Return type**

`int`

### instructions

<span id="qiskit.pulse.instructions.Acquire.instructions" />

`Tuple[Tuple[int, qiskit.pulse.instructions.instruction.Instruction]]`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, [`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")]]

### kernel

<span id="qiskit.pulse.instructions.Acquire.kernel" />

`qiskit.pulse.configuration.Kernel`

Return kernel settings.

**Return type**

`Kernel`

### mem\_slot

<span id="qiskit.pulse.instructions.Acquire.mem_slot" />

`qiskit.pulse.channels.MemorySlot`

The classical memory slot which will store the classified readout result.

**Return type**

[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")

### mem\_slots

<span id="qiskit.pulse.instructions.Acquire.mem_slots" />

`List[qiskit.pulse.channels.MemorySlot]`

MemorySlots.

**Return type**

`List`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")]

### name

<span id="qiskit.pulse.instructions.Acquire.name" />

`str`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.instructions.Acquire.operands" />

`Tuple`

Return instruction operands.

**Return type**

`Tuple`

### reg\_slot

<span id="qiskit.pulse.instructions.Acquire.reg_slot" />

`qiskit.pulse.channels.RegisterSlot`

The fast-access register slot which will store the classified readout result for fast-feedback computation.

**Return type**

[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")

### reg\_slots

<span id="qiskit.pulse.instructions.Acquire.reg_slots" />

`List[qiskit.pulse.channels.RegisterSlot]`

RegisterSlots.

**Return type**

`List`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")]

### start\_time

<span id="qiskit.pulse.instructions.Acquire.start_time" />

`int`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.instructions.Acquire.stop_time" />

`int`

Relative end time of this instruction.

**Return type**

`int`

### timeslots

<span id="qiskit.pulse.instructions.Acquire.timeslots" />

`Dict[qiskit.pulse.channels.Channel, List[Tuple[int, int]]]`

Occupied time slots by this instruction.

**Return type**

`Dict`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel"), `List`\[`Tuple`\[`int`, `int`]]]

## Methods

### \_\_call\_\_

<span id="qiskit.pulse.instructions.Acquire.__call__" />

`Acquire.__call__(channel=None, mem_slot=None, reg_slots=None, mem_slots=None, reg_slot=None, kernel=None, discriminator=None, name=None)`

Return new `Acquire` that is fully instantiated with its channels.

**Parameters**

*   **channel** (`Union`\[[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel"), `List`\[[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")], `None`]) – The channel that will acquire data.
*   **mem\_slot** (`Union`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot"), `List`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")], `None`]) – The classical memory slot in which to store the classified readout result.
*   **mem\_slots** (`Optional`\[`List`\[[`MemorySlot`](qiskit.pulse.channels#qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")]]) – Deprecated list form of `mem_slot`.
*   **reg\_slots** (`Union`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot"), `List`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")], `None`]) – Deprecated list form of `reg_slot`.
*   **reg\_slot** (`Optional`\[[`RegisterSlot`](qiskit.pulse.channels#qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")]) – The fast-access register slot in which to store the classified readout result for fast feedback.
*   **kernel** (`Optional`\[`Kernel`]) – A `Kernel` for integrating raw data.
*   **discriminator** (`Optional`\[`Discriminator`]) – A `Discriminator` for discriminating kerneled IQ data into 0/1 results.
*   **name** (`Optional`\[`str`]) – Name of the instruction for display purposes.

**Return type**

[`Acquire`](qiskit.pulse.instructions.Acquire "qiskit.pulse.instructions.acquire.Acquire")

**Returns**

Complete and ready to schedule `Acquire`.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `channel` has already been set.

### append

<span id="qiskit.pulse.instructions.Acquire.append" />

`Acquire.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### ch\_duration

<span id="qiskit.pulse.instructions.Acquire.ch_duration" />

`Acquire.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.instructions.Acquire.ch_start_time" />

`Acquire.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.instructions.Acquire.ch_stop_time" />

`Acquire.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.instructions.Acquire.draw" />

`Acquire.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, channels_to_plot=None, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, scaling=None, channels=None)`

Plot the instruction.

**Parameters**

*   **dt** (`float`) – Time interval of samples
*   **style** (*Optional\[*[*SchedStyle*](qiskit.visualization.pulse.qcstyle#qiskit.visualization.pulse.qcstyle.SchedStyle "qiskit.visualization.pulse.qcstyle.SchedStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **channels\_to\_plot** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – Deprecated, see channels
*   **plot\_all** (`bool`) – Plot empty channels
*   **plot\_range** (`Optional`\[`Tuple`\[`float`]]) – A tuple of time range to plot
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **table** (`bool`) – Draw event table for supported instructions
*   **label** (`bool`) – Label individual instructions
*   **framechange** (`bool`) – Add framechange indicators
*   **scaling** (`Optional`\[`float`]) – Deprecated, see scale
*   **channels** (`Optional`\[`List`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]]) – A list of channel names to plot

**Returns**

A matplotlib figure object of the pulse schedule

**Return type**

matplotlib.figure

### flatten

<span id="qiskit.pulse.instructions.Acquire.flatten" />

`Acquire.flatten()`

Return itself as already single instruction.

**Return type**

[`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

### insert

<span id="qiskit.pulse.instructions.Acquire.insert" />

`Acquire.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (`ScheduleComponent`) – Schedule to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### shift

<span id="qiskit.pulse.instructions.Acquire.shift" />

`Acquire.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### union

<span id="qiskit.pulse.instructions.Acquire.union" />

`Acquire.union(*schedules, name=None)`

Return a new schedule which is the union of self and schedule.

**Parameters**

*   **\*schedules** – Schedules to be take the union with this Instruction.
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")


---
title: Instruction
description: API reference for qiskit.pulse.instructions.Instruction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.instructions.Instruction
---

# Instruction

<span id="qiskit.pulse.instructions.Instruction" />

`Instruction(operands, duration, channels, name=None)`

The smallest schedulable unit: a single instruction. It has a fixed duration and specified channels.

Instruction initializer.

**Parameters**

*   **operands** (`Tuple`) – The argument list.
*   **duration** (`Union`\[`Command`, `int`]) – Length of time taken by the instruction in terms of dt. Deprecated: the first argument used to be the Command.
*   **channels** (`Tuple`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]) – Tuple of pulse channels that this instruction operates on.
*   **name** (`Optional`\[`str`]) – Optional display name for this instruction.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If duration is negative.

## Attributes

### channels

<span id="qiskit.pulse.instructions.Instruction.channels" />

`Tuple[qiskit.pulse.channels.Channel]`

Returns channels that this schedule uses.

**Return type**

`Tuple`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]

### command

<span id="qiskit.pulse.instructions.Instruction.command" />

`qiskit.pulse.commands.command.Command`

The associated command. Commands are deprecated, so this method will be deprecated shortly.

**Return type**

`Command`

### duration

<span id="qiskit.pulse.instructions.Instruction.duration" />

`int`

Duration of this instruction.

**Return type**

`int`

### id

<span id="qiskit.pulse.instructions.Instruction.id" />

`int`

Unique identifier for this instruction.

**Return type**

`int`

### instructions

<span id="qiskit.pulse.instructions.Instruction.instructions" />

`Tuple[Tuple[int, qiskit.pulse.instructions.instruction.Instruction]]`

Iterable for getting instructions from Schedule tree.

**Return type**

`Tuple`\[`Tuple`\[`int`, [`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")]]

### name

<span id="qiskit.pulse.instructions.Instruction.name" />

`str`

Name of this instruction.

**Return type**

`str`

### operands

<span id="qiskit.pulse.instructions.Instruction.operands" />

`Tuple`

Return instruction operands.

**Return type**

`Tuple`

### start\_time

<span id="qiskit.pulse.instructions.Instruction.start_time" />

`int`

Relative begin time of this instruction.

**Return type**

`int`

### stop\_time

<span id="qiskit.pulse.instructions.Instruction.stop_time" />

`int`

Relative end time of this instruction.

**Return type**

`int`

### timeslots

<span id="qiskit.pulse.instructions.Instruction.timeslots" />

`Dict[qiskit.pulse.channels.Channel, List[Tuple[int, int]]]`

Occupied time slots by this instruction.

**Return type**

`Dict`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel"), `List`\[`Tuple`\[`int`, `int`]]]

## Methods

### append

<span id="qiskit.pulse.instructions.Instruction.append" />

`Instruction.append(schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted at the maximum time over all channels shared between `self` and `schedule`.

**Parameters**

*   **schedule** (`ScheduleComponent`) – schedule to be appended
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### ch\_duration

<span id="qiskit.pulse.instructions.Instruction.ch_duration" />

`Instruction.ch_duration(*channels)`

Return duration of the supplied channels in this Instruction.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_start\_time

<span id="qiskit.pulse.instructions.Instruction.ch_start_time" />

`Instruction.ch_start_time(*channels)`

Return minimum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### ch\_stop\_time

<span id="qiskit.pulse.instructions.Instruction.ch_stop_time" />

`Instruction.ch_stop_time(*channels)`

Return maximum start time for supplied channels.

**Parameters**

**\*channels** – Supplied channels

**Return type**

`int`

### draw

<span id="qiskit.pulse.instructions.Instruction.draw" />

`Instruction.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, channels_to_plot=None, plot_all=False, plot_range=None, interactive=False, table=True, label=False, framechange=True, scaling=None, channels=None)`

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

<span id="qiskit.pulse.instructions.Instruction.flatten" />

`Instruction.flatten()`

Return itself as already single instruction.

**Return type**

[`Instruction`](qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")

### insert

<span id="qiskit.pulse.instructions.Instruction.insert" />

`Instruction.insert(start_time, schedule, name=None)`

Return a new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") with `schedule` inserted within `self` at `start_time`.

**Parameters**

*   **start\_time** (`int`) – Time to insert the schedule schedule
*   **schedule** (`ScheduleComponent`) – Schedule to insert
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### shift

<span id="qiskit.pulse.instructions.Instruction.shift" />

`Instruction.shift(time, name=None)`

Return a new schedule shifted forward by time.

**Parameters**

*   **time** (`int`) – Time to shift by
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### union

<span id="qiskit.pulse.instructions.Instruction.union" />

`Instruction.union(*schedules, name=None)`

Return a new schedule which is the union of self and schedule.

**Parameters**

*   **\*schedules** – Schedules to be take the union with this Instruction.
*   **name** (`Optional`\[`str`]) – Name of the new schedule. Defaults to name of self

**Return type**

[`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")


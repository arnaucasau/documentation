---
title: FakeGeneva
description: API reference for qiskit.providers.fake_provider.FakeGeneva
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeGeneva
---

# FakeGeneva

<span id="qiskit.providers.fake_provider.FakeGeneva" />

`FakeGeneva`

Bases: `FakeBackendV2`

A fake 27 qubit backend.

FakeBackendV2 initializer.

## Methods

<span id="qiskit-providers-fake-provider-fakegeneva-acquire-channel" />

### acquire\_channel

<span id="qiskit.providers.fake_provider.FakeGeneva.acquire_channel" />

`FakeGeneva.acquire_channel(qubit)`

Return the acquisition channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement acquisition line.

**Return type**

[AcquireChannel](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

<span id="qiskit-providers-fake-provider-fakegeneva-control-channel" />

### control\_channel

<span id="qiskit.providers.fake_provider.FakeGeneva.control_channel" />

`FakeGeneva.control_channel(qubits)`

Return the secondary drive channel for the given qubit

This is typically utilized for controlling multiqubit interactions. This channel is derived from other channels.

This is required to be implemented if the backend supports Pulse scheduling.

**Parameters**

**qubits** (*Iterable\[int]*) – Tuple or list of qubits of the form `(control_qubit, target_qubit)`.

**Returns**

The multi qubit control line.

**Return type**

List\[[ControlChannel](qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

<span id="qiskit-providers-fake-provider-fakegeneva-drive-channel" />

### drive\_channel

<span id="qiskit.providers.fake_provider.FakeGeneva.drive_channel" />

`FakeGeneva.drive_channel(qubit)`

Return the drive channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit drive channel

**Return type**

[DriveChannel](qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

<span id="qiskit-providers-fake-provider-fakegeneva-measure-channel" />

### measure\_channel

<span id="qiskit.providers.fake_provider.FakeGeneva.measure_channel" />

`FakeGeneva.measure_channel(qubit)`

Return the measure stimulus channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement stimulus line

**Return type**

[MeasureChannel](qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

<span id="qiskit-providers-fake-provider-fakegeneva-qubit-properties" />

### qubit\_properties

<span id="qiskit.providers.fake_provider.FakeGeneva.qubit_properties" />

`FakeGeneva.qubit_properties(qubit)`

Return QubitProperties for a given qubit.

If there are no defined or the backend doesn’t support querying these details this method does not need to be implemented.

**Parameters**

**qubit** (*int | List\[int]*) – The qubit to get the `QubitProperties` object for. This can be a single integer for 1 qubit or a list of qubits and a list of `QubitProperties` objects will be returned in the same order

**Returns**

The [`QubitProperties`](qiskit.providers.QubitProperties "qiskit.providers.QubitProperties") object for the specified qubit. If a list of qubits is provided a list will be returned. If properties are missing for a qubit this can be `None`.

**Return type**

qubit\_properties

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the qubit properties

<span id="qiskit-providers-fake-provider-fakegeneva-run" />

### run

<span id="qiskit.providers.fake_provider.FakeGeneva.run" />

`FakeGeneva.run(run_input, **options)`

Run on the fake backend using a simulator.

This method runs circuit jobs (an individual or a list of QuantumCircuit ) and pulse jobs (an individual or a list of Schedule or ScheduleBlock) using BasicAer or Aer simulator and returns a [`Job`](qiskit.providers.Job "qiskit.providers.Job") object.

If qiskit-aer is installed, jobs will be run using AerSimulator with noise model of the fake backend. Otherwise, jobs will be run using BasicAer simulator without noise.

Currently noisy simulation of a pulse job is not supported yet in FakeBackendV2.

**Parameters**

*   **run\_input** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule")  *or*[*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock") *or list*) – An individual or a list of `ScheduleBlock`, or [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") objects to run on the backend.
*   **options** – Any kwarg options to pass to the backend for running the config. If a key is also present in the options attribute/object then the expectation is that the value specified will be used instead of what’s set in the options object.

**Returns**

The job object for the run

**Return type**

[Job](qiskit.providers.Job "qiskit.providers.Job")

**Raises**

*   **QiskitError** – If a pulse job is supplied and qiskit-aer is not
*   **installed.** –

<span id="qiskit-providers-fake-provider-fakegeneva-set-options" />

### set\_options

<span id="qiskit.providers.fake_provider.FakeGeneva.set_options" />

`FakeGeneva.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

## Attributes

<span id="qiskit.providers.fake_provider.FakeGeneva.backend_name" />

### backend\_name

`= 'fake_geneva'`

<span id="qiskit.providers.fake_provider.FakeGeneva.conf_filename" />

### conf\_filename

`= 'conf_geneva.json'`

<span id="qiskit.providers.fake_provider.FakeGeneva.coupling_map" />

### coupling\_map

Return the [`CouplingMap`](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") object

<span id="qiskit.providers.fake_provider.FakeGeneva.defs_filename" />

### defs\_filename

`= 'defs_geneva.json'`

<span id="qiskit.providers.fake_provider.FakeGeneva.dirname" />

### dirname

`= '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/geneva'`

<span id="qiskit.providers.fake_provider.FakeGeneva.dt" />

### dt

Return the system time resolution of input signals

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The input signal timestep in seconds. If the backend doesn’t define `dt` `None` will be returned

**Return type**

dt

<span id="qiskit.providers.fake_provider.FakeGeneva.dtm" />

### dtm

Return the system time resolution of output signals

**Returns**

The output signal timestep in seconds.

**Return type**

dtm

<span id="qiskit.providers.fake_provider.FakeGeneva.instruction_durations" />

### instruction\_durations

Return the [`InstructionDurations`](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object.

<span id="qiskit.providers.fake_provider.FakeGeneva.instruction_schedule_map" />

### instruction\_schedule\_map

Return the [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap") for the instructions defined in this backend’s target.

<span id="qiskit.providers.fake_provider.FakeGeneva.instructions" />

### instructions

A list of Instruction tuples on the backend of the form `(instruction, (qubits)`

<span id="qiskit.providers.fake_provider.FakeGeneva.max_circuits" />

### max\_circuits

<span id="qiskit.providers.fake_provider.FakeGeneva.meas_map" />

### meas\_map

Return the grouping of measurements which are multiplexed This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The grouping of measurements which are multiplexed

**Return type**

meas\_map

<span id="qiskit.providers.fake_provider.FakeGeneva.num_qubits" />

### num\_qubits

Return the number of qubits the backend has.

<span id="qiskit.providers.fake_provider.FakeGeneva.operation_names" />

### operation\_names

A list of instruction names that the backend supports.

<span id="qiskit.providers.fake_provider.FakeGeneva.operations" />

### operations

A list of [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") instances that the backend supports.

<span id="qiskit.providers.fake_provider.FakeGeneva.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeGeneva#run "qiskit.providers.fake_provider.FakeGeneva.run") method.

<span id="qiskit.providers.fake_provider.FakeGeneva.props_filename" />

### props\_filename

`= 'props_geneva.json'`

<span id="qiskit.providers.fake_provider.FakeGeneva.provider" />

### provider

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit.providers.fake_provider.FakeGeneva.target" />

### target

A [`qiskit.transpiler.Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") object for the backend.

**Return type**

[Target](qiskit.transpiler.Target "qiskit.transpiler.Target")

<span id="qiskit.providers.fake_provider.FakeGeneva.version" />

### version

`= 2`


---
title: FakeAlmadenV2
description: API reference for qiskit.providers.fake_provider.FakeAlmadenV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeAlmadenV2
---

# FakeAlmadenV2

<span id="qiskit.providers.fake_provider.FakeAlmadenV2" />

`FakeAlmadenV2`

Bases: `FakeBackendV2`

A fake Almaden V2 backend.

```python
00 ↔ 01 ↔ 02 ↔ 03 ↔ 04
      ↕         ↕
05 ↔ 06 ↔ 07 ↔ 08 ↔ 09
 ↕         ↕         ↕
10 ↔ 11 ↔ 12 ↔ 13 ↔ 14
      ↕         ↕
15 ↔ 16 ↔ 17 ↔ 18 ↔ 19
```

FakeBackendV2 initializer.

## Methods

<span id="qiskit-providers-fake-provider-fakealmadenv2-acquire-channel" />

### acquire\_channel

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.acquire_channel" />

`FakeAlmadenV2.acquire_channel(qubit)`

Return the acquisition channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement acquisition line.

**Return type**

[AcquireChannel](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

<span id="qiskit-providers-fake-provider-fakealmadenv2-control-channel" />

### control\_channel

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.control_channel" />

`FakeAlmadenV2.control_channel(qubits)`

Return the secondary drive channel for the given qubit

This is typically utilized for controlling multiqubit interactions. This channel is derived from other channels.

This is required to be implemented if the backend supports Pulse scheduling.

**Parameters**

**qubits** (*Iterable\[int]*) – Tuple or list of qubits of the form `(control_qubit, target_qubit)`.

**Returns**

The multi qubit control line.

**Return type**

List\[[ControlChannel](qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

<span id="qiskit-providers-fake-provider-fakealmadenv2-drive-channel" />

### drive\_channel

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.drive_channel" />

`FakeAlmadenV2.drive_channel(qubit)`

Return the drive channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit drive channel

**Return type**

[DriveChannel](qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

<span id="qiskit-providers-fake-provider-fakealmadenv2-measure-channel" />

### measure\_channel

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.measure_channel" />

`FakeAlmadenV2.measure_channel(qubit)`

Return the measure stimulus channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement stimulus line

**Return type**

[MeasureChannel](qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

<span id="qiskit-providers-fake-provider-fakealmadenv2-qubit-properties" />

### qubit\_properties

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.qubit_properties" />

`FakeAlmadenV2.qubit_properties(qubit)`

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

<span id="qiskit-providers-fake-provider-fakealmadenv2-run" />

### run

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.run" />

`FakeAlmadenV2.run(run_input, **options)`

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

<span id="qiskit-providers-fake-provider-fakealmadenv2-set-options" />

### set\_options

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.set_options" />

`FakeAlmadenV2.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

## Attributes

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.backend_name" />

### backend\_name

`= 'fake_almaden'`

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.conf_filename" />

### conf\_filename

`= 'conf_almaden.json'`

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.coupling_map" />

### coupling\_map

Return the [`CouplingMap`](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") object

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.defs_filename" />

### defs\_filename

`= None`

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.dirname" />

### dirname

`= '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/almaden'`

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.dt" />

### dt

Return the system time resolution of input signals

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The input signal timestep in seconds. If the backend doesn’t define `dt` `None` will be returned

**Return type**

dt

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.dtm" />

### dtm

Return the system time resolution of output signals

**Returns**

The output signal timestep in seconds.

**Return type**

dtm

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.instruction_durations" />

### instruction\_durations

Return the [`InstructionDurations`](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object.

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.instruction_schedule_map" />

### instruction\_schedule\_map

Return the [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap") for the instructions defined in this backend’s target.

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.instructions" />

### instructions

A list of Instruction tuples on the backend of the form `(instruction, (qubits)`

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.max_circuits" />

### max\_circuits

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.meas_map" />

### meas\_map

Return the grouping of measurements which are multiplexed This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The grouping of measurements which are multiplexed

**Return type**

meas\_map

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.num_qubits" />

### num\_qubits

Return the number of qubits the backend has.

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.operation_names" />

### operation\_names

A list of instruction names that the backend supports.

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.operations" />

### operations

A list of [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") instances that the backend supports.

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeAlmadenV2#run "qiskit.providers.fake_provider.FakeAlmadenV2.run") method.

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.props_filename" />

### props\_filename

`= 'props_almaden.json'`

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.provider" />

### provider

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.target" />

### target

A [`qiskit.transpiler.Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") object for the backend.

**Return type**

[Target](qiskit.transpiler.Target "qiskit.transpiler.Target")

<span id="qiskit.providers.fake_provider.FakeAlmadenV2.version" />

### version

`= 2`


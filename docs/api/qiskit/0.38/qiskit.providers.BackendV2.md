---
title: BackendV2
description: API reference for qiskit.providers.BackendV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.BackendV2
---

# BackendV2

<span id="qiskit.providers.BackendV2" />

`BackendV2(provider=None, name=None, description=None, online_date=None, backend_version=None, **fields)`

Bases: [`qiskit.providers.backend.Backend`](qiskit.providers.Backend "qiskit.providers.backend.Backend"), `abc.ABC`

Abstract class for Backends

This abstract class is to be used for all Backend objects created by a provider. This version differs from earlier abstract Backend classes in that the configuration attribute no longer exists. Instead, attributes exposing equivalent required immutable properties of the backend device are added. For example `backend.configuration().n_qubits` is accessible from `backend.num_qubits` now.

The `options` attribute of the backend is used to contain the dynamic user configurable options of the backend. It should be used more for runtime options that configure how the backend is used. For example, something like a `shots` field for a backend that runs experiments which would contain an int for how many shots to execute.

If migrating a provider from [`BackendV1`](qiskit.providers.BackendV1 "qiskit.providers.BackendV1") or `BaseBackend` one thing to keep in mind is for backwards compatibility you might need to add a configuration method that will build a [`BackendConfiguration`](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration") object and [`BackendProperties`](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") from the attributes defined in this class for backwards compatibility.

Initialize a BackendV2 based backend

**Parameters**

*   **provider** (`Optional`\[[`Provider`](qiskit.providers.Provider "qiskit.providers.provider.Provider")]) – An optional backwards reference to the [`Provider`](qiskit.providers.Provider "qiskit.providers.Provider") object that the backend is from
*   **name** (`Optional`\[`str`]) – An optional name for the backend
*   **description** (`Optional`\[`str`]) – An optional description of the backend
*   **online\_date** (`Optional`\[`datetime`]) – An optional datetime the backend was brought online
*   **backend\_version** (`Optional`\[`str`]) – An optional backend version string. This differs from the [`version`](#qiskit.providers.BackendV2.version "qiskit.providers.BackendV2.version") attribute as [`version`](#qiskit.providers.BackendV2.version "qiskit.providers.BackendV2.version") is for the abstract [`Backend`](qiskit.providers.Backend "qiskit.providers.Backend") abstract interface version of the object while `backend_version` is for versioning the backend itself.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – If a field is specified that’s outside the backend’s options

## Methods

### acquire\_channel

<span id="qiskit.providers.BackendV2.acquire_channel" />

`BackendV2.acquire_channel(qubit)`

Return the acquisition channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement acquisition line.

**Return type**

[AcquireChannel](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### control\_channel

<span id="qiskit.providers.BackendV2.control_channel" />

`BackendV2.control_channel(qubits)`

Return the secondary drive channel for the given qubit

This is typically utilized for controlling multiqubit interactions. This channel is derived from other channels.

This is required to be implemented if the backend supports Pulse scheduling.

**Parameters**

**qubits** (`Iterable`\[`int`]) – Tuple or list of qubits of the form `(control_qubit, target_qubit)`.

**Returns**

The multi qubit control line.

**Return type**

List\[[ControlChannel](qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### drive\_channel

<span id="qiskit.providers.BackendV2.drive_channel" />

`BackendV2.drive_channel(qubit)`

Return the drive channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit drive channel

**Return type**

[DriveChannel](qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### measure\_channel

<span id="qiskit.providers.BackendV2.measure_channel" />

`BackendV2.measure_channel(qubit)`

Return the measure stimulus channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement stimulus line

**Return type**

[MeasureChannel](qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### qubit\_properties

<span id="qiskit.providers.BackendV2.qubit_properties" />

`BackendV2.qubit_properties(qubit)`

Return QubitProperties for a given qubit.

If there are no defined or the backend doesn’t support querying these details this method does not need to be implemented.

**Parameters**

**qubit** (`Union`\[`int`, `List`\[`int`]]) – The qubit to get the `QubitProperties` object for. This can be a single integer for 1 qubit or a list of qubits and a list of `QubitProperties` objects will be returned in the same order

**Returns**

The [`QubitProperties`](qiskit.providers.QubitProperties "qiskit.providers.QubitProperties") object for the specified qubit. If a list of qubits is provided a list will be returned. If properties are missing for a qubit this can be `None`.

**Return type**

qubit\_properties

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the qubit properties

### run

<span id="qiskit.providers.BackendV2.run" />

`abstract BackendV2.run(run_input, **options)`

Run on the backend.

This method returns a [`Job`](qiskit.providers.Job "qiskit.providers.Job") object that runs circuits. Depending on the backend this may be either an async or sync call. It is at the discretion of the provider to decide whether running should block until the execution is finished or not: the Job class can handle either situation.

**Parameters**

*   **run\_input** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")  *or*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule")  *or*[*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock") *or list*) – An individual or a list of `ScheduleBlock`, or [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") objects to run on the backend.
*   **options** – Any kwarg options to pass to the backend for running the config. If a key is also present in the options attribute/object then the expectation is that the value specified will be used instead of what’s set in the options object.

**Returns**

The job object for the run

**Return type**

[Job](qiskit.providers.Job "qiskit.providers.Job")

### set\_options

<span id="qiskit.providers.BackendV2.set_options" />

`BackendV2.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

## Attributes

<span id="qiskit.providers.BackendV2.coupling_map" />

### coupling\_map

Return the [`CouplingMap`](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") object

<span id="qiskit.providers.BackendV2.dt" />

### dt

Return the system time resolution of input signals

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The input signal timestep in seconds. If the backend doesn’t define `dt` `None` will be returned

**Return type**

dt

<span id="qiskit.providers.BackendV2.dtm" />

### dtm

Return the system time resolution of output signals

**Returns**

The output signal timestep in seconds.

**Return type**

dtm

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the output signal timestep

<span id="qiskit.providers.BackendV2.instruction_durations" />

### instruction\_durations

Return the [`InstructionDurations`](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object.

<span id="qiskit.providers.BackendV2.instruction_schedule_map" />

### instruction\_schedule\_map

Return the [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap") for the instructions defined in this backend’s target.

<span id="qiskit.providers.BackendV2.instructions" />

### instructions

A list of Instruction tuples on the backend of the form `(instruction, (qubits)`

**Return type**

`List`\[`Tuple`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction"), `Tuple`\[`int`]]]

<span id="qiskit.providers.BackendV2.max_circuits" />

### max\_circuits

The maximum number of circuits (or Pulse schedules) that can be run in a single job.

If there is no limit this will return None

<span id="qiskit.providers.BackendV2.meas_map" />

### meas\_map

Return the grouping of measurements which are multiplexed

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The grouping of measurements which are multiplexed

**Return type**

meas\_map

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

<span id="qiskit.providers.BackendV2.num_qubits" />

### num\_qubits

Return the number of qubits the backend has.

**Return type**

`int`

<span id="qiskit.providers.BackendV2.operation_names" />

### operation\_names

A list of instruction names that the backend supports.

**Return type**

`List`\[`str`]

<span id="qiskit.providers.BackendV2.operations" />

### operations

A list of [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") instances that the backend supports.

**Return type**

`List`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")]

<span id="qiskit.providers.BackendV2.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.BackendV2#run "qiskit.providers.BackendV2.run") method.

<span id="qiskit.providers.BackendV2.provider" />

### provider

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit.providers.BackendV2.target" />

### target

A [`qiskit.transpiler.Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") object for the backend.

**Return type**

[Target](qiskit.transpiler.Target "qiskit.transpiler.Target")

<span id="qiskit.providers.BackendV2.version" />

### version

`= 2`


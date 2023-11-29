---
title: BackendV2Converter
description: API reference for qiskit.providers.BackendV2Converter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.BackendV2Converter
---

# BackendV2Converter

<span id="qiskit.providers.BackendV2Converter" />

`BackendV2Converter(backend, name_mapping=None, add_delay=False)`

Bases: [`qiskit.providers.backend.BackendV2`](qiskit.providers.BackendV2 "qiskit.providers.backend.BackendV2")

A converter class that takes a [`BackendV1`](qiskit.providers.BackendV1 "qiskit.providers.BackendV1") instance and wraps it in a [`BackendV2`](qiskit.providers.BackendV2 "qiskit.providers.BackendV2") interface.

This class implements the [`BackendV2`](qiskit.providers.BackendV2 "qiskit.providers.BackendV2") interface and is used to enable common access patterns between [`BackendV1`](qiskit.providers.BackendV1 "qiskit.providers.BackendV1") and [`BackendV2`](qiskit.providers.BackendV2 "qiskit.providers.BackendV2"). This class should only be used if you need a [`BackendV2`](qiskit.providers.BackendV2 "qiskit.providers.BackendV2") and still need compatibility with [`BackendV1`](qiskit.providers.BackendV1 "qiskit.providers.BackendV1").

Initialize a BackendV2 converter instance based on a BackendV1 instance.

**Parameters**

*   **backend** ([`BackendV1`](qiskit.providers.BackendV1 "qiskit.providers.backend.BackendV1")) – The input [`BackendV1`](qiskit.providers.BackendV1 "qiskit.providers.BackendV1") based backend to wrap in a [`BackendV2`](qiskit.providers.BackendV2 "qiskit.providers.BackendV2") interface
*   **name\_mapping** (`Optional`\[`Dict`\[`str`, `Any`]]) – An optional dictionary that maps custom gate/operation names in `backend` to an [`Operation`](qiskit.circuit.Operation "qiskit.circuit.Operation") object representing that gate/operation. By default most standard gates names are mapped to the standard gate object from [`qiskit.circuit.library`](circuit_library#module-qiskit.circuit.library "qiskit.circuit.library") this only needs to be specified if the input `backend` defines gates in names outside that set.
*   **add\_delay** (`bool`) – If set to true a [`Delay`](qiskit.circuit.Delay "qiskit.circuit.Delay") operation will be added to the target as a supported operation for all qubits

## Methods

### acquire\_channel

<span id="qiskit.providers.BackendV2Converter.acquire_channel" />

`BackendV2Converter.acquire_channel(qubit)`

Return the acquisition channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement acquisition line.

**Return type**

[AcquireChannel](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### control\_channel

<span id="qiskit.providers.BackendV2Converter.control_channel" />

`BackendV2Converter.control_channel(qubits)`

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

<span id="qiskit.providers.BackendV2Converter.drive_channel" />

`BackendV2Converter.drive_channel(qubit)`

Return the drive channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit drive channel

**Return type**

[DriveChannel](qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### measure\_channel

<span id="qiskit.providers.BackendV2Converter.measure_channel" />

`BackendV2Converter.measure_channel(qubit)`

Return the measure stimulus channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement stimulus line

**Return type**

[MeasureChannel](qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### qubit\_properties

<span id="qiskit.providers.BackendV2Converter.qubit_properties" />

`BackendV2Converter.qubit_properties(qubit)`

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

<span id="qiskit.providers.BackendV2Converter.run" />

`BackendV2Converter.run(run_input, **options)`

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

<span id="qiskit.providers.BackendV2Converter.set_options" />

`BackendV2Converter.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

## Attributes

<span id="qiskit.providers.BackendV2Converter.coupling_map" />

### coupling\_map

Return the [`CouplingMap`](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") object

<span id="qiskit.providers.BackendV2Converter.dt" />

### dt

Return the system time resolution of input signals

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The input signal timestep in seconds. If the backend doesn’t define `dt` `None` will be returned

**Return type**

dt

<span id="qiskit.providers.BackendV2Converter.dtm" />

### dtm

**Return type**

`float`

<span id="qiskit.providers.BackendV2Converter.instruction_durations" />

### instruction\_durations

Return the [`InstructionDurations`](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object.

<span id="qiskit.providers.BackendV2Converter.instruction_schedule_map" />

### instruction\_schedule\_map

Return the [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap") for the instructions defined in this backend’s target.

<span id="qiskit.providers.BackendV2Converter.instructions" />

### instructions

A list of Instruction tuples on the backend of the form `(instruction, (qubits)`

**Return type**

`List`\[`Tuple`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction"), `Tuple`\[`int`]]]

<span id="qiskit.providers.BackendV2Converter.max_circuits" />

### max\_circuits

<span id="qiskit.providers.BackendV2Converter.meas_map" />

### meas\_map

**Return type**

`List`\[`List`\[`int`]]

<span id="qiskit.providers.BackendV2Converter.num_qubits" />

### num\_qubits

Return the number of qubits the backend has.

**Return type**

`int`

<span id="qiskit.providers.BackendV2Converter.operation_names" />

### operation\_names

A list of instruction names that the backend supports.

**Return type**

`List`\[`str`]

<span id="qiskit.providers.BackendV2Converter.operations" />

### operations

A list of [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") instances that the backend supports.

**Return type**

`List`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")]

<span id="qiskit.providers.BackendV2Converter.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.BackendV2Converter#run "qiskit.providers.BackendV2Converter.run") method.

<span id="qiskit.providers.BackendV2Converter.provider" />

### provider

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit.providers.BackendV2Converter.target" />

### target

A [`qiskit.transpiler.Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") object for the backend.

**Return type**

[Target](qiskit.transpiler.Target "qiskit.transpiler.Target")

<span id="qiskit.providers.BackendV2Converter.version" />

### version

`= 2`


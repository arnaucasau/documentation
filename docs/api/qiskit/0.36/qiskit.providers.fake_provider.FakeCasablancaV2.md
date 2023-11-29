---
title: FakeCasablancaV2
description: API reference for qiskit.providers.fake_provider.FakeCasablancaV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeCasablancaV2
---

# FakeCasablancaV2

<span id="qiskit.providers.fake_provider.FakeCasablancaV2" />

`FakeCasablancaV2`

Bases: `qiskit.providers.fake_provider.fake_backend.FakeBackendV2`

A fake 7 qubit backend.

FakeBackendV2 initializer.

## Methods

### acquire\_channel

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.acquire_channel" />

`FakeCasablancaV2.acquire_channel(qubit)`

Return the acquisition channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement acquisition line.

**Return type**

[AcquireChannel](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### control\_channel

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.control_channel" />

`FakeCasablancaV2.control_channel(qubits)`

Return the secondary drive channel for the given qubit

This is typically utilized for controlling multiqubit interactions. This channel is derived from other channels.

This is required to be implemented if the backend supports Pulse scheduling.

**Parameters**

**qubits** (`Iterable`\[`int`]) – Tuple or list of qubits of the form `(control_qubit, target_qubit)`.

**Returns**

The Qubit measurement acquisition line.

**Return type**

List\[[ControlChannel](qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### drive\_channel

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.drive_channel" />

`FakeCasablancaV2.drive_channel(qubit)`

Return the drive channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit drive channel

**Return type**

[DriveChannel](qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### measure\_channel

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.measure_channel" />

`FakeCasablancaV2.measure_channel(qubit)`

Return the measure stimulus channel for the given qubit.

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The Qubit measurement stimulus line

**Return type**

[MeasureChannel](qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

### qubit\_properties

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.qubit_properties" />

`FakeCasablancaV2.qubit_properties(qubit)`

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

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.run" />

`FakeCasablancaV2.run(run_input, **options)`

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

### set\_options

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.set_options" />

`FakeCasablancaV2.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

## Attributes

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.backend_name" />

### backend\_name

`= 'fake_casablanca_v2'`

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.conf_filename" />

### conf\_filename

`= 'conf_casablanca.json'`

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.coupling_map" />

### coupling\_map

Return the [`CouplingMap`](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") object

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.defs_filename" />

### defs\_filename

`= 'defs_casablanca.json'`

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/casablanca'`

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.dt" />

### dt

Return the system time resolution of input signals

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The input signal timestep in seconds. If the backend doesn’t define `dt` `None` will be returned

**Return type**

dt

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.dtm" />

### dtm

Return the system time resolution of output signals

**Returns**

The output signal timestep in seconds.

**Return type**

dtm

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.instruction_durations" />

### instruction\_durations

Return the [`InstructionDurations`](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object.

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.instruction_schedule_map" />

### instruction\_schedule\_map

Return the [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap") for the instructions defined in this backend’s target.

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.instructions" />

### instructions

A list of Instruction tuples on the backend of the form `(instruction, (qubits)`

**Return type**

`List`\[`Tuple`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction"), `Tuple`\[`int`]]]

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.max_circuits" />

### max\_circuits

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.meas_map" />

### meas\_map

Return the grouping of measurements which are multiplexed This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The grouping of measurements which are multiplexed

**Return type**

meas\_map

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.num_qubits" />

### num\_qubits

Return the number of qubits the backend has.

**Return type**

`int`

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.operation_names" />

### operation\_names

A list of instruction names that the backend supports.

**Return type**

`List`\[`str`]

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.operations" />

### operations

A list of [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") instances that the backend supports.

**Return type**

`List`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")]

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeCasablancaV2#run "qiskit.providers.fake_provider.FakeCasablancaV2.run") method.

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.props_filename" />

### props\_filename

`= 'props_casablanca.json'`

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.provider" />

### provider

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.target" />

### target

A [`qiskit.transpiler.Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") object for the backend.

**Return type**

[Target](qiskit.transpiler.Target "qiskit.transpiler.Target")

<span id="qiskit.providers.fake_provider.FakeCasablancaV2.version" />

### version

`= 2`


---
title: FakeBogota
description: API reference for qiskit.providers.fake_provider.FakeBogota
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeBogota
---

# FakeBogota[¶](#fakebogota "Permalink to this headline")

<span id="qiskit.providers.fake_provider.FakeBogota" />

`FakeBogota`

Bases: `qiskit.providers.fake_provider.fake_pulse_backend.FakePulseBackend`

A fake 5 qubit backend.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeBogota.configuration" />

`FakeBogota.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.fake_provider.FakeBogota.defaults" />

`FakeBogota.defaults()`

Returns a snapshot of device defaults

### name

<span id="qiskit.providers.fake_provider.FakeBogota.name" />

`FakeBogota.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeBogota.properties" />

`FakeBogota.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeBogota.provider" />

`FakeBogota.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeBogota.run" />

`FakeBogota.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeBogota.set_options" />

`FakeBogota.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeBogota.status" />

`FakeBogota.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeBogota.backend_name" />

### backend\_name

`= 'fake_bogota'`

<span id="qiskit.providers.fake_provider.FakeBogota.conf_filename" />

### conf\_filename

`= 'conf_bogota.json'`

<span id="qiskit.providers.fake_provider.FakeBogota.defs_filename" />

### defs\_filename

`= 'defs_bogota.json'`

<span id="qiskit.providers.fake_provider.FakeBogota.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/bogota'`

<span id="qiskit.providers.fake_provider.FakeBogota.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeBogota#run "qiskit.providers.fake_provider.FakeBogota.run") method.

<span id="qiskit.providers.fake_provider.FakeBogota.props_filename" />

### props\_filename

`= 'props_bogota.json'`

<span id="qiskit.providers.fake_provider.FakeBogota.version" />

### version

`= 1`


---
title: FakeParis
description: API reference for qiskit.providers.fake_provider.FakeParis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeParis
---

# FakeParis[¶](#fakeparis "Permalink to this headline")

<span id="qiskit.providers.fake_provider.FakeParis" />

`FakeParis`

Bases: `qiskit.providers.fake_provider.fake_pulse_backend.FakePulseBackend`

A fake Paris backend.

```python
               06                  17
               ↕                    ↕
00 ↔ 01 ↔ 04 ↔ 07 ↔ 10 ↔ 12 ↔ 15 ↔ 18 ↔ 20 ↔ 23
     ↕                   ↕                    ↕
     02                  13                  24
     ↕                   ↕                    ↕
     03 ↔ 05 ↔ 08 ↔ 11 ↔ 14 ↔ 16 ↔ 19 ↔ 22 ↔ 25 ↔ 26
               ↕                    ↕
               09                  20
```

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeParis.configuration" />

`FakeParis.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.fake_provider.FakeParis.defaults" />

`FakeParis.defaults()`

Returns a snapshot of device defaults

### name

<span id="qiskit.providers.fake_provider.FakeParis.name" />

`FakeParis.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeParis.properties" />

`FakeParis.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeParis.provider" />

`FakeParis.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeParis.run" />

`FakeParis.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeParis.set_options" />

`FakeParis.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeParis.status" />

`FakeParis.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeParis.backend_name" />

### backend\_name

`= 'fake_paris'`

<span id="qiskit.providers.fake_provider.FakeParis.conf_filename" />

### conf\_filename

`= 'conf_paris.json'`

<span id="qiskit.providers.fake_provider.FakeParis.defs_filename" />

### defs\_filename

`= 'defs_paris.json'`

<span id="qiskit.providers.fake_provider.FakeParis.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/paris'`

<span id="qiskit.providers.fake_provider.FakeParis.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeParis#run "qiskit.providers.fake_provider.FakeParis.run") method.

<span id="qiskit.providers.fake_provider.FakeParis.props_filename" />

### props\_filename

`= 'props_paris.json'`

<span id="qiskit.providers.fake_provider.FakeParis.version" />

### version

`= 1`


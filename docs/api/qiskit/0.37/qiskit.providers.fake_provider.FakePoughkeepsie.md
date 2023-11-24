---
title: FakePoughkeepsie
description: API reference for qiskit.providers.fake_provider.FakePoughkeepsie
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakePoughkeepsie
---

# FakePoughkeepsie[¶](#fakepoughkeepsie "Permalink to this headline")

<span id="qiskit.providers.fake_provider.FakePoughkeepsie" />

`FakePoughkeepsie`

Bases: `qiskit.providers.fake_provider.fake_backend.FakeBackend`

A fake Poughkeepsie backend.

```python
00 ↔ 01 ↔ 02 ↔ 03 ↔ 04
 ↕                   ↕
05 ↔ 06 ↔ 07 ↔ 08 ↔ 09
 ↕         ↕         ↕
10 ↔ 11 ↔ 12 ↔ 13 ↔ 14
 ↕                   ↕
15 ↔ 16 ↔ 17 ↔ 18 ↔ 19
```

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakePoughkeepsie.configuration" />

`FakePoughkeepsie.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.fake_provider.FakePoughkeepsie.name" />

`FakePoughkeepsie.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakePoughkeepsie.properties" />

`FakePoughkeepsie.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakePoughkeepsie.provider" />

`FakePoughkeepsie.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakePoughkeepsie.run" />

`FakePoughkeepsie.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakePoughkeepsie.set_options" />

`FakePoughkeepsie.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakePoughkeepsie.status" />

`FakePoughkeepsie.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakePoughkeepsie.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakePoughkeepsie#run "qiskit.providers.fake_provider.FakePoughkeepsie.run") method.

<span id="qiskit.providers.fake_provider.FakePoughkeepsie.version" />

### version

`= 1`


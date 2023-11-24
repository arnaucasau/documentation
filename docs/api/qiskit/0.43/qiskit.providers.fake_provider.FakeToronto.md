---
title: FakeToronto
description: API reference for qiskit.providers.fake_provider.FakeToronto
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeToronto
---

# FakeToronto

<span id="qiskit.providers.fake_provider.FakeToronto" />

`FakeToronto`

Bases: `FakePulseBackend`

A fake 27 qubit backend.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

<span id="qiskit-providers-fake-provider-faketoronto-configuration" />

### configuration

<span id="qiskit.providers.fake_provider.FakeToronto.configuration" />

`FakeToronto.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

<span id="qiskit-providers-fake-provider-faketoronto-defaults" />

### defaults

<span id="qiskit.providers.fake_provider.FakeToronto.defaults" />

`FakeToronto.defaults()`

Returns a snapshot of device defaults

<span id="qiskit-providers-fake-provider-faketoronto-name" />

### name

<span id="qiskit.providers.fake_provider.FakeToronto.name" />

`FakeToronto.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

<span id="qiskit-providers-fake-provider-faketoronto-properties" />

### properties

<span id="qiskit.providers.fake_provider.FakeToronto.properties" />

`FakeToronto.properties()`

Returns a snapshot of device properties

<span id="qiskit-providers-fake-provider-faketoronto-provider" />

### provider

<span id="qiskit.providers.fake_provider.FakeToronto.provider" />

`FakeToronto.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit-providers-fake-provider-faketoronto-run" />

### run

<span id="qiskit.providers.fake_provider.FakeToronto.run" />

`FakeToronto.run(run_input, **kwargs)`

Main job in simulator

<span id="qiskit-providers-fake-provider-faketoronto-set-options" />

### set\_options

<span id="qiskit.providers.fake_provider.FakeToronto.set_options" />

`FakeToronto.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

<span id="qiskit-providers-fake-provider-faketoronto-status" />

### status

<span id="qiskit.providers.fake_provider.FakeToronto.status" />

`FakeToronto.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeToronto.backend_name" />

### backend\_name

`= 'fake_toronto'`

<span id="qiskit.providers.fake_provider.FakeToronto.conf_filename" />

### conf\_filename

`= 'conf_toronto.json'`

<span id="qiskit.providers.fake_provider.FakeToronto.defs_filename" />

### defs\_filename

`= 'defs_toronto.json'`

<span id="qiskit.providers.fake_provider.FakeToronto.dirname" />

### dirname

`= '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/toronto'`

<span id="qiskit.providers.fake_provider.FakeToronto.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeToronto#run "qiskit.providers.fake_provider.FakeToronto.run") method.

<span id="qiskit.providers.fake_provider.FakeToronto.props_filename" />

### props\_filename

`= 'props_toronto.json'`

<span id="qiskit.providers.fake_provider.FakeToronto.version" />

### version

`= 1`


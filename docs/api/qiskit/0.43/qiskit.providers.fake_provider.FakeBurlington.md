---
title: FakeBurlington
description: API reference for qiskit.providers.fake_provider.FakeBurlington
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeBurlington
---

# FakeBurlington

<span id="qiskit.providers.fake_provider.FakeBurlington" />

`FakeBurlington`

Bases: `FakeQasmBackend`

A fake 5 qubit backend.

```python
0 ↔ 1 ↔ 3 ↔ 4
    ↕
    2
```

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

<span id="qiskit-providers-fake-provider-fakeburlington-configuration" />

### configuration

<span id="qiskit.providers.fake_provider.FakeBurlington.configuration" />

`FakeBurlington.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

<span id="qiskit-providers-fake-provider-fakeburlington-name" />

### name

<span id="qiskit.providers.fake_provider.FakeBurlington.name" />

`FakeBurlington.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

<span id="qiskit-providers-fake-provider-fakeburlington-properties" />

### properties

<span id="qiskit.providers.fake_provider.FakeBurlington.properties" />

`FakeBurlington.properties()`

Returns a snapshot of device properties

<span id="qiskit-providers-fake-provider-fakeburlington-provider" />

### provider

<span id="qiskit.providers.fake_provider.FakeBurlington.provider" />

`FakeBurlington.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit-providers-fake-provider-fakeburlington-run" />

### run

<span id="qiskit.providers.fake_provider.FakeBurlington.run" />

`FakeBurlington.run(run_input, **kwargs)`

Main job in simulator

<span id="qiskit-providers-fake-provider-fakeburlington-set-options" />

### set\_options

<span id="qiskit.providers.fake_provider.FakeBurlington.set_options" />

`FakeBurlington.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

<span id="qiskit-providers-fake-provider-fakeburlington-status" />

### status

<span id="qiskit.providers.fake_provider.FakeBurlington.status" />

`FakeBurlington.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeBurlington.backend_name" />

### backend\_name

`= 'fake_burlington'`

<span id="qiskit.providers.fake_provider.FakeBurlington.conf_filename" />

### conf\_filename

`= 'conf_burlington.json'`

<span id="qiskit.providers.fake_provider.FakeBurlington.dirname" />

### dirname

`= '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/burlington'`

<span id="qiskit.providers.fake_provider.FakeBurlington.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeBurlington#run "qiskit.providers.fake_provider.FakeBurlington.run") method.

<span id="qiskit.providers.fake_provider.FakeBurlington.props_filename" />

### props\_filename

`= 'props_burlington.json'`

<span id="qiskit.providers.fake_provider.FakeBurlington.version" />

### version

`= 1`


---
title: FakeRueschlikon
description: API reference for qiskit.providers.fake_provider.FakeRueschlikon
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeRueschlikon
---

# FakeRueschlikon

<span id="qiskit.providers.fake_provider.FakeRueschlikon" />

`FakeRueschlikon`

Bases: `FakeBackend`

A fake 16 qubit backend.

```python
1 →  2 →  3 →  4 ←  5 ←  6 →  7 ← 8
↓    ↑    ↓    ↓    ↑    ↓    ↓   ↑
0 ← 15 → 14 ← 13 ← 12 → 11 → 10 ← 9
```

## Methods

<span id="qiskit-providers-fake-provider-fakerueschlikon-configuration" />

### configuration

<span id="qiskit.providers.fake_provider.FakeRueschlikon.configuration" />

`FakeRueschlikon.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

<span id="qiskit-providers-fake-provider-fakerueschlikon-name" />

### name

<span id="qiskit.providers.fake_provider.FakeRueschlikon.name" />

`FakeRueschlikon.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

<span id="qiskit-providers-fake-provider-fakerueschlikon-properties" />

### properties

<span id="qiskit.providers.fake_provider.FakeRueschlikon.properties" />

`FakeRueschlikon.properties()`

Return backend properties

<span id="qiskit-providers-fake-provider-fakerueschlikon-provider" />

### provider

<span id="qiskit.providers.fake_provider.FakeRueschlikon.provider" />

`FakeRueschlikon.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit-providers-fake-provider-fakerueschlikon-run" />

### run

<span id="qiskit.providers.fake_provider.FakeRueschlikon.run" />

`FakeRueschlikon.run(run_input, **kwargs)`

Main job in simulator

<span id="qiskit-providers-fake-provider-fakerueschlikon-set-options" />

### set\_options

<span id="qiskit.providers.fake_provider.FakeRueschlikon.set_options" />

`FakeRueschlikon.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

<span id="qiskit-providers-fake-provider-fakerueschlikon-status" />

### status

<span id="qiskit.providers.fake_provider.FakeRueschlikon.status" />

`FakeRueschlikon.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeRueschlikon.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeRueschlikon#run "qiskit.providers.fake_provider.FakeRueschlikon.run") method.

<span id="qiskit.providers.fake_provider.FakeRueschlikon.version" />

### version

`= 1`


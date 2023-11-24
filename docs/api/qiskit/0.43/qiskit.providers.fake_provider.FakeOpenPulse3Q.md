---
title: FakeOpenPulse3Q
description: API reference for qiskit.providers.fake_provider.FakeOpenPulse3Q
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeOpenPulse3Q
---

# FakeOpenPulse3Q

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q" />

`FakeOpenPulse3Q`

Bases: `FakeBackend`

Trivial extension of the FakeOpenPulse2Q.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

<span id="qiskit-providers-fake-provider-fakeopenpulse3q-configuration" />

### configuration

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.configuration" />

`FakeOpenPulse3Q.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

<span id="qiskit-providers-fake-provider-fakeopenpulse3q-defaults" />

### defaults

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.defaults" />

`FakeOpenPulse3Q.defaults()`

<span id="qiskit-providers-fake-provider-fakeopenpulse3q-name" />

### name

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.name" />

`FakeOpenPulse3Q.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

<span id="qiskit-providers-fake-provider-fakeopenpulse3q-properties" />

### properties

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.properties" />

`FakeOpenPulse3Q.properties()`

Return backend properties

<span id="qiskit-providers-fake-provider-fakeopenpulse3q-provider" />

### provider

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.provider" />

`FakeOpenPulse3Q.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit-providers-fake-provider-fakeopenpulse3q-run" />

### run

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.run" />

`FakeOpenPulse3Q.run(run_input, **kwargs)`

Main job in simulator

<span id="qiskit-providers-fake-provider-fakeopenpulse3q-set-options" />

### set\_options

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.set_options" />

`FakeOpenPulse3Q.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

<span id="qiskit-providers-fake-provider-fakeopenpulse3q-status" />

### status

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.status" />

`FakeOpenPulse3Q.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeOpenPulse3Q#run "qiskit.providers.fake_provider.FakeOpenPulse3Q.run") method.

<span id="qiskit.providers.fake_provider.FakeOpenPulse3Q.version" />

### version

`= 1`


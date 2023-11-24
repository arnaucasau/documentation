---
title: FakeProviderForBackendV2
description: API reference for qiskit.providers.fake_provider.FakeProviderForBackendV2
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeProviderForBackendV2
---

# FakeProviderForBackendV2

<span id="qiskit.providers.fake_provider.FakeProviderForBackendV2" />

`FakeProviderForBackendV2`

Bases: [`ProviderV1`](qiskit.providers.ProviderV1 "qiskit.providers.provider.ProviderV1")

Fake provider containing fake V2 backends.

Only filtering backends by name is implemented. This class contains all fake V2 backends available in the [`qiskit.providers.fake_provider`](providers_fake_provider#module-qiskit.providers.fake_provider "qiskit.providers.fake_provider").

## Methods

<span id="qiskit-providers-fake-provider-fakeproviderforbackendv2-backends" />

### backends

<span id="qiskit.providers.fake_provider.FakeProviderForBackendV2.backends" />

`FakeProviderForBackendV2.backends(name=None, **kwargs)`

Return a list of backends matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

**a list of Backends that match the filtering**

criteria.

**Return type**

list\[[Backend](qiskit.providers.Backend "qiskit.providers.Backend")]

<span id="qiskit-providers-fake-provider-fakeproviderforbackendv2-get-backend" />

### get\_backend

<span id="qiskit.providers.fake_provider.FakeProviderForBackendV2.get_backend" />

`FakeProviderForBackendV2.get_backend(name=None, **kwargs)`

Return a single backend matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

a backend matching the filtering.

**Return type**

[Backend](qiskit.providers.Backend "qiskit.providers.Backend")

**Raises**

[**QiskitBackendNotFoundError**](qiskit.providers.QiskitBackendNotFoundError "qiskit.providers.QiskitBackendNotFoundError") – if no backend could be found or more than one backend matches the filtering criteria.

## Attributes

<span id="qiskit.providers.fake_provider.FakeProviderForBackendV2.version" />

### version

`= 1`


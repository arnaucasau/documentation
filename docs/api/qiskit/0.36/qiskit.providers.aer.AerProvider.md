---
title: AerProvider
description: API reference for qiskit.providers.aer.AerProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.AerProvider
---

# AerProvider

<span id="qiskit.providers.aer.AerProvider" />

`AerProvider`

Bases: [`qiskit.providers.provider.ProviderV1`](qiskit.providers.ProviderV1 "qiskit.providers.provider.ProviderV1")

Provider for Qiskit Aer backends.

## Methods

### backends

<span id="qiskit.providers.aer.AerProvider.backends" />

`AerProvider.backends(name=None, filters=None, **kwargs)`

Return a list of backends matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

**a list of Backends that match the filtering**

criteria.

**Return type**

list\[[Backend](qiskit.providers.Backend "qiskit.providers.Backend")]

### get\_backend

<span id="qiskit.providers.aer.AerProvider.get_backend" />

`AerProvider.get_backend(name=None, **kwargs)`

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

<span id="qiskit.providers.aer.AerProvider.version" />

### version

`= 1`


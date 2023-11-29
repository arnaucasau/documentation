---
title: Credentials
description: API reference for qiskit.providers.ibmq.credentials.Credentials
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.credentials.Credentials
---

# Credentials

<span id="qiskit.providers.ibmq.credentials.Credentials" />

`Credentials(token, url, websockets_url=None, hub=None, group=None, project=None, proxies=None, verify=True)`

IBM Quantum Experience account credentials.

<Admonition title="Note" type="note">
  By convention, two credentials that have the same hub, group, and project are considered equivalent, regardless of other attributes.
</Admonition>

Credentials constructor.

**Parameters**

*   **token** (`str`) – IBM Quantum Experience API token.
*   **url** (`str`) – IBM Quantum Experience URL.
*   **websockets\_url** (`Optional`\[`str`]) – URL for websocket server.
*   **hub** (`Optional`\[`str`]) – The hub to use.
*   **group** (`Optional`\[`str`]) – The group to use.
*   **project** (`Optional`\[`str`]) – The project to use.
*   **proxies** (`Optional`\[`Dict`]) – Proxy configuration.
*   **verify** (`bool`) – If `False`, ignores SSL certificates errors.

## Methods

### connection\_parameters

<span id="qiskit.providers.ibmq.credentials.Credentials.connection_parameters" />

`Credentials.connection_parameters()`

Construct connection related parameters.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

A dictionary with connection-related parameters in the format expected by `requests`. The following keys can be present: `proxies`, `verify`, and `auth`.

### is\_ibmq

<span id="qiskit.providers.ibmq.credentials.Credentials.is_ibmq" />

`Credentials.is_ibmq()`

Return whether the credentials represent an IBM Quantum Experience account.

**Return type**

`bool`

### unique\_id

<span id="qiskit.providers.ibmq.credentials.Credentials.unique_id" />

`Credentials.unique_id()`

Return a value that uniquely identifies these credentials.

By convention, two credentials that have the same hub, group, and project are considered equivalent.

**Return type**

`HubGroupProject`

**Returns**

A `HubGroupProject` instance.


---
title: least_busy
description: API reference for qiskit.providers.ibmq.least_busy
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.ibmq.least_busy
---

# least\_busy

<span id="qiskit.providers.ibmq.least_busy" />

`least_busy(backends)`

Return the least busy backend from a list.

Return the least busy available backend for those that have a `pending_jobs` in their `status`. Note that local backends may not have this attribute.

**Parameters**

**backends** (`List`\[[`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend")]) – The backends to choose from.

**Return type**

[`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend")

**Returns**

The backend with the fewest number of pending jobs.

**Raises**

[**IBMQError**](qiskit.providers.ibmq.IBMQError "qiskit.providers.ibmq.IBMQError") – If the backends list is empty or if a backend in the list does not have the `pending_jobs` attribute in its status.


---
title: BackendJobLimit
description: API reference for qiskit.providers.ibmq.BackendJobLimit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.BackendJobLimit
---

<Admonition title="Warning" type="caution">
  The package `qiskit-ibmq-provider` is being deprecated and its repo is going to be archived soon. Please transition to the new packages. More information in [https://ibm.biz/provider\_migration\_guide](https://ibm.biz/provider_migration_guide)
</Admonition>

# BackendJobLimit[¶](#backendjoblimit "Permalink to this headline")

<span id="qiskit.providers.ibmq.BackendJobLimit" />

`BackendJobLimit(maximum_jobs, running_jobs, **kwargs)`

Bases: `object`

Job limit for a backend.

Represent the job limit for a backend on a specific provider. This instance is returned by the [`IBMQBackend.job_limit()`](qiskit.providers.ibmq.IBMQBackend#job_limit "qiskit.providers.ibmq.IBMQBackend.job_limit") method.

<span id="qiskit.providers.ibmq.BackendJobLimit.maximum_jobs" />

### maximum\_jobs

The maximum number of concurrent jobs this account is allowed to submit to this backend, with this provider.

<span id="qiskit.providers.ibmq.BackendJobLimit.running_jobs" />

### running\_jobs

The current number of active jobs on this backend, with this provider.

BackendJobLimit constructor.

**Parameters**

*   **maximum\_jobs** (`int`) – The maximum number of concurrent jobs this account is allowed to submit to this backend, with this provider.
*   **running\_jobs** (`int`) – The current number of active jobs on this backend, with this provider.
*   **kwargs** (`Any`) – Additional attributes that will be added as instance members.


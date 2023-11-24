---
title: QueueInfo
description: API reference for qiskit.providers.ibmq.job.QueueInfo
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.job.QueueInfo
---

<Admonition title="Warning" type="caution">
  The package `qiskit-ibmq-provider` is being deprecated and its repo is going to be archived soon. Please transition to the new packages. More information in [https://ibm.biz/provider\_migration\_guide](https://ibm.biz/provider_migration_guide)
</Admonition>

# QueueInfo[¶](#queueinfo "Permalink to this headline")

<span id="qiskit.providers.ibmq.job.QueueInfo" />

`QueueInfo(position=None, status=None, estimated_start_time=None, estimated_complete_time=None, hub_priority=None, group_priority=None, project_priority=None, job_id=None, **kwargs)`

Bases: `object`

Queue information for a job.

QueueInfo constructor.

**Parameters**

*   **position** (`Optional`\[`int`]) – Position in the queue.
*   **status** (`Optional`\[`str`]) – Job status.
*   **estimated\_start\_time** (`Union`\[`str`, `datetime`, `None`]) – Estimated start time for the job, in UTC.
*   **estimated\_complete\_time** (`Union`\[`str`, `datetime`, `None`]) – Estimated complete time for the job, in UTC.
*   **hub\_priority** (`Optional`\[`float`]) – Dynamic priority for the hub.
*   **group\_priority** (`Optional`\[`float`]) – Dynamic priority for the group.
*   **project\_priority** (`Optional`\[`float`]) – Dynamic priority for the project.
*   **job\_id** (`Optional`\[`str`]) – Job ID.
*   **kwargs** (`Any`) – Additional attributes.

## Methods

<Admonition title="Warning" type="caution">
  The package `qiskit-ibmq-provider` is being deprecated and its repo is going to be archived soon. Please transition to the new packages. More information in [https://ibm.biz/provider\_migration\_guide](https://ibm.biz/provider_migration_guide)
</Admonition>

### format

<span id="qiskit.providers.ibmq.job.QueueInfo.format" />

`QueueInfo.format()`

Build a user-friendly report for the job queue information.

**Return type**

`str`

**Returns**

The job queue information report.

## Attributes

<span id="qiskit.providers.ibmq.job.QueueInfo.estimated_complete_time" />

### estimated\_complete\_time

Return estimated complete time in local time.

**Return type**

`Optional`\[`datetime`]

<span id="qiskit.providers.ibmq.job.QueueInfo.estimated_start_time" />

### estimated\_start\_time

Return estimated start time in local time.

**Return type**

`Optional`\[`datetime`]


---
title: QueueInfo
description: API reference for qiskit.providers.ibmq.job.QueueInfo
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.job.QueueInfo
---

# QueueInfo

<span id="qiskit.providers.ibmq.job.QueueInfo" />

`QueueInfo(position=None, status=None, estimated_start_time=None, estimated_complete_time=None, hub_priority=None, group_priority=None, project_priority=None, job_id=None, **kwargs)`

Queue information for a job.

<span id="qiskit.providers.ibmq.job.QueueInfo.position" />

### position

Job position in the queue within the scope of the provider.

<span id="qiskit.providers.ibmq.job.QueueInfo.estimated_start_time" />

### estimated\_start\_time

Estimated start time for the job, in UTC.

<span id="qiskit.providers.ibmq.job.QueueInfo.estimated_complete_time" />

### estimated\_complete\_time

Estimated completion time for the job, in UTC.

<span id="qiskit.providers.ibmq.job.QueueInfo.hub_priority" />

### hub\_priority

Dynamic priority for the hub the job is in.

<span id="qiskit.providers.ibmq.job.QueueInfo.group_priority" />

### group\_priority

Dynamic priority for the group the job is in.

<span id="qiskit.providers.ibmq.job.QueueInfo.project_priority" />

### project\_priority

Dynamic priority for the project the job is in.

<span id="qiskit.providers.ibmq.job.QueueInfo.job_id" />

### job\_id

Job ID.

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

### format

<span id="qiskit.providers.ibmq.job.QueueInfo.format" />

`QueueInfo.format()`

Build a user-friendly report for the job queue information.

**Return type**

`str`

**Returns**

The job queue information report.


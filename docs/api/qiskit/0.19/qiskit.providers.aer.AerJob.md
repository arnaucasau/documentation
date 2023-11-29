---
title: AerJob
description: API reference for qiskit.providers.aer.AerJob
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.AerJob
---

# AerJob

<span id="qiskit.providers.aer.AerJob" />

`AerJob(backend, job_id, fn, qobj, *args)`

AerJob class.

<span id="qiskit.providers.aer.AerJob._executor" />

### \_executor

executor to handle asynchronous jobs

**Type**

futures.Executor

Initializes the asynchronous job.

**Parameters**

*   **backend** – the backend used to run the job.
*   **job\_id** – a unique id in the context of the backend used to run the job.

## Methods

### backend

<span id="qiskit.providers.aer.AerJob.backend" />

`AerJob.backend()`

Return the instance of the backend used for this job.

### cancel

<span id="qiskit.providers.aer.AerJob.cancel" />

`AerJob.cancel()`

Attempt to cancel the job.

### cancelled

<span id="qiskit.providers.aer.AerJob.cancelled" />

`AerJob.cancelled()`

Return whether the job has been cancelled.

**Return type**

`bool`

### done

<span id="qiskit.providers.aer.AerJob.done" />

`AerJob.done()`

Return whether the job has successfully run.

**Return type**

`bool`

### in\_final\_state

<span id="qiskit.providers.aer.AerJob.in_final_state" />

`AerJob.in_final_state()`

Return whether the job is in a final job state.

**Return type**

`bool`

### job\_id

<span id="qiskit.providers.aer.AerJob.job_id" />

`AerJob.job_id()`

Return a unique id identifying the job.

**Return type**

`str`

### qobj

<span id="qiskit.providers.aer.AerJob.qobj" />

`AerJob.qobj()`

Return the Qobj submitted for this job.

**Returns**

the Qobj submitted for this job.

**Return type**

[Qobj](qiskit.qobj.Qobj "qiskit.qobj.Qobj")

### result

<span id="qiskit.providers.aer.AerJob.result" />

`AerJob.result(timeout=None)`

Get job result. The behavior is the same as the underlying concurrent Future objects,

[https://docs.python.org/3/library/concurrent.futures.html#future-objects](https://docs.python.org/3/library/concurrent.futures.html#future-objects)

**Parameters**

**timeout** (*float*) – number of seconds to wait for results.

**Returns**

Result object

**Return type**

qiskit.Result

**Raises**

*   **concurrent.futures.TimeoutError** – if timeout occurred.
*   **concurrent.futures.CancelledError** – if job cancelled before completed.

### running

<span id="qiskit.providers.aer.AerJob.running" />

`AerJob.running()`

Return whether the job is actively running.

**Return type**

`bool`

### status

<span id="qiskit.providers.aer.AerJob.status" />

`AerJob.status()`

Gets the status of the job by querying the Python’s future

**Returns**

The current JobStatus

**Return type**

[JobStatus](qiskit.providers.JobStatus "qiskit.providers.JobStatus")

**Raises**

*   [**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – If the future is in unexpected state
*   **concurrent.futures.TimeoutError** – if timeout occurred.

### submit

<span id="qiskit.providers.aer.AerJob.submit" />

`AerJob.submit()`

Submit the job to the backend for execution.

**Raises**

*   **QobjValidationError** – if the JSON serialization of the Qobj passed
*   **during construction does not validate against the Qobj schema.** –
*   [**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – if trying to re-submit the job.

### wait\_for\_final\_state

<span id="qiskit.providers.aer.AerJob.wait_for_final_state" />

`AerJob.wait_for_final_state(timeout=None, wait=5, callback=None)`

Poll the job status until it progresses to a final state such as `DONE` or `ERROR`.

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Seconds to wait for the job. If `None`, wait indefinitely.

*   **wait** (`float`) – Seconds between queries.

*   **callback** (`Optional`\[`Callable`]) –

    Callback function invoked after each query. The following positional arguments are provided to the callback function:

    *   job\_id: Job ID
    *   job\_status: Status of the job from the last query
    *   job: This BaseJob instance

    Note: different subclass might provide different arguments to the callback function.

**Raises**

[**JobTimeoutError**](qiskit.providers.JobTimeoutError "qiskit.providers.JobTimeoutError") – If the job does not reach a final state before the specified timeout.

**Return type**

`None`


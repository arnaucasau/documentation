---
title: AerJobSet
description: API reference for qiskit.providers.aer.jobs.AerJobSet
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.jobs.AerJobSet
---

# AerJobSet

<span id="qiskit.providers.aer.jobs.AerJobSet" />

`AerJobSet(backend, job_id, fn, experiments, executor=None)`

Bases: [`qiskit.providers.job.JobV1`](qiskit.providers.JobV1 "qiskit.providers.job.JobV1")

A set of [`AerJob`](qiskit.providers.aer.jobs.AerJob "qiskit.providers.aer.jobs.AerJob") classes for Qiskit Aer simulators.

An instance of this class is returned when you submit experiments with executor option. It provides methods that allow you to interact with the jobs as a single entity. For example, you can retrieve the results for all of the jobs using [`result()`](qiskit.providers.aer.jobs.AerJobSet#result "qiskit.providers.aer.jobs.AerJobSet.result") and cancel all jobs using [`cancel()`](qiskit.providers.aer.jobs.AerJobSet#cancel "qiskit.providers.aer.jobs.AerJobSet.cancel").

AerJobSet constructor.

**Parameters**

*   **backend** (*Aerbackend*) – Aerbackend.
*   **job\_id** (*int*) – Job Id.
*   **fn** (*function*) – a callable function to execute qobj on backend. This should usually be a bound `AerBackend._run()` method, with the signature (qobj: QasmQobj, job\_id: str) -> Result.
*   **experiments** (*List\[*[*QasmQobj*](qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj")*]*) – List\[QasmQobjs] to execute.
*   **executor** (*ThreadPoolExecutor or dask.distributed.client*) – The executor to be used to submit the job.

## Methods

### backend

<span id="qiskit.providers.aer.jobs.AerJobSet.backend" />

`AerJobSet.backend()`

Return the backend where this job was executed.

**Return type**

[`Backend`](qiskit.providers.Backend "qiskit.providers.backend.Backend")

### cancel

<span id="qiskit.providers.aer.jobs.AerJobSet.cancel" />

`AerJobSet.cancel()`

Cancel all jobs in this job set.

**Return type**

`None`

### cancelled

<span id="qiskit.providers.aer.jobs.AerJobSet.cancelled" />

`AerJobSet.cancelled()`

Return whether the job has been cancelled.

**Return type**

`bool`

### done

<span id="qiskit.providers.aer.jobs.AerJobSet.done" />

`AerJobSet.done()`

Return whether the job has successfully run.

**Return type**

`bool`

### executor

<span id="qiskit.providers.aer.jobs.AerJobSet.executor" />

`AerJobSet.executor()`

Return the executor for this job

### in\_final\_state

<span id="qiskit.providers.aer.jobs.AerJobSet.in_final_state" />

`AerJobSet.in_final_state()`

Return whether the job is in a final job state such as `DONE` or `ERROR`.

**Return type**

`bool`

### job

<span id="qiskit.providers.aer.jobs.AerJobSet.job" />

`AerJobSet.job(experiment)`

Retrieve the job used to submit the specified experiment and its index.

**Parameters**

**experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")]) –

Retrieve the job used to submit this experiment. Several types are accepted for convenience:

> *   str: The name of the experiment.
> *   QuantumCircuit: The name of the circuit instance will be used.
> *   Schedule: The name of the schedule instance will be used.

**Return type**

`Tuple`\[[`AerJob`](qiskit.providers.aer.jobs.AerJob "qiskit.providers.aer.jobs.aerjob.AerJob"), `int`]

**Returns**

A tuple of the job used to submit the experiment and the experiment index.

**Raises**

[**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – If the job for the experiment could not be found.

### job\_id

<span id="qiskit.providers.aer.jobs.AerJobSet.job_id" />

`AerJobSet.job_id()`

Return a unique id identifying the job.

**Return type**

`str`

### result

<span id="qiskit.providers.aer.jobs.AerJobSet.result" />

`AerJobSet.result(timeout=None)`

Return the results of the jobs as a single Result object.

This call will block until all job results become available or the timeout is reached.

**Parameters**

**timeout** (`Optional`\[`float`]) – Number of seconds to wait for job results.

**Returns**

Result object

**Return type**

qiskit.Result

**Raises**

[**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – if unable to retrieve all job results before the specified timeout.

### running

<span id="qiskit.providers.aer.jobs.AerJobSet.running" />

`AerJobSet.running()`

Return whether the job is actively running.

**Return type**

`bool`

### status

<span id="qiskit.providers.aer.jobs.AerJobSet.status" />

`AerJobSet.status(worker)`

Return the status of each job in this set.

#### Args

worker: Worker id. When None, all workers’ statuses are returned.

**Return type**

`Union`\[[`JobStatus`](qiskit.providers.JobStatus "qiskit.providers.jobstatus.JobStatus"), `List`\[[`JobStatus`](qiskit.providers.JobStatus "qiskit.providers.jobstatus.JobStatus")]]

**Returns**

A list of job statuses.

### submit

<span id="qiskit.providers.aer.jobs.AerJobSet.submit" />

`AerJobSet.submit()`

Execute this set of jobs on an executor.

**Raises**

**RuntimeError** – If the jobs were already submitted.

### wait\_for\_final\_state

<span id="qiskit.providers.aer.jobs.AerJobSet.wait_for_final_state" />

`AerJobSet.wait_for_final_state(timeout=None, wait=5, callback=None)`

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

### worker

<span id="qiskit.providers.aer.jobs.AerJobSet.worker" />

`AerJobSet.worker(experiment)`

Retrieve the index of job.

**Parameters**

**experiment** (`Union`\[`str`, [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")]) –

Retrieve the job used to submit this experiment. Several types are accepted for convenience:

> *   str: The name of the experiment.
> *   QuantumCircuit: The name of the circuit instance will be used.
> *   Schedule: The name of the schedule instance will be used.

**Return type**

`Union`\[`int`, `List`\[`int`]]

**Returns**

list or integer value of the job id

**Raises**

[**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – If the job for the experiment could not be found.

### worker\_job

<span id="qiskit.providers.aer.jobs.AerJobSet.worker_job" />

`AerJobSet.worker_job(worker)`

Retrieve the job specified with job’s id

**Parameters**

**worker** (`Union`\[`None`, `int`, `Iterable`\[`int`]]) – retrive job used to submit with this job id.

**Return type**

`Union`\[[`AerJob`](qiskit.providers.aer.jobs.AerJob "qiskit.providers.aer.jobs.aerjob.AerJob"), `List`\[[`AerJob`](qiskit.providers.aer.jobs.AerJob "qiskit.providers.aer.jobs.aerjob.AerJob")]]

**Returns**

A list of `AerJob` instances that represents the submitted jobs.

**Raises**

[**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – If the job for the experiment could not be found.

### worker\_results

<span id="qiskit.providers.aer.jobs.AerJobSet.worker_results" />

`AerJobSet.worker_results(worker, timeout=None)`

Return the result of the jobs specified with worker\_id.

When the worker is None, this call return all worker’s result.

**Parameters**

*   **worker** (`Union`\[`None`, `int`, `Iterable`\[`int`]]) – Worker id to wait for job result.
*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job results.

**Returns**

Result object instance that can be used to retrieve results for individual experiments.

**Return type**

qiskit.Result

**Raises**

[**JobError**](qiskit.providers.JobError "qiskit.providers.JobError") – if unable to retrieve all job results before the specified timeout.

## Attributes

<span id="qiskit.providers.aer.jobs.AerJobSet.version" />

### version

`= 1`


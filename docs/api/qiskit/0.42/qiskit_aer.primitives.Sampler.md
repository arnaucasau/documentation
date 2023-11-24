---
title: Sampler
description: API reference for qiskit_aer.primitives.Sampler
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_aer.primitives.Sampler
---

# Sampler[¶](#sampler "Permalink to this headline")

<span id="qiskit_aer.primitives.Sampler" />

`Sampler(*, backend_options=None, transpile_options=None, run_options=None, skip_transpilation=False)`

Bases: [`qiskit.primitives.base.base_sampler.BaseSampler`](qiskit.primitives.BaseSampler "qiskit.primitives.base.base_sampler.BaseSampler")

Aer implementation of Sampler class.

**Run Options**

*   **shots** (None or int) – The number of shots. If None, it calculates the probabilities exactly. Otherwise, it samples from multinomial distributions.
*   **seed** (int) – Set a fixed seed for `seed_simulator`. If shots is None, this option is ignored.

<Admonition title="Note" type="note">
  Precedence of seeding is as follows:

  1.  `seed_simulator` in runtime (i.e. in `__call__()`)
  2.  `seed` in runtime (i.e. in `__call__()`)
  3.  `seed_simulator` of `backend_options`.
  4.  default.
</Admonition>

**Parameters**

*   **backend\_options** (*dict | None*) – Options passed to AerSimulator.
*   **transpile\_options** (*dict | None*) – Options passed to transpile.
*   **run\_options** (*dict | None*) – Options passed to run.
*   **skip\_transpilation** (*bool*) – if True, transpilation is skipped.

## Methods

### close

<span id="qiskit_aer.primitives.Sampler.close" />

`Sampler.close()`

Close the session and free resources

### run

<span id="qiskit_aer.primitives.Sampler.run" />

`Sampler.run(circuits, parameter_values=None, **run_options)`

Run the job of the sampling of bitstrings.

**Parameters**

*   **circuits** – One of more circuit objects.
*   **parameter\_values** – Parameters to be bound to the circuit.
*   **run\_options** – Backend runtime options used for circuit execution.

**Returns**

The job object of the result of the sampler. The i-th result corresponds to `circuits[i]` evaluated with parameters bound as `parameter_values[i]`.

**Raises**

**ValueError** – Invalid arguments are given.

### set\_options

<span id="qiskit_aer.primitives.Sampler.set_options" />

`Sampler.set_options(**fields)`

Set options values for the estimator.

**Parameters**

**\*\*fields** – The fields to update the options

## Attributes

<span id="qiskit_aer.primitives.Sampler.circuits" />

### circuits

Quantum circuits to be sampled.

**Returns**

The quantum circuits to be sampled.

<span id="qiskit_aer.primitives.Sampler.options" />

### options

Return options values for the estimator.

**Return type**

[`Options`](qiskit.providers.Options "qiskit.providers.options.Options")

**Returns**

options

<span id="qiskit_aer.primitives.Sampler.parameters" />

### parameters

Parameters of quantum circuits.

**Returns**

List of the parameters in each quantum circuit.


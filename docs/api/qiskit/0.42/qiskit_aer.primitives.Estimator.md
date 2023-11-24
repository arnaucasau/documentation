---
title: Estimator
description: API reference for qiskit_aer.primitives.Estimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_aer.primitives.Estimator
---

# Estimator[¶](#estimator "Permalink to this headline")

<span id="qiskit_aer.primitives.Estimator" />

`Estimator(*, backend_options=None, transpile_options=None, run_options=None, approximation=False, skip_transpilation=False, abelian_grouping=True)`

Bases: [`qiskit.primitives.base.base_estimator.BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.base.base_estimator.BaseEstimator")

Aer implmentation of Estimator.

**Run Options**

*   **shots** (None or int) – The number of shots. If None and approximation is True, it calculates the exact expectation values. Otherwise, it calculates expectation values with sampling.
*   **seed** (int) – Set a fixed seed for the sampling.

<Admonition title="Note" type="note">
  Precedence of seeding for `seed_simulator` is as follows:

  1.  `seed_simulator` in runtime (i.e. in `__call__()`)
  2.  `seed` in runtime (i.e. in `__call__()`)
  3.  `seed_simulator` of `backend_options`.
  4.  default.

  `seed` is also used for sampling from a normal distribution when approximation is True.
</Admonition>

**Parameters**

*   **backend\_options** (*dict | None*) – Options passed to AerSimulator.
*   **transpile\_options** (*dict | None*) – Options passed to transpile.
*   **run\_options** (*dict | None*) – Options passed to run.
*   **approximation** (*bool*) – If True, it calculates expectation values with normal distribution approximation.
*   **skip\_transpilation** (*bool*) – If True, transpilation is skipped.
*   **abelian\_grouping** (*bool*) – Whether the observable should be grouped into commuting. If approximation is True, this parameter is ignored and assumed to be False.

## Methods

### close

<span id="qiskit_aer.primitives.Estimator.close" />

`Estimator.close()`

Close the session and free resources

### run

<span id="qiskit_aer.primitives.Estimator.run" />

`Estimator.run(circuits, observables, parameter_values=None, **run_options)`

Run the job of the estimation of expectation value(s).

`circuits`, `observables`, and `parameter_values` should have the same length. The i-th element of the result is the expectation of observable

```python
obs = observables[i]
```

for the state prepared by

```python
circ = circuits[i]
```

with bound parameters

```python
values = parameter_values[i].
```

**Parameters**

*   **circuits** – one or more circuit objects.
*   **observables** – one or more observable objects. Several formats are allowed; importantly, `str` should follow the string representation format for [`Pauli`](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli") objects.
*   **parameter\_values** – concrete parameters to be bound.
*   **run\_options** – runtime options used for circuit execution.

**Returns**

The job object of EstimatorResult.

**Raises**

*   **TypeError** – Invalid argument type given.
*   **ValueError** – Invalid argument values given.

### set\_options

<span id="qiskit_aer.primitives.Estimator.set_options" />

`Estimator.set_options(**fields)`

Set options values for the estimator.

**Parameters**

**\*\*fields** – The fields to update the options

## Attributes

<span id="qiskit_aer.primitives.Estimator.circuits" />

### circuits

Quantum circuits that represents quantum states.

**Returns**

The quantum circuits.

<span id="qiskit_aer.primitives.Estimator.observables" />

### observables

Observables to be estimated.

**Returns**

The observables.

<span id="qiskit_aer.primitives.Estimator.options" />

### options

Return options values for the estimator.

**Return type**

[`Options`](qiskit.providers.Options "qiskit.providers.options.Options")

**Returns**

options

<span id="qiskit_aer.primitives.Estimator.parameters" />

### parameters

Parameters of the quantum circuits.

**Returns**

Parameters, where `parameters[i][j]` is the j-th parameter of the i-th circuit.


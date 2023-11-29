---
title: BackendEstimator
description: API reference for qiskit.primitives.BackendEstimator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.primitives.BackendEstimator
---

# BackendEstimator[¶](#backendestimator "Permalink to this headline")

<span id="qiskit.primitives.BackendEstimator" />

`BackendEstimator(backend, options=None, abelian_grouping=True, bound_pass_manager=None, skip_transpilation=False)`

Bases: [`qiskit.primitives.base.base_estimator.BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.base.base_estimator.BaseEstimator")

Evaluates expectation value using Pauli rotation gates.

The [`BackendEstimator`](#qiskit.primitives.BackendEstimator "qiskit.primitives.BackendEstimator") class is a generic implementation of the [`BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator") interface that is used to wrap a [`BackendV2`](qiskit.providers.BackendV2 "qiskit.providers.BackendV2") (or [`BackendV1`](qiskit.providers.BackendV1 "qiskit.providers.BackendV1")) object in the [`BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator") API. It facilitates using backends that do not provide a native [`BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator") implementation in places that work with [`BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator"), such as algorithms in [`qiskit.algorithms`](algorithms#module-qiskit.algorithms "qiskit.algorithms") including [`VQE`](qiskit.algorithms.minimum_eigensolvers.VQE "qiskit.algorithms.minimum_eigensolvers.VQE"). However, if you’re using a provider that has a native implementation of [`BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator"), it is a better choice to leverage that native implementation as it will likely include additional optimizations and be a more efficient implementation. The generic nature of this class precludes doing any provider- or backend-specific optimizations.

Initalize a new BackendEstimator instance

**Parameters**

*   **backend** ([*BackendV1*](qiskit.providers.BackendV1 "qiskit.providers.BackendV1")  *|*[*BackendV2*](qiskit.providers.BackendV2 "qiskit.providers.BackendV2")) – Required: the backend to run the primitive on
*   **options** (*dict | None*) – Default options.
*   **abelian\_grouping** (*bool*) – Whether the observable should be grouped into commuting
*   **bound\_pass\_manager** ([*PassManager*](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager") *| None*) – An optional pass manager to run after parameter binding.
*   **skip\_transpilation** (*bool*) – If this is set to True the internal compilation of the input circuits is skipped and the circuit objects will be directly executed when this object is called.

## Methods

### close

<span id="qiskit.primitives.BackendEstimator.close" />

`BackendEstimator.close()`

Close the session and free resources

### run

<span id="qiskit.primitives.BackendEstimator.run" />

`BackendEstimator.run(circuits, observables, parameter_values=None, **run_options)`

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

<span id="qiskit.primitives.BackendEstimator.set_options" />

`BackendEstimator.set_options(**fields)`

Set options values for the estimator.

**Parameters**

**\*\*fields** – The fields to update the options

### set\_transpile\_options

<span id="qiskit.primitives.BackendEstimator.set_transpile_options" />

`BackendEstimator.set_transpile_options(**fields)`

Set the transpiler options for transpiler. :param \*\*fields: The fields to update the options

## Attributes

<span id="qiskit.primitives.BackendEstimator.backend" />

### backend

Returns: The backend which this estimator object based on

**Return type**

[BackendV1](qiskit.providers.BackendV1 "qiskit.providers.BackendV1") | [BackendV2](qiskit.providers.BackendV2 "qiskit.providers.BackendV2")

<span id="qiskit.primitives.BackendEstimator.circuits" />

### circuits

Quantum circuits that represents quantum states.

**Returns**

The quantum circuits.

<span id="qiskit.primitives.BackendEstimator.observables" />

### observables

Observables to be estimated.

**Returns**

The observables.

<span id="qiskit.primitives.BackendEstimator.options" />

### options

Return options values for the estimator.

**Return type**

[`Options`](qiskit.providers.Options "qiskit.providers.options.Options")

**Returns**

options

<span id="qiskit.primitives.BackendEstimator.parameters" />

### parameters

Parameters of the quantum circuits.

**Returns**

Parameters, where `parameters[i][j]` is the j-th parameter of the i-th circuit.

<span id="qiskit.primitives.BackendEstimator.preprocessed_circuits" />

### preprocessed\_circuits

Transpiled quantum circuits produced by preprocessing :returns: List of the transpiled quantum circuit

<span id="qiskit.primitives.BackendEstimator.transpile_options" />

### transpile\_options

Return the transpiler options for transpiling the circuits.

**Return type**

[`Options`](qiskit.providers.Options "qiskit.providers.options.Options")

<span id="qiskit.primitives.BackendEstimator.transpiled_circuits" />

### transpiled\_circuits

Transpiled quantum circuits. :returns: List of the transpiled quantum circuit

**Raises**

**QiskitError** – if the instance has been closed.


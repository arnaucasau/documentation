---
title: CRS
description: API reference for qiskit.algorithms.optimizers.CRS
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.CRS
---

# CRS[¶](#crs "Permalink to this headline")

<span id="qiskit.algorithms.optimizers.CRS" />

`CRS(max_evals=1000)`

Bases: `qiskit.algorithms.optimizers.nlopts.nloptimizer.NLoptOptimizer`

Controlled Random Search (CRS) with local mutation optimizer.

Controlled Random Search (CRS) with local mutation is part of the family of the CRS optimizers. The CRS optimizers start with a random population of points, and randomly evolve these points by heuristic rules. In the case of CRS with local mutation, the evolution is a randomized version of the [`NELDER_MEAD`](qiskit.algorithms.optimizers.NELDER_MEAD "qiskit.algorithms.optimizers.NELDER_MEAD") local optimizer.

NLopt global optimizer, derivative-free. For further detail, please refer to [https://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#controlled-random-search-crs-with-local-mutation](https://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#controlled-random-search-crs-with-local-mutation)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

**MissingOptionalLibraryError** – NLopt library not installed.

## Methods

### get\_nlopt\_optimizer

<span id="qiskit.algorithms.optimizers.CRS.get_nlopt_optimizer" />

`CRS.get_nlopt_optimizer()`

Return NLopt optimizer type

**Return type**

`NLoptOptimizerType`

### get\_support\_level

<span id="qiskit.algorithms.optimizers.CRS.get_support_level" />

`CRS.get_support_level()`

return support level dictionary

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.CRS.gradient_num_diff" />

`static CRS.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=None)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** (*float*) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** (*int*) – max evals grouped, defaults to 1 (i.e. no batching).

**Returns**

the gradient computed

**Return type**

grad

### minimize

<span id="qiskit.algorithms.optimizers.CRS.minimize" />

`CRS.minimize(fun, x0, jac=None, bounds=None)`

Minimize the scalar function.

**Parameters**

*   **fun** (`Callable`\[\[`Union`\[`float`, `ndarray`]], `float`]) – The scalar function to minimize.
*   **x0** (`Union`\[`float`, `ndarray`]) – The initial point for the minimization.
*   **jac** (`Optional`\[`Callable`\[\[`Union`\[`float`, `ndarray`]], `Union`\[`float`, `ndarray`]]]) – The gradient of the scalar function `fun`.
*   **bounds** (`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]) – Bounds for the variables of `fun`. This argument might be ignored if the optimizer does not support bounds.

**Return type**

[`OptimizerResult`](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.optimizer.OptimizerResult")

**Returns**

The result of the optimization, containing e.g. the result as attribute `x`.

### print\_options

<span id="qiskit.algorithms.optimizers.CRS.print_options" />

`CRS.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.CRS.set_max_evals_grouped" />

`CRS.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.CRS.set_options" />

`CRS.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.CRS.wrap_function" />

`static CRS.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.CRS.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.CRS.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.CRS.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.CRS.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.CRS.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.CRS.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.CRS.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.CRS.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.CRS.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.CRS.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.CRS.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.CRS.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.CRS.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.CRS.settings" />

### settings


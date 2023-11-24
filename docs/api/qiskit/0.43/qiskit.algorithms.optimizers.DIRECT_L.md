---
title: DIRECT_L
description: API reference for qiskit.algorithms.optimizers.DIRECT_L
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.DIRECT_L
---

<span id="direct-l" />

# DIRECT\_L

<span id="qiskit.algorithms.optimizers.DIRECT_L" />

`DIRECT_L(max_evals=1000)`

Bases: `NLoptOptimizer`

DIviding RECTangles Locally-biased optimizer.

DIviding RECTangles (DIRECT) is a deterministic-search algorithms based on systematic division of the search domain into increasingly smaller hyper-rectangles. The DIRECT-L version is a “locally biased” variant of DIRECT that makes the algorithm more biased towards local search, so that it is more efficient for functions with few local minima.

NLopt global optimizer, derivative-free. For further detail, please refer to [http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#direct-and-direct-l](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#direct-and-direct-l)

**Parameters**

**max\_evals** (*int*) – Maximum allowed number of function evaluations.

**Raises**

**MissingOptionalLibraryError** – NLopt library not installed.

## Methods

<span id="qiskit-algorithms-optimizers-direct-l-get-nlopt-optimizer" />

### get\_nlopt\_optimizer

<span id="qiskit.algorithms.optimizers.DIRECT_L.get_nlopt_optimizer" />

`DIRECT_L.get_nlopt_optimizer()`

Return NLopt optimizer type

**Return type**

*NLoptOptimizerType*

<span id="qiskit-algorithms-optimizers-direct-l-get-support-level" />

### get\_support\_level

<span id="qiskit.algorithms.optimizers.DIRECT_L.get_support_level" />

`DIRECT_L.get_support_level()`

return support level dictionary

<span id="qiskit-algorithms-optimizers-direct-l-gradient-num-diff" />

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.DIRECT_L.gradient_num_diff" />

`static DIRECT_L.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=None)`

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

<span id="qiskit-algorithms-optimizers-direct-l-minimize" />

### minimize

<span id="qiskit.algorithms.optimizers.DIRECT_L.minimize" />

`DIRECT_L.minimize(fun, x0, jac=None, bounds=None)`

Minimize the scalar function.

**Parameters**

*   **fun** (*Callable\[\[POINT], float]*) – The scalar function to minimize.
*   **x0** (*POINT*) – The initial point for the minimization.
*   **jac** (*Callable\[\[POINT], POINT] | None*) – The gradient of the scalar function `fun`.
*   **bounds** (*list\[tuple\[float, float]] | None*) – Bounds for the variables of `fun`. This argument might be ignored if the optimizer does not support bounds.

**Returns**

The result of the optimization, containing e.g. the result as attribute `x`.

**Return type**

[OptimizerResult](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.OptimizerResult")

<span id="qiskit-algorithms-optimizers-direct-l-print-options" />

### print\_options

<span id="qiskit.algorithms.optimizers.DIRECT_L.print_options" />

`DIRECT_L.print_options()`

Print algorithm-specific options.

<span id="qiskit-algorithms-optimizers-direct-l-set-max-evals-grouped" />

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.DIRECT_L.set_max_evals_grouped" />

`DIRECT_L.set_max_evals_grouped(limit)`

Set max evals grouped

<span id="qiskit-algorithms-optimizers-direct-l-set-options" />

### set\_options

<span id="qiskit.algorithms.optimizers.DIRECT_L.set_options" />

`DIRECT_L.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

<span id="qiskit-algorithms-optimizers-direct-l-wrap-function" />

### wrap\_function

<span id="qiskit.algorithms.optimizers.DIRECT_L.wrap_function" />

`static DIRECT_L.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.DIRECT_L.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.DIRECT_L.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.DIRECT_L.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.DIRECT_L.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.DIRECT_L.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.DIRECT_L.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.DIRECT_L.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.DIRECT_L.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.DIRECT_L.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.DIRECT_L.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.DIRECT_L.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.DIRECT_L.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.DIRECT_L.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.DIRECT_L.settings" />

### settings


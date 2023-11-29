---
title: DIRECT_L
description: API reference for qiskit.aqua.components.optimizers.DIRECT_L
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.DIRECT_L
---

# DIRECT\_L

<span id="qiskit.aqua.components.optimizers.DIRECT_L" />

`DIRECT_L(max_evals=1000)`

DIviding RECTangles Locally-biased optimizer.

DIviding RECTangles (DIRECT) is a deterministic-search algorithms based on systematic division of the search domain into increasingly smaller hyper-rectangles. The DIRECT-L version is a “locally biased” variant of DIRECT that makes the algorithm more biased towards local search, so that it is more efficient for functions with few local minima.

NLopt global optimizer, derivative-free. For further detail, please refer to [http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#direct-and-direct-l](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#direct-and-direct-l)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

**NameError** – NLopt library not installed.

## Attributes

### bounds\_support\_level

Returns bounds support level

### gradient\_support\_level

Returns gradient support level

### initial\_point\_support\_level

Returns initial point support level

### is\_bounds\_ignored

Returns is bounds ignored

### is\_bounds\_required

Returns is bounds required

### is\_bounds\_supported

Returns is bounds supported

### is\_gradient\_ignored

Returns is gradient ignored

### is\_gradient\_required

Returns is gradient required

### is\_gradient\_supported

Returns is gradient supported

### is\_initial\_point\_ignored

Returns is initial point ignored

### is\_initial\_point\_required

Returns is initial point required

### is\_initial\_point\_supported

Returns is initial point supported

### setting

Return setting

## Methods

### get\_nlopt\_optimizer

<span id="qiskit.aqua.components.optimizers.DIRECT_L.get_nlopt_optimizer" />

`DIRECT_L.get_nlopt_optimizer()`

Return NLopt optimizer type

**Return type**

`NLoptOptimizerType`

### get\_support\_level

<span id="qiskit.aqua.components.optimizers.DIRECT_L.get_support_level" />

`DIRECT_L.get_support_level()`

return support level dictionary

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.DIRECT_L.gradient_num_diff" />

`static DIRECT_L.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** (*float*) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** (*int*) – max evals grouped

**Returns**

the gradient computed

**Return type**

grad

### optimize

<span id="qiskit.aqua.components.optimizers.DIRECT_L.optimize" />

`DIRECT_L.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Perform optimization.

**Parameters**

*   **num\_vars** (*int*) – Number of parameters to be optimized.
*   **objective\_function** (*callable*) – A function that computes the objective function.
*   **gradient\_function** (*callable*) – A function that computes the gradient of the objective function, or None if not available.
*   **variable\_bounds** (*list\[(float, float)]*) – List of variable bounds, given as pairs (lower, upper). None means unbounded.
*   **initial\_point** (*numpy.ndarray\[float]*) – Initial point.

**Returns**

**point, value, nfev**

point: is a 1D numpy.ndarray\[float] containing the solution value: is a float with the objective function value nfev: number of objective function calls made if available or None

**Raises**

**ValueError** – invalid input

### print\_options

<span id="qiskit.aqua.components.optimizers.DIRECT_L.print_options" />

`DIRECT_L.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.DIRECT_L.set_max_evals_grouped" />

`DIRECT_L.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.DIRECT_L.set_options" />

`DIRECT_L.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.aqua.components.optimizers.DIRECT_L.wrap_function" />

`static DIRECT_L.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper


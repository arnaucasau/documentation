---
title: NELDER_MEAD
description: API reference for qiskit.algorithms.optimizers.NELDER_MEAD
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.NELDER_MEAD
---

<span id="nelder-mead" />

# NELDER\_MEAD

<span id="qiskit.algorithms.optimizers.NELDER_MEAD" />

`NELDER_MEAD(maxiter=None, maxfev=1000, disp=False, xatol=0.0001, tol=None, adaptive=False, options=None, **kwargs)`

Bases: [`SciPyOptimizer`](qiskit.algorithms.optimizers.SciPyOptimizer "qiskit.algorithms.optimizers.scipy_optimizer.SciPyOptimizer")

Nelder-Mead optimizer.

The Nelder-Mead algorithm performs unconstrained optimization; it ignores bounds or constraints. It is used to find the minimum or maximum of an objective function in a multidimensional space. It is based on the Simplex algorithm. Nelder-Mead is robust in many applications, especially when the first and second derivatives of the objective function are not known.

However, if the numerical computation of the derivatives can be trusted to be accurate, other algorithms using the first and/or second derivatives information might be preferred to Nelder-Mead for their better performance in the general case, especially in consideration of the fact that the Nelder–Mead technique is a heuristic search method that can converge to non-stationary points.

Uses scipy.optimize.minimize Nelder-Mead. For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (*int | None*) – Maximum allowed number of iterations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **maxfev** (*int*) – Maximum allowed number of function evaluations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **disp** (*bool*) – Set to True to print convergence messages.
*   **xatol** (*float*) – Absolute error in xopt between iterations that is acceptable for convergence.
*   **tol** (*float | None*) – Tolerance for termination.
*   **adaptive** (*bool*) – Adapt algorithm parameters to dimensionality of problem.
*   **options** (*dict | None*) – A dictionary of solver options.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.

## Methods

<span id="qiskit-algorithms-optimizers-nelder-mead-get-support-level" />

### get\_support\_level

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.get_support_level" />

`NELDER_MEAD.get_support_level()`

Return support level dictionary

<span id="qiskit-algorithms-optimizers-nelder-mead-gradient-num-diff" />

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.gradient_num_diff" />

`static NELDER_MEAD.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=None)`

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

<span id="qiskit-algorithms-optimizers-nelder-mead-minimize" />

### minimize

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.minimize" />

`NELDER_MEAD.minimize(fun, x0, jac=None, bounds=None)`

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

<span id="qiskit-algorithms-optimizers-nelder-mead-print-options" />

### print\_options

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.print_options" />

`NELDER_MEAD.print_options()`

Print algorithm-specific options.

<span id="qiskit-algorithms-optimizers-nelder-mead-set-max-evals-grouped" />

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.set_max_evals_grouped" />

`NELDER_MEAD.set_max_evals_grouped(limit)`

Set max evals grouped

<span id="qiskit-algorithms-optimizers-nelder-mead-set-options" />

### set\_options

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.set_options" />

`NELDER_MEAD.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

<span id="qiskit-algorithms-optimizers-nelder-mead-wrap-function" />

### wrap\_function

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.wrap_function" />

`static NELDER_MEAD.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.NELDER_MEAD.settings" />

### settings


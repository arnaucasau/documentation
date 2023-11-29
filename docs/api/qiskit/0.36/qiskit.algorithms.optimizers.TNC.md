---
title: TNC
description: API reference for qiskit.algorithms.optimizers.TNC
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.TNC
---

# TNC

<span id="qiskit.algorithms.optimizers.TNC" />

`TNC(maxiter=100, disp=False, accuracy=0, ftol=- 1, xtol=- 1, gtol=- 1, tol=None, eps=1e-08, options=None, max_evals_grouped=1, **kwargs)`

Bases: [`qiskit.algorithms.optimizers.scipy_optimizer.SciPyOptimizer`](qiskit.algorithms.optimizers.SciPyOptimizer "qiskit.algorithms.optimizers.scipy_optimizer.SciPyOptimizer")

Truncated Newton (TNC) optimizer.

TNC uses a truncated Newton algorithm to minimize a function with variables subject to bounds. This algorithm uses gradient information; it is also called Newton Conjugate-Gradient. It differs from the [`CG`](qiskit.algorithms.optimizers.CG "qiskit.algorithms.optimizers.CG") method as it wraps a C implementation and allows each variable to be given upper and lower bounds.

Uses scipy.optimize.minimize TNC For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluation.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **accuracy** (`float`) – Relative precision for finite difference calculations. If \<= machine\_precision, set to sqrt(machine\_precision). Defaults to 0.
*   **ftol** (`float`) – Precision goal for the value of f in the stopping criterion. If ftol \< 0.0, ftol is set to 0.0 defaults to -1.
*   **xtol** (`float`) – Precision goal for the value of x in the stopping criterion (after applying x scaling factors). If xtol \< 0.0, xtol is set to sqrt(machine\_precision). Defaults to -1.
*   **gtol** (`float`) – Precision goal for the value of the projected gradient in the stopping criterion (after applying x scaling factors). If gtol \< 0.0, gtol is set to 1e-2 \* sqrt(accuracy). Setting it to 0.0 is not recommended. Defaults to -1.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **eps** (`float`) – Step size used for numerical approximation of the Jacobian.
*   **options** (`Optional`\[`dict`]) – A dictionary of solver options.
*   **max\_evals\_grouped** (`int`) – Max number of default gradient evaluations performed simultaneously.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.

## Methods

### get\_support\_level

<span id="qiskit.algorithms.optimizers.TNC.get_support_level" />

`TNC.get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.TNC.gradient_num_diff" />

`static TNC.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

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

### minimize

<span id="qiskit.algorithms.optimizers.TNC.minimize" />

`TNC.minimize(fun, x0, jac=None, bounds=None)`

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

<span id="qiskit.algorithms.optimizers.TNC.print_options" />

`TNC.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.TNC.set_max_evals_grouped" />

`TNC.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.TNC.set_options" />

`TNC.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.TNC.wrap_function" />

`static TNC.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.TNC.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.TNC.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.TNC.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.TNC.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.TNC.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.TNC.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.TNC.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.TNC.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.TNC.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.TNC.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.TNC.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.TNC.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.TNC.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.TNC.settings" />

### settings

**Return type**

`Dict`\[`str`, `Any`]


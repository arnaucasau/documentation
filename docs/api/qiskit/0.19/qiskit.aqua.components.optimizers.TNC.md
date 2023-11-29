---
title: TNC
description: API reference for qiskit.aqua.components.optimizers.TNC
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.TNC
---

# TNC

<span id="qiskit.aqua.components.optimizers.TNC" />

`TNC(maxiter=100, disp=False, accuracy=0, ftol=- 1, xtol=- 1, gtol=- 1, tol=None, eps=1e-08)`

Truncated Newton (TNC) optimizer.

TNC uses a truncated Newton algorithm to minimize a function with variables subject to bounds. This algorithm uses gradient information; it is also called Newton Conjugate-Gradient. It differs from the [`CG`](qiskit.aqua.components.optimizers.CG "qiskit.aqua.components.optimizers.CG") method as it wraps a C implementation and allows each variable to be given upper and lower bounds.

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

### get\_support\_level

<span id="qiskit.aqua.components.optimizers.TNC.get_support_level" />

`TNC.get_support_level()`

return support level dictionary

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.TNC.gradient_num_diff" />

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

### optimize

<span id="qiskit.aqua.components.optimizers.TNC.optimize" />

`TNC.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

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

<span id="qiskit.aqua.components.optimizers.TNC.print_options" />

`TNC.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.TNC.set_max_evals_grouped" />

`TNC.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.TNC.set_options" />

`TNC.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.aqua.components.optimizers.TNC.wrap_function" />

`static TNC.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper


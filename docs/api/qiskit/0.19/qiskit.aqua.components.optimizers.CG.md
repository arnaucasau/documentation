---
title: CG
description: API reference for qiskit.aqua.components.optimizers.CG
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.CG
---

# CG

<span id="qiskit.aqua.components.optimizers.CG" />

`CG(maxiter=20, disp=False, gtol=1e-05, tol=None, eps=1.4901161193847656e-08)`

Conjugate Gradient optimizer.

CG is an algorithm for the numerical solution of systems of linear equations whose matrices are symmetric and positive-definite. It is an *iterative algorithm* in that it uses an initial guess to generate a sequence of improving approximate solutions for a problem, in which each approximation is derived from the previous ones. It is often used to solve unconstrained optimization problems, such as energy minimization.

Uses scipy.optimize.minimize CG. For further detail, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations to perform.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **gtol** (`float`) – Gradient norm must be less than gtol before successful termination.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **eps** (`float`) – If jac is approximated, use this value for the step size.

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

<span id="qiskit.aqua.components.optimizers.CG.get_support_level" />

`CG.get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.CG.gradient_num_diff" />

`static CG.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

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

<span id="qiskit.aqua.components.optimizers.CG.optimize" />

`CG.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

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

<span id="qiskit.aqua.components.optimizers.CG.print_options" />

`CG.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.CG.set_max_evals_grouped" />

`CG.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.CG.set_options" />

`CG.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.aqua.components.optimizers.CG.wrap_function" />

`static CG.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper


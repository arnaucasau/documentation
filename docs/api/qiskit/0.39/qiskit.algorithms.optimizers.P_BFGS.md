---
title: P_BFGS
description: API reference for qiskit.algorithms.optimizers.P_BFGS
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.P_BFGS
---

# P\_BFGS

<span id="qiskit.algorithms.optimizers.P_BFGS" />

`P_BFGS(maxfun=1000, ftol=2.220446049250313e-15, iprint=- 1, max_processes=None, options=None, max_evals_grouped=1, **kwargs)`

Bases: [`qiskit.algorithms.optimizers.scipy_optimizer.SciPyOptimizer`](qiskit.algorithms.optimizers.SciPyOptimizer "qiskit.algorithms.optimizers.scipy_optimizer.SciPyOptimizer")

Parallelized Limited-memory BFGS optimizer.

P-BFGS is a parallelized version of [`L_BFGS_B`](qiskit.algorithms.optimizers.L_BFGS_B "qiskit.algorithms.optimizers.L_BFGS_B") with which it shares the same parameters. P-BFGS can be useful when the target hardware is a quantum simulator running on a classical machine. This allows the multiple processes to use simulation to potentially reach a minimum faster. The parallelization may also help the optimizer avoid getting stuck at local optima.

Uses scipy.optimize.fmin\_l\_bfgs\_b. For further detail, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.fmin\_l\_bfgs\_b.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.fmin_l_bfgs_b.html)

**Parameters**

*   **maxfun** (`int`) – Maximum number of function evaluations.
*   **ftol** (`float`) – The iteration stops when (f^k - f^\{k+1})/max\{|f^k|,|f^\{k+1}|,1} \<= ftol.
*   **iprint** (`int`) – Controls the frequency of output. iprint \< 0 means no output; iprint = 0 print only one line at the last iteration; 0 \< iprint \< 99 print also f and |proj g| every iprint iterations; iprint = 99 print details of every iteration except n-vectors; iprint = 100 print also the changes of active set and final x; iprint > 100 print details of every iteration including x and g.
*   **max\_processes** (`Optional`\[`int`]) – maximum number of processes allowed, has a min. value of 1 if not None.
*   **options** (`Optional`\[`dict`]) – A dictionary of solver options.
*   **max\_evals\_grouped** (`int`) – Max number of default gradient evaluations performed simultaneously.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.

## Methods

### get\_support\_level

<span id="qiskit.algorithms.optimizers.P_BFGS.get_support_level" />

`P_BFGS.get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.P_BFGS.gradient_num_diff" />

`static P_BFGS.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=None)`

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

<span id="qiskit.algorithms.optimizers.P_BFGS.minimize" />

`P_BFGS.minimize(fun, x0, jac=None, bounds=None)`

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

<span id="qiskit.algorithms.optimizers.P_BFGS.print_options" />

`P_BFGS.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.P_BFGS.set_max_evals_grouped" />

`P_BFGS.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.P_BFGS.set_options" />

`P_BFGS.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.P_BFGS.wrap_function" />

`static P_BFGS.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.P_BFGS.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.P_BFGS.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.P_BFGS.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.P_BFGS.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.P_BFGS.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.P_BFGS.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.P_BFGS.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.P_BFGS.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.P_BFGS.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.P_BFGS.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.P_BFGS.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.P_BFGS.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.P_BFGS.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.P_BFGS.settings" />

### settings

**Return type**

`Dict`\[`str`, `Any`]


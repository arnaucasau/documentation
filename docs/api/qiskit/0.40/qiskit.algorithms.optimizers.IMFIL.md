---
title: IMFIL
description: API reference for qiskit.algorithms.optimizers.IMFIL
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.IMFIL
---

# IMFIL[¶](#imfil "Permalink to this headline")

<span id="qiskit.algorithms.optimizers.IMFIL" />

`IMFIL(maxiter=1000)`

Bases: [`qiskit.algorithms.optimizers.optimizer.Optimizer`](qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.optimizer.Optimizer")

IMplicit FILtering algorithm.

Implicit filtering is a way to solve bound-constrained optimization problems for which derivatives are not available. In comparison to methods that use interpolation to reconstruct the function and its higher derivatives, implicit filtering builds upon coordinate search followed by interpolation to get an approximate gradient.

Uses skquant.opt installed with pip install scikit-quant. For further detail, please refer to [https://github.com/scikit-quant/scikit-quant](https://github.com/scikit-quant/scikit-quant) and [https://qat4chem.lbl.gov/software](https://qat4chem.lbl.gov/software).

**Parameters**

**maxiter** (`int`) – Maximum number of function evaluations.

**Raises**

**MissingOptionalLibraryError** – scikit-quant not installed

## Methods

### get\_support\_level

<span id="qiskit.algorithms.optimizers.IMFIL.get_support_level" />

`IMFIL.get_support_level()`

Returns support level dictionary.

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.IMFIL.gradient_num_diff" />

`static IMFIL.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=None)`

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

<span id="qiskit.algorithms.optimizers.IMFIL.minimize" />

`IMFIL.minimize(fun, x0, jac=None, bounds=None)`

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

<span id="qiskit.algorithms.optimizers.IMFIL.print_options" />

`IMFIL.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.IMFIL.set_max_evals_grouped" />

`IMFIL.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.IMFIL.set_options" />

`IMFIL.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.IMFIL.wrap_function" />

`static IMFIL.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.IMFIL.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.IMFIL.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.IMFIL.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.IMFIL.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.IMFIL.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.IMFIL.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.IMFIL.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.IMFIL.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.IMFIL.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.IMFIL.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.IMFIL.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.IMFIL.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.IMFIL.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.IMFIL.settings" />

### settings

**Return type**

`Dict`\[`str`, `Any`]


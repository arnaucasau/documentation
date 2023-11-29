---
title: BaseCoherenceFitter
description: API reference for qiskit.ignis.characterization.BaseCoherenceFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.BaseCoherenceFitter
---

# BaseCoherenceFitter

<span id="qiskit.ignis.characterization.BaseCoherenceFitter" />

`BaseCoherenceFitter(description, backend_result, xdata, qubits, fit_fun, fit_p0, fit_bounds, circuit_names, series=None, expected_state='0', time_index=0, time_unit='micro-seconds')`

Base class for fitters of characteristic times

**Parameters**

*   **description** (`str`) – description of the fitter’s purpose, e.g. ‘T1’.
*   **backend\_result** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – result of execution on the backend.
*   **xdata** (`Union`\[`List`\[`float`], `array`]) – delay times of the circuits.
*   **qubits** (`List`\[`int`]) – the qubits to be characterized.
*   **fit\_fun** (`Callable`\[…, `float`]) – equivalent to parameter f of scipy.curve\_fit.
*   **fit\_p0** (`List`\[`float`]) – equivalent to parameter p0 of scipy.curve\_fit.
*   **fit\_bounds** (`Tuple`\[`List`\[`float`], `List`\[`float`]]) – equivalent to parameter bounds of scipy.curve\_fit.
*   **circuit\_names** (`List`\[`str`]) – names of the circuits, should be the same length as xdata. Full circuit name will be these plus the series name.
*   **series** (`Optional`\[`List`\[`str`]]) – list of circuit name tags
*   **expected\_state** (`str`) – is the circuit supposed to end up in ‘0’ or ‘1’?
*   **time\_index** (`int`) – among parameters of fit\_fun, which one is the characteristic time.
*   **time\_unit** (`str`) – unit of delay times in xdata.

## Attributes

### backend\_result

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.backend_result" />

`Union[qiskit.result.result.Result, List[qiskit.result.result.Result]]`

Return the execution results

**Return type**

`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]

### description

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.description" />

`str`

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

### fit\_fun

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.fit_fun" />

`Callable`

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

### measured\_qubits

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.measured_qubits" />

`List[int]`

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

### params

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.params" />

`List[float]`

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

### params\_err

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.params_err" />

`List[float]`

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

### series

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.series" />

`Optional[List[str]]`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

### xdata

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.xdata" />

`Union[List[float], numpy.array]`

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

### ydata

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.ydata" />

`List[Dict]`

Return the data points on the y-axis

The data points are returning in the form of a list of dictionaries:

> *   #### ydata\[i]\[‘mean’] is a list, where item
>
>     no. j is the probability of success of qubit i for a circuit that lasts xdata\[j].
>
> *   #### ydata\[i]\[‘std’] is a list, where ydata\[‘std’]\[j] is the
>
>     standard deviation of the success of qubit i.

**Return type**

`List`\[`Dict`]

## Methods

### add\_data

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.add_data" />

`BaseCoherenceFitter.add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

### fit\_data

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.fit_data" />

`BaseCoherenceFitter.fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

### plot

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.plot" />

`BaseCoherenceFitter.plot(qind, series, ax=None, show_plot=True)`

Plot coherence data.

**Parameters**

*   **qind** (`int`) – qubit index to plot
*   **series** (`str`) – which series to plot (if list then plot multiple)
*   **ax** (`Optional`\[`Any`]) – plot axes
*   **show\_plot** (`bool`) – whether to call plt.show()

**Returns**

The axes object

**Return type**

Axes

**Raises**

**ImportError** – if matplotlib is not installed

### time

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.time" />

`BaseCoherenceFitter.time(qid=- 1, series='0')`

Return the characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The characteristic time of the qubit, or all qubits

### time\_err

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.time_err" />

`BaseCoherenceFitter.time_err(qid=- 1, series='0')`

Return the error of characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The error of the characteristic time of the qubit, or all qubits


---
title: ZZFitter
description: API reference for qiskit.ignis.characterization.ZZFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.ZZFitter
---

# ZZFitter

<span id="qiskit.ignis.characterization.ZZFitter" />

`ZZFitter(backend_result, xdata, qubits, spectators, fit_p0, fit_bounds, time_unit='micro-seconds')`

ZZ fitter

## Attributes

### backend\_result

<span id="qiskit.ignis.characterization.ZZFitter.backend_result" />

`Union[qiskit.result.result.Result, List[qiskit.result.result.Result]]`

Return the execution results

**Return type**

`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]

### description

<span id="qiskit.ignis.characterization.ZZFitter.description" />

`str`

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

### fit\_fun

<span id="qiskit.ignis.characterization.ZZFitter.fit_fun" />

`Callable`

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

### measured\_qubits

<span id="qiskit.ignis.characterization.ZZFitter.measured_qubits" />

`List[int]`

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

### params

<span id="qiskit.ignis.characterization.ZZFitter.params" />

`List[float]`

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

### params\_err

<span id="qiskit.ignis.characterization.ZZFitter.params_err" />

`List[float]`

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

### series

<span id="qiskit.ignis.characterization.ZZFitter.series" />

`Optional[List[str]]`

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

### xdata

<span id="qiskit.ignis.characterization.ZZFitter.xdata" />

`Union[List[float], numpy.array]`

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

### ydata

<span id="qiskit.ignis.characterization.ZZFitter.ydata" />

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

### ZZ\_rate

<span id="qiskit.ignis.characterization.ZZFitter.ZZ_rate" />

`ZZFitter.ZZ_rate(qind=- 1)`

Return the ZZ rate from the fit of the two curves

**Parameters**

**qind** (*int*) – qubit index to return (-1 return all)

**Returns**

a list of zz\_rates

**Return type**

list

### add\_data

<span id="qiskit.ignis.characterization.ZZFitter.add_data" />

`ZZFitter.add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

### fit\_data

<span id="qiskit.ignis.characterization.ZZFitter.fit_data" />

`ZZFitter.fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

### plot

<span id="qiskit.ignis.characterization.ZZFitter.plot" />

`ZZFitter.plot(qind, series, ax=None, show_plot=True)`

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

### plot\_ZZ

<span id="qiskit.ignis.characterization.ZZFitter.plot_ZZ" />

`ZZFitter.plot_ZZ(qind, ax=None, show_plot=False)`

Plot ZZ data. Will plot both traces on the plot.

**Parameters**

*   **qind** (*int*) – qubit index to plot
*   **ax** (*Axes*) – plot axes
*   **show\_plot** (*bool*) – call plt.show()

**Returns**

the axes object

**Return type**

Axes

**Raises**

**ImportError** – If matplotlib is not installed

### time

<span id="qiskit.ignis.characterization.ZZFitter.time" />

`ZZFitter.time(qid=- 1, series='0')`

Return the characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The characteristic time of the qubit, or all qubits

### time\_err

<span id="qiskit.ignis.characterization.ZZFitter.time_err" />

`ZZFitter.time_err(qid=- 1, series='0')`

Return the error of characteristic time for the given qubit and series

**Parameters**

*   **qid** (`int`) – the qubit index (or all qubits if -1)
*   **series** (`str`) – the series to get

**Return type**

`Union`\[`float`, `List`\[`float`]]

**Returns**

The error of the characteristic time of the qubit, or all qubits


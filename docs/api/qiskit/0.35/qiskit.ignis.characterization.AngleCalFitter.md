---
title: AngleCalFitter
description: API reference for qiskit.ignis.characterization.AngleCalFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.characterization.AngleCalFitter
---

# AngleCalFitter

<span id="qiskit.ignis.characterization.AngleCalFitter" />

`AngleCalFitter(backend_result, xdata, qubits, fit_p0, fit_bounds)`[GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.7/qiskit/ignis/characterization/gates/fitters.py "view source code")

Bases: `qiskit.ignis.characterization.fitters.BaseGateFitter`

Amplitude error fitter

See BaseFitter \_\_init\_\_

## Methods

### add\_data

<span id="qiskit.ignis.characterization.AngleCalFitter.add_data" />

`AngleCalFitter.add_data(results, recalc=True, refit=True)`

Add new execution results to previous execution results

**Parameters**

*   **results** (`Union`\[`Result`, `List`\[`Result`]]) – new execution results
*   **recalc** (`bool`) – whether tp recalculate the data
*   **refit** (`bool`) – whether to refit the data

### angle\_err

<span id="qiskit.ignis.characterization.AngleCalFitter.angle_err" />

`AngleCalFitter.angle_err(qind=- 1)`[GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.7/qiskit/ignis/characterization/gates/fitters.py "view source code")

Return the gate angle error

**Parameters**

**qind** (*int*) – qubit index to return (-1 return all)

**Returns**

a list of errors

**Return type**

list

### fit\_data

<span id="qiskit.ignis.characterization.AngleCalFitter.fit_data" />

`AngleCalFitter.fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

### plot

<span id="qiskit.ignis.characterization.AngleCalFitter.plot" />

`AngleCalFitter.plot(qind, series='0', ax=None, show_plot=False)`[GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.7/qiskit/ignis/characterization/gates/fitters.py "view source code")

Plot err data.

**Parameters**

*   **qind** (*int*) – qubit index to plot
*   **series** (*str*) – the series to plot
*   **ax** (*Axes*) – plot axes
*   **show\_plot** (*bool*) – call plt.show()

**Returns**

The axes object

**Return type**

Axes

**Raises**

**ImportError** – if matplotlib is not installed

## Attributes

<span id="qiskit.ignis.characterization.AngleCalFitter.backend_result" />

### backend\_result

Return the execution results

**Return type**

`Union`\[`Result`, `List`\[`Result`]]

<span id="qiskit.ignis.characterization.AngleCalFitter.description" />

### description

Return the fitter’s purpose, e.g. ‘T1’

**Return type**

`str`

<span id="qiskit.ignis.characterization.AngleCalFitter.fit_fun" />

### fit\_fun

Return the function used in the fit, e.g. BaseFitter.\_exp\_fit\_fun

**Return type**

`Callable`

<span id="qiskit.ignis.characterization.AngleCalFitter.measured_qubits" />

### measured\_qubits

Return the indices of the qubits to be characterized

**Return type**

`List`\[`int`]

<span id="qiskit.ignis.characterization.AngleCalFitter.params" />

### params

Return the fit function parameters that were calculated by curve\_fit

**Return type**

`List`\[`float`]

<span id="qiskit.ignis.characterization.AngleCalFitter.params_err" />

### params\_err

Return the error of the fit function parameters

**Return type**

`List`\[`float`]

<span id="qiskit.ignis.characterization.AngleCalFitter.series" />

### series

Return the list of series for the data

**Return type**

`Optional`\[`List`\[`str`]]

<span id="qiskit.ignis.characterization.AngleCalFitter.xdata" />

### xdata

Return the data points on the x-axis, the independenet parameter which is fit against

**Return type**

`Union`\[`List`\[`float`], `array`]

<span id="qiskit.ignis.characterization.AngleCalFitter.ydata" />

### ydata

Return the data points on the y-axis

The data points are returning in the form of a list of dictionaries:

> *   **ydata\[i]\[‘mean’] is a list, where item**
>
>     no. j is the probability of success of qubit i for a circuit that lasts xdata\[j].
>
> *   **ydata\[i]\[‘std’] is a list, where ydata\[‘std’]\[j] is the**
>
>     standard deviation of the success of qubit i.

**Return type**

`List`\[`Dict`]


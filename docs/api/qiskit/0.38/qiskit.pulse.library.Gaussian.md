---
title: Gaussian
description: API reference for qiskit.pulse.library.Gaussian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.library.Gaussian
---

# Gaussian[¶](#gaussian "Permalink to this headline")

<span id="qiskit.pulse.library.Gaussian" />

`Gaussian(duration, amp, sigma, name=None, limit_amplitude=None)`

Bases: [`qiskit.pulse.library.symbolic_pulses.SymbolicPulse`](qiskit.pulse.library.SymbolicPulse "qiskit.pulse.library.symbolic_pulses.SymbolicPulse")

A lifted and truncated pulse envelope shaped according to the Gaussian function whose mean is centered at the center of the pulse (duration / 2):

$$
\begin{split}f'(x) &= \exp\Bigl( -\frac12 \frac{{(x - \text{duration}/2)}^2}{\text{sigma}^2} \Bigr)\\
f(x) &= \text{amp} \times \frac{f'(x) - f'(-1)}{1-f'(-1)}, \quad 0 \le x < \text{duration}\end{split}
$$

where $f'(x)$ is the gaussian waveform without lifting or amplitude scaling.

Create new pulse instance.

**Parameters**

*   **duration** (`Union`\[`int`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – Pulse length in terms of the sampling period dt.
*   **amp** (`Union`\[`complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – The amplitude of the Gaussian envelope.
*   **sigma** (`Union`\[`float`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.
*   **limit\_amplitude** (`Optional`\[`bool`]) – If `True`, then limit the amplitude of the waveform to 1. The default is `True` and the amplitude is constrained to 1.

## Methods

### draw

<span id="qiskit.pulse.library.Gaussian.draw" />

`Gaussian.draw(style=None, backend=None, time_range=None, time_unit='dt', show_waveform_info=True, plotter='mpl2d', axis=None)`

Plot the interpolated envelope of pulse.

**Parameters**

*   **style** (`Optional`\[`Dict`\[`str`, `Any`]]) – Stylesheet options. This can be dictionary or preset stylesheet classes. See `IQXStandard`, `IQXSimple`, and `IQXDebugging` for details of preset stylesheets.

*   **backend** (*Optional\[BaseBackend]*) – Backend object to play the input pulse program. If provided, the plotter may use to make the visualization hardware aware.

*   **time\_range** (`Optional`\[`Tuple`\[`int`, `int`]]) – Set horizontal axis limit. Tuple `(tmin, tmax)`.

*   **time\_unit** (`str`) – The unit of specified time range either `dt` or `ns`. The unit of `ns` is available only when `backend` object is provided.

*   **show\_waveform\_info** (`bool`) – Show waveform annotations, i.e. name, of waveforms. Set `True` to show additional information about waveforms.

*   **plotter** (`str`) –

    Name of plotter API to generate an output image. One of following APIs should be specified:

    ```python
    mpl2d: Matplotlib API for 2D image generation.
        Matplotlib API to generate 2D image. Charts are placed along y axis with
        vertical offset. This API takes matplotlib.axes.Axes as `axis` input.
    ```

    axis and style kwargs may depend on the plotter.

*   **axis** (`Optional`\[`Any`]) – Arbitrary object passed to the plotter. If this object is provided, the plotters use a given `axis` instead of internally initializing a figure object. This object format depends on the plotter. See plotter argument for details.

**Returns**

Visualization output data. The returned data type depends on the `plotter`. If matplotlib family is specified, this will be a `matplotlib.pyplot.Figure` data.

### get\_waveform

<span id="qiskit.pulse.library.Gaussian.get_waveform" />

`Gaussian.get_waveform()`

Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains.

Since the returned array is a discretized time series of the continuous function, this method uses a midpoint sampler. For `duration`, return:

$$
\{f(t+0.5) \in \mathbb{C} | t \in \mathbb{Z} \wedge  0<=t<\texttt{duration}\}
$$

**Return type**

[`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

**Returns**

A waveform representation of this pulse.

**Raises**

*   [**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When parameters are not assigned.
*   [**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When expression for pulse envelope is not assigned.

### is\_parameterized

<span id="qiskit.pulse.library.Gaussian.is_parameterized" />

`Gaussian.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### validate\_parameters

<span id="qiskit.pulse.library.Gaussian.validate_parameters" />

`Gaussian.validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`

## Attributes

<span id="qiskit.pulse.library.Gaussian.constraints" />

### constraints

Return symbolic expression for the pulse parameter constraints.

**Return type**

`Expr`

<span id="qiskit.pulse.library.Gaussian.duration" />

### duration

<span id="qiskit.pulse.library.Gaussian.envelope" />

### envelope

Return symbolic expression for the pulse envelope.

**Return type**

`Expr`

<span id="qiskit.pulse.library.Gaussian.id" />

### id

Unique identifier for this pulse.

**Return type**

`int`

<span id="qiskit.pulse.library.Gaussian.limit_amplitude" />

### limit\_amplitude

`= True`

<span id="qiskit.pulse.library.Gaussian.name" />

### name

<span id="qiskit.pulse.library.Gaussian.parameters" />

### parameters

**Return type**

`Dict`\[`str`, `Any`]

<span id="qiskit.pulse.library.Gaussian.pulse_type" />

### pulse\_type

Return display name of the pulse shape.

**Return type**

`str`

<span id="qiskit.pulse.library.Gaussian.valid_amp_conditions" />

### valid\_amp\_conditions

Return symbolic expression for the pulse amplitude constraints.

**Return type**

`Expr`


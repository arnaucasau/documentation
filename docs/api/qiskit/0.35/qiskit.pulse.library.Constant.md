---
title: Constant
description: API reference for qiskit.pulse.library.Constant
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.library.Constant
---

# Constant

<span id="qiskit.pulse.library.Constant" />

`Constant(duration, amp, name=None, limit_amplitude=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/library/parametric_pulses.py "view source code")

Bases: `qiskit.pulse.library.parametric_pulses.ParametricPulse`

A simple constant pulse, with an amplitude value and a duration:

$$
f(x) = amp    ,  0 <= x < duration
f(x) = 0      ,  elsewhere
$$

Initialize the constant-valued pulse.

**Parameters**

*   **duration** (`Union`\[`int`, `ParameterExpression`]) – Pulse length in terms of the the sampling period dt.
*   **amp** (`Union`\[`complex`, `ParameterExpression`]) – The amplitude of the constant square pulse.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.
*   **limit\_amplitude** (`Optional`\[`bool`]) – If `True`, then limit the amplitude of the waveform to 1. The default is `True` and the amplitude is constrained to 1.

## Methods

### draw

<span id="qiskit.pulse.library.Constant.draw" />

`Constant.draw(style=None, backend=None, time_range=None, time_unit='dt', show_waveform_info=True, plotter='mpl2d', axis=None)`

Plot the interpolated envelope of pulse.

**Parameters**

*   **style** (`Optional`\[`Dict`\[`str`, `Any`]]) – Stylesheet options. This can be dictionary or preset stylesheet classes. See `IQXStandard`, `IQXSimple`, and `IQXDebugging` for details of preset stylesheets.

*   **backend** (*Optional\[*[*BaseBackend*](qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")*]*) – Backend object to play the input pulse program. If provided, the plotter may use to make the visualization hardware aware.

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

<span id="qiskit.pulse.library.Constant.get_waveform" />

`Constant.get_waveform()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/library/parametric_pulses.py "view source code")

Return a Waveform with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

`Waveform`

### is\_parameterized

<span id="qiskit.pulse.library.Constant.is_parameterized" />

`Constant.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

### validate\_parameters

<span id="qiskit.pulse.library.Constant.validate_parameters" />

`Constant.validate_parameters()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/pulse/library/parametric_pulses.py "view source code")

Validate parameters.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`

## Attributes

<span id="qiskit.pulse.library.Constant.amp" />

### amp

The constant value amplitude.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="qiskit.pulse.library.Constant.id" />

### id

Unique identifier for this pulse.

**Return type**

`int`

<span id="qiskit.pulse.library.Constant.limit_amplitude" />

### limit\_amplitude

`= True`

<span id="qiskit.pulse.library.Constant.parameters" />

### parameters

**Return type**

`Dict`\[`str`, `Any`]


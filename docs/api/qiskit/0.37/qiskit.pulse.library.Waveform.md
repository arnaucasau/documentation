---
title: Waveform
description: API reference for qiskit.pulse.library.Waveform
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.library.Waveform
---

# Waveform

<span id="qiskit.pulse.library.Waveform" />

`Waveform(samples, name=None, epsilon=1e-07, limit_amplitude=None)`

Bases: `qiskit.pulse.library.pulse.Pulse`

A pulse specified completely by complex-valued samples; each sample is played for the duration of the backend cycle-time, dt.

Create new sample pulse command.

**Parameters**

*   **samples** (`Union`\[`ndarray`, `List`\[`complex`]]) – Complex array of the samples in the pulse envelope.
*   **name** (`Optional`\[`str`]) – Unique name to identify the pulse.
*   **epsilon** (`float`) – Pulse sample norm tolerance for clipping. If any sample’s norm exceeds unity by less than or equal to epsilon it will be clipped to unit norm. If the sample norm is greater than 1+epsilon an error will be raised.
*   **limit\_amplitude** (`Optional`\[`bool`]) – Passed to parent Pulse

## Methods

### draw

<span id="qiskit.pulse.library.Waveform.draw" />

`Waveform.draw(style=None, backend=None, time_range=None, time_unit='dt', show_waveform_info=True, plotter='mpl2d', axis=None)`

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

### is\_parameterized

<span id="qiskit.pulse.library.Waveform.is_parameterized" />

`Waveform.is_parameterized()`

Return True iff the instruction is parameterized.

**Return type**

`bool`

## Attributes

<span id="qiskit.pulse.library.Waveform.duration" />

### duration

<span id="qiskit.pulse.library.Waveform.name" />

### name

<span id="qiskit.pulse.library.Waveform.id" />

### id

Unique identifier for this pulse.

**Return type**

`int`

<span id="qiskit.pulse.library.Waveform.limit_amplitude" />

### limit\_amplitude

`= True`

<span id="qiskit.pulse.library.Waveform.parameters" />

### parameters

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

<span id="qiskit.pulse.library.Waveform.samples" />

### samples

Return sample values.

**Return type**

`ndarray`


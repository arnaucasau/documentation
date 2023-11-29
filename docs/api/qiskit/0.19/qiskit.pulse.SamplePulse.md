---
title: SamplePulse
description: API reference for qiskit.pulse.SamplePulse
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.SamplePulse
---

# SamplePulse

<span id="qiskit.pulse.SamplePulse" />

`SamplePulse(samples, name=None, epsilon=1e-07)`

A pulse specified completely by complex-valued samples; each sample is played for the duration of the backend cycle-time, dt.

Create new sample pulse command.

**Parameters**

*   **samples** (`Union`\[`ndarray`, `List`\[`complex`]]) – Complex array of the samples in the pulse envelope.
*   **name** (`Optional`\[`str`]) – Unique name to identify the pulse.
*   **epsilon** (`float`) – Pulse sample norm tolerance for clipping. If any sample’s norm exceeds unity by less than or equal to epsilon it will be clipped to unit norm. If the sample norm is greater than 1+epsilon an error will be raised.

## Attributes

### id

<span id="qiskit.pulse.SamplePulse.id" />

`int`

Unique identifier for this pulse.

**Return type**

`int`

### samples

<span id="qiskit.pulse.SamplePulse.samples" />

`numpy.ndarray`

Return sample values.

**Return type**

`ndarray`

## Methods

### \_\_call\_\_

<span id="qiskit.pulse.SamplePulse.__call__" />

`SamplePulse.__call__(channel)`

Call self as a function.

### draw

<span id="qiskit.pulse.SamplePulse.draw" />

`SamplePulse.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False, scaling=None)`

Plot the interpolated envelope of pulse.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*PulseStyle*](qiskit.visualization.pulse.qcstyle#qiskit.visualization.pulse.qcstyle.PulseStyle "qiskit.visualization.pulse.qcstyle.PulseStyle")*]*) – A style sheet to configure plot appearance.
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image.
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation.
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes.
*   **interactive** (`bool`) – When set true show the circuit in a new window. (This depends on the matplotlib backend being used.)
*   **scaling** (`Optional`\[`float`]) – Deprecated, see scale,

**Returns**

A matplotlib figure object of the pulse envelope

**Return type**

matplotlib.figure


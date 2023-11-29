---
title: Gaussian
description: API reference for qiskit.pulse.pulse_lib.Gaussian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.pulse_lib.Gaussian
---

# Gaussian

<span id="qiskit.pulse.pulse_lib.Gaussian" />

`Gaussian(duration, amp, sigma, name=None)`

A truncated pulse envelope shaped according to the Gaussian function whose mean is centered at the center of the pulse (duration / 2):

$$
f(x) = amp * exp( -(1/2) * (x - duration/2)^2 / sigma^2) )  ,  0 <= x < duration
$$

Initialize the gaussian pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`complex`) – The amplitude of the Gaussian envelope.
*   **sigma** (`float`) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Attributes

### amp

<span id="qiskit.pulse.pulse_lib.Gaussian.amp" />

`complex`

The Gaussian amplitude.

**Return type**

`complex`

### id

<span id="qiskit.pulse.pulse_lib.Gaussian.id" />

`int`

Unique identifier for this pulse.

**Return type**

`int`

### parameters

<span id="qiskit.pulse.pulse_lib.Gaussian.parameters" />

`Dict[str, Any]`

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

### sigma

<span id="qiskit.pulse.pulse_lib.Gaussian.sigma" />

`float`

The Gaussian standard deviation of the pulse width.

**Return type**

`float`

## Methods

### \_\_call\_\_

<span id="qiskit.pulse.pulse_lib.Gaussian.__call__" />

`Gaussian.__call__(channel)`

Call self as a function.

### draw

<span id="qiskit.pulse.pulse_lib.Gaussian.draw" />

`Gaussian.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False, scaling=None)`

Plot the pulse.

**Parameters**

*   **dt** (`float`) – Time interval of samples.
*   **style** (*Optional\[*[*PulseStyle*](qiskit.visualization.pulse.qcstyle#qiskit.visualization.pulse.qcstyle.PulseStyle "qiskit.visualization.pulse.qcstyle.PulseStyle")*]*) – A style sheet to configure plot appearance
*   **filename** (`Optional`\[`str`]) – Name required to save pulse image
*   **interp\_method** (`Optional`\[`Callable`]) – A function for interpolation
*   **scale** (`float`) – Relative visual scaling of waveform amplitudes
*   **interactive** (`bool`) – When set true show the circuit in a new window (this depends on the matplotlib backend being used supporting this)
*   **scaling** (`Optional`\[`float`]) – Deprecated, see scale

**Returns**

A matplotlib figure object of the pulse envelope

**Return type**

matplotlib.figure

### get\_sample\_pulse

<span id="qiskit.pulse.pulse_lib.Gaussian.get_sample_pulse" />

`Gaussian.get_sample_pulse()`

Return a SamplePulse with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

[`SamplePulse`](qiskit.pulse.pulse_lib.SamplePulse "qiskit.pulse.pulse_lib.sample_pulse.SamplePulse")

### validate\_parameters

<span id="qiskit.pulse.pulse_lib.Gaussian.validate_parameters" />

`Gaussian.validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`


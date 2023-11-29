---
title: Drag
description: API reference for qiskit.pulse.Drag
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.Drag
---

# Drag

<span id="qiskit.pulse.Drag" />

`Drag(duration, amp, sigma, beta, name=None)`

The Derivative Removal by Adiabatic Gate (DRAG) pulse is a standard Gaussian pulse with an additional Gaussian derivative component. It is designed to reduce the frequency spectrum of a normal gaussian pulse near the $|1\rangle$ - $|2\rangle$ transition, reducing the chance of leakage to the $|2\rangle$ state.

$$
f(x) = Gaussian + 1j * beta * d/dx [Gaussian]
     = Gaussian + 1j * beta * (-(x - duration/2) / sigma^2) [Gaussian]
$$

where ‘Gaussian’ is:

$$
Gaussian(x, amp, sigma) = amp * exp( -(1/2) * (x - duration/2)^2 / sigma^2) )
$$

## References

1.  [*Gambetta, J. M., Motzoi, F., Merkel, S. T. & Wilhelm, F. K. Analytic control methods for high-fidelity unitary operations in a weakly nonlinear oscillator. Phys. Rev. A 83, 012308 (2011).*](https://link.aps.org/doi/10.1103/PhysRevA.83.012308)

2.  [*F. Motzoi, J. M. Gambetta, P. Rebentrost, and F. K. Wilhelm Phys. Rev. Lett. 103, 110501 – Published 8 September 2009.*](https://link.aps.org/doi/10.1103/PhysRevLett.103.110501)

Initialize the drag pulse.

**Parameters**

*   **duration** (`int`) – Pulse length in terms of the the sampling period dt.
*   **amp** (`complex`) – The amplitude of the Drag envelope.
*   **sigma** (`float`) – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **beta** (`float`) – The correction amplitude.
*   **name** (`Optional`\[`str`]) – Display name for this pulse envelope.

## Attributes

### amp

<span id="qiskit.pulse.Drag.amp" />

`complex`

The Gaussian amplitude.

**Return type**

`complex`

### beta

<span id="qiskit.pulse.Drag.beta" />

`float`

The weighing factor for the Gaussian derivative component of the waveform.

**Return type**

`float`

### id

<span id="qiskit.pulse.Drag.id" />

`int`

Unique identifier for this pulse.

**Return type**

`int`

### parameters

<span id="qiskit.pulse.Drag.parameters" />

`Dict[str, Any]`

Return a dictionary containing the pulse’s parameters.

**Return type**

`Dict`\[`str`, `Any`]

### sigma

<span id="qiskit.pulse.Drag.sigma" />

`float`

The Gaussian standard deviation of the pulse width.

**Return type**

`float`

## Methods

### \_\_call\_\_

<span id="qiskit.pulse.Drag.__call__" />

`Drag.__call__(channel)`

Call self as a function.

### draw

<span id="qiskit.pulse.Drag.draw" />

`Drag.draw(dt=1, style=None, filename=None, interp_method=None, scale=1, interactive=False, scaling=None)`

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

<span id="qiskit.pulse.Drag.get_sample_pulse" />

`Drag.get_sample_pulse()`

Return a SamplePulse with samples filled according to the formula that the pulse represents and the parameter values it contains.

**Return type**

[`SamplePulse`](qiskit.pulse.pulse_lib.SamplePulse "qiskit.pulse.pulse_lib.sample_pulse.SamplePulse")

### validate\_parameters

<span id="qiskit.pulse.Drag.validate_parameters" />

`Drag.validate_parameters()`

Validate parameters.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the parameters passed are not valid.

**Return type**

`None`


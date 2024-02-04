---
title: Drag
description: API reference for qiskit.pulse.library.Drag
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.pulse.library.Drag
---

# Drag

<span id="qiskit.pulse.library.Drag" />

`Drag(duration: Union[int, qiskit.circuit.parameterexpression.ParameterExpression], amp: Union[complex, qiskit.circuit.parameterexpression.ParameterExpression], sigma: Union[float, qiskit.circuit.parameterexpression.ParameterExpression], beta: Union[float, qiskit.circuit.parameterexpression.ParameterExpression], name: Optional[str] = None, limit_amplitude: Optional[bool] = None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/pulse/library/symbolic_pulses.py "view source code")

Bases: `object`

The Derivative Removal by Adiabatic Gate (DRAG) pulse is a standard Gaussian pulse with an additional Gaussian derivative component and lifting applied.

It can be calibrated either to reduce the phase error due to virtual population of the $\vert 2\rangle$ state during the pulse or to reduce the frequency spectrum of a standard Gaussian pulse near the $\vert 1\rangle\leftrightarrow\vert 2\rangle$ transition, reducing the chance of leakage to the $\vert 2\rangle$ state.

$$
\begin{split}g(x) &= \exp\Bigl(-\frac12 \frac{(x - \text{duration}/2)^2}{\text{sigma}^2}\Bigr)\\
g'(x) &= \text{amp}\times\frac{g(x)-g(-1)}{1-g(-1)}\\
f(x) &=  g'(x) \times \Bigl(1 + 1j \times \text{beta} \times            \Bigl(-\frac{x - \text{duration}/2}{\text{sigma}^2}\Bigr)  \Bigr),
    \quad 0 \le x < \text{duration}\end{split}
$$

where $g(x)$ is a standard unlifted Gaussian waveform and $g'(x)$ is the lifted [`Gaussian`](qiskit.pulse.library.Gaussian "qiskit.pulse.library.Gaussian") waveform.

**References**

1.  [*Gambetta, J. M., Motzoi, F., Merkel, S. T. & Wilhelm, F. K. Analytic control methods for high-fidelity unitary operations in a weakly nonlinear oscillator. Phys. Rev. A 83, 012308 (2011).*](https://link.aps.org/doi/10.1103/PhysRevA.83.012308)

2.  [*F. Motzoi, J. M. Gambetta, P. Rebentrost, and F. K. Wilhelm Phys. Rev. Lett. 103, 110501 – Published 8 September 2009.*](https://link.aps.org/doi/10.1103/PhysRevLett.103.110501)

Create new pulse instance.

**Parameters**

*   **duration** – Pulse length in terms of the sampling period dt.
*   **amp** – The amplitude of the Drag envelope.
*   **sigma** – A measure of how wide or narrow the Gaussian peak is; described mathematically in the class docstring.
*   **beta** – The correction amplitude.
*   **name** – Display name for this pulse envelope.
*   **limit\_amplitude** – If `True`, then limit the amplitude of the waveform to 1. The default is `True` and the amplitude is constrained to 1.

**Returns**

SymbolicPulse instance.

## Attributes

<span id="qiskit.pulse.library.Drag.alias" />

### alias

`= 'Drag'`


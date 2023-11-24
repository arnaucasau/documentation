---
title: ReverseQGT
description: API reference for qiskit.algorithms.gradients.ReverseQGT
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.gradients.ReverseQGT
---

# ReverseQGT[¶](#reverseqgt "Permalink to this headline")

<span id="qiskit.algorithms.gradients.ReverseQGT" />

`ReverseQGT(phase_fix=True, derivative_type=DerivativeType.COMPLEX)`

Bases: [`qiskit.algorithms.gradients.base_qgt.BaseQGT`](qiskit.algorithms.gradients.BaseQGT "qiskit.algorithms.gradients.base_qgt.BaseQGT")

QGT calculation with the classically efficient reverse mode.

<Admonition title="Note" type="note">
  This QGT implementation is based on statevector manipulations and scales exponentially with the number of qubits. However, for small system sizes it can be very fast compared to circuit-based gradients.
</Admonition>

This class implements the calculation of the QGT as described in \[1]. By keeping track of three statevectors and iteratively sweeping through each parameterized gate, this method scales only quadratically with the number of parameters.

**References:**

> **\[1]: Jones, T. “Efficient classical calculation of the Quantum Natural Gradient” (2020).**
>
> [arXiv:2011.02991](https://arxiv.org/abs/2011.02991).

**Parameters**

*   **phase\_fix** (`bool`) – Whether or not to include the phase fix.
*   **derivative\_type** ([`DerivativeType`](qiskit.algorithms.gradients.DerivativeType "qiskit.algorithms.gradients.utils.DerivativeType")) – Determines whether the complex QGT or only the real or imaginary parts are calculated.

## Methods

### run

<span id="qiskit.algorithms.gradients.ReverseQGT.run" />

`ReverseQGT.run(circuits, parameter_values, parameters=None, **options)`

Run the job of the QGTs on the given circuits.

**Parameters**

*   **circuits** – The list of quantum circuits to compute the QGTs.
*   **parameter\_values** – The list of parameter values to be bound to the circuit.
*   **parameters** – The sequence of parameters to calculate only the QGTs of the specified parameters. Each sequence of parameters corresponds to a circuit in `circuits`. Defaults to None, which means that the QGTs of all parameters in each circuit are calculated.
*   **options** – Primitive backend runtime options used for circuit execution. The order of priority is: options in `run` method > QGT’s default options > primitive’s default setting. Higher priority setting overrides lower priority setting.

**Returns**

The job object of the QGTs of the expectation values. The i-th result corresponds to `circuits[i]` evaluated with parameters bound as `parameter_values[i]`.

**Raises**

**ValueError** – Invalid arguments are given.

### update\_default\_options

<span id="qiskit.algorithms.gradients.ReverseQGT.update_default_options" />

`ReverseQGT.update_default_options(**options)`

Update the gradient’s default options setting.

**Parameters**

**\*\*options** – The fields to update the default options.

## Attributes

<span id="qiskit.algorithms.gradients.ReverseQGT.SUPPORTED_GATES" />

### SUPPORTED\_GATES

`= ['rx', 'ry', 'rz', 'cp', 'crx', 'cry', 'crz']`

<span id="qiskit.algorithms.gradients.ReverseQGT.derivative_type" />

### derivative\_type

The derivative type.

**Return type**

[`DerivativeType`](qiskit.algorithms.gradients.DerivativeType "qiskit.algorithms.gradients.utils.DerivativeType")

<span id="qiskit.algorithms.gradients.ReverseQGT.options" />

### options

There are no options for the reverse QGT, returns an empty options dict.

**Return type**

[`Options`](qiskit.providers.Options "qiskit.providers.options.Options")

**Returns**

Empty options.


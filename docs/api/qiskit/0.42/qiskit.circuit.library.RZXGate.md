---
title: RZXGate
description: API reference for qiskit.circuit.library.RZXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RZXGate
---

# RZXGate[¶](#rzxgate "Permalink to this headline")

<span id="qiskit.circuit.library.RZXGate" />

`RZXGate(theta, label=None)`

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

A parametric 2-qubit $Z \otimes X$ interaction (rotation about ZX).

This gate is maximally entangling at $\theta = \pi/2$.

The cross-resonance gate (CR) for superconducting qubits implements a ZX interaction (however other terms are also present in an experiment).

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`rzx()`](qiskit.circuit.QuantumCircuit#rzx "qiskit.circuit.QuantumCircuit.rzx") method.

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤0        ├
     │  Rzx(θ) │
q_1: ┤1        ├
     └─────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZX}(\theta)\ q_0, q_1 = \exp\left(-i \frac{\theta}{2} X{\otimes}Z\right) =
    \begin{pmatrix}
        \cos\left(\th\right)   & 0          & -i\sin\left(\th\right)  & 0          \\
        0           & \cos\left(\th\right)  & 0            & i\sin\left(\th\right) \\
        -i\sin\left(\th\right) & 0          & \cos\left(\th\right)    & 0          \\
        0           & i\sin\left(\th\right) & 0            & \cos\left(\th\right)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In the above example we apply the gate on (q\_0, q\_1) which results in the $X \otimes Z$ tensor order. Instead, if we apply it on (q\_1, q\_0), the matrix will be $Z \otimes X$:

  ```python
       ┌─────────┐
  q_0: ┤1        ├
       │  Rzx(θ) │
  q_1: ┤0        ├
       └─────────┘
  ```

  $$
   \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZX}(\theta)\ q_1, q_0 = exp(-i \frac{\theta}{2} Z{\otimes}X) =
      \begin{pmatrix}
          \cos(\th)   & -i\sin(\th) & 0           & 0          \\
          -i\sin(\th) & \cos(\th)   & 0           & 0          \\
          0           & 0           & \cos(\th)   & i\sin(\th) \\
          0           & 0           & i\sin(\th)  & \cos(\th)
      \end{pmatrix}\end{split}\end{aligned}\end{align} 
  $$

  This is a direct sum of RX rotations, so this gate is equivalent to a uniformly controlled (multiplexed) RX gate:

  $$
  \begin{split}R_{ZX}(\theta)\ q_1, q_0 =
      \begin{pmatrix}
          RX(\theta) & 0 \\
          0 & RX(-\theta)
      \end{pmatrix}\end{split}
  $$
</Admonition>

**Examples:**

> $$
> R_{ZX}(\theta = 0) = I
> $$
>
> $$
> R_{ZX}(\theta = 2\pi) = -I
> $$
>
> $$
> R_{ZX}(\theta = \pi) = -i Z \otimes X
> $$
>
> $$
> \begin{split}RZX(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1  & 0 & -i & 0 \\
>                             0  & 1 & 0  & i \\
>                             -i & 0 & 1  & 0 \\
>                             0  & i & 0  & 1
>                         \end{pmatrix}\end{split}
> $$

Create new RZX gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.RZXGate.inverse" />

`RZXGate.inverse()`

Return inverse RZX gate (i.e. with the negative rotation angle).

### power

<span id="qiskit.circuit.library.RZXGate.power" />

`RZXGate.power(exponent)`

Raise gate to a power.

## Attributes

<span id="qiskit.circuit.library.RZXGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.RZXGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RZXGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RZXGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RZXGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.RZXGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RZXGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RZXGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RZXGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RZXGate.unit" />

### unit

Get the time unit of duration.


---
title: ZGate
description: API reference for qiskit.circuit.library.ZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.ZGate
---

# ZGate

<span id="qiskit.circuit.library.ZGate" />

`ZGate(label=None)`

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

The single-qubit Pauli-Z gate ($\sigma_z$).

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`z()`](qiskit.circuit.QuantumCircuit#z "qiskit.circuit.QuantumCircuit.z") method.

**Matrix Representation:**

$$
\begin{split}Z = \begin{pmatrix}
        1 & 0 \\
        0 & -1
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ Z ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the Z axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RZ(\pi)$ and $Z$.

  $$
  \begin{split}RZ(\pi) = \begin{pmatrix}
              -i & 0 \\
              0 & i
            \end{pmatrix}
          = -i Z\end{split}
  $$
</Admonition>

The gate is equivalent to a phase flip.

$$
\begin{split}|0\rangle \rightarrow |0\rangle \\
|1\rangle \rightarrow -|1\rangle\end{split}
$$

Create new Z gate.

## Methods Defined Here

<span id="qiskit-circuit-library-zgate-control" />

### control

<span id="qiskit.circuit.library.ZGate.control" />

`ZGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-Z gate.

One control returns a CZ gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

<span id="qiskit-circuit-library-zgate-inverse" />

### inverse

<span id="qiskit.circuit.library.ZGate.inverse" />

`ZGate.inverse()`

Return inverted Z gate (itself).

<span id="qiskit-circuit-library-zgate-power" />

### power

<span id="qiskit.circuit.library.ZGate.power" />

`ZGate.power(exponent)`

Raise gate to a power.

## Attributes

<span id="qiskit.circuit.library.ZGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.ZGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.ZGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.ZGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.ZGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.ZGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.ZGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.ZGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.ZGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.ZGate.unit" />

### unit

Get the time unit of duration.


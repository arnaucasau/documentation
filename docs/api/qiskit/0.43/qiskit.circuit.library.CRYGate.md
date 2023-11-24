---
title: CRYGate
description: API reference for qiskit.circuit.library.CRYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CRYGate
---

# CRYGate

<span id="qiskit.circuit.library.CRYGate" />

`CRYGate(theta, label=None, ctrl_state=None)`

Bases: [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

Controlled-RY gate.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`cry()`](qiskit.circuit.QuantumCircuit#cry "qiskit.circuit.QuantumCircuit.cry") method.

**Circuit symbol:**

```python
q_0: ────■────
     ┌───┴───┐
q_1: ┤ Ry(ϴ) ├
     └───────┘
```

**Matrix representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CRY(\theta)\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| + RY(\theta) \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0         & 0 & 0 \\
        0 & \cos\left(\th\right) & 0 & -\sin\left(\th\right) \\
        0 & 0         & 1 & 0 \\
        0 & \sin\left(\th\right) & 0 & \cos\left(\th\right)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───────┐
  q_0: ┤ Ry(ϴ) ├
       └───┬───┘
  q_1: ────■────
  ```

  $$
   \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}CRY(\theta)\ q_1, q_0 =
  |0\rangle\langle 0| \otimes I + |1\rangle\langle 1| \otimes RY(\theta) =
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & \cos\left(\th\right) & -\sin\left(\th\right) \\
          0 & 0 & \sin\left(\th\right) & \cos\left(\th\right)
      \end{pmatrix}\end{split}\end{aligned}\end{align} 
  $$
</Admonition>

Create new CRY gate.

## Methods Defined Here

<span id="qiskit-circuit-library-crygate-inverse" />

### inverse

<span id="qiskit.circuit.library.CRYGate.inverse" />

`CRYGate.inverse()`

Return inverse CRY gate (i.e. with the negative rotation angle).

## Attributes

<span id="qiskit.circuit.library.CRYGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.CRYGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

<span id="qiskit.circuit.library.CRYGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.CRYGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

<span id="qiskit.circuit.library.CRYGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.CRYGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.CRYGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

<span id="qiskit.circuit.library.CRYGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.CRYGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="qiskit.circuit.library.CRYGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.CRYGate.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.CRYGate.unit" />

### unit

Get the time unit of duration.


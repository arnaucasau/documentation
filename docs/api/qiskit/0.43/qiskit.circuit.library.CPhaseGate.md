---
title: CPhaseGate
description: API reference for qiskit.circuit.library.CPhaseGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CPhaseGate
---

# CPhaseGate

<span id="qiskit.circuit.library.CPhaseGate" />

`CPhaseGate(theta, label=None, ctrl_state=None)`

Bases: [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

Controlled-Phase gate.

This is a diagonal and symmetric gate that induces a phase on the state of the target qubit, depending on the control state.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`cp()`](qiskit.circuit.QuantumCircuit#cp "qiskit.circuit.QuantumCircuit.cp") method.

**Circuit symbol:**

```python
q_0: ─■──
      │λ
q_1: ─■──
```

**Matrix representation:**

$$
\begin{split}CPhase =
    I \otimes |0\rangle\langle 0| + P \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 0 & 0 & e^{i\lambda}
    \end{pmatrix}\end{split}
$$

<Admonition title="See also" type="note">
  `CRZGate`: Due to the global phase difference in the matrix definitions of Phase and RZ, CPhase and CRZ are different gates with a relative phase difference.
</Admonition>

Create new CPhase gate.

## Methods Defined Here

<span id="qiskit-circuit-library-cphasegate-control" />

### control

<span id="qiskit.circuit.library.CPhaseGate.control" />

`CPhaseGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Controlled version of this gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

<span id="qiskit-circuit-library-cphasegate-inverse" />

### inverse

<span id="qiskit.circuit.library.CPhaseGate.inverse" />

`CPhaseGate.inverse()`

Return inverted CPhase gate ($CPhase(\lambda)^{\dagger} = CPhase(-\lambda)$)

<span id="qiskit-circuit-library-cphasegate-power" />

### power

<span id="qiskit.circuit.library.CPhaseGate.power" />

`CPhaseGate.power(exponent)`

Raise gate to a power.

## Attributes

<span id="qiskit.circuit.library.CPhaseGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.CPhaseGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

<span id="qiskit.circuit.library.CPhaseGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.CPhaseGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

<span id="qiskit.circuit.library.CPhaseGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.CPhaseGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.CPhaseGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

<span id="qiskit.circuit.library.CPhaseGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.CPhaseGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="qiskit.circuit.library.CPhaseGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.CPhaseGate.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.CPhaseGate.unit" />

### unit

Get the time unit of duration.


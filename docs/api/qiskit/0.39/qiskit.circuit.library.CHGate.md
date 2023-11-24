---
title: CHGate
description: API reference for qiskit.circuit.library.CHGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CHGate
---

# CHGate[¶](#chgate "Permalink to this headline")

<span id="qiskit.circuit.library.CHGate" />

`CHGate(label=None, ctrl_state=None)`

Bases: [`qiskit.circuit.controlledgate.ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

Controlled-Hadamard gate.

Applies a Hadamard on the target qubit if the control is in the $|1\rangle$ state.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`ch()`](qiskit.circuit.QuantumCircuit#ch "qiskit.circuit.QuantumCircuit.ch") method.

**Circuit symbol:**

```python
q_0: ──■──
     ┌─┴─┐
q_1: ┤ H ├
     └───┘
```

**Matrix Representation:**

$$
\begin{split}CH\ q_0, q_1 =
    I \otimes |0\rangle\langle 0| + H \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & \frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\
        0 & 0 & 1 & 0 \\
        0 & \frac{1}{\sqrt{2}} & 0 & -\frac{1}{\sqrt{2}}
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In many textbooks, controlled gates are presented with the assumption of more significant qubits as control, which in our case would be q\_1. Thus a textbook matrix for this gate will be:

  ```python
       ┌───┐
  q_0: ┤ H ├
       └─┬─┘
  q_1: ──■──
  ```

  $$
  \begin{split}CH\ q_1, q_0 =
      |0\rangle\langle 0| \otimes I + |1\rangle\langle 1| \otimes H =
      \begin{pmatrix}
          1 & 0 & 0 & 0 \\
          0 & 1 & 0 & 0 \\
          0 & 0 & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
          0 & 0 & \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}}
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new CH gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.CHGate.inverse" />

`CHGate.inverse()`

Return inverted CH gate (itself).

## Attributes

<span id="qiskit.circuit.library.CHGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.CHGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

**Return type**

`int`

<span id="qiskit.circuit.library.CHGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.CHGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

<span id="qiskit.circuit.library.CHGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.CHGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.CHGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`

<span id="qiskit.circuit.library.CHGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.CHGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="qiskit.circuit.library.CHGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.CHGate.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.CHGate.unit" />

### unit

Get the time unit of duration.


---
title: SdgGate
description: API reference for qiskit.circuit.library.SdgGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.SdgGate
---

# SdgGate

<span id="qiskit.circuit.library.SdgGate" />

`SdgGate(label=None)`

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Single qubit S-adjoint gate (\~Z\*\*0.5).

It induces a $-\pi/2$ phase.

This is a Clifford gate and a square-root of Pauli-Z.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`sdg()`](qiskit.circuit.QuantumCircuit#sdg "qiskit.circuit.QuantumCircuit.sdg") method.

**Matrix Representation:**

$$
\begin{split}Sdg = \begin{pmatrix}
        1 & 0 \\
        0 & -i
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌─────┐
q_0: ┤ Sdg ├
     └─────┘
```

Equivalent to a $-\pi/2$ radian rotation about the Z axis.

Create new Sdg gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.SdgGate.inverse" />

`SdgGate.inverse()`

Return inverse of Sdg (SGate).

## Attributes

<span id="qiskit.circuit.library.SdgGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.SdgGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.SdgGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.SdgGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.SdgGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.SdgGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.SdgGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.SdgGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.SdgGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.SdgGate.unit" />

### unit

Get the time unit of duration.


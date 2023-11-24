---
title: IGate
description: API reference for qiskit.circuit.library.IGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.IGate
---

# IGate[¶](#igate "Permalink to this headline")

<span id="qiskit.circuit.library.IGate" />

`IGate(label=None)`

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Identity gate.

Identity gate corresponds to a single-qubit gate wait cycle, and should not be optimized or unrolled (it is an opaque gate).

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`i()`](qiskit.circuit.QuantumCircuit#i "qiskit.circuit.QuantumCircuit.i") and [`id()`](qiskit.circuit.QuantumCircuit#id "qiskit.circuit.QuantumCircuit.id") methods.

**Matrix Representation:**

$$
\begin{split}I = \begin{pmatrix}
        1 & 0 \\
        0 & 1
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ I ├
     └───┘
```

Create new Identity gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.IGate.inverse" />

`IGate.inverse()`

Invert this gate.

### power

<span id="qiskit.circuit.library.IGate.power" />

`IGate.power(exponent)`

Raise gate to a power.

## Attributes

<span id="qiskit.circuit.library.IGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.IGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.IGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.IGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.IGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.IGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.IGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.IGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.IGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.IGate.unit" />

### unit

Get the time unit of duration.


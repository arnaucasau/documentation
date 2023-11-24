---
title: RVGate
description: API reference for qiskit.circuit.library.RVGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RVGate
---

# RVGate

<span id="qiskit.circuit.library.RVGate" />

`RVGate(v_x, v_y, v_z, basis='U')`

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Rotation around arbitrary rotation axis $v$ where $|v|$ is angle of rotation in radians.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`rv()`](qiskit.circuit.QuantumCircuit#rv "qiskit.circuit.QuantumCircuit.rv") method.

**Circuit symbol:**

```python
     ┌─────────────────┐
q_0: ┤ RV(v_x,v_y,v_z) ├
     └─────────────────┘
```

**Matrix Representation:**

$$
\begin{split}\newcommand{\th}{|\vec{v}|}
\newcommand{\sinc}{\text{sinc}}
    R(\vec{v}) = e^{-i \vec{v}\cdot\vec{\sigma}} =
        \begin{pmatrix}
            \cos\left(\th\right) -i v_z \sinc\left(\th\right)
            & -(i v_x + v_y) \sinc\left(\th\right) \\
            -(i v_x - v_y) \sinc\left(\th\right)
            & \cos\left(\th\right) + i v_z \sinc\left(\th\right)
        \end{pmatrix}\end{split}
$$

Create new rv single-qubit gate.

**Parameters**

*   **v\_x** (*float*) – x-component
*   **v\_y** (*float*) – y-component
*   **v\_z** (*float*) – z-component
*   **basis** (*str, optional*) – basis (see [`OneQubitEulerDecomposer`](qiskit.quantum_info.OneQubitEulerDecomposer "qiskit.quantum_info.synthesis.one_qubit_decompose.OneQubitEulerDecomposer"))

## Methods Defined Here

<span id="qiskit-circuit-library-rvgate-inverse" />

### inverse

<span id="qiskit.circuit.library.RVGate.inverse" />

`RVGate.inverse()`

Invert this gate.

<span id="qiskit-circuit-library-rvgate-to-matrix" />

### to\_matrix

<span id="qiskit.circuit.library.RVGate.to_matrix" />

`RVGate.to_matrix()`

Return a numpy.array for the R(v) gate.

## Attributes

<span id="qiskit.circuit.library.RVGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RVGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RVGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RVGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RVGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RVGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RVGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RVGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RVGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RVGate.unit" />

### unit

Get the time unit of duration.


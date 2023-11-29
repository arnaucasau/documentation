---
title: PhaseEstimation
description: API reference for qiskit.circuit.library.PhaseEstimation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PhaseEstimation
---

# PhaseEstimation

<span id="qiskit.circuit.library.PhaseEstimation" />

`PhaseEstimation(num_evaluation_qubits, unitary, iqft=None, name='QPE')`

Bases: [`qiskit.circuit.quantumcircuit.QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

Phase Estimation circuit.

In the Quantum Phase Estimation (QPE) algorithm \[1, 2, 3], the Phase Estimation circuit is used to estimate the phase $\phi$ of an eigenvalue $e^{2\pi i\phi}$ of a unitary operator $U$, provided with the corresponding eigenstate $|psi\rangle$. That is

$$
U|\psi\rangle = e^{2\pi i\phi} |\psi\rangle
$$

This estimation (and thereby this circuit) is a central routine to several well-known algorithms, such as Shor’s algorithm or Quantum Amplitude Estimation.

**References:**

**\[1]: Kitaev, A. Y. (1995). Quantum measurements and the Abelian Stabilizer Problem. 1–22.**

[quant-ph/9511026](http://arxiv.org/abs/quant-ph/9511026)

**\[2]: Michael A. Nielsen and Isaac L. Chuang. 2011.**

Quantum Computation and Quantum Information: 10th Anniversary Edition (10th ed.). Cambridge University Press, New York, NY, USA.

**\[3]: Qiskit**

[textbook](https://qiskit.org/textbook/ch-algorithms/quantum-phase-estimation.html)

**Parameters**

*   **num\_evaluation\_qubits** (`int`) – The number of evaluation qubits.
*   **unitary** ([`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")) – The unitary operation $U$ which will be repeated and controlled.
*   **iqft** (`Optional`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]) – A inverse Quantum Fourier Transform, per default the inverse of [`QFT`](qiskit.circuit.library.QFT "qiskit.circuit.library.QFT") is used. Note that the QFT should not include the usual swaps!
*   **name** (`str`) – The name of the circuit.

<Admonition title="Note" type="note">
  The inverse QFT should not include a swap of the qubit order.
</Admonition>

**Reference Circuit:**

## Attributes

<span id="qiskit.circuit.library.PhaseEstimation.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.PhaseEstimation.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.PhaseEstimation.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.PhaseEstimation.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.PhaseEstimation.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.PhaseEstimation.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.PhaseEstimation.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.PhaseEstimation.instances" />

### instances

`= 87`

<span id="qiskit.circuit.library.PhaseEstimation.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.PhaseEstimation.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.PhaseEstimation.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.PhaseEstimation.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.PhaseEstimation.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.PhaseEstimation.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.PhaseEstimation.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.PhaseEstimation.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.PhaseEstimation.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]


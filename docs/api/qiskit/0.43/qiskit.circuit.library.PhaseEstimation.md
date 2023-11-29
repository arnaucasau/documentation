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

Bases: [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

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

*   **num\_evaluation\_qubits** (*int*) – The number of evaluation qubits.
*   **unitary** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")) – The unitary operation $U$ which will be repeated and controlled.
*   **iqft** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit") *| None*) – A inverse Quantum Fourier Transform, per default the inverse of [`QFT`](qiskit.circuit.library.QFT "qiskit.circuit.library.QFT") is used. Note that the QFT should not include the usual swaps!
*   **name** (*str*) – The name of the circuit.

<Admonition title="Note" type="note">
  The inverse QFT should not include a swap of the qubit order.
</Admonition>

**Reference Circuit:**

![../\_images/qiskit-circuit-library-PhaseEstimation-1.png](/images/api/qiskit/0.43/qiskit-circuit-library-PhaseEstimation-1.png)

## Attributes

<span id="qiskit.circuit.library.PhaseEstimation.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.PhaseEstimation.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.PhaseEstimation.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

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

<span id="qiskit.circuit.library.PhaseEstimation.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.PhaseEstimation.instances" />

### instances

`= 223`

<span id="qiskit.circuit.library.PhaseEstimation.layout" />

### layout

Return any associated layout information anout the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.PhaseEstimation.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.PhaseEstimation.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.PhaseEstimation.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.PhaseEstimation.num_parameters" />

### num\_parameters

The number of parameter objects in the circuit.

<span id="qiskit.circuit.library.PhaseEstimation.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.PhaseEstimation.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.PhaseEstimation.parameters" />

### parameters

The parameters defined in the circuit.

This attribute returns the [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit sorted alphabetically. Note that parameters instantiated with a [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector") are still sorted numerically.

## Examples

The snippet below shows that insertion order of parameters does not matter.

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> a, b, elephant = Parameter("a"), Parameter("b"), Parameter("elephant")
>>> circuit = QuantumCircuit(1)
>>> circuit.rx(b, 0)
>>> circuit.rz(elephant, 0)
>>> circuit.ry(a, 0)
>>> circuit.parameters  # sorted alphabetically!
ParameterView([Parameter(a), Parameter(b), Parameter(elephant)])
```

Bear in mind that alphabetical sorting might be unituitive when it comes to numbers. The literal “10” comes before “2” in strict alphabetical sorting.

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> angles = [Parameter("angle_1"), Parameter("angle_2"), Parameter("angle_10")]
>>> circuit = QuantumCircuit(1)
>>> circuit.u(*angles, 0)
>>> circuit.draw()
   ┌─────────────────────────────┐
q: ┤ U(angle_1,angle_2,angle_10) ├
   └─────────────────────────────┘
>>> circuit.parameters
ParameterView([Parameter(angle_1), Parameter(angle_10), Parameter(angle_2)])
```

To respect numerical sorting, a [`ParameterVector`](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector") can be used.

```python
```

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter, ParameterVector
>>> x = ParameterVector("x", 12)
>>> circuit = QuantumCircuit(1)
>>> for x_i in x:
...     circuit.rx(x_i, 0)
>>> circuit.parameters
ParameterView([
    ParameterVectorElement(x[0]), ParameterVectorElement(x[1]),
    ParameterVectorElement(x[2]), ParameterVectorElement(x[3]),
    ..., ParameterVectorElement(x[11])
])
```

**Returns**

The sorted [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit.

<span id="qiskit.circuit.library.PhaseEstimation.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.PhaseEstimation.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.


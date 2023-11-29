---
title: RGQFTMultiplier
description: API reference for qiskit.circuit.library.RGQFTMultiplier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RGQFTMultiplier
---

# RGQFTMultiplier

<span id="qiskit.circuit.library.RGQFTMultiplier" />

`RGQFTMultiplier(num_state_qubits, num_result_qubits=None, name='RGQFTMultiplier')`

Bases: `qiskit.circuit.library.arithmetic.multipliers.multiplier.Multiplier`

A QFT multiplication circuit to store product of two input registers out-of-place.

Multiplication in this circuit is implemented using the procedure of Fig. 3 in \[1], where weighted sum rotations are implemented as given in Fig. 5 in \[1]. QFT is used on the output register and is followed by rotations controlled by input registers. The rotations transform the state into the product of two input registers in QFT base, which is reverted from QFT base using inverse QFT. As an example, a circuit that performs a modular QFT multiplication on two 2-qubit sized input registers with an output register of 2 qubits, is as follows:

```python
  a_0: ────────────────────────────────────────■───────■──────■──────■────────────────
                                               │       │      │      │
  a_1: ─────────■───────■───────■───────■──────┼───────┼──────┼──────┼────────────────
                │       │       │       │      │       │      │      │
  b_0: ─────────┼───────┼───────■───────■──────┼───────┼──────■──────■────────────────
                │       │       │       │      │       │      │      │
  b_1: ─────────■───────■───────┼───────┼──────■───────■──────┼──────┼────────────────
       ┌──────┐ │P(4π)  │       │P(2π)  │      │P(2π)  │      │P(π)  │       ┌───────┐
out_0: ┤0     ├─■───────┼───────■───────┼──────■───────┼──────■──────┼───────┤0      ├
       │  qft │         │P(2π)          │P(π)          │P(π)         │P(π/2) │  iqft │
out_1: ┤1     ├─────────■───────────────■──────────────■─────────────■───────┤1      ├
       └──────┘                                                              └───────┘
```

**References:**

\[1] Ruiz-Perez et al., Quantum arithmetic with the Quantum Fourier Transform, 2017. [arXiv:1411.5949](https://arxiv.org/pdf/1411.5949.pdf)

**Parameters**

*   **num\_state\_qubits** (`int`) – The number of qubits in either input register for state $|a\rangle$ or $|b\rangle$. The two input registers must have the same number of qubits.
*   **num\_result\_qubits** (`Optional`\[`int`]) – The number of result qubits to limit the output to. If number of result qubits is $n$, multiplication modulo $2^n$ is performed to limit the output to the specified number of qubits. Default value is `2 * num_state_qubits` to represent any possible result from the multiplication of the two inputs.
*   **name** (`str`) – The name of the circuit object.

## Attributes

<span id="qiskit.circuit.library.RGQFTMultiplier.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.RGQFTMultiplier.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.RGQFTMultiplier.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.RGQFTMultiplier.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.RGQFTMultiplier.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.RGQFTMultiplier.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.RGQFTMultiplier.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.RGQFTMultiplier.instances" />

### instances

`= 87`

<span id="qiskit.circuit.library.RGQFTMultiplier.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.RGQFTMultiplier.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.RGQFTMultiplier.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.RGQFTMultiplier.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.RGQFTMultiplier.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.RGQFTMultiplier.num_result_qubits" />

### num\_result\_qubits

The number of result qubits to limit the output to.

**Return type**

`int`

**Returns**

The number of result qubits.

<span id="qiskit.circuit.library.RGQFTMultiplier.num_state_qubits" />

### num\_state\_qubits

The number of state qubits, i.e. the number of bits in each input register.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.RGQFTMultiplier.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.RGQFTMultiplier.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.RGQFTMultiplier.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.RGQFTMultiplier.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]


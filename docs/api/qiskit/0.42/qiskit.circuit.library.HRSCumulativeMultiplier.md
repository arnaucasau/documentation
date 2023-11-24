---
title: HRSCumulativeMultiplier
description: API reference for qiskit.circuit.library.HRSCumulativeMultiplier
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.HRSCumulativeMultiplier
---

# HRSCumulativeMultiplier[¶](#hrscumulativemultiplier "Permalink to this headline")

<span id="qiskit.circuit.library.HRSCumulativeMultiplier" />

`HRSCumulativeMultiplier(num_state_qubits, num_result_qubits=None, adder=None, name='HRSCumulativeMultiplier')`

Bases: `qiskit.circuit.library.arithmetic.multipliers.multiplier.Multiplier`

A multiplication circuit to store product of two input registers out-of-place.

Circuit uses the approach from \[1]. As an example, a multiplier circuit that performs a non-modular multiplication on two 3-qubit sized registers with the default adder is as follows (where `Adder` denotes the `CDKMRippleCarryAdder`):

```python
  a_0: ────■─────────────────────────
           │
  a_1: ────┼─────────■───────────────
           │         │
  a_2: ────┼─────────┼─────────■─────
       ┌───┴────┐┌───┴────┐┌───┴────┐
  b_0: ┤0       ├┤0       ├┤0       ├
       │        ││        ││        │
  b_1: ┤1       ├┤1       ├┤1       ├
       │        ││        ││        │
  b_2: ┤2       ├┤2       ├┤2       ├
       │        ││        ││        │
out_0: ┤3       ├┤        ├┤        ├
       │        ││        ││        │
out_1: ┤4       ├┤3       ├┤        ├
       │  Adder ││  Adder ││  Adder │
out_2: ┤5       ├┤4       ├┤3       ├
       │        ││        ││        │
out_3: ┤6       ├┤5       ├┤4       ├
       │        ││        ││        │
out_4: ┤        ├┤6       ├┤5       ├
       │        ││        ││        │
out_5: ┤        ├┤        ├┤6       ├
       │        ││        ││        │
aux_0: ┤7       ├┤7       ├┤7       ├
       └────────┘└────────┘└────────┘
```

Multiplication in this circuit is implemented in a classical approach by performing a series of shifted additions using one of the input registers while the qubits from the other input register act as control qubits for the adders.

**References:**

\[1] Häner et al., Optimizing Quantum Circuits for Arithmetic, 2018. [arXiv:1805.12445](https://arxiv.org/pdf/1805.12445.pdf)

**Parameters**

*   **num\_state\_qubits** (`int`) – The number of qubits in either input register for state $|a\rangle$ or $|b\rangle$. The two input registers must have the same number of qubits.
*   **num\_result\_qubits** (`Optional`\[`int`]) – The number of result qubits to limit the output to. If number of result qubits is $n$, multiplication modulo $2^n$ is performed to limit the output to the specified number of qubits. Default value is `2 * num_state_qubits` to represent any possible result from the multiplication of the two inputs.
*   **adder** (`Optional`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]) – Half adder circuit to be used for performing multiplication. The CDKMRippleCarryAdder is used as default if no adder is provided.
*   **name** (`str`) – The name of the circuit object.

**Raises**

**NotImplementedError** – If `num_result_qubits` is not default and a custom adder is provided.

## Attributes

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

**Return type**

`dict`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.instances" />

### instances

`= 2083`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.num_parameters" />

### num\_parameters

The number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.num_result_qubits" />

### num\_result\_qubits

The number of result qubits to limit the output to.

**Return type**

`int`

**Returns**

The number of result qubits.

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.num_state_qubits" />

### num\_state\_qubits

The number of state qubits, i.e. the number of bits in each input register.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.parameters" />

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

**Return type**

`ParameterView`

**Returns**

The sorted [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects in the circuit.

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.HRSCumulativeMultiplier.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]


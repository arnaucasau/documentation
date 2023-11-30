---
title: GR
description: API reference for qiskit.circuit.library.GR
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.GR
---

# GR[¶](#gr "Permalink to this headline")

<span id="qiskit.circuit.library.GR" />

`GR(num_qubits, theta, phi)`

Bases: [`qiskit.circuit.quantumcircuit.QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")

Global R gate.

**Circuit symbol:**

```python
     ┌──────────┐
q_0: ┤0         ├
     │          │
q_1: ┤1 GR(ϴ,φ) ├
     │          │
q_2: ┤2         ├
     └──────────┘
```

The global R gate is native to atomic systems (ion traps, cold neutrals). The global R can be applied to multiple qubits simultaneously.

In the one-qubit case, this is equivalent to an R(theta, phi) operation, and is thus reduced to the RGate. The global R gate is a direct sum of R operations on all individual qubits.

$$
GR(\theta, \phi) = \exp(-i \sum_{i=1}^{n} (\cos(\phi)X_i + \sin(\phi)Y_i) \theta/2)
$$

**Expanded Circuit:**

([Source code](qiskit-circuit-library-GR-1.py), [png](qiskit-circuit-library-GR-1.png), [hires.png](qiskit-circuit-library-GR-1.hires.png), [pdf](qiskit-circuit-library-GR-1.pdf))

![../\_images/qiskit-circuit-library-GR-1.png](/images/api/qiskit/0.40/qiskit-circuit-library-GR-1.png)

Create a new Global R (GR) gate.

**Parameters**

*   **num\_qubits** (`int`) – number of qubits.
*   **theta** (`float`) – rotation angle about axis determined by phi
*   **phi** (`float`) – angle of rotation axis in xy-plane

## Attributes

<span id="qiskit.circuit.library.GR.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[[`AncillaQubit`](qiskit.circuit.AncillaQubit "qiskit.circuit.quantumregister.AncillaQubit")]

<span id="qiskit.circuit.library.GR.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

**Return type**

`dict`

<span id="qiskit.circuit.library.GR.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.GR.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.GR.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.GR.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[[`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `float`]

<span id="qiskit.circuit.library.GR.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.GR.instances" />

### instances

`= 2322`

<span id="qiskit.circuit.library.GR.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.GR.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GR.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.GR.num_parameters" />

### num\_parameters

The number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.GR.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GR.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Return type**

`List`\[`int`]

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.GR.parameters" />

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

<span id="qiskit.circuit.library.GR.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.GR.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[[`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")]

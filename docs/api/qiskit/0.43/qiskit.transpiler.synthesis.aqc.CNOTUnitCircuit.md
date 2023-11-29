---
title: CNOTUnitCircuit
description: API reference for qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit
---

# CNOTUnitCircuit

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit" />

`CNOTUnitCircuit(num_qubits, cnots, tol=0.0, name=None)`

Bases: [`ApproximateCircuit`](qiskit.transpiler.synthesis.aqc.ApproximateCircuit "qiskit.transpiler.synthesis.aqc.approximate.ApproximateCircuit")

A class that represents an approximate circuit based on CNOT unit blocks.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits in this circuit.
*   **cnots** ([*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")) – an array of dimensions `(2, L)` indicating where the CNOT units will be placed.
*   **tol** (*float | None*) – angle parameter less or equal this (small) value is considered equal zero and corresponding gate is not inserted into the output circuit (because it becomes identity one in this case).
*   **name** (*str | None*) – name of this circuit

**Raises**

**ValueError** – if an unsupported parameter is passed.

## Methods Defined Here

<span id="qiskit-transpiler-synthesis-aqc-cnotunitcircuit-build" />

### build

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.build" />

`CNOTUnitCircuit.build(thetas)`

#### Constructs a Qiskit quantum circuit out of the parameters (angles) of this circuit. If a

parameter value is less in absolute value than the specified tolerance then the corresponding rotation gate will be skipped in the circuit.

## Attributes

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.instances" />

### instances

`= 121`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.layout" />

### layout

Return any associated layout information anout the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_parameters" />

### num\_parameters

The number of parameter objects in the circuit.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.parameters" />

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

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

<span id="qiskit.transpiler.synthesis.aqc.CNOTUnitCircuit.thetas" />

### thetas

Returns a vector of rotation angles used by CNOT units in this circuit.

**Returns**

Parameters of the rotation gates in this circuit.


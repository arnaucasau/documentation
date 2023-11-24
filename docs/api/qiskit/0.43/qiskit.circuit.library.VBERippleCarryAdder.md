---
title: VBERippleCarryAdder
description: API reference for qiskit.circuit.library.VBERippleCarryAdder
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.VBERippleCarryAdder
---

# VBERippleCarryAdder

<span id="qiskit.circuit.library.VBERippleCarryAdder" />

`VBERippleCarryAdder(num_state_qubits, kind='full', name='VBERippleCarryAdder')`

Bases: `Adder`

The VBE ripple carry adder \[1].

This circuit performs inplace addition of two equally-sized quantum registers. As an example, a classical adder circuit that performs full addition (i.e. including a carry-in bit) on two 2-qubit sized registers is as follows:

```python
          ┌────────┐                       ┌───────────┐┌──────┐
   cin_0: ┤0       ├───────────────────────┤0          ├┤0     ├
          │        │                       │           ││      │
     a_0: ┤1       ├───────────────────────┤1          ├┤1     ├
          │        │┌────────┐     ┌──────┐│           ││  Sum │
     a_1: ┤        ├┤1       ├──■──┤1     ├┤           ├┤      ├
          │        ││        │  │  │      ││           ││      │
     b_0: ┤2 Carry ├┤        ├──┼──┤      ├┤2 Carry_dg ├┤2     ├
          │        ││        │┌─┴─┐│      ││           │└──────┘
     b_1: ┤        ├┤2 Carry ├┤ X ├┤2 Sum ├┤           ├────────
          │        ││        │└───┘│      ││           │
  cout_0: ┤        ├┤3       ├─────┤      ├┤           ├────────
          │        ││        │     │      ││           │
helper_0: ┤3       ├┤0       ├─────┤0     ├┤3          ├────────
          └────────┘└────────┘     └──────┘└───────────┘
```

Here *Carry* and *Sum* gates correspond to the gates introduced in \[1]. *Carry\_dg* correspond to the inverse of the *Carry* gate. Note that in this implementation the input register qubits are ordered as all qubits from the first input register, followed by all qubits from the second input register. This is different ordering as compared to Figure 2 in \[1], which leads to a different drawing of the circuit.

**References:**

\[1] Vedral et al., Quantum Networks for Elementary Arithmetic Operations, 1995. [arXiv:quant-ph/9511018](https://arxiv.org/pdf/quant-ph/9511018.pdf)

**Parameters**

*   **num\_state\_qubits** (*int*) – The size of the register.
*   **kind** (*str*) – The kind of adder, can be `'full'` for a full adder, `'half'` for a half adder, or `'fixed'` for a fixed-sized adder. A full adder includes both carry-in and carry-out, a half only carry-out, and a fixed-sized adder neither carry-in nor carry-out.
*   **name** (*str*) – The name of the circuit.

**Raises**

**ValueError** – If `num_state_qubits` is lower than 1.

## Attributes

<span id="qiskit.circuit.library.VBERippleCarryAdder.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.VBERippleCarryAdder.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.VBERippleCarryAdder.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.VBERippleCarryAdder.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the [`CircuitInstruction`](qiskit.circuit.CircuitInstruction "qiskit.circuit.CircuitInstruction")s for each instruction.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.VBERippleCarryAdder.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.VBERippleCarryAdder.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.VBERippleCarryAdder.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.VBERippleCarryAdder.instances" />

### instances

`= 121`

<span id="qiskit.circuit.library.VBERippleCarryAdder.layout" />

### layout

Return any associated layout information anout the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.VBERippleCarryAdder.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.VBERippleCarryAdder.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.VBERippleCarryAdder.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.VBERippleCarryAdder.num_parameters" />

### num\_parameters

The number of parameter objects in the circuit.

<span id="qiskit.circuit.library.VBERippleCarryAdder.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.VBERippleCarryAdder.num_state_qubits" />

### num\_state\_qubits

The number of state qubits, i.e. the number of bits in each input register.

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.VBERippleCarryAdder.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.VBERippleCarryAdder.parameters" />

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

<span id="qiskit.circuit.library.VBERippleCarryAdder.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.VBERippleCarryAdder.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.


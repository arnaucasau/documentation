---
title: MCXGate
description: API reference for qiskit.circuit.library.MCXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.MCXGate
---

# MCXGate

<span id="qiskit.circuit.library.MCXGate" />

`MCXGate(num_ctrl_qubits=None, label=None, ctrl_state=None)`

Bases: [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

The general, multi-controlled X gate.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`mcx()`](qiskit.circuit.QuantumCircuit#mcx "qiskit.circuit.QuantumCircuit.mcx") method.

Create new MCX gate.

## Methods Defined Here

<span id="qiskit-circuit-library-mcxgate-control" />

### control

<span id="qiskit.circuit.library.MCXGate.control" />

`MCXGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a multi-controlled-X gate with more control lines.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

<span id="qiskit-circuit-library-mcxgate-get-num-ancilla-qubits" />

### get\_num\_ancilla\_qubits

<span id="qiskit.circuit.library.MCXGate.get_num_ancilla_qubits" />

`static MCXGate.get_num_ancilla_qubits(num_ctrl_qubits, mode='noancilla')`

Get the number of required ancilla qubits without instantiating the class.

This staticmethod might be necessary to check the number of ancillas before creating the gate, or to use the number of ancillas in the initialization.

**Return type**

int

<span id="qiskit-circuit-library-mcxgate-inverse" />

### inverse

<span id="qiskit.circuit.library.MCXGate.inverse" />

`MCXGate.inverse()`

Invert this gate. The MCX is its own inverse.

## Attributes

<span id="qiskit.circuit.library.MCXGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.MCXGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

<span id="qiskit.circuit.library.MCXGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.MCXGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

<span id="qiskit.circuit.library.MCXGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.MCXGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.MCXGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

<span id="qiskit.circuit.library.MCXGate.num_ancilla_qubits" />

### num\_ancilla\_qubits

The number of ancilla qubits.

<span id="qiskit.circuit.library.MCXGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.MCXGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="qiskit.circuit.library.MCXGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.MCXGate.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.MCXGate.unit" />

### unit

Get the time unit of duration.


---
title: C3SXGate
description: API reference for qiskit.circuit.library.C3SXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.C3SXGate
---

# C3SXGate

<span id="qiskit.circuit.library.C3SXGate" />

`C3SXGate(label=None, ctrl_state=None)`

Bases: [`qiskit.circuit.controlledgate.ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

The 3-qubit controlled sqrt-X gate.

This implementation is based on Page 17 of \[1].

## References

\[1] Barenco et al., 1995. [https://arxiv.org/pdf/quant-ph/9503016.pdf](https://arxiv.org/pdf/quant-ph/9503016.pdf)

Create a new 3-qubit controlled sqrt-X gate.

**Parameters**

*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

## Attributes

<span id="qiskit.circuit.library.C3SXGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.C3SXGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

**Return type**

`int`

<span id="qiskit.circuit.library.C3SXGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.C3SXGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

<span id="qiskit.circuit.library.C3SXGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.C3SXGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.C3SXGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`

<span id="qiskit.circuit.library.C3SXGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.C3SXGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="qiskit.circuit.library.C3SXGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.C3SXGate.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.C3SXGate.unit" />

### unit

Get the time unit of duration.


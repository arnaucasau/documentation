---
title: QuantumRegister
description: API reference for qiskit.circuit.QuantumRegister
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.QuantumRegister
---

# QuantumRegister

<span id="qiskit.circuit.QuantumRegister" />

`QuantumRegister(size=None, name=None, bits=None)`

Bases: [`Register`](qiskit.circuit.Register "qiskit.circuit.register.Register")

Implement a quantum register.

Create a new generic register.

Either the `size` or the `bits` argument must be provided. If `size` is not None, the register will be pre-populated with bits of the correct type.

**Parameters**

*   **size** (*int*) – Optional. The number of bits to include in the register.
*   **name** (*str*) – Optional. The name of the register. If not provided, a unique name will be auto-generated from the register type.
*   **bits** (*list\[*[*Bit*](qiskit.circuit.Bit "qiskit.circuit.Bit")*]*) – Optional. A list of Bit() instances to be used to populate the register.

**Raises**

*   **CircuitError** – if both the `size` and `bits` arguments are provided, or if neither are.
*   **CircuitError** – if `size` is not valid.
*   **CircuitError** – if `name` is not a valid name according to the OpenQASM spec.
*   **CircuitError** – if `bits` contained duplicated bits.
*   **CircuitError** – if `bits` contained bits of an incorrect type.

## Methods

<span id="qiskit-circuit-quantumregister-index" />

### index

<span id="qiskit.circuit.QuantumRegister.index" />

`QuantumRegister.index(bit)`

Find the index of the provided bit within this register.

<span id="qiskit-circuit-quantumregister-qasm" />

### qasm

<span id="qiskit.circuit.QuantumRegister.qasm" />

`QuantumRegister.qasm()`

Return OPENQASM string for this register.

<Admonition title="Deprecated since version 0.23.0" type="danger">
  The method `qiskit.circuit.quantumregister.QuantumRegister.qasm()` is deprecated as of qiskit-terra 0.23.0. It will be removed no earlier than 3 months after the release date. Correct exporting to OpenQASM 2 is the responsibility of a larger exporter; it cannot safely be done on an object-by-object basis without context. No replacement will be provided, because the premise is wrong.
</Admonition>

## Attributes

<span id="qiskit.circuit.QuantumRegister.instances_counter" />

### instances\_counter

`= count(0)`

<span id="qiskit.circuit.QuantumRegister.name" />

### name

Get the register name.

<span id="qiskit.circuit.QuantumRegister.name_format" />

### name\_format

`= re.compile('[a-z][a-zA-Z0-9_]*')`

<span id="qiskit.circuit.QuantumRegister.prefix" />

### prefix

`= 'q'`

<span id="qiskit.circuit.QuantumRegister.size" />

### size

Get the register size.


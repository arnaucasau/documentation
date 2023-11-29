---
title: Register
description: API reference for qiskit.circuit.Register
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Register
---

# Register

<span id="qiskit.circuit.Register" />

`Register(size=None, name=None, bits=None)`

Bases: `object`

Implement a generic register.

<Admonition title="Note" type="note">
  This class should not be instantiated directly. This is just a superclass for [`ClassicalRegister`](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") and [`QuantumRegister`](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister").
</Admonition>

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

<span id="qiskit-circuit-register-index" />

### index

<span id="qiskit.circuit.Register.index" />

`Register.index(bit)`

Find the index of the provided bit within this register.

## Attributes

<span id="qiskit.circuit.Register.bit_type" />

### bit\_type

`= None`

<span id="qiskit.circuit.Register.instances_counter" />

### instances\_counter

`= count(0)`

<span id="qiskit.circuit.Register.name" />

### name

Get the register name.

<span id="qiskit.circuit.Register.name_format" />

### name\_format

`= re.compile('[a-z][a-zA-Z0-9_]*')`

<span id="qiskit.circuit.Register.prefix" />

### prefix

`= 'reg'`

<span id="qiskit.circuit.Register.size" />

### size

Get the register size.


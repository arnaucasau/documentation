---
title: EquivalenceLibrary
description: API reference for qiskit.circuit.EquivalenceLibrary
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.EquivalenceLibrary
---

# EquivalenceLibrary

<span id="qiskit.circuit.EquivalenceLibrary" />

`EquivalenceLibrary(*, base=None)`

A library providing a one-way mapping of Gates to their equivalent implementations as QuantumCircuits.

Create a new equivalence library.

**Parameters**

**base** (*Optional\[*[*EquivalenceLibrary*](#qiskit.circuit.EquivalenceLibrary "qiskit.circuit.EquivalenceLibrary")*]*) – Base equivalence library to will be referenced if an entry is not found in this library.

## Methods

### add\_equivalence

<span id="qiskit.circuit.EquivalenceLibrary.add_equivalence" />

`EquivalenceLibrary.add_equivalence(gate, equivalent_circuit)`

Add a new equivalence to the library. Future queries for the Gate will include the given circuit, in addition to all existing equivalences (including those from base).

Parameterized Gates (those including qiskit.circuit.Parameters in their Gate.params) can be marked equivalent to parameterized circuits, provided the parameters match.

**Parameters**

*   **gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – A Gate instance.
*   **equivalent\_circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – A circuit equivalently implementing the given Gate.

### get\_entry

<span id="qiskit.circuit.EquivalenceLibrary.get_entry" />

`EquivalenceLibrary.get_entry(gate)`

Gets the set of QuantumCircuits circuits from the library which equivalently implement the given Gate.

Parameterized circuits will have their parameters replaced with the corresponding entries from Gate.params.

**Parameters**

**gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – A Gate instance.

**Returns**

**A list of equivalent QuantumCircuits. If empty,**

library contains no known decompositions of Gate.

Returned circuits will be ordered according to their insertion in the library, from earliest to latest, from top to base. The ordering of the StandardEquivalenceLibrary will not generally be consistent across Qiskit versions.

**Return type**

List\[[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")]

### has\_entry

<span id="qiskit.circuit.EquivalenceLibrary.has_entry" />

`EquivalenceLibrary.has_entry(gate)`

Check if a library contains any decompositions for gate.

**Parameters**

**gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – A Gate instance.

**Returns**

**True if gate has a known decomposition in the library.**

False otherwise.

**Return type**

Bool

### set\_entry

<span id="qiskit.circuit.EquivalenceLibrary.set_entry" />

`EquivalenceLibrary.set_entry(gate, entry)`

Set the equivalence record for a Gate. Future queries for the Gate will return only the circuits provided.

Parameterized Gates (those including qiskit.circuit.Parameters in their Gate.params) can be marked equivalent to parameterized circuits, provided the parameters match.

**Parameters**

*   **gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – A Gate instance.
*   **entry** (*List\['QuantumCircuit']*) – A list of QuantumCircuits, each equivalently implementing the given Gate.


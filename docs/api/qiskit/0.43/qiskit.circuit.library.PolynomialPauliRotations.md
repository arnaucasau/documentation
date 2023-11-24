---
title: PolynomialPauliRotations
description: API reference for qiskit.circuit.library.PolynomialPauliRotations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PolynomialPauliRotations
---

# PolynomialPauliRotations

<span id="qiskit.circuit.library.PolynomialPauliRotations" />

`PolynomialPauliRotations(num_state_qubits=None, coeffs=None, basis='Y', name='poly')`

Bases: [`FunctionalPauliRotations`](qiskit.circuit.library.FunctionalPauliRotations "qiskit.circuit.library.arithmetic.functional_pauli_rotations.FunctionalPauliRotations")

A circuit implementing polynomial Pauli rotations.

For a polynomial $p(x)$, a basis state $|i\rangle$ and a target qubit $|0\rangle$ this operator acts as:

$$
|i\rangle |0\rangle \mapsto \cos\left(\frac{p(i)}{2}\right) |i\rangle |0\rangle
+ \sin\left(\frac{p(i)}{2}\right) |i\rangle |1\rangle
$$

Let n be the number of qubits representing the state, d the degree of p(x) and q\_i the qubits, where q\_0 is the least significant qubit. Then for

$$
x = \sum_{i=0}^{n-1} 2^i q_i,
$$

we can write

$$
p(x) = \sum_{j=0}^{j=d} c_j x^j
$$

where $c$ are the input coefficients, `coeffs`.

Prepare an approximation to a state with amplitudes specified by a polynomial.

**Parameters**

*   **num\_state\_qubits** (*int | None*) – The number of qubits representing the state.
*   **coeffs** (*list\[float] | None*) – The coefficients of the polynomial. `coeffs[i]` is the coefficient of the i-th power of x. Defaults to linear: \[0, 1].
*   **basis** (*str*) – The type of Pauli rotation (‘X’, ‘Y’, ‘Z’).
*   **name** (*str*) – The name of the circuit.

## Attributes

<span id="qiskit.circuit.library.PolynomialPauliRotations.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.PolynomialPauliRotations.basis" />

### basis

The kind of Pauli rotation to be used.

Set the basis to ‘X’, ‘Y’ or ‘Z’ for controlled-X, -Y, or -Z rotations respectively.

**Returns**

The kind of Pauli rotation used in controlled rotation.

<span id="qiskit.circuit.library.PolynomialPauliRotations.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.PolynomialPauliRotations.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.PolynomialPauliRotations.coeffs" />

### coeffs

The coefficients of the polynomial.

`coeffs[i]` is the coefficient of the i-th power of the function input $x$, that means that the rotation angles are based on the coefficients value, following the formula

$$
c_j x^j ,  j=0, ..., d
$$

where $d$ is the degree of the polynomial $p(x)$ and $c$ are the coefficients `coeffs`.

**Returns**

The coefficients of the polynomial.

<span id="qiskit.circuit.library.PolynomialPauliRotations.data" />

### data

<span id="qiskit.circuit.library.PolynomialPauliRotations.degree" />

### degree

Return the degree of the polynomial, equals to the number of coefficients minus 1.

**Returns**

The degree of the polynomial. If the coefficients have not been set, return 0.

<span id="qiskit.circuit.library.PolynomialPauliRotations.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.PolynomialPauliRotations.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.PolynomialPauliRotations.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.PolynomialPauliRotations.instances" />

### instances

`= 126`

<span id="qiskit.circuit.library.PolynomialPauliRotations.layout" />

### layout

Return any associated layout information anout the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.PolynomialPauliRotations.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_ancilla_qubits" />

### num\_ancilla\_qubits

Deprecated. Use num\_ancillas instead.

<Admonition title="Deprecated since version 0.16.0" type="danger">
  The property `qiskit.circuit.library.arithmetic.polynomial_pauli_rotations.PolynomialPauliRotations.num_ancilla_qubits` is deprecated as of qiskit-terra 0.16.0. It will be removed no earlier than 3 months after the release date. Instead, use the property [`num_ancillas`](#qiskit.circuit.library.PolynomialPauliRotations.num_ancillas "qiskit.circuit.library.PolynomialPauliRotations.num_ancillas").
</Admonition>

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_parameters" />

### num\_parameters

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_state_qubits" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.PolynomialPauliRotations.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.PolynomialPauliRotations.parameters" />

### parameters

<span id="qiskit.circuit.library.PolynomialPauliRotations.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.PolynomialPauliRotations.qregs" />

### qregs

`list[QuantumRegister]`

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.PolynomialPauliRotations.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.


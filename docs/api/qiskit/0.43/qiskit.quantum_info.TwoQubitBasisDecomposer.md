---
title: TwoQubitBasisDecomposer
description: API reference for qiskit.quantum_info.TwoQubitBasisDecomposer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.TwoQubitBasisDecomposer
---

# TwoQubitBasisDecomposer

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer" />

`TwoQubitBasisDecomposer(gate, basis_fidelity=1.0, euler_basis='U', pulse_optimize=None)`

Bases: `object`

A class for decomposing 2-qubit unitaries into minimal number of uses of a 2-qubit basis gate.

**Parameters**

*   **gate** ([*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate")) – Two-qubit gate to be used in the KAK decomposition.
*   **basis\_fidelity** (*float*) – Fidelity to be assumed for applications of KAK Gate. Default 1.0.
*   **euler\_basis** (*str*) – Basis string to be provided to OneQubitEulerDecomposer for 1Q synthesis. Valid options are \[‘ZYZ’, ‘ZXZ’, ‘XYX’, ‘U’, ‘U3’, ‘U1X’, ‘PSX’, ‘ZSX’, ‘RR’].
*   **pulse\_optimize** (*None or bool*) – If True, try to do decomposition which minimizes local unitaries in between entangling gates. This will raise an exception if an optimal decomposition is not implemented. Currently, only \[\{CX, SX, RZ}] is known. If False, don’t attempt optimization. If None, attempt optimization but don’t raise if unknown.

## Methods

<span id="qiskit-quantum-info-twoqubitbasisdecomposer-decomp0" />

### decomp0

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer.decomp0" />

`static TwoQubitBasisDecomposer.decomp0(target)`

Decompose target \~Ud(x, y, z) with 0 uses of the basis gate. Result Ur has trace: $|Tr(Ur.Utarget^dag)| = 4|(cos(x)cos(y)cos(z)+ j sin(x)sin(y)sin(z)|$, which is optimal for all targets and bases

<span id="qiskit-quantum-info-twoqubitbasisdecomposer-decomp1" />

### decomp1

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1" />

`TwoQubitBasisDecomposer.decomp1(target)`

Decompose target \~Ud(x, y, z) with 1 uses of the basis gate \~Ud(a, b, c). Result Ur has trace: .. math:

```python
|Tr(Ur.Utarget^dag)| = 4|cos(x-a)cos(y-b)cos(z-c) + j sin(x-a)sin(y-b)sin(z-c)|
```

which is optimal for all targets and bases with z==0 or c==0

<span id="qiskit-quantum-info-twoqubitbasisdecomposer-decomp2-supercontrolled" />

### decomp2\_supercontrolled

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled" />

`TwoQubitBasisDecomposer.decomp2_supercontrolled(target)`

Decompose target \~Ud(x, y, z) with 2 uses of the basis gate.

For supercontrolled basis \~Ud(pi/4, b, 0), all b, result Ur has trace .. math:

```python
|Tr(Ur.Utarget^dag)| = 4cos(z)
```

which is the optimal approximation for basis of CNOT-class `~Ud(pi/4, 0, 0)` or DCNOT-class `~Ud(pi/4, pi/4, 0)` and any target. May be sub-optimal for b!=0 (e.g. there exists exact decomposition for any target using B `B~Ud(pi/4, pi/8, 0)`, but not this decomposition.) This is an exact decomposition for supercontrolled basis and target `~Ud(x, y, 0)`. No guarantees for non-supercontrolled basis.

<span id="qiskit-quantum-info-twoqubitbasisdecomposer-decomp3-supercontrolled" />

### decomp3\_supercontrolled

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer.decomp3_supercontrolled" />

`TwoQubitBasisDecomposer.decomp3_supercontrolled(target)`

Decompose target with 3 uses of the basis. This is an exact decomposition for supercontrolled basis \~Ud(pi/4, b, 0), all b, and any target. No guarantees for non-supercontrolled basis.

<span id="qiskit-quantum-info-twoqubitbasisdecomposer-num-basis-gates" />

### num\_basis\_gates

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer.num_basis_gates" />

`TwoQubitBasisDecomposer.num_basis_gates(unitary)`

Computes the number of basis gates needed in a decomposition of input unitary

<span id="qiskit-quantum-info-twoqubitbasisdecomposer-traces" />

### traces

<span id="qiskit.quantum_info.TwoQubitBasisDecomposer.traces" />

`TwoQubitBasisDecomposer.traces(target)`

Give the expected traces $|Tr(U \cdot Utarget^dag)|$ for different number of basis gates.


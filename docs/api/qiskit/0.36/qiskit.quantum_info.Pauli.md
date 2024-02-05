---
title: Pauli
description: API reference for qiskit.quantum_info.Pauli
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Pauli
---

# Pauli

<span id="qiskit.quantum_info.Pauli" />

`Pauli(data=None, x=None, *, z=None, label=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Bases: `qiskit.quantum_info.operators.symplectic.base_pauli.BasePauli`

N-qubit Pauli operator.

This class represents an operator $P$ from the full $n$-qubit *Pauli* group

$$
P = (-i)^{q} P_{n-1} \otimes ... \otimes P_{0}
$$

where $q\in \mathbb{Z}_4$ and $P_i \in \{I, X, Y, Z\}$ are single-qubit Pauli matrices:

$$
\begin{split}I = \begin{pmatrix} 1 & 0  \\ 0 & 1  \end{pmatrix},
X = \begin{pmatrix} 0 & 1  \\ 1 & 0  \end{pmatrix},
Y = \begin{pmatrix} 0 & -i \\ i & 0  \end{pmatrix},
Z = \begin{pmatrix} 1 & 0  \\ 0 & -1 \end{pmatrix}.\end{split}
$$

**Initialization**

A Pauli object can be initialized in several ways:

> **`Pauli(obj)`**
>
> where `obj` is a Pauli string, `Pauli` or [`ScalarOp`](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp") operator, or a Pauli gate or `QuantumCircuit` containing only Pauli gates.
>
> **`Pauli((z, x, phase))`**
>
> where `z` and `x` are boolean `numpy.ndarrays` and `phase` is an integer in `[0, 1, 2, 3]`.
>
> **`Pauli((z, x))`**
>
> equivalent to `Pauli((z, x, 0))` with trivial phase.

**String representation**

An $n$-qubit Pauli may be represented by a string consisting of $n$ characters from `['I', 'X', 'Y', 'Z']`, and optionally phase coefficient in $['', '-i', '-', 'i']$. For example: `XYZ` or `'-iZIZ'`.

In the string representation qubit-0 corresponds to the right-most Pauli character, and qubit-$(n-1)$ to the left-most Pauli character. For example `'XYZ'` represents $X\otimes Y \otimes Z$ with `'Z'` on qubit-0, `'Y'` on qubit-1, and `'X'` on qubit-3.

The string representation can be converted to a `Pauli` using the class initialization (`Pauli('-iXYZ')`). A `Pauli` object can be converted back to the string representation using the [`to_label()`](qiskit.quantum_info.Pauli#to_label "qiskit.quantum_info.Pauli.to_label") method or `str(pauli)`.

<Admonition title="Note" type="note">
  Using `str` to convert a `Pauli` to a string will truncate the returned string for large numbers of qubits while [`to_label()`](qiskit.quantum_info.Pauli#to_label "qiskit.quantum_info.Pauli.to_label") will return the full string with no truncation. The default truncation length is 50 characters. The default value can be changed by setting the class \_\_truncate\_\_ attribute to an integer value. If set to `0` no truncation will be performed.
</Admonition>

**Array Representation**

The internal data structure of an $n$-qubit Pauli is two length-$n$ boolean vectors $z \in \mathbb{Z}_2^N$, $x \in \mathbb{Z}_2^N$, and an integer $q \in \mathbb{Z}_4$ defining the Pauli operator

$$
P = (-i)^{q + z\cdot x} Z^z \cdot X^x.
$$

The $k$ and $x$ arrays

$$
\begin{split}P &= P_{n-1} \otimes ... \otimes P_{0} \\
P_k &= (-i)^{z[k] * x[k]} Z^{z[k]}\cdot X^{x[k]}\end{split}
$$

where `z[k] = P.z[k]`, `x[k] = P.x[k]` respectively.

The $z$ and $x$ arrays can be accessed and updated using the [`z`](#qiskit.quantum_info.Pauli.z "qiskit.quantum_info.Pauli.z") and [`x`](#qiskit.quantum_info.Pauli.x "qiskit.quantum_info.Pauli.x") properties respectively. The phase integer $q$ can be accessed and updated using the [`phase`](#qiskit.quantum_info.Pauli.phase "qiskit.quantum_info.Pauli.phase") property.

**Matrix Operator Representation**

Pauli’s can be converted to $(2^n, 2^n)$ [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") using the `to_operator()` method, or to a dense or sparse complex matrix using the [`to_matrix()`](qiskit.quantum_info.Pauli#to_matrix "qiskit.quantum_info.Pauli.to_matrix") method.

**Data Access**

The individual qubit Paulis can be accessed and updated using the `[]` operator which accepts integer, lists, or slices for selecting subsets of Paulis. Note that selecting subsets of Pauli’s will discard the phase of the current Pauli.

For example

Initialize the Pauli.

When using the symplectic array input data both z and x arguments must be provided, however the first (z) argument can be used alone for string label, Pauli operator, or ScalarOp input data.

**Parameters**

*   **data** (*str or tuple or* [*Pauli*](#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*ScalarOp*](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")) – input data for Pauli. If input is a tuple it must be of the form `(z, x)` or (z, x, phase)\`\` where `z` and `x` are boolean Numpy arrays, and phase is an integer from Z\_4. If input is a string, it must be a concatenation of a phase and a Pauli string (e.g. ‘XYZ’, ‘-iZIZ’) where a phase string is a combination of at most three characters from \[‘+’, ‘-‘, ‘’], \[‘1’, ‘’], and \[‘i’, ‘j’, ‘’] in this order, e.g. ‘’, ‘-1j’ while a Pauli string is 1 or more characters of ‘I’, ‘X’, ‘Y’ or ‘Z’, e.g. ‘Z’, ‘XIYY’.
*   **x** (*np.ndarray*) – DEPRECATED, symplectic x vector.
*   **z** (*np.ndarray*) – DEPRECATED, symplectic z vector.
*   **label** (*str*) – DEPRECATED, string label.

**Raises**

**QiskitError** – if input array is invalid shape.

## Methods

### adjoint

<span id="qiskit.quantum_info.Pauli.adjoint" />

`Pauli.adjoint()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return the adjoint of the Operator.

### anticommutes

<span id="qiskit.quantum_info.Pauli.anticommutes" />

`Pauli.anticommutes(other, qargs=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return True if other Pauli anticommutes with self.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – another Pauli operator.
*   **qargs** (*list*) – qubits to apply dot product on (default: None).

**Returns**

True if Pauli’s anticommute, False if they commute.

**Return type**

bool

### append\_paulis

<span id="qiskit.quantum_info.Pauli.append_paulis" />

`Pauli.append_paulis(paulis=None, pauli_labels=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Append pauli at the end.

**Parameters**

*   **paulis** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – the to-be-inserted or appended pauli
*   **pauli\_labels** (*list\[str]*) – the to-be-inserted or appended pauli label

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### commutes

<span id="qiskit.quantum_info.Pauli.commutes" />

`Pauli.commutes(other, qargs=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return True if the Pauli commutes with other.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*PauliList*](qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another Pauli operator.
*   **qargs** (*list*) – qubits to apply dot product on (default: None).

**Returns**

True if Pauli’s commute, False if they anti-commute.

**Return type**

bool

### compose

<span id="qiskit.quantum_info.Pauli.compose" />

`Pauli.compose(other, qargs=None, front=False, inplace=False)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return the operator composition with another Pauli.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.
*   **qargs** (*list or None*) – Optional, qubits to apply dot product on (default: None).
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].
*   **inplace** (*bool*) – If True update in-place (default: False).

**Returns**

The composed Pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<Admonition title="Note" type="note">
  Composition (`&`) by default is defined as left matrix multiplication for matrix operators, while [`dot()`](qiskit.quantum_info.Pauli#dot "qiskit.quantum_info.Pauli.dot") is defined as right matrix multiplication. That is that `A & B == A.compose(B)` is equivalent to `B.dot(A)` when `A` and `B` are of the same type.

  Setting the `front=True` kwarg changes this to right matrix multiplication and is equivalent to the [`dot()`](qiskit.quantum_info.Pauli#dot "qiskit.quantum_info.Pauli.dot") method `A.dot(B) == A.compose(B, front=True)`.
</Admonition>

### conjugate

<span id="qiskit.quantum_info.Pauli.conjugate" />

`Pauli.conjugate()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return the conjugate of each Pauli in the list.

### copy

<span id="qiskit.quantum_info.Pauli.copy" />

`Pauli.copy()`

Make a deep copy of current operator.

### delete

<span id="qiskit.quantum_info.Pauli.delete" />

`Pauli.delete(qubits)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return a Pauli with qubits deleted.

**Parameters**

**qubits** (*int or list*) – qubits to delete from Pauli.

**Returns**

the resulting Pauli with the specified qubits removed.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if ind is out of bounds for the array size or number of qubits.

### delete\_qubits

<span id="qiskit.quantum_info.Pauli.delete_qubits" />

`Pauli.delete_qubits(indices)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Delete pauli at the indices.

This function is deprecated. Equivalent functionality can be obtained using the [`delete()`](qiskit.quantum_info.Pauli#delete "qiskit.quantum_info.Pauli.delete") method.

**Parameters**

**indices** (*list\[int]*) – the indices of to-be-deleted paulis

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### dot

<span id="qiskit.quantum_info.Pauli.dot" />

`Pauli.dot(other, qargs=None, inplace=False)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – an operator object.
*   **qargs** (*list or None*) – Optional, qubits to apply dot product on (default: None).
*   **inplace** (*bool*) – If True update in-place (default: False).

**Returns**

The operator self \* other.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### equiv

<span id="qiskit.quantum_info.Pauli.equiv" />

`Pauli.equiv(other)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return True if Pauli’s are equivalent up to group phase.

**Parameters**

**other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – an operator object.

**Returns**

True if the Pauli’s are equivalent up to group phase.

**Return type**

bool

### evolve

<span id="qiskit.quantum_info.Pauli.evolve" />

`Pauli.evolve(other, qargs=None, frame='h')`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Heisenberg picture evolution of a Pauli by a Clifford.

This returns the Pauli $P^\prime = C^\dagger.P.C$.

By choosing the parameter frame=’s’, this function returns the Schrödinger evolution of the Pauli $P^\prime = C.P.C^\dagger$. This option yields a faster calculation.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The Clifford operator to evolve by.
*   **qargs** (*list*) – a list of qubits to apply the Clifford to.
*   **frame** (*string*) – ‘h’ for Heisenberg or ‘s’ for Schrödinger framework.

**Returns**

the Pauli $C^\dagger.P.C$.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the Clifford number of qubits and qargs don’t match.

### expand

<span id="qiskit.quantum_info.Pauli.expand" />

`Pauli.expand(other)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return the reverse-order tensor product with another Pauli.

**Parameters**

**other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.

**Returns**

**the tensor product $b \otimes a$, where $a$**

is the current Pauli, and $b$ is the other Pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### from\_label

<span id="qiskit.quantum_info.Pauli.from_label" />

`static Pauli.from_label(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Construct a Pauli from a string label.

This function is deprecated use `Pauli(label)` instead.

**Parameters**

**label** (*str*) – Pauli string label.

**Returns**

the constructed Pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

*   **QiskitError** – If the input list is empty or contains invalid
*   **Pauli strings.** –

### input\_dims

<span id="qiskit.quantum_info.Pauli.input_dims" />

`Pauli.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### insert

<span id="qiskit.quantum_info.Pauli.insert" />

`Pauli.insert(qubits, value)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Insert a Pauli at specific qubit value.

**Parameters**

*   **qubits** (*int or list*) – qubits index to insert at.
*   **value** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – value to insert.

**Returns**

the resulting Pauli with the entries inserted.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the insertion qubits are invalid.

### insert\_paulis

<span id="qiskit.quantum_info.Pauli.insert_paulis" />

`Pauli.insert_paulis(indices=None, paulis=None, pauli_labels=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Insert or append pauli to the targeted indices.

This function is deprecated. Similar functionality can be obtained using the [`insert()`](qiskit.quantum_info.Pauli#insert "qiskit.quantum_info.Pauli.insert") method.

If indices is None, it means append at the end.

**Parameters**

*   **indices** (*list\[int]*) – the qubit indices to be inserted
*   **paulis** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – the to-be-inserted or appended pauli
*   **pauli\_labels** (*list\[str]*) – the to-be-inserted or appended pauli label

<Admonition title="Note" type="note">
  the indices refers to the location of original paulis, e.g. if indices = \[0, 2], pauli\_labels = \[‘Z’, ‘I’] and original pauli = ‘ZYXI’ the pauli will be updated to ZY’I’XI’Z’ ‘Z’ and ‘I’ are inserted before the qubit at 0 and 2.
</Admonition>

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – provide both paulis and pauli\_labels at the same time

### inverse

<span id="qiskit.quantum_info.Pauli.inverse" />

`Pauli.inverse()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return the inverse of the Pauli.

### kron

<span id="qiskit.quantum_info.Pauli.kron" />

`Pauli.kron(other)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Kronecker product of two paulis.

This function is deprecated. Use [`expand()`](qiskit.quantum_info.Pauli#expand "qiskit.quantum_info.Pauli.expand") instead.

Order is \$P\_2 (other) otimes P\_1 (self)\$

**Parameters**

**other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – P2

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### output\_dims

<span id="qiskit.quantum_info.Pauli.output_dims" />

`Pauli.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### pauli\_single

<span id="qiskit.quantum_info.Pauli.pauli_single" />

`classmethod Pauli.pauli_single(num_qubits, index, pauli_label)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Generate single qubit pauli at index with pauli\_label with length num\_qubits.

**Parameters**

*   **num\_qubits** (*int*) – the length of pauli
*   **index** (*int*) – the qubit index to insert the single qubit
*   **pauli\_label** (*str*) – pauli

**Returns**

single qubit pauli

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### power

<span id="qiskit.quantum_info.Pauli.power" />

`Pauli.power(n)`

Return the compose of a operator with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composed operator.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

### random

<span id="qiskit.quantum_info.Pauli.random" />

`classmethod Pauli.random(num_qubits, seed=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Return a random Pauli on number of qubits.

This function is deprecated use [`random_pauli()`](qiskit.quantum_info.random_pauli "qiskit.quantum_info.random_pauli") instead.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits
*   **seed** (*int*) – Optional. To set a random seed.

**Returns**

the random pauli

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### reshape

<span id="qiskit.quantum_info.Pauli.reshape" />

`Pauli.reshape(input_dims=None, output_dims=None, num_qubits=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

**Parameters**

*   **input\_dims** (*None or tuple*) – new subsystem input dimensions. If None the original input dims will be preserved \[Default: None].
*   **output\_dims** (*None or tuple*) – new subsystem output dimensions. If None the original output dims will be preserved \[Default: None].
*   **num\_qubits** (*None or int*) – reshape to an N-qubit operator \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

### set\_truncation

<span id="qiskit.quantum_info.Pauli.set_truncation" />

`classmethod Pauli.set_truncation(val)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Set the max number of Pauli characters to display before truncation/

**Parameters**

**val** (*int*) – the number of characters.

<Admonition title="Note" type="note">
  Truncation will be disabled if the truncation value is set to 0.
</Admonition>

### sgn\_prod

<span id="qiskit.quantum_info.Pauli.sgn_prod" />

`static Pauli.sgn_prod(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Multiply two Paulis and track the phase.

This function is deprecated. The Pauli class now handles full Pauli group multiplication using [`compose()`](qiskit.quantum_info.Pauli#compose "qiskit.quantum_info.Pauli.compose") or [`dot()`](qiskit.quantum_info.Pauli#dot "qiskit.quantum_info.Pauli.dot").

\$P\_3 = P\_1 otimes P\_2\$: X\*Y

**Parameters**

*   **p1** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 1
*   **p2** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – pauli 2

**Returns**

the multiplied pauli (without phase) complex: the sign of the multiplication, 1, -1, 1j or -1j

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

### tensor

<span id="qiskit.quantum_info.Pauli.tensor" />

`Pauli.tensor(other)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return the tensor product with another Pauli.

**Parameters**

**other** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – a Pauli object.

**Returns**

**the tensor product $a \otimes b$, where $a$**

is the current Pauli, and $b$ is the other Pauli.

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

<Admonition title="Note" type="note">
  The tensor product can be obtained using the `^` binary operator. Hence `a.tensor(b)` is equivalent to `a ^ b`.
</Admonition>

### to\_instruction

<span id="qiskit.quantum_info.Pauli.to_instruction" />

`Pauli.to_instruction()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Convert to Pauli circuit instruction.

### to\_label

<span id="qiskit.quantum_info.Pauli.to_label" />

`Pauli.to_label()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Convert a Pauli to a string label.

<Admonition title="Note" type="note">
  The difference between to\_label and `__str__()` is that the later will truncate the output for large numbers of qubits.
</Admonition>

**Returns**

the Pauli string label.

**Return type**

str

### to\_matrix

<span id="qiskit.quantum_info.Pauli.to_matrix" />

`Pauli.to_matrix(sparse=False)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Convert to a Numpy array or sparse CSR matrix.

**Parameters**

**sparse** (*bool*) – if True return sparse CSR matrices, otherwise return dense Numpy arrays (default: False).

**Returns**

The Pauli matrix.

**Return type**

array

### to\_spmatrix

<span id="qiskit.quantum_info.Pauli.to_spmatrix" />

`Pauli.to_spmatrix()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED Convert Pauli to a sparse matrix representation (CSR format).

This function is deprecated. Use [`to_matrix()`](qiskit.quantum_info.Pauli#to_matrix "qiskit.quantum_info.Pauli.to_matrix") with kwarg `sparse=True` instead.

**Returns**

a sparse matrix with CSR format that represents the pauli.

**Return type**

scipy.sparse.csr\_matrix

### transpose

<span id="qiskit.quantum_info.Pauli.transpose" />

`Pauli.transpose()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

Return the transpose of each Pauli in the list.

### update\_x

<span id="qiskit.quantum_info.Pauli.update_x" />

`Pauli.update_x(x, indices=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Update partial or entire x.

This function is deprecated. Use the setter for `X` instead.

**Parameters**

*   **x** (*numpy.ndarray or list*) – to-be-updated x
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole x, the number of qubits must be the same.

### update\_z

<span id="qiskit.quantum_info.Pauli.update_z" />

`Pauli.update_z(z, indices=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/quantum_info/operators/symplectic/pauli.py "view source code")

DEPRECATED: Update partial or entire z.

This function is deprecated. Use the setter for `Z` instead.

**Parameters**

*   **z** (*numpy.ndarray or list*) – to-be-updated z
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole z, the number of qubits must be the same.

## Attributes

<span id="qiskit.quantum_info.Pauli.dim" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="qiskit.quantum_info.Pauli.name" />

### name

Unique string identifier for operation type.

<span id="qiskit.quantum_info.Pauli.num_clbits" />

### num\_clbits

Number of classical bits.

<span id="qiskit.quantum_info.Pauli.num_qubits" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="qiskit.quantum_info.Pauli.phase" />

### phase

Return the group phase exponent for the Pauli.

<span id="qiskit.quantum_info.Pauli.qargs" />

### qargs

Return the qargs for the operator.

<span id="qiskit.quantum_info.Pauli.settings" />

### settings

Return settings.

**Return type**

`Dict`

<span id="qiskit.quantum_info.Pauli.x" />

### x

The x vector for the Pauli.

<span id="qiskit.quantum_info.Pauli.z" />

### z

The z vector for the Pauli.


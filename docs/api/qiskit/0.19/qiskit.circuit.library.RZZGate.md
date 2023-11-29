---
title: RZZGate
description: API reference for qiskit.circuit.library.RZZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RZZGate
---

# RZZGate

<span id="qiskit.circuit.library.RZZGate" />

`RZZGate(theta)`

A parameteric 2-qubit $Z \otimes Z$ interaction (rotation about ZZ).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

**Circuit Symbol:**

```python
q_0: ───■────
        │zz(θ)
q_1: ───■────
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZZ}(\theta) = exp(-i \th Z{\otimes}Z) =
    \begin{pmatrix}
        e^{-i \th} & 0 & 0 & 0 \\
        0 & e^{i \th} & 0 & 0 \\
        0 & 0 & e^{i \th} & 0 \\
        0 & 0 & 0 & e^{-i \th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

This is a direct sum of RZ rotations, so this gate is equivalent to a uniformly controlled (multiplexed) RZ gate:

$$
\begin{split}R_{ZZ}(\theta) =
    \begin{pmatrix}
        RZ(\theta) & 0 \\
        0 & RZ(-\theta)
    \end{pmatrix}\end{split}
$$

**Examples:**

> $$
> R_{ZZ}(\theta = 0) = I
> $$
>
> $$
> R_{ZZ}(\theta = 2\pi) = -I
> $$
>
> $$
> R_{ZZ}(\theta = \pi) = - Z \otimes Z
> $$
>
> $$
> \begin{split}R_{ZZ}(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1-i & 0 & 0 & 0 \\
>                             0 & 1+i & 0 & 0 \\
>                             0 & 0 & 1+i & 0 \\
>                             0 & 0 & 0 & 1-i
>                         \end{pmatrix}\end{split}
> $$

Create new RZZ gate.

## Attributes

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### label

<span id="qiskit.circuit.library.RZZGate.label" />

`str`

Return gate label

**Return type**

`str`

### params

return instruction params.

## Methods

### add\_decomposition

<span id="qiskit.circuit.library.RZZGate.add_decomposition" />

`RZZGate.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.RZZGate.assemble" />

`RZZGate.assemble()`

Assemble a QasmQobjInstruction

**Return type**

[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

### broadcast\_arguments

<span id="qiskit.circuit.library.RZZGate.broadcast_arguments" />

`RZZGate.broadcast_arguments(qargs, cargs)`

Validation and handling of the arguments and its relationship.

For example, `cx([q[0],q[1]], q[2])` means `cx(q[0], q[2]); cx(q[1], q[2])`. This method yields the arguments in the right grouping. In the given example:

```python
in: [[q[0],q[1]], q[2]],[]
outs: [q[0], q[2]], []
      [q[1], q[2]], []
```

The general broadcasting rules are:

> *   If len(qargs) == 1:
>
>     ```python
>     [q[0], q[1]] -> [q[0]],[q[1]]
>     ```
>
> *   If len(qargs) == 2:
>
>     ```python
>     [[q[0], q[1]], [r[0], r[1]]] -> [q[0], r[0]], [q[1], r[1]]
>     [[q[0]], [r[0], r[1]]]       -> [q[0], r[0]], [q[0], r[1]]
>     [[q[0], q[1]], [r[0]]]       -> [q[0], r[0]], [q[1], r[0]]
>     ```
>
> *   If len(qargs) >= 3:
>
>     ```python
>     [q[0], q[1]], [r[0], r[1]],  ...] -> [q[0], r[0], ...], [q[1], r[1], ...]
>     ```

**Parameters**

*   **qargs** (`List`) – List of quantum bit arguments.
*   **cargs** (`List`) – List of classical bit arguments.

**Return type**

`Tuple`\[`List`, `List`]

**Returns**

A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.circuit.library.RZZGate.c_if" />

`RZZGate.c_if(classical, val)`

Add classical condition on register classical and value val.

### control

<span id="qiskit.circuit.library.RZZGate.control" />

`RZZGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** (`Optional`\[`int`]) – number of controls to add to gate (default=1)
*   **label** (`Optional`\[`str`]) – optional gate label
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

Controlled version of gate. This default algorithm uses num\_ctrl\_qubits-1 ancillae qubits so returns a gate of size num\_qubits + 2\*num\_ctrl\_qubits - 1.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

**QiskitError** – unrecognized mode or invalid ctrl\_state

### copy

<span id="qiskit.circuit.library.RZZGate.copy" />

`RZZGate.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.circuit.library.RZZGate.inverse" />

`RZZGate.inverse()`

Return inverse RZZ gate (i.e. with the negative rotation angle).

### is\_parameterized

<span id="qiskit.circuit.library.RZZGate.is_parameterized" />

`RZZGate.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.circuit.library.RZZGate.mirror" />

`RZZGate.mirror()`

For a composite instruction, reverse the order of sub-gates.

This is done by recursively mirroring all sub-instructions. It does not invert any gate.

**Returns**

a fresh gate with sub-gates reversed

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### power

<span id="qiskit.circuit.library.RZZGate.power" />

`RZZGate.power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

### qasm

<span id="qiskit.circuit.library.RZZGate.qasm" />

`RZZGate.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.RZZGate.repeat" />

`RZZGate.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

### to\_matrix

<span id="qiskit.circuit.library.RZZGate.to_matrix" />

`RZZGate.to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

**Return type**

`ndarray`


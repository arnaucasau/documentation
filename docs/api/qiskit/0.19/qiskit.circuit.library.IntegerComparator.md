---
title: IntegerComparator
description: API reference for qiskit.circuit.library.IntegerComparator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.IntegerComparator
---

# IntegerComparator

<span id="qiskit.circuit.library.IntegerComparator" />

`IntegerComparator(num_state_qubits=None, value=None, geq=True, name='cmp')`

Integer Comparator.

Operator compares basis states $|i\rangle_n$ against a classically given integer $L$ of fixed value and flips a target qubit if $i \geq L$ (or $<$ depending on parameters):

$$
|i\rangle_n |0\rangle \mapsto |i\rangle_n |i \geq L\rangle
$$

This operation is based on two’s complement implementation of binary subtraction but only uses carry bits and no actual result bits. If the most significant carry bit (the results bit) is 1, the $\geq$ condition is `True` otherwise it is `False`.

Create a new fixed value comparator circuit.

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – Number of state qubits. If this is set it will determine the number of qubits required for the circuit.
*   **value** (`Optional`\[`int`]) – The fixed value to compare with.
*   **geq** (`bool`) – If True, evaluate a `>=` condition, else `<`.
*   **name** (`str`) – Name of the circuit.

## Attributes

### clbits

Returns a list of classical bits in the order that the registers were added.

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

### extension\_lib

<span id="qiskit.circuit.library.IntegerComparator.extension_lib" />

`= 'include "qelib1.inc";'`

### geq

<span id="qiskit.circuit.library.IntegerComparator.geq" />

`bool`

Return whether the comparator compares greater or less equal.

**Return type**

`bool`

**Returns**

True, if the comparator compares `>=`, False if `<`.

### header

<span id="qiskit.circuit.library.IntegerComparator.header" />

`= 'OPENQASM 2.0;'`

### instances

<span id="qiskit.circuit.library.IntegerComparator.instances" />

`= 8`

### n\_qubits

Deprecated, use `num_qubits` instead. Return number of qubits.

### num\_ancilla\_qubits

<span id="qiskit.circuit.library.IntegerComparator.num_ancilla_qubits" />

`int`

The number of ancilla qubits used.

**Return type**

`int`

**Returns**

The number of ancillas in the circuit.

### num\_clbits

Return number of classical bits.

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

### num\_qubits

Return number of qubits.

### num\_state\_qubits

<span id="qiskit.circuit.library.IntegerComparator.num_state_qubits" />

`int`

The number of qubits encoding the state for the comparison.

**Return type**

`int`

**Returns**

The number of state qubits.

### parameters

Convenience function to get the parameters defined in the parameter table.

### prefix

<span id="qiskit.circuit.library.IntegerComparator.prefix" />

`= 'circuit'`

### qregs

A list of the quantum registers associated with the circuit.

### qubits

Returns a list of quantum bits in the order that the registers were added.

### value

<span id="qiskit.circuit.library.IntegerComparator.value" />

`int`

The value to compare the qubit register to.

**Return type**

`int`

**Returns**

The value against which the value of the qubit register is compared.

## Methods

### AND

<span id="qiskit.circuit.library.IntegerComparator.AND" />

`IntegerComparator.AND(qr_variables, qb_target, qr_ancillae, flags=None, mct_mode='no-ancilla')`

Build a collective conjunction (AND) circuit in place using mct.

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to build the conjunction on.
*   **qr\_variables** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The QuantumRegister holding the variable qubits.
*   **qb\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit to hold the conjunction result.
*   **qr\_ancillae** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The ancillary QuantumRegister for building the mct.
*   **flags** (*list\[int]*) – A list of +1/-1/0 to mark negations or omissions of qubits.
*   **mct\_mode** (*str*) – The mct building mode.

### OR

<span id="qiskit.circuit.library.IntegerComparator.OR" />

`IntegerComparator.OR(qr_variables, qb_target, qr_ancillae, flags=None, mct_mode='basic')`

Build a collective disjunction (OR) circuit in place using mct.

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to build the disjunction on.
*   **qr\_variables** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The QuantumRegister holding the variable qubits.
*   **flags** (*list\[int]*) – A list of +1/-1/0 to mark negations or omissions of qubits.
*   **qb\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit to hold the disjunction result.
*   **qr\_ancillae** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The ancillary QuantumRegister for building the mct.
*   **mct\_mode** (*str*) – The mct building mode.

### \_\_getitem\_\_

<span id="qiskit.circuit.library.IntegerComparator.__getitem__" />

`IntegerComparator.__getitem__(item)`

Return indexed operation.

### \_\_len\_\_

<span id="qiskit.circuit.library.IntegerComparator.__len__" />

`IntegerComparator.__len__()`

Return number of operations in circuit.

### add\_register

<span id="qiskit.circuit.library.IntegerComparator.add_register" />

`IntegerComparator.add_register(*regs)`

Add registers.

### append

<span id="qiskit.circuit.library.IntegerComparator.append" />

`IntegerComparator.append(instruction, qargs=None, cargs=None)`

Append one or more instructions to the end of the circuit, modifying the circuit in place. Expands qargs and cargs.

**Parameters**

*   **instruction** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – Instruction instance to append
*   **qargs** (*list(argument)*) – qubits to attach instruction to
*   **cargs** (*list(argument)*) – clbits to attach instruction to

**Returns**

a handle to the instruction that was just added

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### assign\_parameters

<span id="qiskit.circuit.library.IntegerComparator.assign_parameters" />

`IntegerComparator.assign_parameters(param_dict, inplace=False)`

Assign parameters to new parameters or values.

The keys of the parameter dictionary must be Parameter instances in the current circuit. The values of the dictionary can either be numeric values or new parameter objects. The values can be assigned to the current circuit object or to a copy of it.

**Parameters**

*   **param\_dict** (*dict*) – A dictionary specifying the mapping from `current_parameter` to `new_parameter`, where `new_parameter` can be a new parameter object or a numeric value.
*   **inplace** (*bool*) – If False, a copy of the circuit with the bound parameters is returned. If True the circuit instance itself is modified.

**Raises**

**CircuitError** – If param\_dict contains parameters not present in the circuit

**Returns**

**A copy of the circuit with bound parameters, if**

`inplace` is True, otherwise None.

**Return type**

optional([QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"))

#### Examples

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> circuit = QuantumCircuit(2)
>>> params = [Parameter('A'), Parameter('B'), Parameter('C')]
>>> circuit.ry(params[0], 0)
>>> circuit.crx(params[1], 0, 1)
>>> circuit.draw()
        ┌───────┐
q_0: |0>┤ Ry(A) ├────■────
        └───────┘┌───┴───┐
q_1: |0>─────────┤ Rx(B) ├
                 └───────┘
>>> circuit.assign_parameters({params[0]: params[2]}, inplace=True)
>>> circuit.draw()
        ┌───────┐
q_0: |0>┤ Ry(C) ├────■────
        └───────┘┌───┴───┐
q_1: |0>─────────┤ Rx(B) ├
                 └───────┘
>>> bound_circuit = circuit.assign_parameters({params[1]: 1, params[2]: 2})
>>> bound_circuit.draw()
        ┌───────┐
q_0: |0>┤ Ry(2) ├────■────
        └───────┘┌───┴───┐
q_1: |0>─────────┤ Rx(1) ├
                 └───────┘
>>> bound_circuit.parameters  # this one has no free parameters anymore
set()
>>> circuit.parameters  # the original one is still parameterized
{Parameter(A), Parameter(C)}
```

### barrier

<span id="qiskit.circuit.library.IntegerComparator.barrier" />

`IntegerComparator.barrier(*qargs)`

Apply `Barrier`. If qargs is None, applies to all.

### bind\_parameters

<span id="qiskit.circuit.library.IntegerComparator.bind_parameters" />

`IntegerComparator.bind_parameters(value_dict)`

Assign numeric parameters to values yielding a new circuit.

To assign new Parameter objects or bind the values in-place, without yielding a new circuit, use the assign\_parameters method.

**Parameters**

**value\_dict** (*dict*) – \{parameter: value, …}

**Raises**

*   **CircuitError** – If value\_dict contains parameters not present in the circuit
*   **TypeError** – If value\_dict contains a ParameterExpression in the values.

**Returns**

copy of self with assignment substitution.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### cast

<span id="qiskit.circuit.library.IntegerComparator.cast" />

`static IntegerComparator.cast(value, _type)`

Best effort to cast value to type. Otherwise, returns the value.

### cbit\_argument\_conversion

<span id="qiskit.circuit.library.IntegerComparator.cbit_argument_conversion" />

`IntegerComparator.cbit_argument_conversion(clbit_representation)`

Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits.

**Parameters**

**clbit\_representation** (*Object*) – representation to expand

**Returns**

Where each tuple is a classical bit.

**Return type**

List(tuple)

### ccx

<span id="qiskit.circuit.library.IntegerComparator.ccx" />

`IntegerComparator.ccx(control_qubit1, control_qubit2, target_qubit, *, ctl1=None, ctl2=None, tgt=None)`

Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").

### ch

<span id="qiskit.circuit.library.IntegerComparator.ch" />

`IntegerComparator.ch(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").

### cls\_instances

<span id="qiskit.circuit.library.IntegerComparator.cls_instances" />

`classmethod IntegerComparator.cls_instances()`

Return the current number of instances of this class, useful for auto naming.

### cls\_prefix

<span id="qiskit.circuit.library.IntegerComparator.cls_prefix" />

`classmethod IntegerComparator.cls_prefix()`

Return the prefix to use for auto naming.

### cnot

<span id="qiskit.circuit.library.IntegerComparator.cnot" />

`IntegerComparator.cnot(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").

### combine

<span id="qiskit.circuit.library.IntegerComparator.combine" />

`IntegerComparator.combine(rhs)`

Append rhs to self if self contains compatible registers.

Two circuits are compatible if they contain the same registers or if they contain different registers with unique names. The returned circuit will contain all unique registers between both circuits.

Return self + rhs as a new object.

**Parameters**

**rhs** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The quantum circuit to append to the right hand side.

**Returns**

Returns a new QuantumCircuit object

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the rhs circuit is not compatible

### compose

<span id="qiskit.circuit.library.IntegerComparator.compose" />

`IntegerComparator.compose(other, qubits=None, clbits=None, front=False, inplace=False)`

Compose circuit with `other` circuit or instruction, optionally permuting wires.

`other` can be narrower or of equal width to `self`.

**Parameters**

*   **other** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or BaseOperator*) – (sub)circuit to compose onto self.
*   **qubits** (*list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*|int]*) – qubits of self to compose onto.
*   **clbits** (*list\[*[*Clbit*](qiskit.circuit.Clbit "qiskit.circuit.Clbit")*|int]*) – clbits of self to compose onto.
*   **front** (*bool*) – If True, front composition will be performed (not implemented yet).
*   **inplace** (*bool*) – If True, modify the object. Otherwise return composed circuit.

**Returns**

the composed circuit (returns None if inplace==True).

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **CircuitError** – if composing on the front.
*   **QiskitError** – if `other` is wider or there are duplicate edge mappings.

#### Examples

```python
>>> lhs.compose(rhs, qubits=[3, 2], inplace=True)
```

```python
            ┌───┐                   ┌─────┐                ┌───┐
lqr_1_0: ───┤ H ├───    rqr_0: ──■──┤ Tdg ├    lqr_1_0: ───┤ H ├───────────────
            ├───┤              ┌─┴─┐└─────┘                ├───┤
lqr_1_1: ───┤ X ├───    rqr_1: ┤ X ├───────    lqr_1_1: ───┤ X ├───────────────
         ┌──┴───┴──┐           └───┘                    ┌──┴───┴──┐┌───┐
lqr_1_2: ┤ U1(0.1) ├  +                     =  lqr_1_2: ┤ U1(0.1) ├┤ X ├───────
         └─────────┘                                    └─────────┘└─┬─┘┌─────┐
lqr_2_0: ─────■─────                           lqr_2_0: ─────■───────■──┤ Tdg ├
            ┌─┴─┐                                          ┌─┴─┐        └─────┘
lqr_2_1: ───┤ X ├───                           lqr_2_1: ───┤ X ├───────────────
            └───┘                                          └───┘
lcr_0: 0 ═══════════                           lcr_0: 0 ═══════════════════════

lcr_1: 0 ═══════════                           lcr_1: 0 ═══════════════════════
```

### copy

<span id="qiskit.circuit.library.IntegerComparator.copy" />

`IntegerComparator.copy(name=None)`

Copy the circuit.

**Parameters**

**name** (*str*) – name to be given to the copied circuit. If None, then the name stays the same

**Returns**

a deepcopy of the current circuit, with the specified name

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### count\_ops

<span id="qiskit.circuit.library.IntegerComparator.count_ops" />

`IntegerComparator.count_ops()`

Count each operation kind in the circuit.

**Returns**

a breakdown of how many operations of each kind, sorted by amount.

**Return type**

OrderedDict

### crx

<span id="qiskit.circuit.library.IntegerComparator.crx" />

`IntegerComparator.crx(theta, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").

### cry

<span id="qiskit.circuit.library.IntegerComparator.cry" />

`IntegerComparator.cry(theta, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").

### crz

<span id="qiskit.circuit.library.IntegerComparator.crz" />

`IntegerComparator.crz(theta, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").

### cswap

<span id="qiskit.circuit.library.IntegerComparator.cswap" />

`IntegerComparator.cswap(control_qubit, target_qubit1, target_qubit2, *, label=None, ctrl_state=None, ctl=None, tgt1=None, tgt2=None)`

Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").

### cu1

<span id="qiskit.circuit.library.IntegerComparator.cu1" />

`IntegerComparator.cu1(theta, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").

### cu3

<span id="qiskit.circuit.library.IntegerComparator.cu3" />

`IntegerComparator.cu3(theta, phi, lam, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").

### cx

<span id="qiskit.circuit.library.IntegerComparator.cx" />

`IntegerComparator.cx(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").

### cy

<span id="qiskit.circuit.library.IntegerComparator.cy" />

`IntegerComparator.cy(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").

### cz

<span id="qiskit.circuit.library.IntegerComparator.cz" />

`IntegerComparator.cz(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").

### dcx

<span id="qiskit.circuit.library.IntegerComparator.dcx" />

`IntegerComparator.dcx(qubit1, qubit2)`

Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").

### decompose

<span id="qiskit.circuit.library.IntegerComparator.decompose" />

`IntegerComparator.decompose()`

Call a decomposition pass on this circuit, to decompose one level (shallow decompose).

**Returns**

a circuit one level decomposed

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### depth

<span id="qiskit.circuit.library.IntegerComparator.depth" />

`IntegerComparator.depth()`

Return circuit depth (i.e., length of critical path). This does not include compiler or simulator directives such as ‘barrier’ or ‘snapshot’.

**Returns**

Depth of circuit.

**Return type**

int

#### Notes

The circuit depth and the DAG depth need not be the same.

### diag\_gate

<span id="qiskit.circuit.library.IntegerComparator.diag_gate" />

`IntegerComparator.diag_gate(diag, qubit)`

Deprecated version of QuantumCircuit.diagonal.

### diagonal

<span id="qiskit.circuit.library.IntegerComparator.diagonal" />

`IntegerComparator.diagonal(diag, qubit)`

Attach a diagonal gate to a circuit.

The decomposition is based on Theorem 7 given in “Synthesis of Quantum Logic Circuits” by Shende et al. ([https://arxiv.org/pdf/quant-ph/0406176.pdf](https://arxiv.org/pdf/quant-ph/0406176.pdf)).

**Parameters**

*   **diag** (*list*) – list of the 2^k diagonal entries (for a diagonal gate on k qubits). Must contain at least two entries
*   **qubit** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list*) – list of k qubits the diagonal is acting on (the order of the qubits specifies the computational basis in which the diagonal gate is provided: the first element in diag acts on the state where all the qubits in q are in the state 0, the second entry acts on the state where all the qubits q\[1],…,q\[k-1] are in the state zero and q\[0] is in the state 1, and so on)

**Returns**

the diagonal gate which was attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list of the diagonal entries or the qubit list is in bad format; if the number of diagonal entries is not 2^k, where k denotes the number of qubits

### draw

<span id="qiskit.circuit.library.IntegerComparator.draw" />

`IntegerComparator.draw(output=None, scale=0.7, filename=None, style=None, interactive=False, line_length=None, plot_barriers=True, reverse_bits=False, justify=None, vertical_compression='medium', idle_wires=True, with_layout=True, fold=None, ax=None, initial_state=False, cregbundle=False)`

Draw the quantum circuit.

**text**: ASCII art TextDrawing that can be printed in the console.

**latex**: high-quality images compiled via LaTeX.

**latex\_source**: raw uncompiled LaTeX output.

**matplotlib**: images with color rendered purely in Python.

**Parameters**

*   **output** (*str*) – Select the output method to use for drawing the circuit. Valid choices are `text`, `latex`, `latex_source`, or `mpl`. By default the ‘text’ drawer is used unless a user config file has an alternative backend set as the default. If the output kwarg is set, that backend will always be used over the default in a user config file.
*   **scale** (*float*) – scale of image to draw (shrink if \< 1)
*   **filename** (*str*) – file path to save image to
*   **style** (*dict or str*) – dictionary of style or file name of style file. This option is only used by the `mpl` output type. If a str is passed in that is the path to a json file which contains a dictionary of style, then that will be opened, parsed, and used as the input dict. See: [Style Dict Doc](qiskit.circuit.library.ZZFeatureMap#draw) for more information on the contents.
*   **interactive** (*bool*) – when set true show the circuit in a new window (for mpl this depends on the matplotlib backend being used supporting this). Note when used with either the text or the latex\_source output type this has no effect and will be silently ignored.
*   **line\_length** (*int*) – Deprecated; see fold which supersedes this option. Sets the length of the lines generated by text output type. This is useful when the drawing does not fit in the console. If None (default), it will try to guess the console width using `shutil.get_terminal_size()`. However, if you’re running in jupyter, the default line length is set to 80 characters. If you don’t want pagination at all, set `line_length=-1`.
*   **reverse\_bits** (*bool*) – When set to True, reverse the bit order inside registers for the output visualization.
*   **plot\_barriers** (*bool*) – Enable/disable drawing barriers in the output circuit. Defaults to True.
*   **justify** (*string*) – Options are `left`, `right` or `none`. If anything else is supplied it defaults to left justified. It refers to where gates should be placed in the output circuit if there is an option. `none` results in each gate being placed in its own column.
*   **vertical\_compression** (*string*) – `high`, `medium` or `low`. It merges the lines generated by the `text` output so the drawing will take less vertical room. Default is `medium`. Only used by the `text` output, will be silently ignored otherwise.
*   **idle\_wires** (*bool*) – Include idle wires (wires with no circuit elements) in output visualization. Default is True.
*   **with\_layout** (*bool*) – Include layout information, with labels on the physical layout. Default is True.
*   **fold** (*int*) – Sets pagination. It can be disabled using -1. In text, sets the length of the lines. This is useful when the drawing does not fit in the console. If None (default), it will try to guess the console width using `shutil. get_terminal_size()`. However, if running in jupyter, the default line length is set to 80 characters. In `mpl` is the number of (visual) layers before folding. Default is 25.
*   **ax** (*matplotlib.axes.Axes*) – An optional Axes object to be used for the visualization output. If none is specified, a new matplotlib Figure will be created and used. Additionally, if specified, there will be no returned Figure since it is redundant. This is only used when the `output` kwarg is set to use the `mpl` backend. It will be silently ignored with all other outputs.
*   **initial\_state** (*bool*) – Optional. Adds `|0>` in the beginning of the wire. Only used by the `text`, `latex` and `latex_source` outputs. Default: `False`.
*   **cregbundle** (*bool*) – Optional. If set True bundle classical registers. Only used by the `text` output. Default: `False`.

**Returns**

`PIL.Image` or `matplotlib.figure` or `str` or `TextDrawing`:

*   **PIL.Image (output=’latex’)**

    an in-memory representation of the image of the circuit diagram.

*   **matplotlib.figure.Figure (output=’mpl’)**

    a matplotlib figure object for the circuit diagram.

*   **str (output=’latex\_source’)**

    The LaTeX source code for visualizing the circuit diagram.

*   **TextDrawing (output=’text’)**

    A drawing that can be printed as ASCII art.

**Raises**

*   [**VisualizationError**](qiskit.visualization.VisualizationError "qiskit.visualization.VisualizationError") – when an invalid output method is selected
*   **ImportError** – when the output methods require non-installed libraries

**Style Dict Details**

The style dict kwarg contains numerous options that define the style of the output circuit visualization. The style dict is only used by the `mpl` output. The options available in the style dict are defined below:

**Parameters**

*   **textcolor** (*str*) – The color code to use for text. Defaults to ‘#000000’

*   **subtextcolor** (*str*) – The color code to use for subtext. Defaults to ‘#000000’

*   **linecolor** (*str*) – The color code to use for lines. Defaults to ‘#000000’

*   **creglinecolor** (*str*) – The color code to use for classical register lines. Defaults to ‘#778899’

*   **gatetextcolor** (*str*) – The color code to use for gate text. Defaults to ‘#000000’

*   **gatefacecolor** (*str*) – The color code to use for gates. Defaults to ‘#ffffff’

*   **barrierfacecolor** (*str*) – The color code to use for barriers. Defaults to ‘#bdbdbd’

*   **backgroundcolor** (*str*) – The color code to use for the background. Defaults to ‘#ffffff’

*   **fontsize** (*int*) – The font size to use for text. Defaults to 13.

*   **subfontsize** (*int*) – The font size to use for subtext. Defaults to 8.

*   **displaytext** (*dict*) –

    A dictionary of the text to use for each element type in the output visualization. The default values are:

    ```python
    {
        'id': 'id',
        'u0': 'U_0',
        'u1': 'U_1',
        'u2': 'U_2',
        'u3': 'U_3',
        'x': 'X',
        'y': 'Y',
        'z': 'Z',
        'h': 'H',
        's': 'S',
        'sdg': 'S^\dagger',
        't': 'T',
        'tdg': 'T^\dagger',
        'rx': 'R_x',
        'ry': 'R_y',
        'rz': 'R_z',
        'reset': '\left|0\right\rangle'
    }
    ```

    You must specify all the necessary values if using this. There is no provision for passing an incomplete dict in.

*   **displaycolor** (*dict*) –

    **The color codes to use for each circuit**

    element. The default values are:

    ```python
    {
        'id': '#F0E442',
        'u0': '#E7AB3B',
        'u1': '#E7AB3B',
        'u2': '#E7AB3B',
        'u3': '#E7AB3B',
        'x': '#58C698',
        'y': '#58C698',
        'z': '#58C698',
        'h': '#70B7EB',
        's': '#E0722D',
        'sdg': '#E0722D',
        't': '#E0722D',
        'tdg': '#E0722D',
        'rx': '#ffffff',
        'ry': '#ffffff',
        'rz': '#ffffff',
        'reset': '#D188B4',
        'target': '#70B7EB',
        'meas': '#D188B4'
    }
    ```

    Also, just like displaytext there is no provision for an incomplete dict passed in.

*   **latexdrawerstyle** (*bool*) – When set to True, enable LaTeX mode, which will draw gates like the latex output modes.

*   **usepiformat** (*bool*) – When set to True, use radians for output.

*   **fold** (*int*) – The number of circuit elements to fold the circuit at. Defaults to 20.

*   **cregbundle** (*bool*) – If set True, bundle classical registers

*   **showindex** (*bool*) – If set True, draw an index.

*   **compress** (*bool*) – If set True, draw a compressed circuit.

*   **figwidth** (*int*) – The maximum width (in inches) for the output figure.

*   **dpi** (*int*) – The DPI to use for the output image. Defaults to 150.

*   **margin** (*list*) – A list of margin values to adjust spacing around output image. Takes a list of 4 ints: \[x left, x right, y bottom, y top].

*   **creglinestyle** (*str*) – The style of line to use for classical registers. Choices are ‘solid’, ‘doublet’, or any valid matplotlib linestyle kwarg value. Defaults to doublet

### extend

<span id="qiskit.circuit.library.IntegerComparator.extend" />

`IntegerComparator.extend(rhs)`

Append QuantumCircuit to the right hand side if it contains compatible registers.

Two circuits are compatible if they contain the same registers or if they contain different registers with unique names. The returned circuit will contain all unique registers between both circuits.

Modify and return self.

**Parameters**

**rhs** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The quantum circuit to append to the right hand side.

**Returns**

Returns this QuantumCircuit object (which has been modified)

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the rhs circuit is not compatible

### fredkin

<span id="qiskit.circuit.library.IntegerComparator.fredkin" />

`IntegerComparator.fredkin(control_qubit, target_qubit1, target_qubit2, *, ctl=None, tgt1=None, tgt2=None)`

Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").

### from\_qasm\_file

<span id="qiskit.circuit.library.IntegerComparator.from_qasm_file" />

`static IntegerComparator.from_qasm_file(path)`

Take in a QASM file and generate a QuantumCircuit object.

**Parameters**

**path** (*str*) – Path to the file for a QASM program

**Returns**

The QuantumCircuit object for the input QASM

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### from\_qasm\_str

<span id="qiskit.circuit.library.IntegerComparator.from_qasm_str" />

`static IntegerComparator.from_qasm_str(qasm_str)`

Take in a QASM string and generate a QuantumCircuit object.

**Parameters**

**qasm\_str** (*str*) – A QASM program string

**Returns**

The QuantumCircuit object for the input QASM

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### h

<span id="qiskit.circuit.library.IntegerComparator.h" />

`IntegerComparator.h(qubit, *, q=None)`

Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").

### hamiltonian

<span id="qiskit.circuit.library.IntegerComparator.hamiltonian" />

`IntegerComparator.hamiltonian(operator, time, qubits, label=None)`

Apply hamiltonian evolution to to qubits.

### has\_register

<span id="qiskit.circuit.library.IntegerComparator.has_register" />

`IntegerComparator.has_register(register)`

Test if this circuit has the register r.

**Parameters**

**register** (*Register*) – a quantum or classical register.

**Returns**

True if the register is contained in this circuit.

**Return type**

bool

### i

<span id="qiskit.circuit.library.IntegerComparator.i" />

`IntegerComparator.i(qubit, *, q=None)`

Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").

### id

<span id="qiskit.circuit.library.IntegerComparator.id" />

`IntegerComparator.id(qubit, *, q=None)`

Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").

### iden

<span id="qiskit.circuit.library.IntegerComparator.iden" />

`IntegerComparator.iden(qubit, *, q=None)`

Deprecated identity gate.

### initialize

<span id="qiskit.circuit.library.IntegerComparator.initialize" />

`IntegerComparator.initialize(params, qubits)`

Apply initialize to circuit.

### inverse

<span id="qiskit.circuit.library.IntegerComparator.inverse" />

`IntegerComparator.inverse()`

Invert this circuit.

This is done by recursively inverting all gates.

**Returns**

the inverted circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**CircuitError** – if the circuit cannot be inverted.

### iso

<span id="qiskit.circuit.library.IntegerComparator.iso" />

`IntegerComparator.iso(isometry, q_input, q_ancillas_for_output, q_ancillas_zero=None, q_ancillas_dirty=None)`

Attach an arbitrary isometry from m to n qubits to a circuit. In particular, this allows to attach arbitrary unitaries on n qubits (m=n) or to prepare any state on n qubits (m=0). The decomposition used here was introduced by Iten et al. in [https://arxiv.org/abs/1501.06911](https://arxiv.org/abs/1501.06911).

**Parameters**

*   **isometry** (*ndarray*) – an isometry from m to n qubits, i.e., a (complex) ndarray of dimension 2^n×2^m with orthonormal columns (given in the computational basis specified by the order of the ancillas and the input qubits, where the ancillas are considered to be more significant than the input qubits.).
*   **q\_input** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of m qubits where the input to the isometry is fed in (empty list for state preparation).
*   **q\_ancillas\_for\_output** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of n-m ancilla qubits that are used for the output of the isometry and which are assumed to start in the zero state. The qubits are listed with increasing significance.
*   **q\_ancillas\_zero** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of ancilla qubits which are assumed to start in the zero state. Default is q\_ancillas\_zero = None.
*   **q\_ancillas\_dirty** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of ancilla qubits which can start in an arbitrary state. Default is q\_ancillas\_dirty = None.

**Returns**

the isometry is attached to the quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the array is not an isometry of the correct size corresponding to the provided number of qubits.

### isometry

<span id="qiskit.circuit.library.IntegerComparator.isometry" />

`IntegerComparator.isometry(isometry, q_input, q_ancillas_for_output, q_ancillas_zero=None, q_ancillas_dirty=None)`

Attach an arbitrary isometry from m to n qubits to a circuit. In particular, this allows to attach arbitrary unitaries on n qubits (m=n) or to prepare any state on n qubits (m=0). The decomposition used here was introduced by Iten et al. in [https://arxiv.org/abs/1501.06911](https://arxiv.org/abs/1501.06911).

**Parameters**

*   **isometry** (*ndarray*) – an isometry from m to n qubits, i.e., a (complex) ndarray of dimension 2^n×2^m with orthonormal columns (given in the computational basis specified by the order of the ancillas and the input qubits, where the ancillas are considered to be more significant than the input qubits.).
*   **q\_input** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of m qubits where the input to the isometry is fed in (empty list for state preparation).
*   **q\_ancillas\_for\_output** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of n-m ancilla qubits that are used for the output of the isometry and which are assumed to start in the zero state. The qubits are listed with increasing significance.
*   **q\_ancillas\_zero** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of ancilla qubits which are assumed to start in the zero state. Default is q\_ancillas\_zero = None.
*   **q\_ancillas\_dirty** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of ancilla qubits which can start in an arbitrary state. Default is q\_ancillas\_dirty = None.

**Returns**

the isometry is attached to the quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the array is not an isometry of the correct size corresponding to the provided number of qubits.

### iswap

<span id="qiskit.circuit.library.IntegerComparator.iswap" />

`IntegerComparator.iswap(qubit1, qubit2)`

Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").

### mcmt

<span id="qiskit.circuit.library.IntegerComparator.mcmt" />

`IntegerComparator.mcmt(gate, control_qubits, target_qubits, ancilla_qubits=None, mode='no-ancilla', *, single_control_gate_fun=None, q_controls=None, q_ancillae=None, q_targets=None)`

Apply a multi-control, multi-target using a generic gate.

This can also be used to implement a generic multi-control gate, as the target could also be of length 1.

### mcrx

<span id="qiskit.circuit.library.IntegerComparator.mcrx" />

`IntegerComparator.mcrx(theta, q_controls, q_target, use_basis_gates=False)`

Apply Multiple-Controlled X rotation gate

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to apply the mcrx gate on.
*   **theta** (*float*) – angle theta
*   **q\_controls** (*list(*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*)*) – The list of control qubits
*   **q\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit
*   **use\_basis\_gates** (*bool*) – use u1, u2, u3, cx, id

**Raises**

**QiskitError** – parameter errors

### mcry

<span id="qiskit.circuit.library.IntegerComparator.mcry" />

`IntegerComparator.mcry(theta, q_controls, q_target, q_ancillae, mode='basic', use_basis_gates=False)`

Apply Multiple-Controlled Y rotation gate

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to apply the mcry gate on.
*   **theta** (*float*) – angle theta
*   **q\_controls** (*list(*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*)*) – The list of control qubits
*   **q\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit
*   **q\_ancillae** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister") *or tuple(*[*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*, int)*) – The list of ancillary qubits.
*   **mode** (*string*) – The implementation mode to use
*   **use\_basis\_gates** (*bool*) – use u1, u2, u3, cx, id

**Raises**

**QiskitError** – parameter errors

### mcrz

<span id="qiskit.circuit.library.IntegerComparator.mcrz" />

`IntegerComparator.mcrz(lam, q_controls, q_target, use_basis_gates=False)`

Apply Multiple-Controlled Z rotation gate

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to apply the mcrz gate on.
*   **lam** (*float*) – angle lambda
*   **q\_controls** (*list(*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*)*) – The list of control qubits
*   **q\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit
*   **use\_basis\_gates** (*bool*) – use u1, u2, u3, cx, id

**Raises**

**QiskitError** – parameter errors

### mct

<span id="qiskit.circuit.library.IntegerComparator.mct" />

`IntegerComparator.mct(control_qubits, target_qubit, ancilla_qubits=None, mode='noancilla')`

Apply `MCXGate`.

### mcu1

<span id="qiskit.circuit.library.IntegerComparator.mcu1" />

`IntegerComparator.mcu1(lam, control_qubits, target_qubit)`

Apply `MCU1Gate`.

### mcx

<span id="qiskit.circuit.library.IntegerComparator.mcx" />

`IntegerComparator.mcx(control_qubits, target_qubit, ancilla_qubits=None, mode='noancilla')`

Apply `MCXGate`.

The multi-cX gate can be implemented using different techniques, which use different numbers of ancilla qubits and have varying circuit depth. These modes are: - ‘no-ancilla’: Requires 0 ancilla qubits. - ‘recursion’: Requires 1 ancilla qubit if more than 4 controls are used, otherwise 0. - ‘v-chain’: Requires 2 less ancillas than the number of control qubits. - ‘v-chain-dirty’: Same as for the clean ancillas (but the circuit will be longer).

### measure

<span id="qiskit.circuit.library.IntegerComparator.measure" />

`IntegerComparator.measure(qubit, cbit)`

Measure quantum bit into classical bit (tuples).

**Parameters**

*   **qubit** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list|tuple*) – quantum register
*   **cbit** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")*|list|tuple*) – classical register

**Returns**

the attached measure instruction.

**Return type**

qiskit.Instruction

**Raises**

**CircuitError** – if qubit is not in this circuit or bad format; if cbit is not in this circuit or not creg.

### measure\_active

<span id="qiskit.circuit.library.IntegerComparator.measure_active" />

`IntegerComparator.measure_active(inplace=True)`

Adds measurement to all non-idle qubits. Creates a new ClassicalRegister with a size equal to the number of non-idle qubits being measured.

Returns a new circuit with measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements inplace or return new circuit.

**Returns**

Returns circuit with measurements when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### measure\_all

<span id="qiskit.circuit.library.IntegerComparator.measure_all" />

`IntegerComparator.measure_all(inplace=True)`

Adds measurement to all qubits. Creates a new ClassicalRegister with a size equal to the number of qubits being measured.

Returns a new circuit with measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements inplace or return new circuit.

**Returns**

Returns circuit with measurements when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### mirror

<span id="qiskit.circuit.library.IntegerComparator.mirror" />

`IntegerComparator.mirror()`

Mirror the circuit by reversing the instructions.

This is done by recursively mirroring all instructions. It does not invert any gate.

**Returns**

the mirrored circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### ms

<span id="qiskit.circuit.library.IntegerComparator.ms" />

`IntegerComparator.ms(theta, qubits)`

Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").

### num\_connected\_components

<span id="qiskit.circuit.library.IntegerComparator.num_connected_components" />

`IntegerComparator.num_connected_components(unitary_only=False)`

How many non-entangled subcircuits can the circuit be factored to.

**Parameters**

**unitary\_only** (*bool*) – Compute only unitary part of graph.

**Returns**

Number of connected components in circuit.

**Return type**

int

### num\_nonlocal\_gates

<span id="qiskit.circuit.library.IntegerComparator.num_nonlocal_gates" />

`IntegerComparator.num_nonlocal_gates()`

Return number of non-local gates (i.e. involving 2+ qubits).

Conditional nonlocal gates are also included.

### num\_tensor\_factors

<span id="qiskit.circuit.library.IntegerComparator.num_tensor_factors" />

`IntegerComparator.num_tensor_factors()`

Computes the number of tensor factors in the unitary (quantum) part of the circuit only.

#### Notes

This is here for backwards compatibility, and will be removed in a future release of Qiskit. You should call num\_unitary\_factors instead.

### num\_unitary\_factors

<span id="qiskit.circuit.library.IntegerComparator.num_unitary_factors" />

`IntegerComparator.num_unitary_factors()`

Computes the number of tensor factors in the unitary (quantum) part of the circuit only.

### qasm

<span id="qiskit.circuit.library.IntegerComparator.qasm" />

`IntegerComparator.qasm(formatted=False, filename=None)`

Return OpenQASM string.

**Parameters**

*   **formatted** (*bool*) – Return formatted Qasm string.
*   **filename** (*str*) – Save Qasm to file with name ‘filename’.

**Returns**

If formatted=False.

**Return type**

str

**Raises**

**ImportError** – If pygments is not installed and `formatted` is `True`.

### qbit\_argument\_conversion

<span id="qiskit.circuit.library.IntegerComparator.qbit_argument_conversion" />

`IntegerComparator.qbit_argument_conversion(qubit_representation)`

Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.

**Parameters**

**qubit\_representation** (*Object*) – representation to expand

**Returns**

Where each tuple is a qubit.

**Return type**

List(tuple)

### r

<span id="qiskit.circuit.library.IntegerComparator.r" />

`IntegerComparator.r(theta, phi, qubit, *, q=None)`

Apply `RGate`.

### rcccx

<span id="qiskit.circuit.library.IntegerComparator.rcccx" />

`IntegerComparator.rcccx(control_qubit1, control_qubit2, control_qubit3, target_qubit)`

Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").

### rccx

<span id="qiskit.circuit.library.IntegerComparator.rccx" />

`IntegerComparator.rccx(control_qubit1, control_qubit2, target_qubit)`

Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").

### remove\_final\_measurements

<span id="qiskit.circuit.library.IntegerComparator.remove_final_measurements" />

`IntegerComparator.remove_final_measurements(inplace=True)`

Removes final measurement on all qubits if they are present. Deletes the ClassicalRegister that was used to store the values from these measurements if it is idle.

Returns a new circuit without measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements removed inplace or return new circuit.

**Returns**

Returns circuit with measurements removed when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### reset

<span id="qiskit.circuit.library.IntegerComparator.reset" />

`IntegerComparator.reset(qubit)`

Reset q.

### rx

<span id="qiskit.circuit.library.IntegerComparator.rx" />

`IntegerComparator.rx(theta, qubit, *, label=None, q=None)`

Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").

### rxx

<span id="qiskit.circuit.library.IntegerComparator.rxx" />

`IntegerComparator.rxx(theta, qubit1, qubit2)`

Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").

### ry

<span id="qiskit.circuit.library.IntegerComparator.ry" />

`IntegerComparator.ry(theta, qubit, *, label=None, q=None)`

Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").

### ryy

<span id="qiskit.circuit.library.IntegerComparator.ryy" />

`IntegerComparator.ryy(theta, qubit1, qubit2)`

Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").

### rz

<span id="qiskit.circuit.library.IntegerComparator.rz" />

`IntegerComparator.rz(phi, qubit, *, q=None)`

Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").

### rzx

<span id="qiskit.circuit.library.IntegerComparator.rzx" />

`IntegerComparator.rzx(theta, qubit1, qubit2)`

Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").

### rzz

<span id="qiskit.circuit.library.IntegerComparator.rzz" />

`IntegerComparator.rzz(theta, qubit1, qubit2)`

Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").

### s

<span id="qiskit.circuit.library.IntegerComparator.s" />

`IntegerComparator.s(qubit, *, q=None)`

Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").

### sdg

<span id="qiskit.circuit.library.IntegerComparator.sdg" />

`IntegerComparator.sdg(qubit, *, q=None)`

Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").

### size

<span id="qiskit.circuit.library.IntegerComparator.size" />

`IntegerComparator.size()`

Returns total number of gate operations in circuit.

**Returns**

Total number of gate operations.

**Return type**

int

### snapshot

<span id="qiskit.circuit.library.IntegerComparator.snapshot" />

`IntegerComparator.snapshot(label, snapshot_type='statevector', qubits=None, params=None)`

Take a statevector snapshot of the internal simulator representation. Works on all qubits, and prevents reordering (like barrier). :param label: a snapshot label to report the result :type label: str :param snapshot\_type: the type of the snapshot. :type snapshot\_type: str :param qubits: the qubits to apply snapshot to \[Default: None]. :type qubits: list or None :param params: the parameters for snapshot\_type \[Default: None]. :type params: list or None

**Returns**

with attached command

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – malformed command

### snapshot\_density\_matrix

<span id="qiskit.circuit.library.IntegerComparator.snapshot_density_matrix" />

`IntegerComparator.snapshot_density_matrix(label, qubits=None)`

Take a density matrix snapshot of simulator state.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **qubits** (*list or None*) – the qubits to apply snapshot to. If None all qubits will be snapshot \[Default: None].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

### snapshot\_expectation\_value

<span id="qiskit.circuit.library.IntegerComparator.snapshot_expectation_value" />

`IntegerComparator.snapshot_expectation_value(label, op, qubits, single_shot=False, variance=False)`

Take a snapshot of expectation value \<O> of an Operator.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **op** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot
*   **qubits** (*list*) – the qubits to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

### snapshot\_probabilities

<span id="qiskit.circuit.library.IntegerComparator.snapshot_probabilities" />

`IntegerComparator.snapshot_probabilities(label, qubits, variance=False)`

Take a probability snapshot of the simulator state.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **qubits** (*list*) – the qubits to snapshot.
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

### snapshot\_stabilizer

<span id="qiskit.circuit.library.IntegerComparator.snapshot_stabilizer" />

`IntegerComparator.snapshot_stabilizer(label)`

Take a stabilizer snapshot of the simulator state.

**Parameters**

**label** (*str*) – a snapshot label to report the result.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

#### Additional Information:

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

### snapshot\_statevector

<span id="qiskit.circuit.library.IntegerComparator.snapshot_statevector" />

`IntegerComparator.snapshot_statevector(label)`

Take a statevector snapshot of the simulator state.

**Parameters**

**label** (*str*) – a snapshot label to report the result.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

#### Additional Information:

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

### squ

<span id="qiskit.circuit.library.IntegerComparator.squ" />

`IntegerComparator.squ(unitary_matrix, qubit, mode='ZYZ', up_to_diagonal=False, *, u=None)`

Decompose an arbitrary 2\*2 unitary into three rotation gates.

Note that the decomposition is up to a global phase shift. (This is a well known decomposition, which can be found for example in Nielsen and Chuang’s book “Quantum computation and quantum information”.)

**Parameters**

*   **unitary\_matrix** (*ndarray*) – 2\*2 unitary (given as a (complex) ndarray).
*   **qubit** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")  *|*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The qubit which the gate is acting on.
*   **mode** (*string*) – determines the used decomposition by providing the rotation axes. The allowed modes are: “ZYZ” (default)
*   **up\_to\_diagonal** (*bool*) – if set to True, the single-qubit unitary is decomposed up to a diagonal matrix, i.e. a unitary u’ is implemented such that there exists a 2\*2 diagonal gate d with u = d.dot(u’)
*   **u** (*ndarray*) – Deprecated, use `unitary_matrix` instead.

**Returns**

The single-qubit unitary instruction attached to the circuit.

**Return type**

[InstructionSet](qiskit.circuit.InstructionSet "qiskit.circuit.InstructionSet")

**Raises**

**QiskitError** – if the format is wrong; if the array u is not unitary

### swap

<span id="qiskit.circuit.library.IntegerComparator.swap" />

`IntegerComparator.swap(qubit1, qubit2)`

Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").

### t

<span id="qiskit.circuit.library.IntegerComparator.t" />

`IntegerComparator.t(qubit, *, q=None)`

Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").

### tdg

<span id="qiskit.circuit.library.IntegerComparator.tdg" />

`IntegerComparator.tdg(qubit, *, q=None)`

Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").

### to\_gate

<span id="qiskit.circuit.library.IntegerComparator.to_gate" />

`IntegerComparator.to_gate(parameter_map=None)`

Create a Gate out of this circuit.

**Parameters**

**parameter\_map** (*dict*) – For parameterized circuits, a mapping from parameters in the circuit to parameters to be used in the gate. If None, existing circuit parameters will also parameterize the gate.

**Returns**

a composite gate encapsulating this circuit (can be decomposed back)

**Return type**

[Gate](qiskit.circuit.Gate "qiskit.circuit.Gate")

### to\_instruction

<span id="qiskit.circuit.library.IntegerComparator.to_instruction" />

`IntegerComparator.to_instruction(parameter_map=None)`

Create an Instruction out of this circuit.

**Parameters**

**parameter\_map** (*dict*) – For parameterized circuits, a mapping from parameters in the circuit to parameters to be used in the instruction. If None, existing circuit parameters will also parameterize the instruction.

**Returns**

a composite instruction encapsulating this circuit (can be decomposed back)

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### toffoli

<span id="qiskit.circuit.library.IntegerComparator.toffoli" />

`IntegerComparator.toffoli(control_qubit1, control_qubit2, target_qubit, *, ctl1=None, ctl2=None, tgt=None)`

Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").

### u1

<span id="qiskit.circuit.library.IntegerComparator.u1" />

`IntegerComparator.u1(theta, qubit, *, q=None)`

Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").

### u2

<span id="qiskit.circuit.library.IntegerComparator.u2" />

`IntegerComparator.u2(phi, lam, qubit, *, q=None)`

Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").

### u3

<span id="qiskit.circuit.library.IntegerComparator.u3" />

`IntegerComparator.u3(theta, phi, lam, qubit, *, q=None)`

Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").

### uc

<span id="qiskit.circuit.library.IntegerComparator.uc" />

`IntegerComparator.uc(gate_list, q_controls, q_target, up_to_diagonal=False)`

Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.

The decomposition was introduced by Bergholm et al. in [https://arxiv.org/pdf/quant-ph/0410066.pdf](https://arxiv.org/pdf/quant-ph/0410066.pdf).

**Parameters**

*   **gate\_list** (*list\[ndarray]*) – list of two qubit unitaries \[U\_0,…,U\_\{2^k-1}], where each single-qubit unitary U\_i is a given as a 2\*2 array
*   **q\_controls** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[(*[*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*,int)]*) – list of k control qubits. The qubits are ordered according to their significance in the computational basis. For example if q\_controls=\[q\[1],q\[2]] (with q = QuantumRegister(2)), the unitary U\_0 is performed if q\[1] and q\[2] are in the state zero, U\_1 is performed if q\[2] is in the state zero and q\[1] is in the state one, and so on
*   **q\_target** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|(*[*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*,int)*) – target qubit, where we act on with the single-qubit gates.
*   **up\_to\_diagonal** (*bool*) – If set to True, the uniformly controlled gate is decomposed up to a diagonal gate, i.e. a unitary u’ is implemented such that there exists a diagonal gate d with u = d.dot(u’), where the unitary u describes the uniformly controlled gate

**Returns**

the uniformly controlled gate is attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list number of control qubits does not correspond to the provided number of single-qubit unitaries; if an input is of the wrong type

### ucg

<span id="qiskit.circuit.library.IntegerComparator.ucg" />

`IntegerComparator.ucg(angle_list, q_controls, q_target, up_to_diagonal=False)`

Deprecated version of uc.

### ucrx

<span id="qiskit.circuit.library.IntegerComparator.ucrx" />

`IntegerComparator.ucrx(angle_list, q_controls, q_target)`

Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.

The decomposition is base on [https://arxiv.org/pdf/quant-ph/0406176.pdf](https://arxiv.org/pdf/quant-ph/0406176.pdf) by Shende et al.

**Parameters**

*   **angle\_list** (*list*) – list of (real) rotation angles $[a_0,...,a_{2^k-1}]$
*   **q\_controls** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list*) – list of k control qubits (or empty list if no controls). The control qubits are ordered according to their significance in increasing order: For example if `q_controls=[q[0],q[1]]` (with `q = QuantumRegister(2)`), the rotation `Rx(a_0)` is performed if `q[0]` and `q[1]` are in the state zero, the rotation `Rx(a_1)` is performed if `q[0]` is in the state one and `q[1]` is in the state zero, and so on
*   **q\_target** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – target qubit, where we act on with the single-qubit rotation gates

**Returns**

the uniformly controlled rotation gate is attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list number of control qubits does not correspond to the provided number of single-qubit unitaries; if an input is of the wrong type

### ucry

<span id="qiskit.circuit.library.IntegerComparator.ucry" />

`IntegerComparator.ucry(angle_list, q_controls, q_target)`

Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.

The decomposition is base on [https://arxiv.org/pdf/quant-ph/0406176.pdf](https://arxiv.org/pdf/quant-ph/0406176.pdf) by Shende et al.

**Parameters**

*   **angle\_list** (*list\[numbers*) – list of (real) rotation angles $[a_0,...,a_{2^k-1}]$
*   **q\_controls** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of k control qubits (or empty list if no controls). The control qubits are ordered according to their significance in increasing order: For example if `q_controls=[q[0],q[1]]` (with `q = QuantumRegister(2)`), the rotation `Ry(a_0)` is performed if `q[0]` and `q[1]` are in the state zero, the rotation `Ry(a_1)` is performed if `q[0]` is in the state one and `q[1]` is in the state zero, and so on
*   **q\_target** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – target qubit, where we act on with the single-qubit rotation gates

**Returns**

the uniformly controlled rotation gate is attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list number of control qubits does not correspond to the provided number of single-qubit unitaries; if an input is of the wrong type

### ucrz

<span id="qiskit.circuit.library.IntegerComparator.ucrz" />

`IntegerComparator.ucrz(angle_list, q_controls, q_target)`

Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.

The decomposition is base on [https://arxiv.org/pdf/quant-ph/0406176.pdf](https://arxiv.org/pdf/quant-ph/0406176.pdf) by Shende et al.

**Parameters**

*   **angle\_list** (*list\[numbers*) – list of (real) rotation angles \[a\_0,…,a\_\{2^k-1}]
*   **q\_controls** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of k control qubits (or empty list if no controls). The control qubits are ordered according to their significance in increasing order: For example if q\_controls=\[q\[1],q\[2]] (with q = QuantumRegister(2)), the rotation Rz(a\_0)is performed if q\[1] and q\[2] are in the state zero, the rotation Rz(a\_1) is performed if q\[1] is in the state one and q\[2] is in the state zero, and so on
*   **q\_target** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – target qubit, where we act on with the single-qubit rotation gates

**Returns**

the uniformly controlled rotation gate is attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list number of control qubits does not correspond to the provided number of single-qubit unitaries; if an input is of the wrong type

### ucx

<span id="qiskit.circuit.library.IntegerComparator.ucx" />

`IntegerComparator.ucx(angle_list, q_controls, q_target)`

Deprecated version of ucrx.

### ucy

<span id="qiskit.circuit.library.IntegerComparator.ucy" />

`IntegerComparator.ucy(angle_list, q_controls, q_target)`

Deprecated version of ucry.

### ucz

<span id="qiskit.circuit.library.IntegerComparator.ucz" />

`IntegerComparator.ucz(angle_list, q_controls, q_target)`

Deprecated version of ucrz.

### unitary

<span id="qiskit.circuit.library.IntegerComparator.unitary" />

`IntegerComparator.unitary(obj, qubits, label=None)`

Apply unitary gate to q.

### width

<span id="qiskit.circuit.library.IntegerComparator.width" />

`IntegerComparator.width()`

Return number of qubits plus clbits in circuit.

**Returns**

Width of circuit.

**Return type**

int

### x

<span id="qiskit.circuit.library.IntegerComparator.x" />

`IntegerComparator.x(qubit, *, label=None, ctrl_state=None, q=None)`

Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").

### y

<span id="qiskit.circuit.library.IntegerComparator.y" />

`IntegerComparator.y(qubit, *, q=None)`

Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").

### z

<span id="qiskit.circuit.library.IntegerComparator.z" />

`IntegerComparator.z(qubit, *, q=None)`

Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").


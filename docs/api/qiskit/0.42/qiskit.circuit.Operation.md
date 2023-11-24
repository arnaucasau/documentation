---
title: Operation
description: API reference for qiskit.circuit.Operation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Operation
---

# Operation[¶](#operation "Permalink to this headline")

<span id="qiskit.circuit.Operation" />

`Operation`

Bases: `abc.ABC`

Quantum Operation Interface Class. For objects that can be added to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"). These objects include [`Gate`](qiskit.circuit.Gate "qiskit.circuit.Gate"), `Reset`, `Barrier`, `Measure`, and operators such as [`Clifford`](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford"). The main purpose is to add an [`Operation`](#qiskit.circuit.Operation "qiskit.circuit.Operation") to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") without synthesizing it before the transpilation.

## Example

Add a Clifford and a Toffoli gate to a QuantumCircuit.

```python
from qiskit import QuantumCircuit
from qiskit.quantum_info import Clifford, random_clifford

qc = QuantumCircuit(3)
cliff = random_clifford(2)
qc.append(cliff, [0, 1])
qc.ccx(0, 1, 2)
qc.draw('mpl')
```

![../\_images/qiskit-circuit-Operation-1.png](/images/api/qiskit/0.42/qiskit-circuit-Operation-1.png)

## Attributes

<span id="qiskit.circuit.Operation.name" />

### name

Unique string identifier for operation type.

<span id="qiskit.circuit.Operation.num_clbits" />

### num\_clbits

Number of classical bits.

<span id="qiskit.circuit.Operation.num_qubits" />

### num\_qubits

Number of qubits.


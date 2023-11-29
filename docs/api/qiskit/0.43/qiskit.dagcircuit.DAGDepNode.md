---
title: DAGDepNode
description: API reference for qiskit.dagcircuit.DAGDepNode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.dagcircuit.DAGDepNode
---

# DAGDepNode

<span id="qiskit.dagcircuit.DAGDepNode" />

`DAGDepNode(type=None, op=None, name=None, qargs=(), cargs=(), successors=None, predecessors=None, reachable=None, matchedwith=None, successorstovisit=None, isblocked=None, qindices=None, cindices=None, nid=-1)`

Bases: `object`

Object to represent the information at a node in the DAGDependency().

It is used as the return value from \*\_nodes() functions and can be supplied to functions that take a node.

## Methods

<span id="qiskit-dagcircuit-dagdepnode-copy" />

### copy

<span id="qiskit.dagcircuit.DAGDepNode.copy" />

`DAGDepNode.copy()`

Function to copy a DAGDepNode object. :returns: a copy of a DAGDepNode object. :rtype: DAGDepNode

<span id="qiskit-dagcircuit-dagdepnode-semantic-eq" />

### semantic\_eq

<span id="qiskit.dagcircuit.DAGDepNode.semantic_eq" />

`static DAGDepNode.semantic_eq(node1, node2)`

Check if DAG nodes are considered equivalent, e.g., as a node\_match for nx.is\_isomorphic.

**Parameters**

*   **node1** ([*DAGDepNode*](qiskit.dagcircuit.DAGDepNode "qiskit.dagcircuit.DAGDepNode")) – A node to compare.
*   **node2** ([*DAGDepNode*](qiskit.dagcircuit.DAGDepNode "qiskit.dagcircuit.DAGDepNode")) – The other node to compare.

**Returns**

If node1 == node2

**Return type**

Bool

## Attributes

<span id="qiskit.dagcircuit.DAGDepNode.type" />

### type

<span id="qiskit.dagcircuit.DAGDepNode.name" />

### name

<span id="qiskit.dagcircuit.DAGDepNode.cargs" />

### cargs

<span id="qiskit.dagcircuit.DAGDepNode.sort_key" />

### sort\_key

<span id="qiskit.dagcircuit.DAGDepNode.node_id" />

### node\_id

<span id="qiskit.dagcircuit.DAGDepNode.successors" />

### successors

<span id="qiskit.dagcircuit.DAGDepNode.predecessors" />

### predecessors

<span id="qiskit.dagcircuit.DAGDepNode.reachable" />

### reachable

<span id="qiskit.dagcircuit.DAGDepNode.matchedwith" />

### matchedwith

<span id="qiskit.dagcircuit.DAGDepNode.isblocked" />

### isblocked

<span id="qiskit.dagcircuit.DAGDepNode.successorstovisit" />

### successorstovisit

<span id="qiskit.dagcircuit.DAGDepNode.qindices" />

### qindices

<span id="qiskit.dagcircuit.DAGDepNode.cindices" />

### cindices

<span id="qiskit.dagcircuit.DAGDepNode.op" />

### op

Returns the Instruction object corresponding to the op for the node, else None

<span id="qiskit.dagcircuit.DAGDepNode.qargs" />

### qargs

Returns list of Qubit, else an empty list.


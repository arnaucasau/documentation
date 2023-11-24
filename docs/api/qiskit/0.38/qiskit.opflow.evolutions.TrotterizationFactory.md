---
title: TrotterizationFactory
description: API reference for qiskit.opflow.evolutions.TrotterizationFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.TrotterizationFactory
---

# TrotterizationFactory[¶](#trotterizationfactory "Permalink to this headline")

<span id="qiskit.opflow.evolutions.TrotterizationFactory" />

`TrotterizationFactory`

Bases: `object`

A factory for conveniently creating TrotterizationBase instances.

## Methods Defined Here

### build

<span id="qiskit.opflow.evolutions.TrotterizationFactory.build" />

`static TrotterizationFactory.build(mode='trotter', reps=1)`

A factory for conveniently creating TrotterizationBase instances.

**Parameters**

*   **mode** (`str`) – One of ‘trotter’, ‘suzuki’, ‘qdrift’
*   **reps** (`int`) – The number of times to repeat the Trotterization circuit.

**Return type**

[`TrotterizationBase`](qiskit.opflow.evolutions.TrotterizationBase "qiskit.opflow.evolutions.trotterizations.trotterization_base.TrotterizationBase")

**Returns**

The desired TrotterizationBase instance.

**Raises**

**ValueError** – A string not in \[‘trotter’, ‘suzuki’, ‘qdrift’] is given for mode.


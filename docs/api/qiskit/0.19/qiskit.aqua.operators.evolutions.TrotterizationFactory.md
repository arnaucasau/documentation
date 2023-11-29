---
title: TrotterizationFactory
description: API reference for qiskit.aqua.operators.evolutions.TrotterizationFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.TrotterizationFactory
---

# TrotterizationFactory

<span id="qiskit.aqua.operators.evolutions.TrotterizationFactory" />

`TrotterizationFactory`

A factory for conveniently creating TrotterizationBase instances.

## Methods

### build

<span id="qiskit.aqua.operators.evolutions.TrotterizationFactory.build" />

`static TrotterizationFactory.build(mode='trotter', reps=1)`

A factory for conveniently creating TrotterizationBase instances.

**Parameters**

*   **mode** (`str`) – One of ‘trotter’, ‘suzuki’, ‘qdrift’
*   **reps** (`int`) – The number of times to repeat the Trotterization circuit.

**Return type**

[`TrotterizationBase`](qiskit.aqua.operators.evolutions.TrotterizationBase "qiskit.aqua.operators.evolutions.trotterizations.trotterization_base.TrotterizationBase")

**Returns**

The desired TrotterizationBase instance.

**Raises**

**ValueError** – A string not in \[‘trotter’, ‘suzuki’, ‘qdrift’] is given for mode.


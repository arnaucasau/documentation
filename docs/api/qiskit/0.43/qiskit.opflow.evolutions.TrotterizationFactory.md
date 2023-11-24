---
title: TrotterizationFactory
description: API reference for qiskit.opflow.evolutions.TrotterizationFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.TrotterizationFactory
---

# TrotterizationFactory

<span id="qiskit.opflow.evolutions.TrotterizationFactory" />

`TrotterizationFactory`

Bases: `object`

Deprecated: A factory for conveniently creating TrotterizationBase instances.

## Methods Defined Here

<span id="qiskit-opflow-evolutions-trotterizationfactory-build" />

### build

<span id="qiskit.opflow.evolutions.TrotterizationFactory.build" />

`static TrotterizationFactory.build(mode='trotter', reps=1)`

A factory for conveniently creating TrotterizationBase instances.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The method `qiskit.opflow.evolutions.trotterizations.trotterization_factory.TrotterizationFactory.build()` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **mode** (*str*) – One of ‘trotter’, ‘suzuki’, ‘qdrift’
*   **reps** (*int*) – The number of times to repeat the Trotterization circuit.

**Returns**

The desired TrotterizationBase instance.

**Raises**

**ValueError** – A string not in \[‘trotter’, ‘suzuki’, ‘qdrift’] is given for mode.

**Return type**

[*TrotterizationBase*](qiskit.opflow.evolutions.TrotterizationBase "qiskit.opflow.evolutions.trotterizations.trotterization_base.TrotterizationBase")


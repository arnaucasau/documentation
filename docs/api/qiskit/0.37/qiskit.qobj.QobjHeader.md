---
title: QobjHeader
description: API reference for qiskit.qobj.QobjHeader
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QobjHeader
---

# QobjHeader[¶](#qobjheader "Permalink to this headline")

<span id="qiskit.qobj.QobjHeader" />

`QobjHeader(**kwargs)`

Bases: `qiskit.qobj.common.QobjDictField`

A class used to represent a dictionary header in Qobj objects.

Instantiate a new Qobj dict field object.

**Parameters**

**kwargs** – arbitrary keyword arguments that can be accessed as attributes of the object.

## Methods

### from\_dict

<span id="qiskit.qobj.QobjHeader.from_dict" />

`classmethod QobjHeader.from_dict(data)`

Create a new QobjHeader object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QobjHeader to create. It will be in the same format as output by [`to_dict()`](qiskit.qobj.QobjHeader#to_dict "qiskit.qobj.QobjHeader.to_dict").

**Returns**

The QobjDictField from the input dictionary.

**Return type**

QobjDictFieldr

### to\_dict

<span id="qiskit.qobj.QobjHeader.to_dict" />

`QobjHeader.to_dict()`

Return a dictionary format representation of the QASM Qobj.

**Returns**

The dictionary form of the QobjHeader.

**Return type**

dict


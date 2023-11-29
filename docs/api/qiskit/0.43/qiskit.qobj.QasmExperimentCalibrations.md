---
title: QasmExperimentCalibrations
description: API reference for qiskit.qobj.QasmExperimentCalibrations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.QasmExperimentCalibrations
---

# QasmExperimentCalibrations

<span id="qiskit.qobj.QasmExperimentCalibrations" />

`QasmExperimentCalibrations(gates)`

Bases: `object`

A container for any calibrations data. The gates attribute contains a list of GateCalibrations.

Initialize a container for calibrations.

**Parameters**

**gates** (*list(*[*GateCalibration*](qiskit.qobj.GateCalibration "qiskit.qobj.GateCalibration")*)*) –

## Methods

<span id="qiskit-qobj-qasmexperimentcalibrations-from-dict" />

### from\_dict

<span id="qiskit.qobj.QasmExperimentCalibrations.from_dict" />

`classmethod QasmExperimentCalibrations.from_dict(data)`

Create a new GateCalibration object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the QasmExperimentCalibrations to create. It will be in the same format as output by [`to_dict()`](qiskit.qobj.QasmExperimentCalibrations#to_dict "qiskit.qobj.QasmExperimentCalibrations.to_dict").

**Returns**

The QasmExperimentCalibrations from the input dictionary.

**Return type**

[QasmExperimentCalibrations](qiskit.qobj.QasmExperimentCalibrations "qiskit.qobj.QasmExperimentCalibrations")

<span id="qiskit-qobj-qasmexperimentcalibrations-to-dict" />

### to\_dict

<span id="qiskit.qobj.QasmExperimentCalibrations.to_dict" />

`QasmExperimentCalibrations.to_dict()`

Return a dictionary format representation of the calibrations.

**Returns**

The dictionary form of the GateCalibration.

**Return type**

dict


---
title: PulseQobjExperiment
description: API reference for qiskit.qobj.PulseQobjExperiment
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.qobj.PulseQobjExperiment
---

# PulseQobjExperiment

<span id="qiskit.qobj.PulseQobjExperiment" />

`PulseQobjExperiment(instructions, config=None, header=None)`

Bases: `object`

A Pulse Qobj Experiment.

Each instance of this class is used to represent an individual Pulse experiment as part of a larger Pulse Qobj.

Instantiate a PulseQobjExperiment.

**Parameters**

*   **config** ([*PulseQobjExperimentConfig*](qiskit.qobj.PulseQobjExperimentConfig "qiskit.qobj.PulseQobjExperimentConfig")) – A config object for the experiment
*   **header** (*PulseQobjExperimentHeader*) – A header object for the experiment
*   **instructions** (*list*) – A list of [`PulseQobjInstruction`](qiskit.qobj.PulseQobjInstruction "qiskit.qobj.PulseQobjInstruction") objects

## Methods

<span id="qiskit-qobj-pulseqobjexperiment-from-dict" />

### from\_dict

<span id="qiskit.qobj.PulseQobjExperiment.from_dict" />

`classmethod PulseQobjExperiment.from_dict(data)`

Create a new PulseQobjExperiment object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary for the experiment config

**Returns**

The object from the input dictionary.

**Return type**

[PulseQobjExperiment](qiskit.qobj.PulseQobjExperiment "qiskit.qobj.PulseQobjExperiment")

<span id="qiskit-qobj-pulseqobjexperiment-to-dict" />

### to\_dict

<span id="qiskit.qobj.PulseQobjExperiment.to_dict" />

`PulseQobjExperiment.to_dict()`

Return a dictionary format representation of the Experiment.

**Returns**

The dictionary form of the PulseQobjExperiment.

**Return type**

dict


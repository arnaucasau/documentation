---
title: IQXStandard
description: API reference for qiskit.visualization.pulse.IQXStandard
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.visualization.pulse.IQXStandard
---

# IQXStandard[¶](#iqxstandard "Permalink to this headline")

<span id="qiskit.visualization.pulse.IQXStandard" />

`IQXStandard(**kwargs)`

Bases: `dict`

Standard pulse stylesheet.

*   Generate stepwise waveform envelope with latex pulse names.
*   Apply phase modulation to waveforms.
*   Plot frame change symbol with formatted operand values.
*   Show chart name with scaling factor.
*   Show snapshot and barrier.
*   Do not show acquire channels.
*   Channels are sorted by index and control channels are added to the end.

## Methods

### clear

<span id="qiskit.visualization.pulse.IQXStandard.clear" />

`IQXStandard.clear() → None.  Remove all items from D.`

### copy

<span id="qiskit.visualization.pulse.IQXStandard.copy" />

`IQXStandard.copy() → a shallow copy of D`

### fromkeys

<span id="qiskit.visualization.pulse.IQXStandard.fromkeys" />

`IQXStandard.fromkeys(value=None, /)`

Create a new dictionary with keys from iterable and values set to value.

### get

<span id="qiskit.visualization.pulse.IQXStandard.get" />

`IQXStandard.get(key, default=None, /)`

Return the value for key if key is in the dictionary, else default.

### items

<span id="qiskit.visualization.pulse.IQXStandard.items" />

`IQXStandard.items() → a set-like object providing a view on D's items`

### keys

<span id="qiskit.visualization.pulse.IQXStandard.keys" />

`IQXStandard.keys() → a set-like object providing a view on D's keys`

### pop

<span id="qiskit.visualization.pulse.IQXStandard.pop" />

`IQXStandard.pop(k[, d]) → v, remove specified key and return the corresponding value.`

If key is not found, d is returned if given, otherwise KeyError is raised

### popitem

<span id="qiskit.visualization.pulse.IQXStandard.popitem" />

`IQXStandard.popitem()`

Remove and return a (key, value) pair as a 2-tuple.

Pairs are returned in LIFO (last-in, first-out) order. Raises KeyError if the dict is empty.

### setdefault

<span id="qiskit.visualization.pulse.IQXStandard.setdefault" />

`IQXStandard.setdefault(key, default=None, /)`

Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.

### update

<span id="qiskit.visualization.pulse.IQXStandard.update" />

`IQXStandard.update([E, ]**F) → None.  Update D from dict/iterable E and F.`

If E is present and has a .keys() method, then does: for k in E: D\[k] = E\[k] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k] = v In either case, this is followed by: for k in F: D\[k] = F\[k]

### values

<span id="qiskit.visualization.pulse.IQXStandard.values" />

`IQXStandard.values() → an object providing a view on D's values`


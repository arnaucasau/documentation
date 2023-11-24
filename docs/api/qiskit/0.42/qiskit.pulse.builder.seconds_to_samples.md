---
title: seconds_to_samples
description: API reference for qiskit.pulse.builder.seconds_to_samples
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.builder.seconds_to_samples
---

# qiskit.pulse.builder.seconds\_to\_samples[¶](#qiskit-pulse-builder-seconds-to-samples "Permalink to this headline")

<span id="qiskit.pulse.builder.seconds_to_samples" />

`seconds_to_samples(seconds)`

Obtain the number of samples that will elapse in `seconds` on the active backend.

Rounds down.

**Parameters**

**seconds** (`Union`\[`float`, `ndarray`]) – Time in seconds to convert to samples.

**Return type**

`Union`\[`int`, `ndarray`]

**Returns**

The number of samples for the time to elapse


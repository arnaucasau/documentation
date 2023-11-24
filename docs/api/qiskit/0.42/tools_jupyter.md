---
title: jupyter
description: API reference for qiskit.tools.jupyter
in_page_toc_min_heading_level: 1
python_api_type: module
python_api_name: qiskit.tools.jupyter
---

<span id="module-qiskit.tools.jupyter" />

<span id="qiskit-tools-jupyter" />

# Jupyter Tools

<span id="module-qiskit.tools.jupyter" />

`qiskit.tools.jupyter¶`

A Collection of Jupyter magic functions and tools that extend the functionality of Qiskit.

## Overview of all available backends

<span id="module-qiskit.tools.jupyter" />

`¶`

```python
from qiskit.providers.ibmq import IBMQ
import qiskit.tools.jupyter
%matplotlib inline

IBMQ.load_account()

%qiskit_backend_overview
```

## Detailed information on a single backend

<span id="module-qiskit.tools.jupyter" />

`¶`

```python
from qiskit.providers.ibmq import IBMQ
import qiskit.tools.jupyter
%matplotlib inline

IBMQ.load_account()
provider = IBMQ.get_provider(hub='ibm-q')
backend = provider.get_backend('ibmq_vigo')
backend
```

## Load Qiskit Job Watcher

<span id="module-qiskit.tools.jupyter" />

`¶`

```python
import qiskit.tools.jupyter
%qiskit_job_watcher
```

## HTMLProgressBar

<span id="module-qiskit.tools.jupyter" />

`¶`

```python
import numpy as np
from qiskit.tools.parallel import parallel_map
import qiskit.tools.jupyter

%qiskit_progress_bar
parallel_map(np.sin, np.linspace(0,10,100));
```

## Qiskit version table

<span id="module-qiskit.tools.jupyter" />

`¶`

```python
import qiskit.tools.jupyter
%qiskit_version_table
```

## Qiskit copyright

<span id="module-qiskit.tools.jupyter" />

`¶`

```python
import qiskit.tools.jupyter
%qiskit_copyright
```

## Monospaced output

<span id="module-qiskit.tools.jupyter" />

`¶`

```python
import qiskit.tools.jupyter
%monospaced_output
```


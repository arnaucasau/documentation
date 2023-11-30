---
title: plot_state_city
description: API reference for qiskit.visualization.plot_state_city
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.visualization.plot_state_city
---

<span id="qiskit-visualization-plot-state-city" />

# qiskit.visualization.plot\_state\_city

<span id="qiskit.visualization.plot_state_city" />

`plot_state_city(state, title='', figsize=None, color=None, alpha=1, ax_real=None, ax_imag=None, *, rho=None, filename=None)`

Plot the cityscape of quantum state.

Plot two 3d bar graphs (two dimensional) of the real and imaginary part of the density matrix rho.

<Admonition title="Deprecated since version 0.15.1" type="danger">
  `qiskit.visualization.state_visualization.plot_state_city()`’s argument `rho` is deprecated as of qiskit-terra 0.15.1. It will be removed no earlier than 3 months after the release date. Instead, use the argument `state`, which behaves identically.
</Admonition>

**Parameters**

*   **state** ([*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")  *or*[*DensityMatrix*](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") *or ndarray*) – an N-qubit quantum state.
*   **title** (*str*) – a string that represents the plot title
*   **figsize** (*tuple*) – Figure size in inches.
*   **color** (*list*) – A list of len=2 giving colors for real and imaginary components of matrix elements.
*   **alpha** (*float*) – Transparency value for bars
*   **ax\_real** ([*matplotlib.axes.Axes*](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.7.2)")) – An optional Axes object to be used for the visualization output. If none is specified a new matplotlib Figure will be created and used. If this is specified without an ax\_imag only the real component plot will be generated. Additionally, if specified there will be no returned Figure since it is redundant.
*   **ax\_imag** ([*matplotlib.axes.Axes*](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.7.2)")) – An optional Axes object to be used for the visualization output. If none is specified a new matplotlib Figure will be created and used. If this is specified without an ax\_real only the imaginary component plot will be generated. Additionally, if specified there will be no returned Figure since it is redundant.

**Returns**

The matplotlib.Figure of the visualization if the `ax_real` and `ax_imag` kwargs are not set

**Return type**

[`matplotlib.figure.Figure`](https://matplotlib.org/stable/api/figure_api.html#matplotlib.figure.Figure "(in Matplotlib v3.7.2)")

**Raises**

*   **MissingOptionalLibraryError** – Requires matplotlib.
*   **ValueError** – When ‘color’ is not a list of len=2.
*   [**VisualizationError**](qiskit.visualization.VisualizationError "qiskit.visualization.VisualizationError") – if input is not a valid N-qubit state.

## Examples

```python
# You can choose different colors for the real and imaginary parts of the density matrix.

from qiskit import QuantumCircuit
from qiskit.quantum_info import DensityMatrix
from qiskit.visualization import plot_state_city

qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)

state = DensityMatrix(qc)
plot_state_city(state, color=['midnightblue', 'crimson'], title="New State City")
```

![../\_images/qiskit-visualization-plot\_state\_city-1.png](/images/api/qiskit/0.43/qiskit-visualization-plot_state_city-1.png)

```python
# You can make the bars more transparent to better see the ones that are behind
# if they overlap.

import numpy as np
from qiskit.quantum_info import Statevector
from qiskit.visualization import plot_state_city
from qiskit import QuantumCircuit

qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)


qc = QuantumCircuit(2)
qc.h([0, 1])
qc.cz(0,1)
qc.ry(np.pi/3, 0)
qc.rx(np.pi/5, 1)

state = Statevector(qc)
plot_state_city(state, alpha=0.6)
```

![../\_images/qiskit-visualization-plot\_state\_city-2.png](/images/api/qiskit/0.43/qiskit-visualization-plot_state_city-2.png)

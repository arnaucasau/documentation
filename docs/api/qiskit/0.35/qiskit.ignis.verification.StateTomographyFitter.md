---
title: StateTomographyFitter
description: API reference for qiskit.ignis.verification.StateTomographyFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.StateTomographyFitter
---

# StateTomographyFitter

<span id="qiskit.ignis.verification.StateTomographyFitter" />

`StateTomographyFitter(result, circuits, meas_basis='Pauli')`[GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.7/qiskit/ignis/verification/tomography/fitters/state_fitter.py "view source code")

Bases: `qiskit.ignis.verification.tomography.fitters.base_fitter.TomographyFitter`

Maximum-Likelihood estimation state tomography fitter.

Initialize state tomography fitter with experimental data.

**Parameters**

*   **result** (`Result`) – a Qiskit Result object obtained from executing tomography circuits.
*   **circuits** (`List`\[`QuantumCircuit`]) – a list of circuits or circuit names to extract count information from the result object.
*   **meas\_basis** (`Union`\[`TomographyBasis`, `str`]) – (default: ‘Pauli’) A function to return measurement operators corresponding to measurement outcomes. See Additional Information (default: ‘Pauli’)

## Methods

### add\_data

<span id="qiskit.ignis.verification.StateTomographyFitter.add_data" />

`StateTomographyFitter.add_data(results, circuits)`

Add tomography data from a Qiskit Result object.

**Parameters**

*   **results** (`List`\[`Result`]) – The results obtained from executing tomography circuits.
*   **circuits** (`List`\[`Union`\[`QuantumCircuit`, `str`]]) – circuits or circuit names to extract count information from the result object.

**Raises**

**QiskitError** – In case some of the tomography data is not found in the results

### fit

<span id="qiskit.ignis.verification.StateTomographyFitter.fit" />

`StateTomographyFitter.fit(method='auto', standard_weights=True, beta=0.5, **kwargs)`[GitHub](https://github.com/qiskit-community/qiskit-ignis/tree/stable/0.7/qiskit/ignis/verification/tomography/fitters/state_fitter.py "view source code")

Reconstruct a quantum state using CVXPY convex optimization.

**Fitter method**

The `cvx` fitter method used CVXPY convex optimization package. The `lstsq` method uses least-squares fitting (linear inversion). The `auto` method will use ‘cvx’ if the CVXPY package is found on the system, otherwise it will default to ‘lstsq’.

**Objective function**

This fitter solves the constrained least-squares minimization: $minimize: \vert \vert a \cdot x - b \vert \vert _2$

subject to:

> *   $x >> 0$
> *   $\text{trace}(x) = 1$

where:

> *   a is the matrix of measurement operators $a[i] = \text{vec}(M_i).H$
> *   b is the vector of expectation value data for each projector $b[i] \sim \text{Tr}[M_i.H \cdot x] = (a \cdot x)[i]$
> *   x is the vectorized density matrix to be fitted

**PSD constraint**

The PSD keyword constrains the fitted matrix to be postive-semidefinite. For the `lstsq` fitter method the fitted matrix is rescaled using the method proposed in Reference \[1]. For the `cvx` fitter method the convex constraint makes the optimization problem a SDP. If PSD=False the fitted matrix will still be constrained to be Hermitian, but not PSD. In this case the optimization problem becomes a SOCP.

**Trace constraint**

The trace keyword constrains the trace of the fitted matrix. If trace=None there will be no trace constraint on the fitted matrix. This constraint should not be used for process tomography and the trace preserving constraint should be used instead.

**CVXPY Solvers:**

Various solvers can be called in CVXPY using the solver keyword argument. See the [CVXPY documentation](https://www.cvxpy.org/tutorial/advanced/index.html#solve-method-options) for more information on solvers.

References:

#### \[1] J Smolin, JM Gambetta, G Smith, Phys. Rev. Lett. 108, 070502

(2012). Open access: arXiv:1106.5458 \[quant-ph].

**Parameters**

*   **method** (`str`) – The fitter method ‘auto’, ‘cvx’ or ‘lstsq’.
*   **standard\_weights** (`bool`) – (default: True) Apply weights to tomography data based on count probability
*   **beta** (`float`) – (default: 0.5) hedging parameter for converting counts to probabilities
*   **\*\*kwargs** – kwargs for fitter method.

**Raises**

**QiskitError** – In case the fitting method is unrecognized.

**Return type**

`array`

**Returns**

The fitted matrix rho that minimizes $\vert \vert \text{basis_matrix} \cdot \text{vec}(\text{rho}) - \text{data}\vert \vert _2$.

### set\_measure\_basis

<span id="qiskit.ignis.verification.StateTomographyFitter.set_measure_basis" />

`StateTomographyFitter.set_measure_basis(basis)`

Set the measurement basis

**Parameters**

**basis** (`Union`\[`TomographyBasis`, `str`]) – measurement basis

**Raises**

**QiskitError** – In case of invalid measurement or preparation basis.

### set\_preparation\_basis

<span id="qiskit.ignis.verification.StateTomographyFitter.set_preparation_basis" />

`StateTomographyFitter.set_preparation_basis(basis)`

Set the preparation basis function

**Parameters**

**basis** (`Union`\[`TomographyBasis`, `str`]) – preparation basis

**Raises**

**QiskitError** – in case the basis has no preperation data

## Attributes

<span id="qiskit.ignis.verification.StateTomographyFitter.data" />

### data

Return tomography data

<span id="qiskit.ignis.verification.StateTomographyFitter.measure_basis" />

### measure\_basis

Return the tomography measurement basis.

<span id="qiskit.ignis.verification.StateTomographyFitter.preparation_basis" />

### preparation\_basis

Return the tomography preparation basis.


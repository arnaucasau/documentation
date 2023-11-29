---
title: PVQDResult
description: API reference for qiskit.algorithms.PVQDResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.PVQDResult
---

# PVQDResult

<span id="qiskit.algorithms.PVQDResult" />

`PVQDResult(evolved_state, aux_ops_evaluated=None, times=None, parameters=None, fidelities=None, estimated_error=None, observables=None)`

Bases: [`TimeEvolutionResult`](qiskit.algorithms.TimeEvolutionResult "qiskit.algorithms.time_evolvers.time_evolution_result.TimeEvolutionResult")

The result object for the p-VQD algorithm.

**Parameters**

*   **evolved\_state** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – An evolved quantum state.
*   **aux\_ops\_evaluated** (*list\[tuple\[complex, complex]] | None*) – Optional list of observables for which expected values on an evolved state are calculated. These values are in fact tuples formatted as (mean, standard deviation).
*   **times** (*list\[float] | None*) – The times evaluated during the time integration.
*   **parameters** (*list\[np.ndarray] | None*) – The parameter values at each evaluation time.
*   **fidelities** (*Sequence\[float] | None*) – The fidelity of the Trotter step and variational update at each iteration.
*   **estimated\_error** (*float | None*) – The overall estimated error evaluated as one minus the product of all fidelities.
*   **observables** (*list\[list\[float]] | None*) – The value of the observables evaluated at each iteration.

## Methods

<span id="qiskit-algorithms-pvqdresult-combine" />

### combine

<span id="qiskit.algorithms.PVQDResult.combine" />

`PVQDResult.combine(result)`

Any property from the argument that exists in the receiver is updated. :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None


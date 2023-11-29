---
title: get_operator
description: API reference for qiskit.optimization.applications.ising.vehicle_routing.get_operator
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.optimization.applications.ising.vehicle_routing.get_operator
---

<span id="qiskit-optimization-applications-ising-vehicle-routing" />

# qiskit.optimization.applications.ising.vehicle\_routing

Converts vehicle routing instances into a list of Paulis, and provides some related routines (extracting a solution, checking its objective function value).

## Functions

|                                                                                                                                                                                                                              |                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`get_operator`](#qiskit.optimization.applications.ising.vehicle_routing.get_operator "qiskit.optimization.applications.ising.vehicle_routing.get_operator")(instance, n, K)                                                 | Converts an instance of a vehicle routing problem into a list of Paulis.     |
| [`get_vehiclerouting_cost`](#qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_cost "qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_cost")(instance, n, K, x\_sol)        | Computes the cost of a solution to an instance of a vehicle routing problem. |
| [`get_vehiclerouting_matrices`](#qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_matrices "qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_matrices")(instance, n, K)    | Constructs auxiliary matrices from a vehicle routing instance,               |
| [`get_vehiclerouting_solution`](#qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_solution "qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_solution")(instance, n, K, …) | Tries to obtain a feasible solution (in vector form) of an instance          |

<span id="qiskit.optimization.applications.ising.vehicle_routing.get_operator" />

`get_operator(instance, n, K)`

Converts an instance of a vehicle routing problem into a list of Paulis.

**Parameters**

*   **instance** (*numpy.ndarray*) – a customers-to-customers distance matrix.
*   **n** (*integer*) – the number of customers.
*   **K** (*integer*) – the number of vehicles available.

**Returns**

operator for the Hamiltonian.

**Return type**

[WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")

<span id="qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_cost" />

`get_vehiclerouting_cost(instance, n, K, x_sol)`

Computes the cost of a solution to an instance of a vehicle routing problem.

**Parameters**

*   **instance** (*numpy.ndarray*) – a customers-to-customers distance matrix.
*   **n** (*integer*) – the number of customers.
*   **K** (*integer*) – the number of vehicles available.
*   **x\_sol** (*numpy.ndarray*) – a solution, i.e., a path, in its binary representation.

**Returns**

objective function value.

**Return type**

float

<span id="qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_matrices" />

`get_vehiclerouting_matrices(instance, n, K)`

## Constructs auxiliary matrices from a vehicle routing instance,

which represent the encoding into a binary quadratic program. This is used in the construction of the qubit ops and computation of the solution cost.

**Parameters**

*   **instance** (*numpy.ndarray*) – a customers-to-customers distance matrix.
*   **n** (*integer*) – the number of customers.
*   **K** (*integer*) – the number of vehicles available.

**Returns**

a matrix defining the interactions between variables. a matrix defining the contribution from the individual variables. the constant offset.

**Return type**

tuple(numpy.ndarray, numpy.ndarray, float)

<span id="qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_solution" />

`get_vehiclerouting_solution(instance, n, K, result)`

## Tries to obtain a feasible solution (in vector form) of an instance

of vehicle routing from the results dictionary.

**Parameters**

*   **instance** (*numpy.ndarray*) – a customers-to-customers distance matrix.
*   **n** (*integer*) – the number of customers.
*   **K** (*integer*) – the number of vehicles available.
*   **result** (*dictionary*) – a dictionary obtained by QAOA.run or VQE.run containing key ‘eigvecs’.

**Returns**

a solution, i.e., a path, in its binary representation.

**Return type**

numpy.ndarray

## #TODO: support statevector simulation, results should be a statevector or counts format, not

a result from algorithm run


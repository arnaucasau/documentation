---
title: get_operator
description: API reference for qiskit.finance.applications.ising.portfolio.get_operator
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.finance.applications.ising.portfolio.get_operator
---

<span id="qiskit-finance-applications-ising-portfolio" />

# qiskit.finance.applications.ising.portfolio

Convert portfolio optimization instances into Pauli list

## Functions

|                                                                                                                                                                                   |                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`get_operator`](#qiskit.finance.applications.ising.portfolio.get_operator "qiskit.finance.applications.ising.portfolio.get_operator")(mu, sigma, q, budget, penalty)             | get qubit op                                                          |
| [`portfolio_expected_value`](#qiskit.finance.applications.ising.portfolio.portfolio_expected_value "qiskit.finance.applications.ising.portfolio.portfolio_expected_value")(x, mu) | returns portfolio expected value                                      |
| [`portfolio_value`](#qiskit.finance.applications.ising.portfolio.portfolio_value "qiskit.finance.applications.ising.portfolio.portfolio_value")(x, mu, sigma, q, budget, penalty) | returns portfolio value                                               |
| [`portfolio_variance`](#qiskit.finance.applications.ising.portfolio.portfolio_variance "qiskit.finance.applications.ising.portfolio.portfolio_variance")(x, sigma)                | returns portfolio variance                                            |
| [`random_model`](#qiskit.finance.applications.ising.portfolio.random_model "qiskit.finance.applications.ising.portfolio.random_model")(n\[, seed])                                | Generate random model (mu, sigma) for portfolio optimization problem. |

<span id="qiskit.finance.applications.ising.portfolio.get_operator" />

`get_operator(mu, sigma, q, budget, penalty)`

get qubit op

<span id="qiskit.finance.applications.ising.portfolio.portfolio_expected_value" />

`portfolio_expected_value(x, mu)`

returns portfolio expected value

<span id="qiskit.finance.applications.ising.portfolio.portfolio_value" />

`portfolio_value(x, mu, sigma, q, budget, penalty)`

returns portfolio value

<span id="qiskit.finance.applications.ising.portfolio.portfolio_variance" />

`portfolio_variance(x, sigma)`

returns portfolio variance

<span id="qiskit.finance.applications.ising.portfolio.random_model" />

`random_model(n, seed=None)`

Generate random model (mu, sigma) for portfolio optimization problem.

**Parameters**

*   **n** (*int*) – number of assets.
*   **seed** (*int or None*) – random seed - if None, will not initialize.

**Returns**

expected return vector numpy.ndarray: covariance matrix

**Return type**

numpy.narray


---
title: RealVariationalPrinciple
description: API reference for qiskit.algorithms.time_evolvers.variational.RealVariationalPrinciple
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.time_evolvers.variational.RealVariationalPrinciple
---

# RealVariationalPrinciple[¶](#realvariationalprinciple "Permalink to this headline")

<span id="qiskit.algorithms.time_evolvers.variational.RealVariationalPrinciple" />

`RealVariationalPrinciple(qgt, gradient)`

Bases: [`qiskit.algorithms.time_evolvers.variational.variational_principles.variational_principle.VariationalPrinciple`](qiskit.algorithms.time_evolvers.variational.VariationalPrinciple "qiskit.algorithms.time_evolvers.variational.variational_principles.variational_principle.VariationalPrinciple"), `abc.ABC`

Class for a Real Variational Principle. The real variant means that we consider real time dynamics.

**Parameters**

*   **qgt** ([`BaseQGT`](qiskit.algorithms.gradients.BaseQGT "qiskit.algorithms.gradients.base_qgt.BaseQGT")) – Instance of a class used to compute the GQT.
*   **gradient** ([`BaseEstimatorGradient`](qiskit.algorithms.gradients.BaseEstimatorGradient "qiskit.algorithms.gradients.base_estimator_gradient.BaseEstimatorGradient")) – Instance of a class used to compute the state gradient.


<span id="qiskit-algorithms-gradients" />

# qiskit.algorithms.gradients[¶](#module-qiskit.algorithms.gradients "Permalink to this headline")

## Gradients ([`qiskit.algorithms.gradients`](#module-qiskit.algorithms.gradients "qiskit.algorithms.gradients"))[¶](#gradients-qiskit-algorithms-gradients "Permalink to this headline")

### Estimator Gradients[¶](#estimator-gradients "Permalink to this headline")

|                                                                                                                                                                        |                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [`BaseEstimatorGradient`](qiskit.algorithms.gradients.BaseEstimatorGradient "qiskit.algorithms.gradients.BaseEstimatorGradient")(estimator\[, options, ...])           | Base class for an `EstimatorGradient` to compute the gradients of the expectation value.                              |
| [`DerivativeType`](qiskit.algorithms.gradients.DerivativeType "qiskit.algorithms.gradients.DerivativeType")(value)                                                     | Types of derivative.                                                                                                  |
| [`FiniteDiffEstimatorGradient`](qiskit.algorithms.gradients.FiniteDiffEstimatorGradient "qiskit.algorithms.gradients.FiniteDiffEstimatorGradient")(estimator, epsilon) | Compute the gradients of the expectation values by finite difference method \[1].                                     |
| [`LinCombEstimatorGradient`](qiskit.algorithms.gradients.LinCombEstimatorGradient "qiskit.algorithms.gradients.LinCombEstimatorGradient")(estimator\[, ...])           | Compute the gradients of the expectation values.                                                                      |
| [`ParamShiftEstimatorGradient`](qiskit.algorithms.gradients.ParamShiftEstimatorGradient "qiskit.algorithms.gradients.ParamShiftEstimatorGradient")(estimator\[, ...])  | Compute the gradients of the expectation values by the parameter shift rule \[1].                                     |
| [`SPSAEstimatorGradient`](qiskit.algorithms.gradients.SPSAEstimatorGradient "qiskit.algorithms.gradients.SPSAEstimatorGradient")(estimator, epsilon\[, ...])           | Compute the gradients of the expectation value by the Simultaneous Perturbation Stochastic Approximation (SPSA) \[1]. |
| [`ReverseEstimatorGradient`](qiskit.algorithms.gradients.ReverseEstimatorGradient "qiskit.algorithms.gradients.ReverseEstimatorGradient")(\[derivative\_type])         | Estimator gradients with the classically efficient reverse mode.                                                      |

### Sampler Gradients[¶](#sampler-gradients "Permalink to this headline")

|                                                                                                                                                                   |                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [`BaseSamplerGradient`](qiskit.algorithms.gradients.BaseSamplerGradient "qiskit.algorithms.gradients.BaseSamplerGradient")(sampler\[, options])                   | Base class for a `SamplerGradient` to compute the gradients of the sampling probability.                                 |
| [`FiniteDiffSamplerGradient`](qiskit.algorithms.gradients.FiniteDiffSamplerGradient "qiskit.algorithms.gradients.FiniteDiffSamplerGradient")(sampler, epsilon)    | Compute the gradients of the sampling probability by finite difference method \[1].                                      |
| [`LinCombSamplerGradient`](qiskit.algorithms.gradients.LinCombSamplerGradient "qiskit.algorithms.gradients.LinCombSamplerGradient")(sampler\[, options])          | Compute the gradients of the sampling probability.                                                                       |
| [`ParamShiftSamplerGradient`](qiskit.algorithms.gradients.ParamShiftSamplerGradient "qiskit.algorithms.gradients.ParamShiftSamplerGradient")(sampler\[, options]) | Compute the gradients of the sampling probability by the parameter shift rule \[1].                                      |
| [`SPSASamplerGradient`](qiskit.algorithms.gradients.SPSASamplerGradient "qiskit.algorithms.gradients.SPSASamplerGradient")(sampler, epsilon\[, ...])              | Compute the gradients of the sampling probability by the Simultaneous Perturbation Stochastic Approximation (SPSA) \[1]. |

### Quantum Geometric Tensor[¶](#quantum-geometric-tensor "Permalink to this headline")

|                                                                                                                                  |                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`BaseQGT`](qiskit.algorithms.gradients.BaseQGT "qiskit.algorithms.gradients.BaseQGT")(estimator\[, phase\_fix, ...])            | Base class to computes the Quantum Geometric Tensor (QGT) given a pure, parameterized quantum state. |
| [`LinCombQGT`](qiskit.algorithms.gradients.LinCombQGT "qiskit.algorithms.gradients.LinCombQGT")(estimator\[, phase\_fix, ...])   | Computes the Quantum Geometric Tensor (QGT) given a pure, parameterized quantum state.               |
| [`QFI`](qiskit.algorithms.gradients.QFI "qiskit.algorithms.gradients.QFI")(qgt\[, options])                                      | Computes the Quantum Fisher Information (QFI) given a pure, parameterized quantum state.             |
| [`ReverseQGT`](qiskit.algorithms.gradients.ReverseQGT "qiskit.algorithms.gradients.ReverseQGT")(\[phase\_fix, derivative\_type]) | QGT calculation with the classically efficient reverse mode.                                         |

### Results[¶](#results "Permalink to this headline")

|                                                                                                                                                                  |                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`EstimatorGradientResult`](qiskit.algorithms.gradients.EstimatorGradientResult "qiskit.algorithms.gradients.EstimatorGradientResult")(gradients, metadata, ...) | Result of EstimatorGradient. |
| [`QFIResult`](qiskit.algorithms.gradients.QFIResult "qiskit.algorithms.gradients.QFIResult")(qfis, metadata, options)                                            | Result of QFI.               |
| [`QGTResult`](qiskit.algorithms.gradients.QGTResult "qiskit.algorithms.gradients.QGTResult")(qgts, derivative\_type, metadata, ...)                              | Result of QGT.               |
| [`SamplerGradientResult`](qiskit.algorithms.gradients.SamplerGradientResult "qiskit.algorithms.gradients.SamplerGradientResult")(gradients, metadata, ...)       | Result of SamplerGradient.   |

---
title: IntegerToBinary
description: API reference for qiskit.optimization.converters.IntegerToBinary
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.IntegerToBinary
---

# IntegerToBinary

<span id="qiskit.optimization.converters.IntegerToBinary" />

`IntegerToBinary`

Convert a [`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.QuadraticProgram") into new one by encoding integer with binary variables.

This bounded-coefficient encoding used in this converted is proposed in \[1], Eq. (5).

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import IntegerToBinary
>>> problem = QuadraticProgram()
>>> var = problem.integer_var(name='x', lowerbound=0, upperbound=10)
>>> conv = IntegerToBinary()
>>> problem2 = conv.encode(problem)
```

## References

**\[1]: Sahar Karimi, Pooya Ronagh (2017), Practical Integer-to-Binary Mapping for Quantum**

Annealers. arxiv.org:1706.01945.

## Methods

### decode

<span id="qiskit.optimization.converters.IntegerToBinary.decode" />

`IntegerToBinary.decode(result)`

Convert the encoded problem (binary variables) back to the original (integer variables).

**Parameters**

**result** (`OptimizationResult`) – The result of the converted problem.

**Return type**

`OptimizationResult`

**Returns**

The result of the original problem.

### encode

<span id="qiskit.optimization.converters.IntegerToBinary.encode" />

`IntegerToBinary.encode(op, name=None)`

Convert an integer problem into a new problem with binary variables.

**Parameters**

*   **op** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved, that may contain integer variables.
*   **name** (`Optional`\[`str`]) – The name of the converted problem. If not provided, the name of the input problem is used.

**Return type**

[`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")

**Returns**

The converted problem, that contains no integer variables.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if variable or constraint type is not supported.


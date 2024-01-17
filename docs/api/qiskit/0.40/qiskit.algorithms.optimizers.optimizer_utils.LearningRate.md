---
title: LearningRate
description: API reference for qiskit.algorithms.optimizers.optimizer_utils.LearningRate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.optimizer_utils.LearningRate
---

# LearningRate

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate" />

`LearningRate(learning_rate)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.40/qiskit/algorithms/optimizers/optimizer_utils/learning_rate.py "view source code")

Bases: `Generator`

Represents a Learning Rate. Will be an attribute of [`GradientDescentState`](qiskit.algorithms.optimizers.GradientDescentState "qiskit.algorithms.optimizers.GradientDescentState"). Note that [`GradientDescent`](qiskit.algorithms.optimizers.GradientDescent "qiskit.algorithms.optimizers.GradientDescent") also has a learning rate. That learning rate can be a float, a list, an array, a function returning a generator and will be used to create a generator to be used during the optimization process. This class wraps `Generator` so that we can also access the last yielded value.

**Parameters**

**learning\_rate** (`Union`\[`float`, `List`\[`float`], `ndarray`, `Callable`\[\[], `Iterator`]]) – Used to create a generator to iterate on.

## Methods

### close

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate.close" />

`LearningRate.close()`

Raise GeneratorExit inside generator.

### send

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate.send" />

`LearningRate.send(value)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.40/qiskit/algorithms/optimizers/optimizer_utils/learning_rate.py "view source code")

Send a value into the generator. Return next yielded value or raise StopIteration.

### throw

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate.throw" />

`LearningRate.throw(typ, val=None, tb=None)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.40/qiskit/algorithms/optimizers/optimizer_utils/learning_rate.py "view source code")

Raise an exception in the generator. Return next yielded value or raise StopIteration.

## Attributes

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate.current" />

### current

Returns the current value of the learning rate.


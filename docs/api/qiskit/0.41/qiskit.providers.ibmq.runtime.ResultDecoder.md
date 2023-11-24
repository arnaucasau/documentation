---
title: ResultDecoder
description: API reference for qiskit.providers.ibmq.runtime.ResultDecoder
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.runtime.ResultDecoder
---

<Admonition title="Warning" type="caution">
  The package `qiskit-ibmq-provider` is being deprecated and its repo is going to be archived soon. Please transition to the new packages. More information in [https://ibm.biz/provider\_migration\_guide](https://ibm.biz/provider_migration_guide)
</Admonition>

# ResultDecoder[¶](#resultdecoder "Permalink to this headline")

<span id="qiskit.providers.ibmq.runtime.ResultDecoder" />

`ResultDecoder`

Bases: `object`

Runtime job result decoder.

You can subclass this class and overwrite the [`decode()`](qiskit.providers.ibmq.runtime.ResultDecoder#decode "qiskit.providers.ibmq.runtime.ResultDecoder.decode") method to create a custom result decoder for the results of your runtime program. For example:

```python
class MyResultDecoder(ResultDecoder):

    @classmethod
    def decode(cls, data):
        decoded = super().decode(data)
        custom_processing(decoded)  # perform custom processing
```

Users of your program will need to pass in the subclass when invoking [`qiskit.providers.ibmq.runtime.RuntimeJob.result()`](qiskit.providers.ibmq.runtime.RuntimeJob#result "qiskit.providers.ibmq.runtime.RuntimeJob.result") or [`qiskit.providers.ibmq.runtime.IBMRuntimeService.run()`](qiskit.providers.ibmq.runtime.IBMRuntimeService#run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run").

## Methods

<Admonition title="Warning" type="caution">
  The package `qiskit-ibmq-provider` is being deprecated and its repo is going to be archived soon. Please transition to the new packages. More information in [https://ibm.biz/provider\_migration\_guide](https://ibm.biz/provider_migration_guide)
</Admonition>

### decode

<span id="qiskit.providers.ibmq.runtime.ResultDecoder.decode" />

`classmethod ResultDecoder.decode(data)`

Decode the result data.

**Parameters**

**data** (`str`) – Result data to be decoded.

**Return type**

`Any`

**Returns**

Decoded result data.


---
title: level_0_pass_manager
description: API reference for qiskit.transpiler.preset_passmanagers.level_0_pass_manager
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.transpiler.preset_passmanagers.level_0_pass_manager
---

# qiskit.transpiler.preset\_passmanagers.level\_0\_pass\_manager[¶](#qiskit-transpiler-preset-passmanagers-level-0-pass-manager "Permalink to this headline")

<span id="qiskit.transpiler.preset_passmanagers.level_0_pass_manager" />

`level_0_pass_manager(pass_manager_config)`

Level 0 pass manager: no explicit optimization other than mapping to backend.

This pass manager applies the user-given initial layout. If none is given, a trivial layout consisting of mapping the i-th virtual qubit to the i-th physical qubit is used. Any unused physical qubit is allocated as ancilla space.

The pass manager then unrolls the circuit to the desired basis, and transforms the circuit to match the coupling map.

**Parameters**

**pass\_manager\_config** ([`PassManagerConfig`](qiskit.transpiler.PassManagerConfig "qiskit.transpiler.passmanager_config.PassManagerConfig")) – configuration of the pass manager.

**Return type**

[`StagedPassManager`](qiskit.transpiler.StagedPassManager "qiskit.transpiler.passmanager.StagedPassManager")

**Returns**

a level 0 pass manager.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the passmanager config is invalid.


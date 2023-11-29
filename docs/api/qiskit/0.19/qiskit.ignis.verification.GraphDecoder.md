---
title: GraphDecoder
description: API reference for qiskit.ignis.verification.GraphDecoder
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.GraphDecoder
---

# GraphDecoder

<span id="qiskit.ignis.verification.GraphDecoder" />

`GraphDecoder(code, S=None)`

Class to construct the graph corresponding to the possible syndromes of a quantum error correction code, and then run suitable decoders.

**Parameters**

*   **code** (*RepitionCode*) – The QEC Code object for which this decoder will be used.
*   **S** (*networkx.Graph*) – Graph describing connectivity between syndrome elements. Will be generated automatically if not supplied.

**Additional information:**

The decoder for the supplied `code` is initialized by running `_make_syndrome_graph()`. Since this process can take some time, it is also possible to load in a premade `S`. However, if this was created for a differently defined `code`, it won’t work properly.

## Methods

### get\_logical\_prob

<span id="qiskit.ignis.verification.GraphDecoder.get_logical_prob" />

`GraphDecoder.get_logical_prob(results, algorithm='matching')`

**Parameters**

*   **results** (*dict*) – A results dictionary, as produced by the
*   **code.** (*process\_results method of the*) –
*   **algorithm** (*str*) – Choice of which decoder to use.

**Returns**

Dictionary of logical error probabilities for each of the encoded logical states whose results were given in the input.

**Return type**

dict

### make\_error\_graph

<span id="qiskit.ignis.verification.GraphDecoder.make_error_graph" />

`GraphDecoder.make_error_graph(string, subgraphs=None)`

**Parameters**

*   **string** (*str*) – A string describing the output from the code.
*   **subgraphs** (*list*) – Used when multiple, semi-independent graphs need
*   **created.** (*need to*) –

**Returns**

The subgraph(s) of S which corresponds to the non-trivial syndrome elements in the given string.

**Return type**

E

### matching

<span id="qiskit.ignis.verification.GraphDecoder.matching" />

`GraphDecoder.matching(string)`

**Parameters**

**string** (*str*) – A string describing the output from the code.

**Returns**

**A string with corrected logical values,**

computed using minimum weight perfect matching.

**Return type**

str

#### Additional information:

This function can be run directly, or used indirectly to calculate a logical error probability with get\_logical\_prob

### weight\_syndrome\_graph

<span id="qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph" />

`GraphDecoder.weight_syndrome_graph(results)`

Generate weighted syndrome graph from result counts.

**Parameters**

*   **results** (*dict*) – A results dictionary, as produced by the
*   **code.** (*process\_results method of the*) –

#### Additional information:

Uses results to estimate the probability of the errors that create the pairs of nodes in S. The edge weights are then replaced with the corresponding -log(p/(1-p).


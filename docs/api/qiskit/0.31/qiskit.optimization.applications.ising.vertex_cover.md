<span id="qiskit-optimization-applications-ising-vertex-cover" />

# qiskit.optimization.applications.ising.vertex\_cover

Convert vertex cover instances into Pauli list Deal with Gset format. See [https://web.stanford.edu/\~yyye/yyye/Gset/](https://web.stanford.edu/~yyye/yyye/Gset/)

## Functions

|                                  |                                                                                    |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| `check_full_edge_coverage`(x, w) | **param x**binary string as numpy array.                                           |
| `get_graph_solution`(x)          | Get graph solution from binary string.                                             |
| `get_operator`(weight\_matrix)   | Generate Hamiltonian for the vertex cover :param weight\_matrix: adjacency matrix. |

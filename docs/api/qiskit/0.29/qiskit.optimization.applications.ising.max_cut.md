<span id="qiskit-optimization-applications-ising-max-cut" />

# qiskit.optimization.applications.ising.max\_cut

Convert max-cut instances into Pauli list Deal with Gset format. See [https://web.stanford.edu/\~yyye/yyye/Gset/](https://web.stanford.edu/~yyye/yyye/Gset/) Design the max-cut object w as a two-dimensional np.array e.g., w\[i, j] = x means that the weight of a edge between i and j is x Note that the weights are symmetric, i.e., w\[j, i] = x always holds.

## Functions

|                                |                                                          |
| ------------------------------ | -------------------------------------------------------- |
| `get_graph_solution`(x)        | Get graph solution from binary string.                   |
| `get_operator`(weight\_matrix) | Generate Hamiltonian for the max-cut problem of a graph. |
| `max_cut_value`(x, w)          | Compute the value of a cut.                              |

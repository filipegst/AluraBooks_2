function calcularValorTotalDeDisponiveis(livrosFiltrados) {
    return livrosFiltrados.reduce((acc , livrosFiltrados) => acc + livrosFiltrados.preco, 0).toFixed(2)
}
const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() 
    : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivros(valorTotal)
        console.log(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livros => livros.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livros => livros.quantidade > 0)
}

function exibirValorTotalDosLivros(valorTotal) {
    valorTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>'
    `
}

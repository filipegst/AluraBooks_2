let livros = []
const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaApi()


async function getBuscarLivrosDaApi() {
    const res = await fetch(endpoint)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)  
}   


const criaConexao = require("../db/conexao")

// função construtora
const ProdutoDAO = require("../db/produtoDAO")

function listagemProdutos(req, resp) {
    
    const conexao = criaConexao()
    const produtoDAO = ProdutoDAO(conexao);
    
    produtoDAO.lista(
        function(resultado = []){
            resp.render("produtos/lista.ejs", {livros:resultado})
            conexao.end()
        },
        function(erro){
            resp.send(erro)
        }
    )
}

function cadastroProdutos(req, resp) {

}

// revealing module
module.exports = {
    listagem: listagemProdutos,
    cadastro: cadastroProdutos
}
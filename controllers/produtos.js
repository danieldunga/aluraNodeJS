const Conn = require("../db/conexao")

// função construtora
const ProdutoDAO = require("../db/produtoDAO3")

function listagemProdutos(req, resp) {
    
    const conexao = Conn.getConnection()

    //const produtoDAO = ProdutoDAO(conexao); // Para produtoDAO
    const produtoDAO = new ProdutoDAO(conexao);
    
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
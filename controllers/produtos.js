const produtoDAO = require("../db/produtoDAO");

const criaConexao = require("../db/conexao")


function listagemProdutos(req, resp) {

    const conexao = criaConexao()
    
    produtoDAO.lista(
        conexao, 
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
};exports.console = console;
;exports.console = console;

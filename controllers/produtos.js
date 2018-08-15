const criaConexao = require("../db/conexao")

function listagemProdutos(req, resp) {

    const conexao = criaConexao()
    
    // ASync geralmente não criam variável
    conexao.query("SELECT * FROM livros", function(erro, resultado = []){
        if (erro == null) {
            resp.render("produtos/lista.ejs", {livros:resultado})
            conexao.end()
        } else {
            resp.send(erro)
        }
        
    })

    
}

function cadastroProdutos(req, resp) {

}

// revealing module
module.exports = {
    listagem: listagemProdutos,
    cadastro: cadastroProdutos
}
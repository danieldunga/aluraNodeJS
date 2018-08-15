const criaConexao = require("../db/conexao")


function pegaLivros(conexao, funcaoCallbackSucesso, funcaoCallbackErro) {
    conexao.query("SELECT * FROM livros", function(erro, resultado) {
        try {
            if (erro == null) {
                funcaoCallbackSucesso(resultado)
            } else {
                funcaoCallbackErro(erro)
            }
        } catch (erro) {
            console.log(erro)
            funcaoCallbackErro(erro.message)
        }
    })
}

function listagemProdutos(req, resp) {

    const conexao = criaConexao()
    
    pegaLivros(
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
}
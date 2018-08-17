const connectionFactory = require("../db/conexao")

// função construtora
const ProdutoDAO = require("../db/produtoDAO3")

function listagemProdutos(req, resp) {
    
    const conexao = connectionFactory.getConnection()
    
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

    livro = req.body

    const conexao = connectionFactory.getConnection()
    const produtoDAO = new ProdutoDAO(conexao);
    produtoDAO.save(
        livro
        , function cbSucesso() {
            resp.redirect("/produtos")
            conexao.end()
        }
        , function cbErro(erro) {
            //resp.send("Erro 123 " + erro)
            resp.render("produtos/form", {validationErrors:[{msg:"ja era!"},{msg:erro}]})
        }
    )
}

function mostraForm(req, resp) {
    resp.render("produtos/form", {validationErrors:[]})
}

// revealing module
module.exports = {
    listagem: listagemProdutos,
    cadastro: cadastroProdutos,
    form: mostraForm
}
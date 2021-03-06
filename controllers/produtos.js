const connectionFactory = require("../db/conexao")

// função construtora
const ProdutoDAO = require("../db/produtoDAO3")

function listagemProdutos(req, resp, callbackNext) {
    
    const conexao = connectionFactory.getConnection()
    
    //const produtoDAO = ProdutoDAO(conexao); // Para produtoDAO
    const produtoDAO = new ProdutoDAO(conexao);
    
    produtoDAO.lista(
        function(resultado = []){
            
            resp.format({
                json: () => resp.send({livros:resultado})
                ,html: () => resp.render("produtos/lista.ejs", {livros:resultado})
            })
            
            conexao.end()
        },
        function(erro){
            callbackNext(erro)
        }
    )
}



function cadastroProdutos(req, resp, callbackNext) {

    livro = req.body

    req.assert("preco", "Preço inválido").isNumeric()
    req.assert("titulo", "Título obrigatório").notEmpty()

    let listaErros = req.validationErrors()

    if(!listaErros) {
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
                //resp.render("produtos/form", {validationErrors:[{msg:"ja era!"},{msg:erro}]})
                callbackNext(erro)
            }
        )
    } else {
        resp
            .status(400)
            .render("produtos/form", {
                validationErrors: listaErros
            })
    }

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
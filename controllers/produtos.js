const mysql = require("mysql")

function listagemProdutos(req, resp) {

    const conexao = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "caelum",
        database: "cdc"
    })

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
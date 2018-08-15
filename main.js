if (process.env.NODE_PORT == undefined) {
    process.env.NODE_PORT = 3000
}

const porta = process.env.NODE_PORT

const express = require("express")
const servidor = express()

servidor.get("/", function (pedido, resposta) {
    resposta.render("home.ejs")
})
   
servidor.get("/produtos", function (req, resp) {
    const listaLivros = [
        {
            titulo: "livro1",
            preco: 12,
            descricao: "bla bla bla"
        },
        {
            titulo: "livro2",
            preco: 44.4,
            descricao: "asdf asdf asdf "
        },
        {
            titulo: "livro 3",
            preco: 1.4,
            descricao: "sadfs 4345 asdf asdf "
        }
    ]

    const objetoTemplete = {
        livros: listaLivros
    }

    resp.render("produtos/lista.ejs", objetoTemplete)
})

servidor.listen(porta, function () {
    console.log("Servidor subiu na porta " + porta)  
})
 



const express = require("express")
const servidor = express()

servidor.set("view engine", "ejs") // Define o parão dos arquivos de view do express para .ejs

servidor.use(express.urlencoded())
servidor.use(express.json())

servidor.get("/", function (pedido, resposta) {
    resposta.render("home.ejs")
})
   
require("./routes/produtos")(servidor)

servidor.use(express.static("./public"));

servidor.use(function(erro, req, resp, callbackNext) {
    if (process.env.NODE_ENV == "dev") {
        resp.render(erro)
    } else {
        console.error(erro)
        resp.render("erros/erro", {
            erro: "500 - Deu ruim! = " + erro
        })
    }
})

servidor.use(function(req, resp) {
    resp.render("erros/erro", {
        erro: "404 - página não encontrada."
    })
})

module.exports = servidor
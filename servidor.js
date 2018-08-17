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

module.exports = servidor
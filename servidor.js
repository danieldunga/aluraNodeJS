const express = require("express")
const servidor = express()

servidor.set("view engine", "ejs") // Define o parão dos arquivos de view do express para .ejs

const queryString = require("query-string")
servidor.use(function criaBody(req, resp, callbackNext){

    let bodyTexto = ""
    
    req.on("data", function (chunk) {
        bodyTexto += chunk.toString()
    }) 
    
    req.on("end", function(){
        req.body = queryString.parse(bodyTexto)
        callbackNext()
    })
})

servidor.get("/", function (pedido, resposta) {
    resposta.render("home.ejs")
})
   
require("./routes/produtos")(servidor)

servidor.use(express.static("./public"));

module.exports = servidor
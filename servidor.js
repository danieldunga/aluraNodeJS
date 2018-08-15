if (process.env.NODE_PORT == undefined) {
    process.env.NODE_PORT = 3000
}

const porta = process.env.NODE_PORT

require('http').createServer(function (pedido, resposta) {
    console.log(pedido.url)
    var retorno = "Oi... "
    for (let index = 0; index <= 1; index++) {
        retorno += "," + index
    }
    resposta.end(retorno)
        
}).listen(porta, function () {
    console.log("Servidor subiu na porta " + porta)  
})




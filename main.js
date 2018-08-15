require("dotenv").config()

const porta = process.env.NODE_PORT

const servidor = require("./servidor")

servidor.listen(porta, function () {
    console.log("Servidor subiu na porta " + porta)  
})
 



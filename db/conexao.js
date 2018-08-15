const mysql = require("mysql")

// Módulo é sempre singleton. Feito função para ser executado várias vezes
module.exports = function(){
    console.log("Criando conexão")
    return mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "caelum",
        database: "cdc"
    })
}
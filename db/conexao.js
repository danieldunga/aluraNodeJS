const mysql = require("mysql")



// Módulo é sempre singleton. Feito função para ser executado várias vezes
module.exports = function(){
    console.log("Criando conexão")
    return mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })
}
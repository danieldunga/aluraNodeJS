const mysql = require("mysql")

function criaConexao(){
    console.log("Criando conexão")
    return mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })
}

module.exports = {
    getConnection: criaConexao
}
require("dotenv").config()

const servidor = require("../../servidor")
const requestServidor = require("supertest")(servidor)

describe("Produto Controller", function() {
    
    it("insere json", function(callbackDone) {
        requestServidor
            .post("/produtos")
            .set("Content-Type", "application/json")
            .send({
                    titulo: "Teste JSON",
                    preco: 50,
                    descricao: ""
            })
            .expect(302, callbackDone)
    })

    it("não insere título vazio", function(callbackDone) {
        requestServidor
            .post("/produtos")
            .set("Content-Type", "application/json")
            .send({
                    titulo: "",
                    preco: 10,
                    descricao: ""
            })
            .expect(500, callbackDone)
    })

    it("direcionar para erro 404 em página que não existe", function(callbackDone) {
        requestServidor
            .post("/404")
            .set("Content-Type", "application/json")
            .expect(404, callbackDone)
    })

    it("Teste OK", function(callbackDone) {
        callbackDone()
    })
})
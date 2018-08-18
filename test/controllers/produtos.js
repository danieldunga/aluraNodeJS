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
            .expect(400, callbackDone)
    })

    it("direcionar para erro 404 em página que não existe", function(callbackDone) {
        requestServidor
            .get("/404")
            .expect(404, callbackDone)
    })

    it("listar como json", function(callbackDone) {
        requestServidor
            .get("/produtos")
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(200, callbackDone)
    })

    it("Teste OK", function(callbackDone) {
        callbackDone()
    })
})
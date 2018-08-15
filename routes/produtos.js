module.exports = function(servidor) {
    
    const ProdutosController = require("../controllers/produtos")

    servidor.get("/produtos", ProdutosController.listagem)
    servidor.post("/produtos", ProdutosController.cadastro)

}

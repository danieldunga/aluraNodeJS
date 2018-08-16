module.exports = function(servidor) {
    
    const ProdutosController = require("../controllers/produtos")

    servidor.get("/produtos", ProdutosController.listagem)
    servidor.get("/produtos/form", ProdutosController.form)
    servidor.post("/produtos", ProdutosController.cadastro)

}

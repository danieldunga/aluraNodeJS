function ProdutoDAO(conexao) {
    this.conexao = conexao
}

ProdutoDAO.prototype.lista = function(funcaoCallbackSucesso, funcaoCallbackErro) {
    this.conexao.query("SELECT * FROM livros", function (erro, resultado) {
        try {
            if (erro == null) {
                funcaoCallbackSucesso(resultado);
            }
            else {
                funcaoCallbackErro(erro);
            }
        }
        catch (erro) {
            console.log(erro);
            funcaoCallbackErro(erro.message);
        }
    });
}

ProdutoDAO.prototype.save = function(funcaoCallbakSucesso, funcaoCallbackErro) {

}

module.exports = ProdutoDAO
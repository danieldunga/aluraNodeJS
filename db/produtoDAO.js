
function pegaLivros(conexao, funcaoCallbackSucesso, funcaoCallbackErro) {
    conexao.query("SELECT * FROM livros", function (erro, resultado) {
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

function cadastro() {

}

module.exports = {
    lista: pegaLivros,
    save: cadastro
}
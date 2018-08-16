
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

function cadastraLivros(conexao, funcaoCallbakSucesso, funcaoCallbackErro) {

}

module.exports = function ProdutoDAO(conexao) {

    // private
    const x = "sei la"

    return {
        lista: (funcaoCallbakSucesso, funcaoCallbackErro) => 
            pegaLivros(conexao, funcaoCallbakSucesso, funcaoCallbackErro),
        
        save: (funcaoCallbakSucesso, funcaoCallbackErro) =>
            cadastraLivros(conexao, funcaoCallbakSucesso, funcaoCallbackErro)
    }
}
class ProdutoDAO {

    constructor(conexao) {
        this.conexao = conexao
    }

    lista(funcaoCallbackSucesso, funcaoCallbackErro) {
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
    
    save(livro, cbSucesso, cbErro) {
        this.conexao.query("INSERT INTO livros set ?", livro, function(erro){
            try {
                if(erro == null) {
                    cbSucesso()
                } else {
                    cbErro(erro)
                }
            } catch (error) {
                cbErro(error)
            }
        })
    }
}

module.exports = ProdutoDAO


function logar() {
    
var LoginCpf = document.getElementById('cpf').value;
var LoginSenha = document.getElementById('senha').value;

    if(LoginCpf == 640 && LoginSenha == 139){
        alert('Sucesso')
        location.href= "relatorio.html"
    } else {
        alert('Usuário ou senha incorreta');
    }
}

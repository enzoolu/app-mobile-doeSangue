document.getElementById('imgHomem').addEventListener("click", function() {
    localStorage.setItem('avatar', 'masculino');
});

document.getElementById('imgMulher').addEventListener("click", function() {
    localStorage.setItem('avatar', 'feminino');
});




let editNome = document.getElementById('nome');
let nomeDigitado = localStorage.getItem('nome');
nome.innerHTML = 'Nome: ' + nomeDigitado;

let editEmail = document.getElementById('email');
let emailDigitado = localStorage.getItem('email');
email.innerHTML = 'Email: ' + emailDigitado;

let editSenha = document.getElementById('senha');
let senhaDigitado = localStorage.getItem('senha');
senha.innerHTML = 'Senha: ' + senhaDigitado;




document.getElementById("atualizarDados").addEventListener("click", function() {
    salvarDados();
});

function salvarDados() {
    let novoNome = document.getElementById('novoNome').value;
    let novoEmail = document.getElementById('novoEmail').value;
    let novaSenha = document.getElementById('novaSenha').value;
    
    localStorage.setItem('nome', novoNome);
    localStorage.setItem('email', novoEmail);
    localStorage.setItem('senha', novaSenha);
};
document.getElementById("confirmarDados").addEventListener("click", function() {
    salvarNome();
});

function salvarNome() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
}
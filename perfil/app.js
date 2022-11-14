let nomeUser = document.getElementById('nomeUser');
let nomeDigitado = localStorage.getItem('nome');

nomeUser.innerHTML = nomeDigitado;

let avatarSelecionado = document.getElementById('avatarSelecionado');
let avatar = localStorage.getItem('avatar');

alterarImagem();

function alterarImagem() {
    let imgHomem = 'icon-homem.svg';
    let imgMulher = 'icon-mulher.svg';

    if (avatar == 'masculino') {
        console.log('m');
        document.getElementById('avatarSelecionado').src = imgHomem;
        document.getElementById('fotoUser').style.border = 'none'
    } if (avatar == 'feminino') {
        console.log('f');
        document.getElementById('avatarSelecionado').src = imgMulher;
        document.getElementById('fotoUser').style.border = 'none'
    }
};
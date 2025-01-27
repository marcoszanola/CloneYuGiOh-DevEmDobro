let btnAvancar = document.getElementById('btn-avancar');
let btnVoltar = document.getElementById('btn-voltar');
let cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function avancar(){
    cartoes[cartaoAtual].classList.remove('selecionado');
    cartaoAtual++;
    if(cartaoAtual == cartoes.length){
        cartaoAtual = 0;
    }
    cartoes[cartaoAtual].classList.add('selecionado');
}

function voltar(){
    cartoes[cartaoAtual].classList.remove('selecionado');
    cartaoAtual--;
    if(cartaoAtual == -1){
        cartaoAtual = cartoes.length - 1;
    }
    cartoes[cartaoAtual].classList.add('selecionado');
}

btnAvancar.addEventListener("click", avancar);
btnVoltar.addEventListener("click", voltar);
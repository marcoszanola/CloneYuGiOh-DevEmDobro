const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
const somDano = document.getElementById('som-dano');
const somDefesa = document.getElementById('som-defesa');
const somClique = document.querySelector('.som-clique');

const btnSummon = document.querySelectorAll('.btn-summon');
const btnSet = document.querySelectorAll('.btn-set');
const btnFlip = document.querySelectorAll('.btn-flipsummon');
const btnViewSet = document.querySelectorAll('.btn-viewSet');
const btnAtk = document.querySelectorAll('.btn-ataque');
const btnDef = document.querySelectorAll('.btn-defend');
const btnViewComb = document.querySelectorAll('.btn-viewComb');

let cartaoAtual = 0;

function cliqueSFX() {
    somClique.currentTime = 0.4;
    somClique.volume = 0.35;
    somClique.play();
}

function avancar() {
    cartoes[cartaoAtual].classList.remove('selecionado');
    cartaoAtual++;
    if (cartaoAtual == cartoes.length) {
        cartaoAtual = 0;
    }
    cartoes[cartaoAtual].classList.add('selecionado');

    cliqueSFX();
}

function voltar() {
    cartoes[cartaoAtual].classList.remove('selecionado');
    cartaoAtual--;
    if (cartaoAtual == -1) {
        cartaoAtual = cartoes.length - 1;
    }
    cartoes[cartaoAtual].classList.add('selecionado');

    cliqueSFX();
}

function desativarClique(cartao) {
    let elementosParaDesativar = cartao.querySelectorAll('.menu-transparente, .menu-setTransparente, .menu-inicial, .menu-set, .menu-combate, .btn-opcao, .btn-opcao img');

    cartao.classList.add('disable');
    elementosParaDesativar.forEach(el => el.classList.add('disable'));
}

function ativarClique(cartao) {
    let elementosParaAtivar = cartao.querySelectorAll('.menu-transparente, .menu-setTransparente, .menu-inicial, .menu-set, .menu-combate, .btn-opcao, .btn-opcao img');

    cartao.classList.remove('disable');
    elementosParaAtivar.forEach(el => el.classList.remove('disable'));
}

btnAvancar.addEventListener("click", avancar);
btnVoltar.addEventListener("click", voltar);

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function () {
        let cartaVirada = cartao.querySelector('.carta-virada');
        let menuTrans = cartao.querySelector('.menu-transparente');
        let menuSetTrans = cartao.querySelector('.menu-setTransparente');
        let menuInicial = cartao.querySelector('.menu-inicial');
        let menuSet = cartao.querySelector('.menu-set');
        let menuCombate = cartao.querySelector('.menu-combate');

        setTimeout(() => {
            desativarClique(cartao);
        }, 10); //desativar o clique pra não poder clicar nos ícones enquanto o menu fecha

        if(cartaVirada.classList.contains('mostrar-fundo-carta')){
            menuTrans.classList.remove('mostrar-menu')
            menuSetTrans.classList.toggle('mostrar-menu');
        } else {
            menuTrans.classList.toggle('mostrar-menu');
        }
        
        if (!cartaVirada.classList.contains('mostrar-fundo-carta') && !cartao.classList.contains('summon')) {
            menuInicial.classList.toggle('mostrar-menu');
        } else if (cartaVirada && cartaVirada.classList.contains('mostrar-fundo-carta')) {
            menuInicial.classList.remove('mostrar-menu');
            menuSet.classList.toggle('mostrar-menu');
        } else if (cartao.classList.contains('summon')){
            menuInicial.classList.remove('mostrar-menu');
            menuSet.classList.remove('mostrar-menu');
            menuCombate.classList.toggle('mostrar-menu');
        }

        setTimeout(() => {
            ativarClique(cartao);
        }, 400); //ativar o clique anti-spam de volta

    });

});

cartoes.forEach(cartao => {

    btnSummon.forEach(botao => {
        botao.addEventListener("click", function(){     
            if (cartao && cartao.classList.contains('selecionado')) {
                let cry = cartao.querySelector('.cry');
                cliqueSFX();
    
                setTimeout(() => {
                    desativarClique(cartao);
                }, 401); //desativa novamente o clique, após a re-ativação do anti-spam
    
                setTimeout(() => {
                    let menuCombate = cartao.querySelector('.menu-combate');
                    menuCombate.classList.remove('mostrar-menu');
                }, 0.0001); //fazer com que o próximo menu não aparece enquanto o anterior fecha
    
                cartao.classList.toggle('summon');
    
                setTimeout(() => {
                    cry.volume = 0.4;
                    cry.play();
                }, 230);
    
                setTimeout(() => {
                    let menuInicial = cartao.querySelector('.menu-inicial');
                    menuInicial.classList.remove('mostrar-menu');
                    ativarClique(cartao);
                }, 700);  
            }
        });
    })

    btnSet.forEach(botao => {
        botao.addEventListener("click", function () {
            if (cartao && cartao.classList.contains('selecionado')) {
    
                cliqueSFX();
    
                setTimeout(() => {
                    let menuSet = cartao.querySelector('.menu-set');
                    let menuSetTrans = cartao.querySelector('.menu-setTransparente');
                    menuSet.classList.remove('mostrar-menu');
                    menuSetTrans.classList.remove('mostrar-menu');
                }, 0.0001);
    
                let cartaVirada = cartao.querySelector('.carta-virada');
                cartao.classList.toggle('virar');
                cartaVirada.classList.toggle('mostrar-fundo-carta');
    
                let descricao = cartao.querySelector('.descricao');
                descricao.classList.toggle('esconder');
    
                setTimeout(() => {
                    let menuInicial = cartao.querySelector('.menu-inicial');
                    menuInicial.classList.remove('mostrar-menu');
                }, 300);
            }
        });
    
    });


    btnFlip.forEach(botao =>{
        botao.addEventListener("click", function(){;
            if (cartao && cartao.classList.contains('selecionado')) {
                let cry = cartao.querySelector('.cry');
                let cartaVirada = cartao.querySelector('.carta-virada');

                cliqueSFX();
    
                setTimeout(() => {
                    desativarClique(cartao);
                }, 401);
    
                setTimeout(() => {
                    let menuCombate = cartao.querySelector('.menu-combate');
                    menuCombate.classList.remove('mostrar-menu');
                    let menuSetTrans = cartao.querySelector('.menu-setTransparente');
                    menuSetTrans.classList.remove('mostrar-menu');
    
                    let menuTrans = cartao.querySelector('.menu-transparente');
                    menuTrans.classList.remove('mostrar-menu');
                    
                }, 0.0001);
    
                cartao.classList.toggle('virar');
                cartaVirada.classList.toggle('mostrar-fundo-carta');
    
                let descricao = cartao.querySelector('.descricao');
                descricao.classList.toggle('esconder');
    
                cartao.classList.toggle('summon');
        
                cry.volume = 0.4;
                cry.play();
    
                setTimeout(() => {
                    let menuSet = cartao.querySelector('.menu-set');
                    menuSet.classList.remove('mostrar-menu');
                    ativarClique(cartao);
                }, 500);
            }
        });
    });


    btnViewSet.forEach(botao => {
        botao.addEventListener("click", function(){
            if (cartao && cartao.classList.contains('selecionado')) {
    
                cliqueSFX();
    
                setTimeout(() => {
                    let menuSetTrans = cartao.querySelector('.menu-setTransparente');
                    menuSetTrans.classList.remove('mostrar-menu');
    
                    let menuTrans = cartao.querySelector('.menu-transparente');
                    menuTrans.classList.remove('mostrar-menu');
                }, 0.0001);
    
                let cartaVirada = cartao.querySelector('.carta-virada');
                cartao.classList.toggle('virar');
                cartaVirada.classList.toggle('mostrar-fundo-carta');
    
                let descricao = cartao.querySelector('.descricao');
                descricao.classList.toggle('esconder');
    
                let menuInicial = cartao.querySelector('.menu-inicial');
                let menuSet = cartao.querySelector('.menu-set');
                menuSet.classList.remove('mostrar-menu');
                menuInicial.classList.add('mostrar-menu');
            }
        });
    });

    btnViewComb.forEach(botao => {
        botao.addEventListener("click", function(){
            if (cartao && cartao.classList.contains('selecionado')) {
    
                cliqueSFX();
    
                cartao.classList.toggle('summon');
    
                let menuInicial = cartao.querySelector('.menu-inicial');
                let menuCombate = cartao.querySelector('.menu-combate');
                menuCombate.classList.remove('mostrar-menu');
                menuInicial.classList.add('mostrar-menu');
            }
        });
    });

    btnAtk.forEach(botao => {
        botao.addEventListener("click", function(){
            let damage = document.querySelector('.som-dano');
            if (cartao && cartao.classList.contains('selecionado')) {
                let textoDano = cartao.querySelector('.ataque');
                let gifGolpe = cartao.querySelector('.gif-golpe');
                let cry = cartao.querySelector('.cry');
                let cryAdicional = cartao.querySelector('.cry-adicional');
    
                cliqueSFX();
    
                setTimeout(() => {
                    desativarClique(cartao);
                }, 401); //clique desativa novamente após a re-ativação do antispam
                
                let textoLeft = Math.random() * 60 + 20;
                let textoTop = Math.random() * 50 + 10;
                textoDano.style.left = `${textoLeft}%`;
                textoDano.style.top = `${textoTop}%`;
    
                let gifGolpeLeft = Math.random() * 80 + 50;
                let gifGolpeTop = Math.random() * 20 + 30;
                gifGolpe.style.left = `${gifGolpeLeft}%`;
                gifGolpe.style.top = `${gifGolpeTop}%`;
    
                setTimeout(() => {
                    cry.volume = 0.4;
                    cry.play();
                    
                    setTimeout(() => {
                        cryAdicional.volume = 0.4;
                        cryAdicional.play();
                    }, 500);
    
                }, 330);
    
                setTimeout(() => {
                    gifGolpe.classList.remove('esconder');
                    gifGolpe.classList.add('mostrar-golpe');
    
                    setTimeout(() => {
                        gifGolpe.classList.remove('mostrar-golpe');
                        gifGolpe.classList.add('esconder');
                    }, 3000);
                }, 1350);
    
                setTimeout(() => {
                    damage.play();
                    textoDano.classList.remove('esconder');
                    textoDano.classList.add('mostrar-dano');
                }, 1700);
    
    
                setTimeout(() => {
                    textoDano.classList.remove('mostrar-dano');
                    textoDano.classList.add('esconder');
                    
                    let menuCombate = cartao.querySelector('.menu-combate');
                    cartao.classList.toggle('summon');
    
                    menuCombate.classList.remove('mostrar-menu');
                    ativarClique(cartao);
                }, 4000);
            }
        });
    });

    btnDef.forEach(botao => {
        botao.addEventListener("click", function(){
            let harden = document.querySelector('.som-defesa');
            let weakDamage = document.querySelector('.som-danoBaixo');
            let escudo = document.querySelector('.gif-escudo img');

            if (cartao && cartao.classList.contains('selecionado')) {
                let textoDano = cartao.querySelector('.defesa');

                cliqueSFX();
                
                setTimeout(() => {
                    desativarClique(cartao);
                }, 401); 
    
                let textoLeft = Math.random() * 60 + 20;
                let textoTop = Math.random() * 50 + 10;
                textoDano.style.left = `${textoLeft}%`;
                textoDano.style.top = `${textoTop}%`;
    
                setTimeout(() => {
                    escudo.src = `src/imagens/gifs/moves/shield.gif?timestamp=${new Date().getTime()}`;
                    escudo.parentElement.classList.remove('esconder');
                    escudo.parentElement.classList.add('mostrar-escudo');
                }, 360);
    
                setTimeout(() => {
                    harden.volume = 0.7;
                    harden.play();
                }, 500);
    
                setTimeout(() => {
                    weakDamage.play();
                    textoDano.classList.remove('esconder');
                    textoDano.classList.add('mostrar-dano');
                }, 2000);
    
                setTimeout(() => {
                    textoDano.classList.remove('mostrar-dano');
                    textoDano.classList.add('esconder');
                
                    let menuCombate = cartao.querySelector('.menu-combate');
                    cartao.classList.toggle('summon');
    
                    menuCombate.classList.remove('mostrar-menu');
    
                    escudo.parentElement.classList.remove('mostrar-escudo');
                    escudo.parentElement.classList.add('esconder');
    
                    ativarClique(cartao);
                }, 4000);
            }
        });
    })

    //trocar escudo de global pra individual html, afim de que o texto de dano apareça por cima do escudo, e evitar que o escudo continue aparecendo quando o usuário trocar de carta.

    //btnConfig: usuário digita o dano que a carta vai receber, se for maior que a defesa da carta ela quebra, e aparece uma opção para reviver. usuário escolhe o alvo que a carta vai proferir o golpe de ataque.

    //btnLupa: usuário pode visualizar a arte da carta e o modelo 3D usado, devidamente creditados.

});


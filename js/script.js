const menu = document.querySelectorAll('.header-menu li a');
const url = document.location.href;
const elemento = document.querySelector('.menu-item')

function funcao(i) {
    if (url.includes(i.href)) {
        i.style.color = "#FFBB00";
        i.classList.add("ativarlink")
    }
}

menu.forEach(funcao)


// ativar orçamento
const parametros = new URLSearchParams(location.search);


function params(item) {
    const element = document.getElementById(item);
    if (element) {
        element.checked = true;
    }
}
parametros.forEach(params);

// ativar perguntas

const perguntas = document.querySelectorAll('.pergunta-item button');

function ativarResposta(event) {
    const elementoAria = event.currentTarget.getAttribute("aria-controls");
    const resposta = document.getElementById(elementoAria);
    if (resposta) {
        resposta.classList.toggle("ativa");
        const ariaExpanded = resposta.classList.contains("ativa");
        event.currentTarget.ariaExpanded = ariaExpanded;
    }
}
function clique(i) {
    i.addEventListener('click', ativarResposta);
    console.log(i);

}
perguntas.forEach(clique);

// Trocar imagem

const bicicletaFotos = document.querySelectorAll(".bicicletas-fotos img");
const bicicleta = document.querySelector(".bicicletas-fotos img");
const tela = window.innerWidth;
console.log(tela);
function trocarImg(event) {
    if (window.innerWidth >= 460) {
        const eventoSrc = event.currentTarget.src;
        const eventoAlt = event.currentTarget.alt;
        event.currentTarget.src = bicicleta.src;
        bicicleta.src = eventoSrc;
        bicicleta.alt = eventoAlt;
    }

};

function clique(i) {
    i.addEventListener('click', trocarImg);
};

bicicletaFotos.forEach(clique);
// console.log(bicicletaFotos);
// console.log(bicicleta);

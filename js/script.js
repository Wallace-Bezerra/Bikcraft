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
}
perguntas.forEach(clique);

// Ativar animação 

if (window.SimpleAnime) {
    new window.SimpleAnime();
}


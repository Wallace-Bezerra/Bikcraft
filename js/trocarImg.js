// Trocar imagem

const bicicletaFotos = document.querySelectorAll(".bicicletas-fotos img");
const bicicleta = document.querySelector(".bicicletas-fotos img");
const tela = window.innerWidth;

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
}
bicicletaFotos.forEach(clique);

// console.log(bicicletaFotos);
// console.log(bicicleta);
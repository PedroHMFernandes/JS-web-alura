// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }

// function tocaSomClap() {
//     document.querySelector('#som_tecla_clap').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;
// document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSons(idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}

const lista_de_teclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista_de_teclas.length) {
    const tecla = lista_de_teclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function () {
        tocaSons(idAudio)
    }
    contador = contador + 1
    // console.log(lista_de_teclas[contador])
}
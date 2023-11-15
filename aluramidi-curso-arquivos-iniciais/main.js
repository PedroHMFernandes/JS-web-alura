// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }

// function tocaSomClap() {
//     document.querySelector('#som_tecla_clap').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;
// document.querySelector('.tecla_clap').onclick = tocaSomClap;

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento === null) {
        // alert('Elemento não encontrado')
        console.log('Elemento não encontrado');
    }

    else if (elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log('O elemento não é um audio');

    }

}

const ListaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;
// while (contador < lista_de_teclas.length) 

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    const tecla = ListaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    // contador = contador + 1
    // console.log(lista_de_teclas[contador])

    tecla.onkeydown = function (event) {
        console.log(event.code)
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


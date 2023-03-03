//No HTML crie um elemento “h1” contendo o texto “Título”. Ao clicar no “h1” faça com que a classe “corVermelha” (coloca a cor da fonte vermelha) seja adicionada/removida alternadamente ao clicar neste elemento.
let titulo = document.body.children[0];

function mudaCor(elemento) {
    if (titulo.className != 'corVermelha') {
        titulo.setAttribute('class', 'corVermelha');
    } else {
        titulo.removeAttribute('class');
    }

}

titulo.setAttribute('onclick', 'mudaCor(this)');

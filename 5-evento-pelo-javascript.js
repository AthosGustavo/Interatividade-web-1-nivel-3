//Pelo JavaScript adicione um evento de click à um elemento "h1" que ao ser clicado, adicione o estilo “background-color: red”.
let novoH1 = document.createElement('h1');
novoH1.innerHTML = "Clique aqui";
document.body.appendChild(novoH1);

function mudaCor(elemento) {
    elemento.style.backgroundColor = "red";
}
novoH1.setAttribute('onclick', 'mudaCor(this)');
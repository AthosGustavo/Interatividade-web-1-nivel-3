//Adicione um event listener de click a um elemento “div” de id “container”. Ao clicar neste elemento “div”, mude o conteúdo de um elemento “span” que é filho deste elemento “div” de “olá” para “teste”.
let novaDiv = document.createElement('div');
novaDiv.setAttribute('id', 'container');
novaDiv.style.border = 'solid 2px black';
novaDiv.style.backgroundColor = 'yellow';
novaDiv.style.height = '90px';
document.body.appendChild(novaDiv);

let novaSpan = document.createElement('span');
novaSpan.innerHTML = "Olá";
novaDiv.appendChild(novaSpan);

let mudaSpan = function () {
    novaSpan.innerHTML = "teste";
}
novaDiv.addEventListener('click', mudaSpan);
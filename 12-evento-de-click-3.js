//Crie um elemento “button” com texto “inserir” que ao ser clicado adicione um elemento “li” com texto “nova entrada” em um elemento “ul” de id “lista”.
let listaUl = document.createElement('ul');
listaUl.setAttribute('id', 'lista');
document.body.appendChild(listaUl);
console.log(listaUl);

let botao = document.createElement('button');
botao.innerHTML = "Inserir";
document.body.appendChild(botao);

let novoItem = function () {
    let novaLi = document.createElement('li');
    novaLi.innerHTML = "nova entrada";
    listaUl.appendChild(novaLi);


}
botao.addEventListener('click', novoItem);
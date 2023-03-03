//Crie um elemento “Button” com texto “inserir” que ao ser clicado adicione um elemento “h2” com texto “Inserido” em um elemento “div” de id “container”.
let botao = document.createElement('button');
botao.innerHTML = "inserir";
document.body.appendChild(botao);

let criah2 = function () {
    let novaDiv = document.createElement('div');
    novaDiv.setAttribute('id', 'container');
    document.body.appendChild(novaDiv);
    console.log(novaDiv);

    let h2 = document.createElement('h2');
    h2.innerHTML = "Inserido";
    novaDiv.appendChild(h2);

}
botao.addEventListener('click', criah2)
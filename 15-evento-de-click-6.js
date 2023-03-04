//Adicione um event listener de click a um elemento “ul” de id “lista”. Ao clicar neste elemento “ul”, mude o conteúdo de um elemento “li” que é filho deste elemento “ul” de “Acre” para “Amapá” e sua cor de fundo para azul.
let novaUl = document.createElement('ul');
novaUl.setAttribute('id', 'lista');
document.body.appendChild(novaUl);

let novaLi = document.createElement('li');
novaLi.innerHTML = "Acre";
novaUl.appendChild(novaLi);

let mudaConteudo = function () {
    let filhoLi = novaUl.children[0];
    filhoLi.innerHTML = "Amapá";
    filhoLi.style.backgroundColor = "blue";

}
novaUl.addEventListener('click', mudaConteudo);
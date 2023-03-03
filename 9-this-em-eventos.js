//Ao clicar em um elemento “h2” com texto “Olá” mude seu conteúdo para “Clicado”. Adicione o evento pelo HTML e use a palavra chave “this”.
let h1 = document.body.children[0];
console.log(h1);

function mudaFrase(element) {
    element.innerHTML = "Clicado"
}

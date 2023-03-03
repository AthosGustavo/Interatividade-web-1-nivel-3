//Crie dois elementos “div”. O primeiro com a classe “saída” e o segundo com a classe “mensagem”. Selecione-os utilizando JavaScript.

let div1 = document.createElement('div');
div1.setAttribute('class', 'saida');
let div2 = document.createElement('div');
div2.setAttribute('class', 'mensagem');
document.body.appendChild(div1);
document.body.appendChild(div2);

console.log(div1, div2);
//Usando JavaScript, crie um elemento “span”, contendo o texto “Olá mundo”, que será adicionado como filho em uma “div” de classe “mensagem".

let novaDiv = document.createElement('div');
novaDiv.className = "mensagem";

let novoSpan = document.createElement('span');
novoSpan.innerHTML = "Olá mundo"

novaDiv.appendChild(novoSpan);
console.log(novaDiv);
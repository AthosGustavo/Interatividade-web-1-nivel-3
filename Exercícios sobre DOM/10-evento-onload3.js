//Crie um elemento “div” de id “card” que possua a borda 3px dotted green, width 200px e height 200px.
//Utilize o evento onload para trocar a borda deste elemento “div” para 4px dashed orange.

let novaDiv = document.createElement('div');
document.body.appendChild(novaDiv);
novaDiv.setAttribute('id', 'card');
novaDiv.style.width = '200px';
novaDiv.style.height = '200px';
novaDiv.style.border = 'dotted 3px green';
console.log(novaDiv);

let trocaEstilo = () => {
    novaDiv.style.border = 'dashed 4px orange';
}

window.addEventListener('load', trocaEstilo);
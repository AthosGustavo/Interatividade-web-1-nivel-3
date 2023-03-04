//Utilize o evento onload para trocar a cor de todos os elementos “span” para verde.
let novaSpan = document.createElement('span');
novaSpan.innerHTML = "Bom dia!";
document.body.appendChild(novaSpan);
console.log(novaSpan);

let mudaCor = function () {
    novaSpan.style.backgroundColor = "green";
}

window.addEventListener('load', mudaCor);
//Crie uma lista não ordenada com 3 elementos “li” dentro, contendo cada os textos respectivos: “Maçã”, “Banana”, “Manga”. Faça com que ao clicar em cada elemento seja exibido um alerta com seu conteúdo. Use a palavra chave “this”.
let lista = document.createElement('ul');
document.body.appendChild(lista);
console.log(lista);

let liUm = document.createElement('li');
liUm.innerHTML = "Maçã";
let liDois = document.createElement('li');
liDois.innerHTML = "Banana";
let liTres = document.createElement('li');
liTres.innerHTML = "Manga";

document.body.appendChild(liUm);
document.body.appendChild(liDois);
document.body.appendChild(liTres);

let exibeAlert = function () {
    alert(this);
}
let exibeAlertDois = function () {
    alert(this);
}
let exibeAlertTres = function () {
    alert(this);
}

liUm.addEventListener('click', exibeAlert);
liDois.addEventListener('click', exibeAlertDois);
liTres.addEventListener('click', exibeAlertTres);
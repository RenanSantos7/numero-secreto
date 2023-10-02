// % SORTEAR NÚMERO
let min = 0
let max = 100

function geraNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

console.log(geraNumeroAleatorio(min, max))

const menorValor = document.querySelector("#menor-valor")
const maiorValor = document.querySelector("#maior-valor")

menorValor.innerHTML = min
maiorValor.innerHTML = max
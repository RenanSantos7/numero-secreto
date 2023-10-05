// % SORTEAR NÚMERO
var min = 0
var max = 1000
var numeroSecreto

numeroSecreto = parseInt(Math.random() * (max - min) + min);

const menorValor = document.querySelector("#menor-valor")
const maiorValor = document.querySelector("#maior-valor")

menorValor.innerHTML = min
maiorValor.innerHTML = max

// % Web Speech Speech Recognition 
const elemChute = document.querySelector("#chute")

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    let chute = e.results[0][0].transcript
    chute = parseInt(chute)
    elemChute.style.display = 'block'
    if (!isNaN(chute)) {
        elemChute.innerHTML = `
            <div>Você disse:</div>
            <span id="box-chute" class="box">${chute}</span>
        `

        comparaChute(chute)
    } else {
        elemChute.innerHTML = 'Seu chute não é um número. Tente outra vez'
    }
    validaChute(chute)
}

recognition.addEventListener('end', () => recognition.start())

// % Validação

function validaChute(chute) {
    //console.log(chute)
    if (chute > max || chute < min) {
        elemChute.innerHTML += `<div class="valor-invalido">Valor inválido.</div><div class="mensagem-erro">O número secreto está entre ${min} e ${max}.</div>`
    }
}

function comparaChute(chute) {
    if (chute === numeroSecreto) {
        elemChute.innerHTML += '<div class="mensagem-acerto"> Aeee!</div> <div class="mensagem-acerto" > Você acertou!!</div>'
        elemChute.innerHTML += '<button id="jogar-novamente" class="botao-novo-jogo">Novo Jogo</button>'
        //recognition.stop()
    } else {
        if (numeroSecreto > chute) {
            elemChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-circle-up"></i></div>'
        } else if (numeroSecreto < chute){
            elemChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-circle-down"></i></div>'
        }
    }
}

// % Jogar Novamente

document.body.addEventListener('click', (ev) => {
    if (ev.target.id === 'jogar-novamente') {
        window.location.reload()
    }
})
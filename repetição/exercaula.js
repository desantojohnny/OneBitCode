let nomeTime = prompt("Qual o nome do Time ? ")
let nomeTimeInvertido = ""

for (let i = nomeTime.length - 1; i >= 0; i--) {
    if (nomeTime[i] == "m") {
        break
    }
    nomeTimeInvertido += nomeTime[i]

}

alert("O nome Original é: "+nomeTime+ " e o nome invertido é: "+nomeTimeInvertido)
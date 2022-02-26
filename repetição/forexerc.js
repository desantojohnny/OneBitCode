let nameTime = prompt("Qual o nome do Time? ")
let subLetra = prompt("Qual letra você deseja substituir? ")
let novaLetra = prompt("Por qual letra você deseja substituir? ")
let novoNomeTime = ""

for (let i = 0; i < nameTime.length; i++){
    if (nameTime[i] == subLetra){
        novoNomeTime += novaLetra
    }else{
        novoNomeTime += nameTime[i]
    }
}
alert("O novo Nome é: "+novoNomeTime)
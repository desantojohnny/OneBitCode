const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let grupoPessoa9 = hitchedSpaceships.filter(posicao => {
    return posicao[1] > 9
}).map(posicao =>{
    return posicao[0]
})

let plataformaLivre = hitchedSpaceships.findIndex(posicao =>{
    return posicao[2] == false
})

let nomeMaisuculo = hitchedSpaceships.map(posicao =>{
    return posicao[0].toUpperCase()
})

let mensagem = "Naves com mais de 9 lugares: " + grupoPessoa9.join(", ")
mensagem += "\n Plataforma de decolagem: " +(plataformaLivre + 2)
mensagem +="\n Espaçonaves detacadas: " + nomeMaisuculo.join(", ")

alert(mensagem)
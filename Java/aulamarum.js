let timeBrasil = ["Flamengo", "Ponte Preto", "Guarani" , "Inter de Limeira", "Monte Mor"]

/*let nomeMaiusculo = timeBrasil.map(function(posicao){
    let maiusculo = posicao.toUpperCase()
    return maiusculo
})

/* timeBrasil.forEach(function (posicao, indece) {
    console.log("Time: " +posicao+ "\n Indice: "+indece);
    
}) */

//console.log(nomeMaisculo);

let nome7Letras = timeBrasil.filter(posicao => {return posicao.length >=7})
console.log(nome7Letras);

let nome7Letras = timeBrasil.find(posicao => {return posicao.length >=7})
console.log(nome7Letras);
function triploDaVelocidade(velocidade, imprimiVelocidade) {
    console.log("Estou em Tripla velocidade");
    let novaVelocidade = velocidade * 3
    imprimiVelocidade (novaVelocidade)
    return novaVelocidade
}
// let imprimir = velocidade => {
//     console.log("Nova Velocidade: " +velocidade+ " km/s");
// }

// let novaVelocidade = triploDaVelocidade(50, imprimir)
// console.log(novaVelocidade);

let outraVelocidade = triploDaVelocidade(50, velocidade => {
    console.log("Outra Velocidade: "+ velocidade);
})
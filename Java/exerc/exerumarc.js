function velocidadeCarro(velocidade, imprimirVelocidade) {
    let desacelaracao = 20
    while (velocidade > 0) {
        imprimirVelocidade(velocidade)
        velocidade -= desacelaracao
    }
    alert("As portas podem ser abertas")
}
 let velocidadeAtual = 150

 velocidadeCarro(velocidadeAtual, function(velocidade) {
     console.log("Sua velocidade atual: " +velocidade);
 })
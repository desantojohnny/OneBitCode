let marcaDoCarro = prompt("Qual a marca do Carro?")
let velocidadeDoCarro = 0
let outraOpcoes
function opcoesVelocidade() {
    let opcoes
    while (opcoes != "1" && opcoes != "2" && opcoes != "3" && opcoes != "4") {
        opcoes = prompt("O que você deseja fazer?\n" +
            "1 - Acelerar o carro em 5km/s\n" +
            "2 - Desacelerar o carro em 5km/s\n" +
            "3 - Imprimir dados de bordo\n" +
            "4 - Sair do programa")
    }
    return opcoes
}
//console.log(opcoesVelocidade());
function velocidadeAcelera(aceleracao) {
    let novaVelocidade = aceleracao + 5
    return novaVelocidade
}
function velocidadeReduz(aceleracao) {
    let novaVelocidade = aceleracao - 5
    if (novaVelocidade < 0) {
        novaVelocidade = 0
    }
    return novaVelocidade
}
function imprimiDados(marcaDoCarro, aceleracao) {
    alert("Marca do carro: " + marcaDoCarro + "\nVelocidade: " + aceleracao + " km/s")
}
do {
    outraOpcoes = opcoesVelocidade()
    switch (outraOpcoes) {
        case "1":
            velocidadeDoCarro = velocidadeAcelera(velocidadeDoCarro)
            break;
        case "2":
            velocidadeDoCarro = velocidadeReduz(velocidadeDoCarro)
            break;
        case "3":
            imprimiDados(marcaDoCarro, velocidadeDoCarro)
            break;
        default:
            alert("Encerrando o programa")
    }
} while (outraOpcoes != "4")
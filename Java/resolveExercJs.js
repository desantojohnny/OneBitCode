let namePilot = prompt("Qual o nome do Piloto?");
let velocity = 0
let biginSpeed = prompt("A que velocidade você gostaria de iniciar?");
let confirmSpeed = confirm(" A velecidade deseja é " + biginSpeed + " ?")
if (confirmSpeed) {
    velocity = biginSpeed
    //alert("Nave está parada. considere a partir e aumentar a velocidade");
} if (velocity <= 0){
    alert("Você está parado precisa acelerar")
}else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais");
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter");
} else if (velocity <100) {
    alert("Velocidade alta. Considere diminuir");
} else {
    alert("Velocidade perigosa. Controle automáti;co forçado")
}

alert("O nome do piloto é: " +namePilot+ "\n E sua velocidade é: " + biginSpeed)
let posicaoDobra = 0 
let quandidadeDeDobra = ""

let nameNave = prompt("Qual o nome da Nave? ")
    quandidadeDeDobra = prompt ("Você deseja entrar em dobra espacial? \n1- Sim\n2-Não")

while(quandidadeDeDobra == '1'){
    posicaoDobra += 1
    quandidadeDeDobra = prompt("Desenja realizar a nova dobra?  \n1- Sim\n2-Não")
    }

    alert("Nave: "+nameNave+ " Quantidade de Dobra: "+posicaoDobra)
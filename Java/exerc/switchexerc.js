let distanceYearLight = prompt("Qual a distancia ? ")
let list = prompt("Qual das opções você deseja:\n1- Parsec(pc)\n2- Unidade astronônica(au)\n3- Quilômetros(km) ?")
//let confirmList = confirm(" A opção escolhida é "+list+ " ?")
let calcDistance

switch(list){
        case "1":
            list = "Parsec"
            calcDistance = distanceYearLight*0.306601
        //console.log("Você escolheu a distancia em: " +list+ " e o resultado é: " +calcDistance)
        break;
        case "2":
            list = "Unidade  astronômica"
            calcDistance = distanceYearLight*63241.1
            //console.log(distanceYearLight/63241.1)
        break;
        case "3":
            list = "Quilômetros"
            calcDistance = distanceYearLight*9,5*Math.pow(10,12)
            //console.log((distanceYearLight/9,5)*(Match.pow(10,12)))
            break;
            default:
            list = "Unidade não identificada"
            calcDistance = "Conversão não executada"
}
alert("Sua velocidade é: " +distanceYearLight + "\n Opção selecionada para conversão: "+list+ "\n e a distância convertida é: "+calcDistance)
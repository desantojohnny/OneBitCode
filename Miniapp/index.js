let dataDePartida = prompt ('Digite a data de partida(formato DD/MM/YYYY)') //AQUI ESTAMOS SOLICITANDO AO USER UM DATA, SEGUINDO O FORMATO

let recebeDataDePartida = moment(dataDePartida, "DD/MM/YYYY") // ESTAMOS UTILIZANDO A BIBLIOTECA MOMENT PARA CONVERTER A STRING EM NUMBER

let today = moment() // PUXANDO A DATA ATUAL

let diferenteDay = today - recebeDataDePartida // CALCULO DA DATA DIGITADA PARA A ATUAL

let segundaOpcao = prompt('Escolha como gostaria de exibir o tempo de partida\n1- Segundo\n2- Minuto\n3- Hora\n4- Dia') //SELECAO DA OPÇÃO
if (segundaOpcao == '1') {
    let calculoDePartidaSegundo = Math.round(diferenteDay/1000) // DEVOLVE A DATA EM SEGUNDO
    alert('Tempo de vôo: ' +calculoDePartidaSegundo+ ' Segundos')
}else if (segundaOpcao == '2'){
    let calculoDePartidaMinuto = Math.round(diferenteDay/1000/60)//DEVOLVE A DATA EM MINUTOS
    alert('Tempo de vôo: ' +calculoDePartidaMinuto+ ' Minutos')
}else if (segundaOpcao == '3'){
    let calculoDePartidaHora = Math.round(diferenteDay/1000/3600)//DEVOLVE A DATA EM HORAS
    alert('Tempo de vôo: ' +calculoDePartidaHora+ ' Minutos')
}else if (segundaOpcao == '4'){
    let calculoDePartidaDia = Math.round(diferenteDay/1000/3600/24)//DEVOLVE A DATA EM DIAS
    alert('Tempo de vôo: ' +calculoDePartidaDia+ ' Dias')
}else{
    alert('Opção Invalida')//CASO O USER NÃO DIGITA UMA DATA CORRETO, IREMOS MOSTRAR A MENSAGEM DE ERRO
}
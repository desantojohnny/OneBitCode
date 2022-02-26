let time = "Flamengo"
let novoTime = ""
for (let i = 0; i<time.length; i++){
    if (time[i] == "a"){
        novoTime += 'A'
    }else{
        novoTime += time[i]
    }
    //log aqui ele irá rodar letra por letra até terminar a variavel time
}
console.log(novoTime);  
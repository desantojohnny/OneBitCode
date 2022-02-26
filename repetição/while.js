let velocity = 50
let accelaration = 5

while(velocity <= 100){
    console.log("Acelerando, estamos em: " +velocity+ "km/h");
    velocity += accelaration
}

let constelation = "Androeda"
let postition = 0
let constelationLength = constelation.length

while(postition < constelationLength){
    if (constelation[postition] == "a" || constelation[postition] == "A"){
        console.log(postition)
    }
    postition += 1
}
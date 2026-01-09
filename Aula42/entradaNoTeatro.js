let idade = 15;
let ingresso = true;

function teatro(){
    if(ingresso === false){
      console.log("Entrada não permitida. É necessário possuir ingresso.")  
    }else if(ingresso === true && idade < 12){
        console.log("Entrada permitida apenas acompanhado de um responsável.")
    }else if(ingresso === true && idade >= 12 && idade <= 17){
        console.log( "Entrada permitida para menores, aproveite o espetáculo!")
    }else if(ingresso === true && idade >= 18){
        console.log( "Entrada liberada. Boa sessão!")
}
}

teatro()
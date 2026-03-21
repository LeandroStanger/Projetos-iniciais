let numAleatorio = Math.floor(Math.random()* 30);

console.log(`Numero Aleatotorio: ${numAleatorio}°c`);

do{
    if(numAleatorio < 25){
        console.log("Temperatura agradável")
        break;
    }if(numAleatorio < 29){
        console.log("Está esquentando")
        break;
    }else{
        console.log("Alerta de calor!")
        break;
    }
}while(numAleatorio <= 30);
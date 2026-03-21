let numAleatorio = Math.floor(Math.random()* 10);
console.log(`Numero sorteado: ${numAleatorio}`);

let i = 1;

do{
    if(i === numAleatorio){
        break;
    }
    console.log(i)
    i++
}while(i <= 10);
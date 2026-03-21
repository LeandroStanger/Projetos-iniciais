let numero = 1;

do{
    console.log(`Numero: ${numero}`);
    numero++;
}while(numero < 5);

console.log(`________________________________`)

let i = 1;
do{
    console.log(`Numero: ${i}`);
    if(i === 3){
        break;
    }
    i++;
}while(i < 5);
let c = 20;

do{
    if(c === 30){
        console.log(`Alerta de calor`);
        break;
    }else{
        c++
    }
    console.log(`${c}°c`)
}while(c <= 50);
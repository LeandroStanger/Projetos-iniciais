let totalDePontos = 71
let totalDeVitorias = 20
let saldoDeGols = 15

let peloMenos = 70
let maisDeVitorias = 18
let saldoDeGolsPositivo = true
let saldoDeVitoria = totalDeVitorias - maisDeVitorias

if((totalDePontos > peloMenos) && (totalDeVitorias > maisDeVitorias) && (saldoDeVitoria >= 1)){
    console.log(" O time está pronto para levantar a taça com autoridade!");
}else if(totalDePontos == peloMenos && totalDeVitorias == maisDeVitorias && saldoDeGolsPositivo == true){
    console.log(" O título está por um fio, mas ainda é possível!");
}else if(totalDePontos < peloMenos){
    console.log(" Infelizmente, o time não tem pontos suficientes para ser campeão.");
}else if(totalDePontos == peloMenos && (totalDeVitorias < maisDeVitorias) && saldoDeGolsPositivo == false){
    console.log(" O time precisa melhorar em vitórias ou saldo de gols para sonhar com o título.");
}else{
    console.log(" Verifique os dados informados e tente novamente.");
}
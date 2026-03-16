const animaisExtincao = [
  { nome: "Mico-leão-dourado", bioma: "Mata Atlântica", quantidade: 3200 },
  { nome: "Arara-azul", bioma: "Pantanal", quantidade: 6500 },
  { nome: "Lobo-guará", bioma: "Cerrado", quantidade: 17000 },
  { nome: "Onça-pintada", bioma: "Amazônia", quantidade: 15000 },
  { nome: "Tartaruga-de-couro", bioma: "Oceano", quantidade: 900 },
  { nome: "Baleia-azul", bioma: "Oceano", quantidade: 12000 },
  { nome: "Gorila-da-montanha", bioma: "Floresta", quantidade: 1063 },
  { nome: "Tigre-de-bengala", bioma: "Floresta", quantidade: 3900 },
  { nome: "Elefante-asiático", bioma: "Floresta", quantidade: 40000 },
  { nome: "Leopardo-das-neves", bioma: "Montanhas", quantidade: 6500 },
  { nome: "Condor-da-califórnia", bioma: "Montanhas", quantidade: 560 },
  { nome: "Panda-gigante", bioma: "Floresta", quantidade: 1864 }
];

let oceano = animaisExtincao.filter(x => x.bioma.toUpperCase() === "OCEANO");
console.log(oceano);
console.log(`________________________________________`);

let araraAzul = animaisExtincao.map(x => x.nome.toUpperCase());
araraAzul = araraAzul.includes("ARARA-AZUL");
console.log(araraAzul);
console.log(`________________________________________`);

animaisExtincao.push({ nome: "Tamanduá-bandeira", bioma: "Cerrado", quantidade: 6000 });
console.log(animaisExtincao);
console.log(`________________________________________`);

animaisExtincao.map(x => x.anoAnalise = 2025);
console.log(animaisExtincao);
console.log(`________________________________________`);

let frase = oceano.map(x => `O animal ${x.nome} vive no bioma ${x.bioma}.`)
console.log(frase);
console.log(`________________________________________`);

if(araraAzul === true){
    console.log(animaisExtincao.filter(x => x.nome.toUpperCase() === "ARARA-AZUL"))
}else{
    console.log(`Não na lista de nomes`)
}
console.log(`________________________________________`);

let animal = animaisExtincao.map(x => x.nome);
console.log(animal);
console.log(`________________________________________`);

let analise = animaisExtincao.map(x => x.anoAnalise);
console.log(analise);
console.log(`________________________________________`);

animaisExtincao.map(x => x.percaPorAno = (x.quantidade * 0.1).toFixed());
console.log(animaisExtincao);
console.log(`________________________________________`);

animaisExtincao.map(x => x.quantosRestam = (x.quantidade * 0.9).toFixed());
console.log(animaisExtincao);
console.log(`________________________________________`);

animaisExtincao.map(x => x.riscoMaisGrave = (((x.percaPorAno / x.quantosRestam) * 100) - 1).toFixed());
console.log(animaisExtincao);
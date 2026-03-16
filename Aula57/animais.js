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

let busque = animaisExtincao.filter((x) => x.bioma.toUpperCase() === "FLORESTA");
console.log(busque);
console.log(`________________________________________`);

let frases = animaisExtincao.map(x => `O animal ${x.nome} vive no bioma ${x.bioma}.`);
console.log(frases);
console.log(`________________________________________`);

let total = animaisExtincao.reduce((total, animal) => total + animal.quantidade, 0);
console.log(total);
console.log(`________________________________________`);


if(animaisExtincao.map(x => x.quantidade < 1000)){
    console.log(`ALERTA: Existem animalis com menos de 1000 indivíduos!`)
}else{
    console.log(`ALERTA: Não existem animalis com menos de 1000 indivíduos!`)
}


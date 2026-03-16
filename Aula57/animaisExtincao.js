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

let nomes = animaisExtincao.map(x => x.nome.toUpperCase());
console.log(nomes);
console.log(`________________________________________`)

let menosDe1000 = animaisExtincao.filter((x) => x.quantidade < 1000);
console.log(menosDe1000);
console.log(`________________________________________`)

let total= animaisExtincao.reduce((x, y) => x + y.quantidade, 0);
console.log(total);
console.log(`________________________________________`)

let busca = animaisExtincao.map(x => x.nome.toUpperCase());
busca = busca.includes("MICO-LEÃO-DOURADO")
console.log(busca);
console.log(`________________________________________`)

if(busca === true){
    console.log(`O Mico-leão-dourado está presente na lista.`)
}else{
    console.log(`O Mico-leão-dourado NÃO está na lista.`)
}
console.log(`________________________________________`)
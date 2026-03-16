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
let riscoCritico 
let riscoAlto
let riscoModerado
if(riscoCritico = animaisExtincao.filter(x => x.quantidade < 1000)){
  riscoCritico.forEach(x => {console.log(`${x.nome} é risco: CRÍTICO`)})
}else if(riscoAlto = animaisExtincao.map(x => x.quantidade > 1000 && x.quantidade < 5000)){
  riscoAlto.forEach(x => {console.log(`${x.nome} é risco ALTO`)})
}else if(riscoModerado = animaisExtincao.map(x => x.quantidade > 5000)){
  riscoAlto.forEach(x => {console.log(`${x.nome} é risco: MODERADO`)})
}
console.log(`________________________________________`);

let add = riscoCritico;
console.log(add);
console.log(`________________________________________`);

let media = animaisExtincao.reduce((x, y) => x + y.quantidade, 0);
media = media / animaisExtincao.length;
console.log(media.toFixed(2));
console.log(`________________________________________`);

let busca = animaisExtincao.map(x => x.nome.toUpperCase());
busca = busca.includes("PANDA-GIGANTE")
console.log(busca);
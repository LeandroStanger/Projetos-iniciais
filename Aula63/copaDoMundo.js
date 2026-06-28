let copaDoMundo = [ 'BRASIL', 'ARGENTINA', 'FRANÇA', 'ALEMANHA', 'ESPANHA' ];

let nomes = copaDoMundo.map(x => x.toLowerCase());
console.log(nomes);
console.log("________________________________________");
let tamanho = copaDoMundo.length;
console.log(tamanho);
console.log("________________________________________");
let contar = copaDoMundo[1].length;
console.log(contar);
console.log("________________________________________");
let busca = copaDoMundo.includes("ITALIA");
console.log(busca);
console.log("________________________________________");
let postos = [
  { pais: 'Brasil', pontos: 1 },
  { pais: 'Argentina', pontos: 2 },
  { pais: 'Uruguai', pontos: 2 },
  { pais: 'Chile', pontos: 2 },
  { pais: 'Paraguai', pontos: 2 },
  { pais: 'Colômbia', pontos: 2 },
  { pais: 'Peru', pontos: 2 }
]

let novosPostos = postos.map(x => {
if(x.pais == 'Brasil'){
  x.pontos += 2;
}
if(x.pais == 'Argentina'){
  x.pontos += 1;
}
if(x.pais == 'Uruguai'){
  x.pontos += 3
}
if(x.pais == 'Chile'){
  x.pontos += 1;
}
if(x.pais == 'Paraguai'){
  x.pontos += 2;
}
if(x.pais == 'Colômbia'){
  x.pontos += 5;
}
if(x.pais == 'Peru'){
  x.pontos += 3;
}
});

console.log(postos);
console.log("________________________________________");
console.log("Quantidade de itens: " + postos.length);
console.log("________________________________________");
let soma = postos.reduce((x, y) => x + y.pontos, 0);
console.log("Soma total: " + soma);

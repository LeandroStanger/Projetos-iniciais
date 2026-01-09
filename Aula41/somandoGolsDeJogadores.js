let gols = [10, 5, 7, 12];

let valor = 0
let golsx2 = gols.map(x => x * 2);
let soma = golsx2.reduce((acumulador, valor2) => acumulador + valor2, valor);

console.log(golsx2);
console.log(soma);
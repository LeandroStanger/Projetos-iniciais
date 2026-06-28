const selecoesGols = [
  { selecao: "Brasil", golsPorPartida: [2, 1, 3, 0] },
  { selecao: "Argentina", golsPorPartida: [1, 2, 1, 3] },
  { selecao: "França", golsPorPartida: [4, 0, 2, 1] },
  { selecao: "Alemanha", golsPorPartida: [3, 2, 0, 2] },
  { selecao: "Inglaterra", golsPorPartida: [1, 1, 2, 1] },
  { selecao: "Portugal", golsPorPartida: [3, 0, 1, 2] },
  { selecao: "Espanha", golsPorPartida: [0, 2, 1, 1] }
];

console.log(`Use .reduce() para calcular o total de gols.`);
let total = selecoesGols.map(a => a.golsPorPartida.reduce((soma, gol) => soma + gol, 0))
.reduce((x, y) => x + y, 0);
console.log(total);
console.log(`Total: ${total}`);
console.log(`_________________________`);

console.log(`Calcule também a média de gols por partida.`);
let media = total / selecoesGols.golsPorPartida.length
console.log(`Media: ${media}`);


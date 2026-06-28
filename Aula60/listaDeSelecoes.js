const selecoesGols = [
  { selecao: "Brasil", golsPorPartida: [2, 1, 3, 0] },
  { selecao: "Argentina", golsPorPartida: [1, 2, 1, 3] },
  { selecao: "França", golsPorPartida: [4, 0, 2, 1] },
  { selecao: "Alemanha", golsPorPartida: [3, 2, 0, 2] },
  { selecao: "Inglaterra", golsPorPartida: [1, 1, 2, 1] },
  { selecao: "Portugal", golsPorPartida: [3, 0, 1, 2] },
  { selecao: "Espanha", golsPorPartida: [0, 2, 1, 1] }
];

console.log(`Use .map() para transformar todos os nomes em maiúsculo.`);
let maiusculo = selecoesGols.map(x => x.selecao.toUpperCase());
console.log(maiusculo);
console.log(`_____________________________`);

console.log(`Verifique com .includes() se "Brasil" está na lista.`);
let busca = maiusculo.includes("BRASIL");
console.log(busca);
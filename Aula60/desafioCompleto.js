const selecoesGols = [
  { selecao: "Brasil", golsPorPartida: [2, 1, 3, 0] },
  { selecao: "Argentina", golsPorPartida: [1, 2, 1, 3] },
  { selecao: "França", golsPorPartida: [4, 0, 2, 1] },
  { selecao: "Alemanha", golsPorPartida: [3, 2, 0, 2] },
  { selecao: "Inglaterra", golsPorPartida: [1, 1, 2, 1] },
  { selecao: "Portugal", golsPorPartida: [3, 0, 1, 2] },
  { selecao: "Espanha", golsPorPartida: [0, 2, 1, 1] }
];

console.log(`Use .map() para deixar os nomes em maiúsculo.`);
let maiusculo = selecoesGols.map(x => x.selecao.toUpperCase());
console.log(maiusculo);
console.log(`______________________________`);

console.log(`Verifique com .includes() se "Alemanha" está na lista.`);
let busca = maiusculo.includes("ALEMANHA");
console.log(busca);
console.log(`__________________________________________________`);

console.log(`Crie um array com gols e use .reduce() para somar.`);
let soma = selecoesGols.reduce((x, y) => x + y.golsPorPartida, 0);
console.log(`Soma Total: ${soma}`);
console.log(`_________________________`);

console.log(`Adicione novos times com .push().`);
let novasSelecoes = selecoesGols.push(  { selecao: "Holanda", golsPorPartida: [2, 2, 0, 1] },
  { selecao: "Uruguai", golsPorPartida: [1, 0, 3, 2] },
  { selecao: "Croácia", golsPorPartida: [0, 1, 1, 2] },
  { selecao: "Bélgica", golsPorPartida: [3, 1, 0, 2] },
  { selecao: "Suíça", golsPorPartida: [1, 1, 1, 0] },
  { selecao: "México", golsPorPartida: [1, 0, 2, 1] },
  { selecao: "Japão", golsPorPartida: [0, 2, 1, 1] },
  { selecao: "Senegal", golsPorPartida: [1, 1, 0, 2] });
  console.log(selecoesGols);
  console.log(`____________________________________`);

  console.log(`Mostre todos os resultados com .join() e .toUpperCase().`);
  let frase = selecoesGols.map(x => x.selecao.toUpperCase());
  frase = frase.join("-");
  console.log(frase);
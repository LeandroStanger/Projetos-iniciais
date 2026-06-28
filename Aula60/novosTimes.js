const selecoesGols = [
  { selecao: "Brasil", golsPorPartida: [2, 1, 3, 0] },
  { selecao: "Argentina", golsPorPartida: [1, 2, 1, 3] },
  { selecao: "França", golsPorPartida: [4, 0, 2, 1] },
  { selecao: "Alemanha", golsPorPartida: [3, 2, 0, 2] },
  { selecao: "Inglaterra", golsPorPartida: [1, 1, 2, 1] },
  { selecao: "Portugal", golsPorPartida: [3, 0, 1, 2] },
  { selecao: "Espanha", golsPorPartida: [0, 2, 1, 1] }
];

console.log(`Adicione seleções com .push() (ex.: "Japão", "Holanda").`);
let novasSelecoes = selecoesGols.push(  { selecao: "Holanda", golsPorPartida: [2, 2, 0, 1] },
  { selecao: "Uruguai", golsPorPartida: [1, 0, 3, 2] },
  { selecao: "Croácia", golsPorPartida: [0, 1, 1, 2] },
  { selecao: "Bélgica", golsPorPartida: [3, 1, 0, 2] },
  { selecao: "Suíça", golsPorPartida: [1, 1, 1, 0] },
  { selecao: "México", golsPorPartida: [1, 0, 2, 1] },
  { selecao: "Japão", golsPorPartida: [0, 2, 1, 1] },
  { selecao: "Senegal", golsPorPartida: [1, 1, 0, 2] });
  console.log(selecoesGols);
  console.log(`_________________________________`);

console.log(`Use .join() para mostrar todos os times em uma única frase.`);
let frase = selecoesGols.map(x => x.selecao);
frase = frase .join("-");
console.log(frase);
console.log(`_____________________________`);

console.log(`Transforme essa frase em maiúsculo com .toUpperCase().`);
let maiusculo = frase.toUpperCase();
console.log(maiusculo);
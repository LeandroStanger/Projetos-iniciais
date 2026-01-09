let jogadores = [
  { nome: "Ronaldo", posicao: "atacante" },
  { nome: "Cafu", posicao: "defensor" },
  { nome: "Kaká", posicao: "meia" },
  { nome: "Pelé", posicao: "atacante" },
  { nome: "Dida", posicao: "goleiro" }
];

let atacante = jogadores.filter(x => x.posicao == "atacante");
let nome = atacante.map(x => x.nome.toUpperCase());

console.log(nome);
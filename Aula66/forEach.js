// Criando um array de nomes
const nomes = ["Ana", "Bruno", "Carlos", "Diana"];

// Usando forEach para percorrer o array
nomes.forEach(function(nome) {
  console.log("Olá, " + nome + "!");
});

console.log(nomes);


// Criando um array de objetos com produtos
const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Celular", preco: 2000 },
  { nome: "Fone de ouvido", preco: 150 },
  { nome: "Monitor", preco: 800 }
];

// Usando forEach para listar os produtos
produtos.forEach(function(produto) {
  console.log(produto.nome + " custa R$ " + produto.preco);
});
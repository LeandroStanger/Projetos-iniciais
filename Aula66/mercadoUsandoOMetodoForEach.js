let compras = [
  { nome: "Arroz", quantidade: 2, preco: 20 },
  { nome: "Feijão", quantidade: 3, preco: 8 },
  { nome: "Leite", quantidade: 5, preco: 5 },
  { nome: "Carne", quantidade: 1, preco: 50 }
];

console.log(`Cada item da compra deve ser representado por um objeto contendo:\n\nnome do produto\nquantidade\npreço unitário\n`);
let lista = compras.forEach(function(compras){
    console.log(`Produto: ${compras.nome} | Quantidade: ${compras.quantidade} | Preço unitário: R$:${compras.preco}`);
});

let total = compras.reduce(function(acumulador, item){
    return acumulador + (item.quantidade * item.preco);
},0);

    console.log("\nValor total da compra: R$:" + total);


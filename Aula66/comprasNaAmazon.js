let compras = [
    { nome: "Notebook", quantidade: 1, preco: 3500 },
    { nome: "Mouse", quantidade: 2, preco: 80 },
    { nome: "Teclado", quantidade: 1, preco: 200 },
    { nome: "Monitor", quantidade: 1, preco: 1200 },
    { nome: "Cabo HDMI", quantidade: 3, preco: 50 }
];

console.log(`Cada item deve ser representado por um objeto contendo:\nnome do produto\nquantidade\npreço unitário`);
let lista = compras.forEach(function (compras) {
    console.log(`Produto: ${compras.nome} | Quantidade: ${compras.quantidade} | Preço unitário: R$:${compras.preco}`);
});

console.log(`\nO valor total da compra (quantidade × preço unitário).`)
let total = compras.reduce(function (x, y) {
    return x + (y.quantidade * y.preco);
}, 0);
console.log(`Valor total da compra: R$:${total}`);
console.log(`\nO produto mais caro da lista.\n`);
let caro = Math.max(...compras.map(x => x.preco));
console.log(`Produto mais caro: ${compras[0].nome} (${caro})`);

console.log(`\nMédia dos preços unitários:\n`);
let media = compras.reduce((x, y) => x + y.preco, 0);
media = media / compras.length;
console.log(`Média dos preços unitários: R$:${media}`);

console.log(`\nATENÇÃO: Existem produtos acima de R$ 1000!`);

if (!(compras.preco > 1000)) {
    console.log(`Sim!`);
} else {
    console.log(`NÃO!`);
}


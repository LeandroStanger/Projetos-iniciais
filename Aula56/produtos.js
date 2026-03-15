const produtos = [
  { nome: "Arroz", preco: 20 },
  { nome: "Feijão", preco: 15 },
  { nome: "Macarrão", preco: 10 },
  { nome: "Açúcar", preco: 8 }
];

let desconto = produtos.map(x => x.preco - (x.preco * 0.1));

console.log("desconto de 10%");
console.log(desconto);

console.log("___________________________________");

let total = desconto.reduce((x, y) => x + y, 0);

console.log("Valor total da compra após o desconto.");
console.log(total);

console.log("___________________________________");

console.log('Verificar com includes se a lista contém um produto específico (por exemplo, "Arroz");')

let busca = produtos.map(x => x.nome.toUpperCase());
busca = busca.includes("ARROZ")
console.log(busca);

console.log("___________________________________");

console.log(`Usar condicionais para exibir mensagens diferentes dependendo se o produto está ou não na lista.`);

if(busca === true){
    console.log(`Arroz encontrado`);
}else{
        console.log(`Arroz não encontrado`);
}

console.log("___________________________________");

let maisDe10 = produtos.filter(x => {
  let pD = x.preco - (x.preco % 0.1)
  return pD > 10
})
console.log(maisDe10)

console.log("___________________________________");


function precoComDesconto(nomeDoProduto){
let produto = produtos.find(x => x.nome === nomeDoProduto);

if(produto){
let precoComDesconto = produto.preco * 0.9
return(`O preço do ${nomeDoProduto} com desconto é R$ ${precoComDesconto.toFixed(2)};`)
} else{
    return (`O produto ${nomeDoProduto} não existe na lista.`);
}
}
console.log(precoComDesconto("Café"));
console.log(precoComDesconto("Leite"));
console.log(precoComDesconto("Arroz"));
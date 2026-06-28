let marcasShampoo = [
    "Seda",
    "Pantene",
    "Dove",
    "TRESemmé",
    "Elseve",
    "Clear",
    "Head & Shoulders",
    "Salon Line",
    "Skala",
    "Novex",
    "Lola",
    "Wella",
    "Natura",
    "Keune"
];

console.log(`1. Utilize includes() para verificar se a marca *Lola* está presente na lista. Exiba uma mensagem informando se ela foi encontrada ou não.`);
let busca = marcasShampoo.includes("Lola");
console.log(`Marca Lola esta presente na lista: ${busca ? "Sim" : "Nao"}`);

console.log(`\n2. Utilize slice() para criar uma nova array contendo apenas as marcas da *quarta até a oitava posição da lista*. Exiba essa nova lista no console.`);
console.log(marcasShampoo.slice(4, 8));

console.log(`\n3 .Utilize reduce() juntamente com a propriedade length para calcular *a quantidade total de letras de todas as marcas*, desconsiderando os espaços existentes nos nomes.`);
let calcular = marcasShampoo.map(x => x.length);
let calcular2 = calcular.reduce((x, y) => x + y, 0);
console.log("Total de letras: " + calcular2);

console.log(`\n4. Ainda utilizando reduce(), descubra *qual é a marca com o maior número de caracteres* e exiba seu nome juntamente com sua quantidade de letras.`);
let juntar = marcasShampoo.forEach(function(x, i){
    console.log(`"${x}" tem ${calcular[i]} letras!`);
})

console.log(`\n(Opcional): Sem modificar a array original, utilize reduce() para contar *quantas marcas possuem mais de 6 letras* e exiba o resultado no console.`);
let total = marcasShampoo.filter(x => x.length > 6);
total = total.forEach(function(x, i){
    console.log(`${i + 1}. ${x}`);
})
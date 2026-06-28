let bebidas = ["Coca-Cola", "Pepsi", "Guaraná Antarctica", "Fanta", "Sprite", "Schweppes", "Red Bull", "Monster", "Gatorade", "H2OH!"];

console.log("Usar filter para selecionar apenas as marcas que terminam com a letra 'a'.\n");

let busca1 = bebidas.filter(marca => marca.toLowerCase().endsWith("a"));
console.log(busca1);

console.log("\nConverter todas essas marcas para letras maiúsculas usando map e toUpperCase.\n");

let lista = bebidas.map(x => x.toUpperCase());
console.log(lista);

console.log("\nUsar join para juntar as marcas selecionadas em uma única string, separadas por ' - '.\n");
let frase = bebidas.join(" - ");
console.log(frase);
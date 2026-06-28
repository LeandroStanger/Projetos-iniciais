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

console.log("Usar filter para selecionar apenas as marcas que não começam com a letra 'P'.\n");
let busca = marcasShampoo.filter(marcas => !marcas.toLowerCase().startsWith("p"));
console.log(busca);

console.log("\nUsar uma condicional dentro do map:\nSe a marca tiver mais de 5 letras, transforme-a em maiúsculas com toUpperCase.\nCaso contrário, mantenha como está.\n");
let maisDe5Letra = marcasShampoo.map(x => {
    if(x.length > 5){
        console.log(x.toUpperCase());
    }
})

console.log("\nUsar join para juntar todas as marcas resultantes em uma única string, separadas por ' | '.\n");
let frase = marcasShampoo.join(" | ");
console.log(frase);
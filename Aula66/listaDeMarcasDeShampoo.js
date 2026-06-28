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

console.log(`Usar filter para selecionar apenas as marcas que começam com "S" ou terminam com "e".\n`);
let busca = marcasShampoo.filter(x => x.startsWith("S") || x.endsWith("e"));
console.log(busca);

console.log(`\nUsar map com uma condicional:\nSe a marca começar com "S", transforme-a em maiúsculas com toUpperCase.\nCaso contrário, mantenha como está.\n`);
let maiusculas = marcasShampoo.map(x => {
    if(x.startsWith("S")){
        console.log(x.toUpperCase());
    }
    if(!x.startsWith("S")){
        console.log(x);
    }
}    
);

console.log(`\nUsar join para juntar todas as marcas resultantes em uma única string, separadas por " / ".\n`);
let frase = marcasShampoo.join(" / ");
console.log(frase);
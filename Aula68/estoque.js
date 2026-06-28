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
//Filtar agora que tem mais de 4 letras e comese com letra "P", "T", "H" e uma frase
//Orde afabetica
// Si tive o Skala e Novex frase Vou comprar
let lista = marcasShampoo.filter(x => x.length > 4 && (x.startsWith("P") || x.startsWith("T") || x.startsWith("H")));
console.log(lista);
console.log(`\n`);

const frasesShampoo = [
    "Fios mais fortes, raízes mais saudáveis.",
    "Cada lavagem, uma nova chance de brilhar.",
    "Hidratação que dura até o próximo banho."
];

let frase = lista.map((x, i) => {
    console.log(`${x}: ${frasesShampoo[i]}`);
})

console.log(`_______________________________________\n`);

let aBcD = marcasShampoo.sort();
aBcD = aBcD.map((x, i) => {
    console.log(`${i + 1} - ${x}`);
});

console.log(`\n_______________________________________\n`);

const estoque = marcasShampoo.filter(marca =>
    marca === "Skala" || marca === "Novex" || marca === "Lola"
);

if (estoque.length === 3) {
    console.log(`Quero comprar!`);
} else if (estoque.length === 2) {
    console.log(`Tem apena 2 para comprar!\nQuero comprar!`);
} else if (estoque.length === 1) {
    console.log(`Tem apena 1 para comprar!\nQuero comprar!`);
} else {
    console.log(`Nao vou comprar!`);
}
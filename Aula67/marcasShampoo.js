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
//Filtar toda as marcas que comesao com S e N e conte quatidade delas
//Lista numerada com frase e nome maiuculo
//lista forma de frase com |
let mascasComSeN = marcasShampoo.forEach(function (x, i) {
    let conta = i + 1;
    if (x.startsWith("S") || x.startsWith("N")) {
        console.log(conta + ". " + x + " [disponível]");
    } else {
        console.log(conta + ". " + x + " [nao disponível]");
    }
})
let contidade = marcasShampoo.filter((x) => x.startsWith("S") || x.startsWith("N"));
const fraseComFiltro = contidade.map((x, i) => {
    return `${i + 1} - O Shampoo (${x.toUpperCase()}) Começa com "S" ou "N".`;
})
console.log(fraseComFiltro);
console.log("Lista com S e N: " + contidade);
console.log("Quatidate total: " + contidade.length);

console.log(`\n___________________________________________\n`);

let marcasComFrase = marcasShampoo.forEach(function (marcas, i) {
    let numero = i;
    const frasesShampoo = [
        "Fios mais fortes, raízes mais saudáveis.",
        "Cada lavagem, uma nova chance de brilhar.",
        "Hidratação que dura até o próximo banho.",
        "Controle de oleosidade sem agredir os fios.",
        "Maciez que você sente ao tocar.",
        "Cabelos alinhados como você sempre quis.",
        "Fragrância suave que acompanha seu dia.",
        "Limpeza refrescante, sensação de frescor total.",
        "Cachos soltos, definidos e sem peso.",
        "Nutrição profunda para cabelos ressecados.",
        "Livre de caspa, livre para balançar.",
        "Tecnologia suave para couro cabeludo sensível.",
        "Brilho intenso da raiz às pontas.",
        "Proteção contra os danos do dia a dia."
    ];
    console.log(`${numero}. ${marcas}: ${frasesShampoo[numero]} ${marcas.toUpperCase()} `);
})
console.log(`\n___________________________________________\n`);

let frase = marcasShampoo.join(" | ");
console.log(frase);
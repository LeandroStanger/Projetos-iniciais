let programas = [
    "Friends", "Breaking Bad", "Game of Thrones", "The Office", "Stranger Things",
    "The Simpsons", "Grey's Anatomy", "House of Cards", "The Crown", "Lost",
    "Modern Family", "How I Met Your Mother", "The Big Bang Theory", "Sherlock", "Westworld",
    "Better Call Saul", "Brooklyn Nine-Nine", "Peaky Blinders", "The Walking Dead", "Dexter",
    "Narcos", "Vikings", "Suits", "Black Mirror", "Money Heist",
    "Prison Break", "True Detective", "Mad Men", "The Wire", "Seinfeld",
    "Supernatural", "Arrow", "Flash", "Smallville", "Doctor Who",
    "The Mandalorian", "The Boys", "House", "Columbo", "Cheers",
    "Frasier", "ER", "Bones", "Castle", "24"
];

let maiuculas = programas.map(x => x.toUpperCase());
console.log(maiuculas.join(" | "));

let comThe = maiuculas.filter((x) => x.startsWith("THE"));
console.log(`\n\n`, comThe.toString());

let soma = programas.reduce((x, y )=> x + y.toUpperCase());
console.log(`\n\n`, soma);

let busca = maiuculas.indexOf("FRIENDS");
console.log(`\n\n`, busca);

console.log(`\n\nOs programas foram unidos, filtrados e transformados, mostrando a força da televisão em cada detalhe.`);

let busca2 = maiuculas.indexOf("LOST");
console.log(`\n\n`, busca2)

let busca3 = maiuculas.indexOf("DEXTER");
console.log(`\n\n`, busca3)
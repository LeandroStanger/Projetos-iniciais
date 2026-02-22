let tenis = [
    "Nike", "Adidas", "Puma", "Reebok", "New Balance",
    "Asics", "Converse", "Vans", "Fila", "Under Armour",
    "Mizuno", "Saucony", "Jordan", "Skechers", "On Running",
    "Hoka", "Diadora", "Lacoste", "K-Swiss", "Le Coq Sportif"
];

tenis.forEach((x) => console.log(x));
console.log("-------------------------")

let maiuculas = tenis.map(x => x.toUpperCase());
console.log(`\n\n`, maiuculas);
console.log("-------------------------")

let maisDe5 = tenis.filter((x) => x.length > 5);
console.log(`\n\n`, maisDe5);
console.log("-------------------------")

let total = tenis.reduce((x, y) => x + y);
console.log(`\n\n`, total);
console.log("-------------------------")

let n = maiuculas.some(x => x.startsWith("N"));
console.log(`\n\n`, n);
console.log("-------------------------")

let menosDe3 = maiuculas.every((x) => x.length === 3);
console.log(`\n\n`, menosDe3);
console.log("-------------------------")

let o = maiuculas.find((x) => x.startsWith("O"));
console.log(`\n\n`, o);
console.log("-------------------------")

let a = maiuculas.findIndex((x) => x.startsWith("A"));
console.log(`\n\n`, a);
console.log("-------------------------")

console.log(`\n\nUm tênis não é apenas um passo; é a assinatura da nossa jornada, onde o conforto encontra o asfalto e o estilo dita o ritmo.`);


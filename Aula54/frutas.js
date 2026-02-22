const frutas = ["maçã", "banana", "laranja", "uva", "melancia", "abacaxi"];

let frutas2 = frutas.map(x => x.toLocaleUpperCase() + " é incrível no cardápio!");
let frutas3 = frutas2.push("MAÇÃ é crocante e deliciosa!", "BANANA dá energia para o dia!")

console.log(frutas2)
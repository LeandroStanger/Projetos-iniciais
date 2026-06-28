let notas = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 4 },
    { nome: "Pedro", nota: 9 },
    { nome: "Ana", nota: 5 },
    { nome: "Lucas", nota: 3 }
];

console.log(`Nota maior ou igual a 6 → APROVADO\nNota entre 4 e 5 → RECUPERAÇÃO\nNota menor que 4 → REPROVADO\n`);
let maiorOuIgual6 = notas.forEach(function (notas) {
    if (notas.nota > 6) {
        console.log(`${notas.nome} está APROVADO com nota: ${notas.nota}`);
    } else if (notas.nota < 4) {
        console.log(`${notas.nome} está REPROVADO com nota: ${notas.nota}`);
    } else if (notas.nota == 4 || 5) {
        console.log(`${notas.nome} está RECUPERAÇÃO com nota: ${notas.nota}`);
    }
});
console.log("\n\n");
let total = notas.length
console.log(`Total de alunos: ${total}`);

let media = notas.reduce((x, y) => x + y.nota, 0);
media = media / total
console.log("Media: " + media);
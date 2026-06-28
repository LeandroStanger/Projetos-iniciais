const desenvolvedores = [
    { nome: "Ana", setor: "Backend", linguagem: "Java", tarefas: 18, remoto: true },
    { nome: "Carlos", setor: "Frontend", linguagem: "JavaScript", tarefas: 12, remoto: false },
    { nome: "Marina", setor: "IA", linguagem: "Python", tarefas: 25, remoto: true },
    { nome: "João", setor: "Backend", linguagem: "C#", tarefas: 9, remoto: false },
    { nome: "Fernanda", setor: "Mobile", linguagem: "Kotlin", tarefas: 15, remoto: true },
    { nome: "Lucas", setor: "IA", linguagem: "Python", tarefas: 31, remoto: true },
    { nome: "Patrícia", setor: "DevOps", linguagem: "Go", tarefas: 20, remoto: false }
];

console.log(`Parte 1 — Equipe de Inteligência Artificial\n`)
console.log(`A diretoria deseja visualizar apenas os desenvolvedores do setor IA.\nCrie uma nova lista contendo apenas esses colaboradores.`);
let colaboradoresSetoeIA = desenvolvedores.filter(x => x.setor === "IA");
console.log(colaboradoresSetoeIA);

console.log(`\n------------------------------------------------------------\n`);

console.log(`Depois, gere uma nova array de frases no formato:\nMarina desenvolveu 25 tarefas utilizando Python.\n`);
let frase = colaboradoresSetoeIA.forEach(x => {
    console.log(`${x.nome} desenvolveu ${x.tarefas} tarafas utilizado ${x.linguagem}.`);
})

console.log(`\n------------------------------------------------------------\n`);

console.log(`Parte 2 — Tecnologias utilizadas\n`)
console.log(`A empresa deseja divulgar todas as linguagens utilizadas pela equipe.\nCrie uma lista contendo apenas os nomes das linguagens.\n`);
let nomeDeLinguagens = desenvolvedores.forEach((x, i) => {
    console.log(`${i + 1} - ${x.linguagem}`);
});

console.log(`\n------------------------------------------------------------\n`);

console.log(`Depois, junte todas elas em uma única String separada por " | ". \n`)
let frase2 = desenvolvedores.map(x => x.linguagem);
frase2 = frase2.join(" | ");
console.log(frase2);

console.log(`\n------------------------------------------------------------\n`);

console.log(`\nParte 3 — A linguagem Python está sendo utilizada?\n`)
console.log(`O gerente deseja saber rapidamente se existe algum desenvolvedor utilizando Python.\nUtilize um método apropriado para responder essa pergunta.\n`);
let temDevPython = desenvolvedores.filter(x => x.linguagem.toLowerCase() === "python");

if(temDevPython.length >= 1){
    console.log(`Tem desenvolvedores Python na empresa!`);
}else{
        console.log(`Nao tem desenvolvedores Python na empresa!`);
}

console.log(`\n------------------------------------------------------------\n`);

console.log(`\nParte 4 — Produtividade da equipe\n`);
console.log(`Calcule a quantidade total de tarefas concluídas por todos os desenvolvedores.\n`);
let totalDev = desenvolvedores.length;
console.log(`Total de Dev: ${totalDev}`);
let totalTarefa = desenvolvedores.reduce((x, y) => x + y.tarefas, 0);
console.log(`Total de tarefa: ${totalTarefa}`);
console.log(`\n------------------------------------------------------------\n`);

console.log(`Depois, calcule a média de tarefas concluídas por colaborador.\n`);
let media = desenvolvedores.reduce((x, y) => x + y.tarefas ,0);
media = media / totalDev;
console.log(`Media: ${media.toFixed(2)}`);

console.log(`\n------------------------------------------------------------\n`);

console.log(`Parte 5 — Ranking da equipe\n`);
console.log(`Crie uma nova lista contendo apenas os nomes dos desenvolvedores.\n`);
let listaNomeDeDev = desenvolvedores.forEach((x, i) => {
    console.log(`${i + 1} - ${x.nome}`);
})

console.log(`\nOrdene essa lista em ordem alfabética.\n`);
let aBcD = desenvolvedores.sort();
aBcD = aBcD.map((x, i) => {
    console.log(`${i + 1} - ${x.nome}`);
})

console.log(`\nParte 6 — Relatório executivo\n`);
console.log(`Percorra toda a equipe e apresente um relatório semelhante ao exemplo abaixo.\nCaso o colaborador trabalhe remotamente, acrescente ao final da frase:\n(Remoto)\nCaso contrário:\n(Presencial)\nUtilize operador ternário para decidir qual texto será exibido.\n`);
let relatorio = desenvolvedores.forEach(x =>{
    console.log(`${x.nome} trabalha no setor ${x.setor} e concluiu ${x.tarefas} tarefas. (${x.remoto ? "Remoto" : "Presencial"})`);
})

console.log(`\n------------------------------------------------------------\n`);
console.log(`\nParte 7 — Resumo da empresa\n`);
console.log(`Ao final do programa, exiba uma mensagem semelhante a esta:\nA equipe possui 7 desenvolvedores e já concluiu 130 tarefas.\n`);
console.log(`Quantidade de desenvolvedores: ${totalDev}`);
console.log(`Total de tarefas concluídas: ${totalTarefa}`);

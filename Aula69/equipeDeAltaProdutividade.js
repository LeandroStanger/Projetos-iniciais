const desenvolvedores = [
    { nome: "Ana", setor: "Backend", linguagem: "Java", tarefas: 18, remoto: true },
    { nome: "Carlos", setor: "Frontend", linguagem: "JavaScript", tarefas: 12, remoto: false },
    { nome: "Marina", setor: "IA", linguagem: "Python", tarefas: 25, remoto: true },
    { nome: "João", setor: "Backend", linguagem: "C#", tarefas: 9, remoto: false },
    { nome: "Fernanda", setor: "Mobile", linguagem: "Kotlin", tarefas: 15, remoto: true },
    { nome: "Lucas", setor: "IA", linguagem: "Python", tarefas: 31, remoto: true },
    { nome: "Patrícia", setor: "DevOps", linguagem: "Go", tarefas: 20, remoto: false }
];

console.log(`A empresa considera um desenvolvedor de alta produtividade aquele que concluiu 20 ou mais tarefas.`);
console.log(`Crie uma lista contendo apenas esses colaboradores.\n`);
let lista = desenvolvedores.filter(x => x.tarefas > 20);
console.log(lista);

console.log(`\nDepois, gere uma nova lista de frases no formato:\n`);
console.log(`Marina atingiu a meta com 25 tarefas concluídas.\n`);
let frases = lista.forEach(x => {
    console.log(`${x.nome} atingiu a meta com ${x.tarefas} tarefas concluídas.`);
});

console.log(`\nAo final, informe quantos desenvolvedores atingiram essa meta.\n`);
let meta = lista.length;
console.log(`Total de desenvolvedores atingiram essa meta: ${meta}`);
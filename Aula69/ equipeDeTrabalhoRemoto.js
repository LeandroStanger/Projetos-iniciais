const desenvolvedores = [
    { nome: "Ana", setor: "Backend", linguagem: "Java", tarefas: 18, remoto: true },
    { nome: "Carlos", setor: "Frontend", linguagem: "JavaScript", tarefas: 12, remoto: false },
    { nome: "Marina", setor: "IA", linguagem: "Python", tarefas: 25, remoto: true },
    { nome: "João", setor: "Backend", linguagem: "C#", tarefas: 9, remoto: false },
    { nome: "Fernanda", setor: "Mobile", linguagem: "Kotlin", tarefas: 15, remoto: true },
    { nome: "Lucas", setor: "IA", linguagem: "Python", tarefas: 31, remoto: true },
    { nome: "Patrícia", setor: "DevOps", linguagem: "Go", tarefas: 20, remoto: false }
];

console.log(`O setor de Recursos Humanos deseja visualizar apenas os colaboradores que trabalham em regime remoto.`);
console.log(`Crie uma nova lista contendo apenas esses desenvolvedores.\nDepois, exiba apenas os nomes deles em uma única linha, separados por vírgula.\n`);
let lista = desenvolvedores.filter(x => x.remoto === true);
lista = lista.map(x => x.nome);
lista = lista.join(", ");
console.log(lista);
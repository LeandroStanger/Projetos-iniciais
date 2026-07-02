const desenvolvedores = [
    { nome: "Ana", setor: "Backend", linguagem: "Java", tarefas: 18, remoto: true },
    { nome: "Carlos", setor: "Frontend", linguagem: "JavaScript", tarefas: 12, remoto: false },
    { nome: "Marina", setor: "IA", linguagem: "Python", tarefas: 25, remoto: true },
    { nome: "João", setor: "Backend", linguagem: "C#", tarefas: 9, remoto: false },
    { nome: "Fernanda", setor: "Mobile", linguagem: "Kotlin", tarefas: 15, remoto: true },
    { nome: "Lucas", setor: "IA", linguagem: "Python", tarefas: 31, remoto: true },
    { nome: "Patrícia", setor: "DevOps", linguagem: "Go", tarefas: 20, remoto: false }
];

console.log(`A equipe de Marketing está preparando uma apresentação para novos investidores e deseja exibir todas as linguagens de programação utilizadas pelos desenvolvedores da empresa.`);
console.log(`Crie uma nova array contendo apenas as linguagens de programação.\n`);
let lista = desenvolvedores.map(x => x.linguagem);
console.log(lista);

console.log(`\nEm seguida, transforme essa array em uma única String utilizando o método toString().\nExiba o resultado no console.\n`);
console.log(lista.toString());
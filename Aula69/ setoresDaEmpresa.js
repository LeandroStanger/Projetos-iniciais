const desenvolvedores = [
    { nome: "Ana", setor: "Backend", linguagem: "Java", tarefas: 18, remoto: true },
    { nome: "Carlos", setor: "Frontend", linguagem: "JavaScript", tarefas: 12, remoto: false },
    { nome: "Marina", setor: "IA", linguagem: "Python", tarefas: 25, remoto: true },
    { nome: "João", setor: "Backend", linguagem: "C#", tarefas: 9, remoto: false },
    { nome: "Fernanda", setor: "Mobile", linguagem: "Kotlin", tarefas: 15, remoto: true },
    { nome: "Lucas", setor: "IA", linguagem: "Python", tarefas: 31, remoto: true },
    { nome: "Patrícia", setor: "DevOps", linguagem: "Go", tarefas: 20, remoto: false }
];

console.log(`A diretoria deseja visualizar todos os setores existentes na startup.`);
console.log(`Crie uma nova array contendo apenas os nomes dos setores.`);
let nomesDoSetor = desenvolvedores.map(x => x.setor);
console.log(nomesDoSetor);

console.log(`\nDepois:\n1. Ordene os setores em ordem alfabética utilizando sort().\n2. Transforme essa array em uma única String utilizando toString().\n3. Exiba o resultado no console.\n`);
nomesDoSetor = nomesDoSetor.sort();
console.log(nomesDoSetor.toString());

console.log(`\nEm seguida, utilize includes() para verificar se o setor *DevOps* faz parte da empresa.\n`)
if(nomesDoSetor.includes("DevOps")){
    console.log(`✔️ O setor DevOps faz parte da empresa.`);
}else{
    console.log(`✖️ O setor DevOps ainda não foi criado.`);
}
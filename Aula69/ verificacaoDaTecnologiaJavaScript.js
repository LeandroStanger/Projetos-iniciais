const desenvolvedores = [
    { nome: "Ana", setor: "Backend", linguagem: "Java", tarefas: 18, remoto: true },
    { nome: "Carlos", setor: "Frontend", linguagem: "JavaScript", tarefas: 12, remoto: false },
    { nome: "Marina", setor: "IA", linguagem: "Python", tarefas: 25, remoto: true },
    { nome: "João", setor: "Backend", linguagem: "C#", tarefas: 9, remoto: false },
    { nome: "Fernanda", setor: "Mobile", linguagem: "Kotlin", tarefas: 15, remoto: true },
    { nome: "Lucas", setor: "IA", linguagem: "Python", tarefas: 31, remoto: true },
    { nome: "Patrícia", setor: "DevOps", linguagem: "Go", tarefas: 20, remoto: false }
];

console.log(`A equipe de arquitetura deseja confirmar se existe pelo menos um desenvolvedor cuja linguagem principal seja JavaScript.\n`);
let lista = desenvolvedores.filter(x => x.linguagem === "JavaScript");
let equipe = lista.map(x => x.setor);
if(lista.length >= 1){
    console.log(`A equipe de ${equipe} possui especialistas em JavaScript.`);
}else{
    console.log(`Nenhum desenvolvedor utiliza JavaScript.`);
}
const desenvolvedores = [
    { nome: "Ana", setor: "Backend", linguagem: "Java", tarefas: 18, remoto: true },
    { nome: "Carlos", setor: "Frontend", linguagem: "JavaScript", tarefas: 12, remoto: false },
    { nome: "Marina", setor: "IA", linguagem: "Python", tarefas: 25, remoto: true },
    { nome: "João", setor: "Backend", linguagem: "C#", tarefas: 9, remoto: false },
    { nome: "Fernanda", setor: "Mobile", linguagem: "Kotlin", tarefas: 15, remoto: true },
    { nome: "Lucas", setor: "IA", linguagem: "Python", tarefas: 31, remoto: true },
    { nome: "Patrícia", setor: "DevOps", linguagem: "Go", tarefas: 20, remoto: false }
];

console.log(`Toda sexta-feira o gerente recebe um relatório informando quantas tarefas foram concluídas pela equipe durante a semana.`);
console.log(`Utilize o método reduce() para calcular o total de tarefas concluídas por todos os desenvolvedores.\n`);
let totalDeTarefas = desenvolvedores.reduce((x, y) => x + y.tarefas, 0);
console.log(`Total de tarefas: ${totalDeTarefas}`);

console.log(`\nDepois, utilizando uma estrutura de decisão (if...else), verifique o resultado.\n`);
if(totalDeTarefas >= 100){
    console.log(`🏆 Excelente! A equipe superou a meta semanal.`);
}else{
    console.log(`⚠️ A equipe ainda não atingiu a meta da semana.`);
}
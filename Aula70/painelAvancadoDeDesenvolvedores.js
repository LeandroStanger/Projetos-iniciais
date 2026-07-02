const desenvolvedores = [
    { nome: "Ana", setor: "Backend", linguagem: "Java", tarefas: 18, remoto: true },
    { nome: "Carlos", setor: "Frontend", linguagem: "JavaScript", tarefas: 12, remoto: false },
    { nome: "Marina", setor: "IA", linguagem: "Python", tarefas: 25, remoto: true },
    { nome: "João", setor: "Backend", linguagem: "C#", tarefas: 9, remoto: false },
    { nome: "Fernanda", setor: "Mobile", linguagem: "Kotlin", tarefas: 15, remoto: true },
    { nome: "Lucas", setor: "IA", linguagem: "Python", tarefas: 31, remoto: true },
    { nome: "Patrícia", setor: "DevOps", linguagem: "Go", tarefas: 20, remoto: false }
];

console.log(`PARTE 1 - Último colaborador\n`);
console.log(`Remova o último desenvolvedor da lista usando pop().\nExiba o nome removido e a nova quantidade de colaboradores.\n`);
let ultimoColaborador = desenvolvedores.pop();
console.log(ultimoColaborador);

console.log(`\nPARTE 2 - Índice de um colaborador\n`);
console.log(`Descubra em qual posição está "Marina" usando indexOf().\nDica: crie uma lista apenas com os nomes antes de aplicar o método.\n`);
let indeceDeUmColaborador = desenvolvedores.map(x => x.nome);
indeceDeUmColaborador = indeceDeUmColaborador.indexOf("Marina");
console.log(`Posição da "Marina": ${indeceDeUmColaborador}`);

console.log(`\nPARTE 3 - Relatório rápido\n`);
console.log(`Percorra toda a lista com forEach() e exiba frases no formato:\n"Ana usa Java no setor Backend."\n`);
let frase = desenvolvedores.forEach(x => {
    console.log(`${x.nome} usa ${x.linguagem} no setor ${x.setor}.`);
})

console.log(`\n PARTE 4 - Ordenação por tarefas\n`);
console.log(`Crie uma cópia da lista e ordene os desenvolvedores pelo número de tarefas concluídas (sort).\nExiba o ranking do mais produtivo para o menos produtivo.\n`);
desenvolvedores.sort((x, y) => {
    if(x.tarefas > y.tarefas){
        return -1;
    }
    if(x.tarefas < y.tarefas){
        return 1;
    }
    return 0;
})
let ordenacaoPorTarefa = desenvolvedores.forEach((x, i) => {
    console.log(`${i + 1} - ${x.nome} tarefa concluidas: ${x.tarefas}`);
})

console.log(`\nPARTE 5 - Verificação de produtividade\n`);
console.log(`Use some() para verificar se existe algum desenvolvedor com mais de 30 tarefas\nCaso exista, exiba: "Temos um colaborador super produtivo!"\nCaso contrário: "Nenhum colaborador ultrapassou 30 tarefas."\n`);
let verificacaoDeProdutividade = desenvolvedores.some(x => x.tarefas > 30);
console.log(verificacaoDeProdutividade === true ? "Temos um colaborador super produtivo!" : "Nenhum colaborador ultrapassou 30 tarefas.");

console.log(`\nPARTE 6 - Busca específica\n`);
console.log(`Use find() para localizar o primeiro desenvolvedor que trabalha no setor "Backend".\nExiba o nome e a linguagem que ele utiliza.\n`);
let buscaEspecifica = desenvolvedores.find(x => x.setor === "Backend");
console.log(buscaEspecifica);

console.log(`\nPARTE 7 - Estatísticas\n`);
console.log(`Exiba a quantidade total de colaboradores usando length.\nDepois, mostre quantos trabalham remotamente e quantos presencialmente.\n`);
let estatisticas = desenvolvedores.length;
console.log(`Total de colaboradores: ${estatisticas}`);
let estatisticas2 = desenvolvedores.filter(x => x.remoto).length;
const remotos = estatisticas - estatisticas2
console.log(`Total de Dev remoto: ${estatisticas2}`);
console.log(`Total de Dev presencial: ${remotos}`);


console.log(`\nPARTE 8 - Normalização de dados\n`);
console.log(`Crie uma lista apenas com os nomes dos desenvolvedores em letras minúsculas (toLowerCase).\nExiba o resultado.\n`);
let normalizacaoDeDados = desenvolvedores.map(x => x.nome.toLowerCase());
console.log(normalizacaoDeDados);
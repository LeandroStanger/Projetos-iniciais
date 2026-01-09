const materiasSemana = [
  { nome: "Matemática", horas: 2, prova: true },
  { nome: "História", horas: 1, prova: false },
  { nome: "Física", horas: 3, prova: false },
  { nome: "Inglês", horas: 1, prova: false },
  { nome: "Programação", horas: 2, prova: true }
];

const dormiuHoras = 5;
let energia = [38];
let tempoDisponivel = 4;
const sextaFeira = true;
const diaTreino = true;
let agua = 2

//Ajuste do tempo
if(diaTreino){
  tempoDisponivel -= 0.5
}

//Seleçao de matérias
let materiasPioritarias = null;
let outrasMaterias = [];
let recomendacaoFinal = "";

//Regra 1: Se doumiu menos de 6h > revisão leve
if(dormiuHoras < 6){
  recomendacaoFinal = "Revisão leve devido ao pouco sono.";
}

//Regra 2: Se houver prova na semana > prioridade máxima
const provas = materiasSemana.filter(m => m.prova);
if(provas.length > 0){
  materiasPioritarias = provas[0].nome;
}

//Regra 3: Se tempo >= 3h > planejar ao menos 2 matérias
if(tempoDisponivel >= 3){
  outrasMaterias = materiasSemana
  .filter(m => !m.prova)
  .slice(0,2)
  .map(m => m.nome);
}

//Regra 4: Se energia < 40% pausa ou estudo leve
if(energia < 40){
  recomendacaoFinal = "Energia baixa: pausa ou estudo leve.";
}

//Regra 5: Se sexta-feira > evitar matéria longa (>2h)
if(sextaFeira){
  outrasMaterias = outrasMaterias.filter(m => {
    const mat = materiasSemana.find(x => x.nome == m);
    return mat.horas <= 2;
  });
}

//Regra 6: Se nenha matéria se enquadrar > descanso
if(!materiasPioritarias && outrasMaterias.length === 0){
  recomendacaoFinal = "Nunhuma matéria adequada: descanso recomendado."
}

if(agua >= 2){
  energia = energia * 1.2;
recomendacaoFinal = "Gainhou mais energia.";
}else if(agua < 2){
  energia = energia * 0.5;
  recomendacaoFinal = "Beba mais agua.";
}

//Saida formatada
console.log("Plano do dia:");
console.log(`- Matéria prioritária: ${materiasPioritarias || "Nenhuma"}`);
console.log(`- Outras matérias selecionadas: ${outrasMaterias.join(" ,") || "Nenhuma"}`);
console.log(`- Tempo total após ajustes: ${tempoDisponivel}h`);
console.log(`- Estado de energia: ${energia}%`);
console.log(`Rocomendação final: ${recomendacaoFinal}`);
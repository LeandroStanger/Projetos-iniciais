function gerarPlano() {
  // Captura das matérias
  const materiasSemana = [
    { nome: document.getElementById("mat1Nome").value, horas: parseFloat(document.getElementById("mat1Horas").value), prova: document.getElementById("mat1Prova").value === "true" },
    { nome: document.getElementById("mat2Nome").value, horas: parseFloat(document.getElementById("mat2Horas").value), prova: document.getElementById("mat2Prova").value === "true" },
    { nome: document.getElementById("mat3Nome").value, horas: parseFloat(document.getElementById("mat3Horas").value), prova: document.getElementById("mat3Prova").value === "true" }
  ];

  // Dados pessoais
  const dormiuHoras = parseFloat(document.getElementById("dormiuHoras").value);
  let energia = parseFloat(document.getElementById("energia").value);
  let tempoDisponivel = parseFloat(document.getElementById("tempoDisponivel").value);
  const sextaFeira = document.getElementById("sextaFeira").value === "true";
  const diaTreino = document.getElementById("diaTreino").value === "true";
  let agua = parseFloat(document.getElementById("agua").value); 

  // Ajuste do tempo se for dia de treino
  if (diaTreino) tempoDisponivel -= 0.5;

  let materiaPrioritaria = null;
  let outrasMaterias = [];
  let recomendacaoFinal = "";

  // Regra 1: Sono insuficiente
  if (dormiuHoras < 6) recomendacaoFinal = "Revisão leve devido ao pouco sono.";

  // Regra 2: Prova na semana
  const provas = materiasSemana.filter(m => m.prova);
  if (provas.length > 0) materiaPrioritaria = provas[0].nome;

  // Regra 3: Tempo >= 3h
  if (tempoDisponivel >= 3) {
    outrasMaterias = materiasSemana.filter(m => !m.prova).slice(0, 2).map(m => m.nome);
  }

  // Regra 4: Energia baixa
  if (energia < 40) recomendacaoFinal = "Energia baixa: pausa ou estudo leve.";

  // Regra 5: Sexta-feira
  if (sextaFeira) {
    outrasMaterias = outrasMaterias.filter(m => {
      const mat = materiasSemana.find(x => x.nome === m);
      return mat.horas <= 2;
    });
  }

  // Regra 6: Nenhuma matéria
  if (!materiaPrioritaria && outrasMaterias.length === 0) recomendacaoFinal = "Nenhuma matéria adequada: descanso recomendado.";

  if(agua >= 2){
    energia = energia * 1.2
    recomendacaoFinal = "Gainhou mais energia.";
  }else if(agua < 2){
    energia = energia * 0.5
    recomendacaoFinal = "Beba mais agua.";
  }

  // Saída formatada
  const saida = document.getElementById("saida");
  saida.innerHTML = `
    <p><strong>Plano do dia:</strong></p>
    <p>- Matéria prioritária: ${materiaPrioritaria || "Nenhuma"}</p>
    <p>- Outras matérias selecionadas: ${outrasMaterias.join(", ") || "Nenhuma"}</p>
    <p>- Tempo total após ajustes: ${tempoDisponivel}h</p>
    <p>- Estado de energia: ${energia}%</p>
    <p><strong>Recomendação final:</strong> ${recomendacaoFinal}</p>
  `;
}

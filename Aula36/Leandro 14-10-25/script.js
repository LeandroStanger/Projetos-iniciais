// script.js
// Versão simples que realiza todas as tarefas pedidas e mostra o resultado no DOM.
// Usa let em todas as variáveis conforme preferência.

let cidades = "Recife-31.4, Curitiba-22.8, Manaus-33.5, São Paulo-29.0, Salvador-30.7";

let processBtn = document.getElementById("processBtn");
let resetBtn = document.getElementById("resetBtn");
let outputEl = document.getElementById("output");

processBtn.addEventListener("click", () => {
  outputEl.textContent = ""; // limpa saída

  // 1) Transforme a string em lista
  let lista = cidades.split(",").map(item => item.trim());
  // 7) Adicione novo registro com push()
  // (exemplo simples: adicionamos Fortaleza-32.1)
  lista.push("Fortaleza-32.1");

  // 2) Separe nome e temperatura -> array de objetos {name, temp}
  let registros = lista.map(item => {
    let parts = item.split("-").map(p => p.trim());
    let nome = parts[0];
    let temp = parseFloat(parts[1]); // parseFloat()
    return { name: nome, temp: temp };
  });

  // 3) Filtre apenas temperaturas > 30
  let altas = registros.filter(r => r.temp > 30);

  // 4) Exiba nomes em maiúsculas com 1 casa decimal (toUpperCase + toFixed(1))
  // 5) Some as temperaturas (reduce)
  let total = altas.reduce((acc, cur) => acc + cur.temp, 0);
  let media = altas.length ? (total / altas.length) : 0;

  // 6) Verifique se uma cidade existe na lista usando includes()
  // Primeiro construir array só com nomes para includes
  let nomes = lista.map(item => item.split("-")[0].trim());
  let cidadeParaChecar = "Salvador";
  let existe = nomes.includes(cidadeParaChecar);

  // 8) Montar saída e mostrar no DOM (e também usar alert para mostrar resultado do includes)
  let lines = [];
  lines.push("Cidades com altas temperaturas!");
  altas.forEach(r => {
    let linha = `${r.name.toUpperCase()} - ${r.temp.toFixed(1)} °C`;
    lines.push(linha);
  });

  lines.push(`Temperatura média: ${media.toFixed(1)} °C`);

  // usa toString() apenas como demonstração (não necessário, mas solicitado nos métodos)
  let resumoString = lines.toString(); // transforma em string separada por vírgulas
  // exibir resultado legível no DOM (substitui as vírgulas por quebras de linha)
  outputEl.textContent = resumoString.split(",").join("\n");

  // alerta com resultado do includes()
  alert(`${cidadeParaChecar} está na lista? ${existe ? "Sim" : "Não"}`);

  // também registrar no console (console.log)
  console.log("Lista original:", lista);
  console.log("Registros:", registros);
  console.log("Filtradas (>30):", altas);
});

resetBtn.addEventListener("click", () => {
  outputEl.textContent = "";
});

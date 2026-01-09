let animais = [ 
  { nome: "Leão", especie: "Felino", peso: 190, idade: 8 }, 
  { nome: "Elefante", especie: "Mamífero", peso: 5400, idade: 
25 }, 
  { nome: "Girafa", especie: "Herbívoro", peso: 800, idade: 12 
}, 
  { nome: "Macaco", especie: "Primata", peso: 40, idade: 5 }, 
  { nome: "Tigre", especie: "Felino", peso: 220, idade: 10 } 
]; 

let processBtn = document.getElementById("processBtn");
let resetBtn = document.getElementById("resetBtn");
let outputEl = document.getElementById("output");

processBtn.addEventListener("click", () => {
    outputEl.textContent = "";

    let texto = "📌 Lista de animais:\n";
    animais.forEach(a => {
      texto += `Nome: ${a.nome} | Espécie: ${a.especie} | Peso: ${a.peso}kg | Idade: ${a.idade} anos\n`});
    let existeCoala = animais.some(a => a.nome === "COALA");
    if(!existeCoala){
      animais.push({nome: "Coala", especie: "Mamifero", peso: 20, idade: 5});
      texto += "\n✅ Coala adicionado com sucesso!\n";
    } else {
      texto +="\nℹ️ Coala já está na lista.\n";
    }

    let pesados = animais.filter(a => a.peso > 200);
    texto += "\n🐘 Animais com peso acima de 200kg:\n";
    pesados.forEach(a => {
      texto += `${a.nome} (${a.peso}kg)\n`
    });
    outputEl.textContent = texto
  });
  resetBtn.addEventListener("click", () => {
    outputEl.textContent = "";
  });
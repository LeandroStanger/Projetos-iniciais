// ✅ Array começa vazia, você vai preencher manualmente
let animais = [];

// Pegando botões que já existem no HTML
let processBtn = document.getElementById("processBtn");
let resetBtn = document.getElementById("resetBtn");
let outputEl = document.getElementById("output");

// ✅ Criando os inputs dinamicamente (sem alterar o HTML original)
let formDiv = document.createElement("div");
formDiv.className = "form";

formDiv.innerHTML = `
    <input type="text" id="nome" placeholder="Nome do animal">
    <input type="text" id="especie" placeholder="Espécie">
    <input type="number" id="peso" placeholder="Peso (kg)">
    <input type="number" id="idade" placeholder="Idade">
    <button id="addBtn">Adicionar Animal</button>
`;

// Inserir os inputs acima dos botões "Processar" e "Resetar"
let controlsDiv = document.querySelector(".controls");
controlsDiv.parentNode.insertBefore(formDiv, controlsDiv);

// Botão para adicionar animal
let addBtn = document.getElementById("addBtn");

// ✅ Adicionar animal à array manualmente
addBtn.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    let especie = document.getElementById("especie").value;
    let peso = Number(document.getElementById("peso").value);
    let idade = Number(document.getElementById("idade").value);

    if (!nome || !especie || !peso || !idade) {
        alert("⚠ Preencha todos os campos!");
        return;
    }

    animais.push({ nome, especie, peso, idade });

    outputEl.textContent = `✅ Animal "${nome}" adicionado!\n\n` +
        JSON.stringify(animais, null, 2);

    document.getElementById("nome").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("idade").value = "";
});

// ✅ Processar dados (listar e filtrar)
processBtn.addEventListener("click", () => {
    if (animais.length === 0) {
        outputEl.textContent = "⚠ Nenhum animal cadastrado ainda!";
        return;
    }

    let texto = "📌 Lista de animais cadastrados:\n";
    animais.forEach(a => {
        texto += `Nome: ${a.nome} | Espécie: ${a.especie} | Peso: ${a.peso}kg | Idade: ${a.idade} anos\n`;
    });

    let pesados = animais.filter(a => a.peso > 200);
    texto += "\n🐘 Animais com peso acima de 200kg:\n";
    pesados.forEach(a => texto += `- ${a.nome} (${a.peso}kg)\n`);

    outputEl.textContent = texto;
});

// ✅ Resetar apenas a área de saída (não apaga os animais adicionados)
resetBtn.addEventListener("click", () => {
    outputEl.textContent = "";
});
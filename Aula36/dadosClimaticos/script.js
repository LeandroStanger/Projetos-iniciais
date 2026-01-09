let cidades = "Recife-31.4, Curitiba-22.8, Manaus-33.5, São Paulo-29.0, Salvador-30.7";

let processBtn = document.getElementById("processBtn");
let resetBtn = document.getElementById("resetBtn");
let outputEl = document.getElementById("output");

processBtn.addEventListener("click", () => {
    outputEl.textContent = "";

    let lista = cidades.split(",").map(item => item.trim());

    lista.push("Fortaleza-32.1");

    let registros = lista.map(item => {
        let parts = item.split("-").map(p => p.trim());
        let nome = parts[0];
        let temp = parseFloat(parts[1]);
        return { name: nome, temp: temp };
    });

    let altas = registros.filter(r => r.temp > 30);

    let total = altas.reduce((acc, cur) => acc + cur.temp, 0);
    let media = altas.length ? (total / altas.length) : 0;

    let nomes = lista.map(item => item.split("-")[0].trim());
    let cidadeParaChecar = "Salvador";
    let existe = nomes.includes(cidadeParaChecar);

    let lines = [];
    lines.push("Cidades com altas temperaturas!");
    altas.forEach(r => {
        let linha = `${r.name.toUpperCase()} - ${r.temp.toFixed(1)} ºC`;
        lines.push(linha)
    });
    lines.push(`Temperatura média: ${media.toFixed(1)} ºC`);

    let resumoString = lines.toString();
    outputEl.textContent = resumoString.split(",").join("\n");

    alert(`${cidadeParaChecar} essá na lista? ${existe ? "Sim" : "Não"}`);
    console.log("Lista original:", lista);
    console.log("Registros:", registros);
    console.log("Filtradas (>30):", altas);
});

resetBtn.addEventListener("click", () => {
    outputEl.textContent = "";
});
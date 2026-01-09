let cidades = "Recife-31.4, Curitiba-22.8, Manaus-33.5, São Paulo-29.0, Salvador-30.7";

let preLista = cidades.split(", ");

let lista = preLista.map(i => {
    let [cidade, c] = i.split("-");
    return {
        cidade: cidade.toUpperCase().trim(),
        temperatura: parseFloat(c.trim())
    };
});

let maisDe30 = lista.filter(x => x.temperatura > 30);

let valor = 0;
let soma = maisDe30.reduce((acumulador, valor2) => acumulador + valor2.temperatura, valor);

let media = soma / maisDe30.length;

let busca = lista.map(i => i.cidade.includes("MANAUS"));

let novaCidade = lista.push({ cidade: 'CARRAVAGGIO', temperatura: 25.7 });

console.log(`Cidades com altas temperaturas!\n`);

maisDe30.forEach(i => {
    console.log(`${i.cidade} - ${i.temperatura} Cº`);
});

console.log(`\nTemperatura média: ${media.toFixed(1)}`);


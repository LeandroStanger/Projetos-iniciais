const jogos = [
    { nome: "Minecraft", vendas: 10 },
    { nome: "FIFA", vendas: 8 },
    { nome: "GTA V", vendas: 12 },
    { nome: "Valorant", vendas: 6 },
    { nome: "Fortnite", vendas: 9 }
];

let novasVendas = jogos.map(x => {
    if(x.nome == "Minecraft"){
        x.vendas += 3;
    }
    if(x.nome == "FIFA"){
        x.vendas += 2;
    }
    if(x.nome == "GTA V"){
        x.vendas += 1;
    }
    if(x.nome == "Valorant"){
        x.vendas += 4;
    }
    if(x.nome == "Fortnite"){
        x.vendas += 2;
    }
})
console.log(jogos);
console.log("_______________________________________");
console.log("Quantidade de jogos " + jogos.length);
console.log("_______________________________________");
let frase = jogos.map(x => x.nome);
frase = frase.join("-");
console.log(frase);
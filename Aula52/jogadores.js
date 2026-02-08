jogadores = [
    {"nome": "Neymar", "posicao": "atacante", "idade": 32, "gols": 80},
    {"nome": "Messi", "posicao": "meia", "idade": 38, "gols": 100},
    {"nome": "Cristiano", "posicao": "atacante", "idade": 40, "gols": 120},
    {"nome": "Vinícius Jr", "posicao": "atacante", "idade": 25, "gols": 50}
]

function idade (lista){
    const ranking = [...lista].sort((x, y) => y.idade - x.idade);

    console.log("Aqui estão as idade do jogadores!");

    ranking.forEach((ji, i) => {
        console.log(`${i + 1}. ${ji.nome} - idade: ${ji.idade}`);
    });
}

function gols(lista){
    const ranking = [...lista].sort((x, y) => x.gols - y.gols);

    console.log("\n\nAqui estão os Gols do jogagores!");

    ranking.forEach((g, i) => {
        console.log(`${i + 1}. ${g.nome} - Gols: ${g.gols}`);
    })
}

function nomes(lista){
    const ranking = [...lista].sort((x, y) => y.nome - x.nome);

    console.log("\n\nAqui estão o nomes dos jogadores!")

    ranking.forEach((n, i) => {
        console.log(`${i + 1}. ${n.nome}`);
    })
}

function atacantes(lista){
    const atacante =jogadores.filter(j => j.posicao === "atacante").sort((x, y) => y.gols - x.gols);

    console.log("\n\nAqui estão os Atacantes!");


    atacante.forEach((a, i) => {
        console.log(`${i + 1}. ${a.nome}`);
    })
 
}

function totalDeGols(lista){
    const ranking = [...lista].sort((x, y) => y.gols - x.gols);

    console.log("\n\nTotal de gols!");

        let soma = lista.reduce((total, jogador) => total + jogador.gols, 0);
        console.log(`Total de gols: ${soma}!`);
}

function mediaDeGols(lista){
    const ranking = [...lista].sort((x, y) => y.gols - x.gols);

    console.log("\n\nMedia dos Gols:");

    let soma = lista.reduce((total, jogadores) => total + jogadores.gols, 0);
    let media = soma / lista.length

    console.log(`A media de gols é ${media}!`)
}

idade(jogadores);
gols(jogadores);
nomes(jogadores);
atacantes(jogadores);
totalDeGols(jogadores);
mediaDeGols(jogadores);
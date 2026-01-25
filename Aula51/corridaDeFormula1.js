const pilotos = [
    { nome: "Max Verstappen", equipe: "Red Bull", pontuacao: 395 },
    { nome: "Lewis Hamilton", equipe: "Mercedes", pontuacao: 310 },
    { nome: "Charles Leclerc", equipe: "Ferrari", pontuacao: 290 },
    { nome: "Lando Norris", equipe: "McLaren", pontuacao: 275 },
    { nome: "George Russell", equipe: "Mercedes", pontuacao: 220 },
    { nome: "Carlos Sainz", equipe: "Ferrari", pontuacao: 210 },
    { nome: "Sergio Pérez", equipe: "Red Bull", pontuacao: 200 },
    { nome: "Oscar Piastri", equipe: "McLaren", pontuacao: 180 },
    { nome: "Fernando Alonso", equipe: "Aston Martin", pontuacao: 170 },
    { nome: "Pierre Gasly", equipe: "Alpine", pontuacao: 150 },
    { nome: "Esteban Ocon", equipe: "Alpine", pontuacao: 140 },
    { nome: "Valtteri Bottas", equipe: "Sauber", pontuacao: 120 },
    { nome: "Kevin Magnussen", equipe: "Haas", pontuacao: 110 },
    { nome: "Nico Hülkenberg", equipe: "Haas", pontuacao: 100 },
    { nome: "Yuki Tsunoda", equipe: "RB", pontuacao: 95 },
    { nome: "Daniel Ricciardo", equipe: "RB", pontuacao: 90 },
    { nome: "Lance Stroll", equipe: "Aston Martin", pontuacao: 85 },
    { nome: "Zhou Guanyu", equipe: "Sauber", pontuacao: 80 },
    { nome: "Logan Sargeant", equipe: "Williams", pontuacao: 70 },
    { nome: "Alexander Albon", equipe: "Williams", pontuacao: 65 }
];

function maiorPiloto(lista) {
    const ranking = [...lista].sort((x, y) => y.pontuacao - x.pontuacao);

    console.log("3 primeiros colocados:");

    ranking.slice(0, 3).forEach((p, i) => {
        console.log(`${i + 1}. ${p.nome} - Pontuação: ${p.pontuacao}`);
    });
}

function listaCompleta(lista){
    const ranking = [...lista].sort((x, y) => y.pontuacao - x.pilotos);

    console.log("\nLista completa dos 20 piloto:")

    ranking.forEach((p, i) => {
        console.log(`${i + 1}. ${p.nome} - Pontuação: ${p.pontuacao}`);
    });
}

function equipesTop3(lista){
    const ranking = [...lista].sort((x, y) => y.equipe - x.equipe)

    console.log("\nEquipes tiveram pilotos no top 3");

    ranking.slice(0, 3).forEach((e, i) =>{
        console.log(`${i +1}. ${e.nome} - Equipe: ${e.equipe}`);
    });
}

maiorPiloto(pilotos)
listaCompleta(pilotos)
equipesTop3(pilotos)
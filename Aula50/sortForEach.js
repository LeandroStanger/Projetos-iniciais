const passaros = [
  { nome: "Falcão-peregrino", velocidade: 389, peso: 900 },
  { nome: "Andorinha", velocidade: 105, peso: 20 },
  { nome: "Papagaio", velocidade: 50, peso: 400 },
  { nome: "Beija-flor", velocidade: 80, peso: 4 },
  { nome: "Águia-real", velocidade: 160, peso: 6000 },
  { nome: "Coruja", velocidade: 40, peso: 1500 }
];

// Função que ordena os pássaros pela velocidade e mostra no console
function rankingPorVelocidade(lista) {
    // Cria uma cópia do array, ordena pela velocidade (decrescente)
    const ranking = [...lista].sort((a, b) => b.velocidade - a.velocidade);
    
    console.log("Ranking de pássaros por velocidade de voo:");
    
    // Percorre o ranking e mostra cada pássaro com posição e velocidade
    ranking.forEach((p, i) => {
        console.log(`${i + 1}. ${p.nome} - ${p.velocidade} km/h`);
    });
}

// Chamando a função
rankingPorVelocidade(passaros);
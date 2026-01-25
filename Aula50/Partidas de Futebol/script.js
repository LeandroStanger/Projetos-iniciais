async function carregarDados() {
    try{
        const resposta = await fetch('dados.json');
        const modelos = await resposta.json();
        const conteudo = document.getElementById('copa');

        modelos.forEach((modelo, index) => {
            const section = document.createElement('section')
            section.classList.add('modelo');

            section.innerHTML= `
            <h2>${modelo.partida}</h2>
            <button onclick="mostrarInfo('info${index}')">Saiba mais</button>

            <p id="info${index}" class="extra-info">Placar: ${modelo.placar} <br>Curiosidade: ${modelo.curiosidade}</p>
            `;
            conteudo.appendChild(section);
        });
                top10(modelos);
    }catch(erro){
        console.error("Erro ao carregar os dados:", erro);
    }
}

function mostrarInfo(id){
    const elemento = document.getElementById(id);

    if(elemento.style.display === "none" || elemento.style.display === ""){
        elemento.style.display= "block";
    }else{
        elemento.style.display = "none"
    }
}


function top10(lista) {
    const ranking = [...lista].sort((x, y) => y.placar - x.placar);
    const rankingContainer = document.getElementById('top10');
    
    if (!rankingContainer) {
        const novoContainer = document.createElement('div');
        novoContainer.id = 'top10';
        document.body.appendChild(novoContainer);
    }
    
    const container = rankingContainer || document.getElementById('top10');
    
    container.innerHTML = `
        <h2>Top 10 partidas com maiores placares</h2>
        <div class="top10-list">
            ${ranking.slice(0, 10).map((p, i) => `
                <p class="top10-item">
                    ${i + 1}. ${p.partida} - ${p.placar}
                </p>
            `).join('')}
        </div>
    `;
}

carregarDados();
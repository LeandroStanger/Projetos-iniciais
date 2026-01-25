async function carregarDados() {
    try {
        const resposta = await fetch('dados.json');
        const modelos = await resposta.json();
        const conteudo = document.getElementById('conteudo');

        modelos.forEach((modelo, index) => {
            const section = document.createElement('section');
            section.classList.add('modelo');

            section.innerHTML = `
            <h2>${modelo.nome}</h2>
            <button onclick="mostrarInfo('info${index}')">Saiba mais</button>

            <p id="info${index}" class="extra-info">Equipe: ${modelo.equipe} <br>Pontuacao: ${modelo.pontuacao}</p>
            `;
            conteudo.appendChild(section);
        });
        maiorPiloto(modelos);
        listaCompleta(modelos);
        equipesTop3(modelos);
    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
}

function mostrarInfo(id) {
    const elemento = document.getElementById(id);

    if (elemento.style.display === "none" || elemento.style.display === "") {
        elemento.style.display = "block"
    } else {
        elemento.style.display = "none"
    }
}

function maiorPiloto(lista) {
    const ranking = [...lista].sort((x, y) => y.pontuacao - x.pontuacao);
    const rankingContainer = document.getElementById('maiorPiloto');

    if (!rankingContainer) {
        const novoContainer = document.createElement('div');
        novoContainer.id = 'maiorPiloto';
        document.body.appendChild(novoContainer);
    }

    const container = rankingContainer || document.getElementById('maiorPiloto');

    container.innerHTML = `
    <h2>3 primeiros colocados:</h2>
    <div class="maiorPiloto-list">
    ${ranking.slice(0, 3).map((p, i) => `
    <p class="maiorPiloto-item">
        ${i + 1}. ${p.nome} - Pontuação: ${p.pontuacao}
    </p>
    `).join('')}
    </div>
    `;
}

function listaCompleta(lista) {
    const ranking = [...lista].sort((x, y) => y.pontuacao - x.pontuacao);
    const rankingContainer = document.getElementById('listaCompleta');

    if (!rankingContainer) {
        const novoContainer = document.createElement('div');
        novoContainer.id = 'listaCompleta';
        document.body.appendChild(novoContainer);
    }

    const container = rankingContainer || document.getElementById('listaCompleta');

    container.innerHTML = `
    <h2>Lista completa dos 20 piloto:</h2>
    <div class="listaCompleta-list">
    ${ranking.map((p, i) => `
    <p class="listaCompleta-item">
        ${i + 1}. ${p.nome} - Pontuação: ${p.pontuacao}
    </p>
    `).join('')}
    </div>
    `;
}

function equipesTop3(lista) {
    const ranking = [...lista].sort((x, y) => y.equipe - x.equipe);
    const rankingContainer = document.getElementById('equipesTop3');

    if (!rankingContainer) {
        const novoContainer = document.createElement('div');
        novoContainer.id = 'equipesTop3';
        document.body.appendChild(novoContainer);
    }

    const container = rankingContainer || document.getElementById('equipesTop3');

    container.innerHTML = `
    <h2>Equipes tiveram pilotos no top 3:</h2>
    <div class="maiorPiloto-list">
    ${ranking.slice(0, 3).map((e, i) => `
    <p class="maiorPiloto-item">
        ${i + 1}. ${e.nome} - Pontuação: ${e.equipe}
    </p>
    `).join('')}
    </div>
    `;
}

carregarDados();
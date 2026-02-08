async function carregarDados() {
    try {
        const resposta = await fetch('dados.json');
        const jogadores = await resposta.json();
        let conteudo = document.getElementById('conteudo');

        conteudo.innerHTML = '';

        jogadores.forEach(jogador => {
            const section = document.createElement('section');
            section.classList.add('jogador');
            section.innerHTML = `
                <h3>${jogador.nome}</h3>
                <p>Idade: ${jogador.idade} anos</p>
                <p>Posicao: ${jogador.posicao}</p>
                <p>Gols: ${jogador.gols}</p>
                <p>Copa 2026: ${jogador.selecao_copa_2026}</p>
                <p>Clube: ${jogador.clube}</p>

            `;
            conteudo.appendChild(section);
        });

        mostrarJogadorMaisVelho(jogadores);
        mostrarJogadorMaisNovo(jogadores);
        artilheiroMaisGols(jogadores);
        jogadoresComMaisDe30Anos(jogadores);
        mediaDaIdade(jogadores);
        nomesDosJogadores(jogadores);
    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
}

function mostrarJogadorMaisVelho(jogadores) {
    const jogadoresOrdenados = [...jogadores].sort((x, y) => y.idade - x.idade);
    const container = document.getElementById('conteudo1');

    if (!container) return;

    container.innerHTML = `
        <h2>👑 Jogador Mais Velho</h2>
        <div class="destaque">
            <div class="maiorPiloto-item">
                ${jogadoresOrdenados[0].nome} - Idade: ${jogadoresOrdenados[0].idade} anos
            </div>
        </div>
    `;
}

function mostrarJogadorMaisNovo(jogadores) {
    const jogadoresOrdenados = [...jogadores].sort((x, y) => x.idade - y.idade);
    const jogadoresOrdenadosContainer = document.getElementById('conteudo2')

    if (!jogadoresOrdenadosContainer) {
        const novoContainer = document.createElement('div');
        novoContainer.id = 'conteudo2';
        document.body.appendChild(novoContainer);
    }

    const container = jogadoresOrdenadosContainer || document.getElementById('conteudo2');

    container.innerHTML = `
        <h2>🎖️ Jogador Mais Novo</h2>
        <div class="destaque">
 ${jogadoresOrdenados.slice(0, 1).map((p, i) => `
    <p class="maiorPiloto-item">
        ${p.nome} - Idade: ${p.idade} anos
    </p>
    `).join('')}
    </div>
        </div>
    `;
}

function artilheiroMaisGols(jogadores) {
    const jogadoresOrdenados = [...jogadores].sort((x, y) => y.gols - x.gols);
    const jogadoresOrdenadosContainer = document.getElementById('conteudo3');

    if (!jogadoresOrdenados) {
        const novoContainer = document.createElement('div');
        novoContainer.id = 'conteudo3'
        document.body.appendChild(novoContainer);
    }
    const container = jogadoresOrdenadosContainer || document.getElementById('conteudo3');

    container.innerHTML = `
        <h2>🎖️ Jogador que tem mais Gols</h2>
        <div class="destaque">
 ${jogadoresOrdenados.slice(0, 1).map((p, i) => `
    <p class="maiorPiloto-item">
        ${p.nome} - Idade: ${p.gols} anos
    </p>
    `).join('')}
    </div>
        </div>
    `;
}

function jogadoresComMaisDe30Anos(jogadores) {
    const jogadoresOrdenados = [...jogadores].sort((x, y) => y.idade - x.idade).filter(i => i.idade > 30);
    const jogadoresOrdenadosContainer = document.getElementById('conteudo4');

    if (!jogadoresOrdenados) {
        const novoContainer = document.createElement('div');
        novoContainer.id = 'conteudo4'
        document.body.appendChild(novoContainer);
    }
    const container = jogadoresOrdenadosContainer || document.getElementById('conteudo4');

    container.innerHTML = `
        <h2>🎖️ Jogadores com mais de 30 anos</h2>
        <div class="destaque">
 ${jogadoresOrdenados.map((p, i) => `
    <p class="maiorPiloto-item">
        ${i + 1}. ${p.nome} - Idade: ${p.idade} anos
    </p>
    `).join('')}
    </div>
        </div>
    `;
}

function mediaDaIdade(jogadores) {
    const somaIdades = jogadores.reduce((total, jogador) => total + jogador.idade, 0);
    const media = somaIdades / jogadores.length;

    const jogadoresOrdenados = [...jogadores].sort((a, b) => b.idade - a.idade);

    let container = document.getElementById('conteudo5');

    if (!container) {
        container = document.createElement('div');
        container.id = 'conteudo5';
        document.body.appendChild(container);
    }

    container.innerHTML = `
        <h2>Média da Idade</h2>
        <div class="destaque">
            <p class="maiorPiloto-item">A média de idade dos jogadores é: <strong>${media.toFixed(1)} anos</strong></p>
        </div>
    `;
}

function nomesDosJogadores(jogadores) {
    const jogadoresOrdenados = [...jogadores].sort((a, b) => {
        return a.nome.localeCompare(b.nome);
    });

    const container = document.getElementById('conteudo6');

    if (!container) return;

    container.innerHTML = `
        <h2>Nomes dos Jogadores</h2>
        <div class="destaque">
            ${jogadoresOrdenados.map((p, i) => `
                <div class="maiorPiloto-item" data-number="${i + 1}">
                    ${p.nome}
                </div>
            `).join('')}
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', carregarDados);
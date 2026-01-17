// Função para carregar os dados do JSON
async function carregarDados() {
    try {
        // Faz a requisição para ler o arquivo dados.json
        const resposta = await fetch('dados.json');

        // Converte os dados recebidos para objeto/array JavaScript
        const modelos = await resposta.json();

        // Seleciona a área do HTML onde os modelos serão inseridos
        const conteudo = document.getElementById('conteudo');

        // Percorre cada item do JSON
        modelos.forEach((modelo, index) => {
            
            // Cria uma <section> dinamicamente
            const section = document.createElement('section');
            
            // Adiciona a classe CSS "modelo" para estilização
            section.classList.add('modelo');

            // Insere o conteúdo HTML dentro da section
            // usa template string para incluir valores do JSON
            section.innerHTML = `
                <h2>${modelo.nome}</h2>
                <p>${modelo.descricao}</p>

                <!-- Botão que chama a função para mostrar/ocultar o texto extra -->
                <button onclick="mostrarInfo('info${index}')">Saiba mais</button>

                <!-- Parágrafo com curiosidade, começa oculto e com ID único -->
                <p id="info${index}" class="extra-info">${modelo.curiosidade}</p>
            `;

            // Adiciona a section dentro do container principal
            conteudo.appendChild(section);
        });

    } catch (erro) {
        // Caso aconteça erro na leitura do JSON, aparece no console
        console.error("Erro ao carregar os dados:", erro);
    }
}

// Função para mostrar/ocultar as curiosidades
function mostrarInfo(id) {
    // Seleciona o elemento pelo ID
    const elemento = document.getElementById(id);

    // Se não estiver visível, mostra
    if (elemento.style.display === "none" || elemento.style.display === "") {
        elemento.style.display = "block";
    } 
    // Caso contrário, esconde novamente
    else {
        elemento.style.display = "none";
    }
}

// Chama a função automaticamente ao carregar o script
carregarDados();


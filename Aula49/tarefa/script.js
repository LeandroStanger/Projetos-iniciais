let alunos = [];
async function carregarDados() {
    try {
        const resposta = await fetch('dados.json');
        
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        
        alunos = await resposta.json(); 

        if (!Array.isArray(alunos)) {
            throw new Error("Formato de dados inválido");
        }

        const conteudo = document.getElementById('conteudo');
        conteudo.innerHTML = ''; 

        alunos.forEach((aluno, index) => {
            const section = document.createElement('section');
            section.classList.add('aluno');

            section.innerHTML = `
                <h2>${aluno.aluno || 'Nome não disponível'}</h2>
                <button onclick="mostrarInfo('info${index}')">Saiba mais</button>
                <p id="info${index}" class="extra-info" style="display: none">
                    ${aluno.materia || 'Matéria não informada'}: 
                    ${aluno.nota !== undefined ? aluno.nota : 'N/A'} - 
                    ${aluno.status || 'Status não informado'}
                </p>
            `;
            conteudo.appendChild(section);
        });
                
    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
        document.getElementById('conteudo').innerHTML = 
            `<p class="erro">Erro ao carregar dados: ${erro.message}</p>`;
    }
}

function mostrarInfo(id) {
    const elemento = document.getElementById(id);
    
    if (!elemento) {
        console.error(`Elemento ${id} não encontrado`);
        return;
    }
    
    elemento.style.display = elemento.style.display === "none" ? "block" : "none";
    
    const botao = elemento.previousElementSibling;
    if (botao && botao.tagName === 'BUTTON') {
        botao.textContent = elemento.style.display === "none" ? "Saiba mais" : "Mostrar menos";
    }
}

function mediaDaTurma() {
    const elementoResultado = document.getElementById("conteudo2");
    
    if (!Array.isArray(alunos) || alunos.length === 0) {
        elementoResultado.textContent = "Não há alunos cadastrados para calcular a média";
        return null;
    }

    const alunosComNota = alunos.filter(aluno => 
        typeof aluno.nota === 'number' && !isNaN(aluno.nota)
    );

     const alunosComNota2 = alunos.filter(aluno => 
        typeof aluno.idade === 'number' && !isNaN(aluno.idade)
    );
    
    if (alunosComNota.length === 0) {
        elementoResultado.textContent = "Nenhum aluno com nota válida encontrada";
        return null;
    }

    const soma = alunosComNota.reduce((total, aluno) => total + aluno.nota, 0);
    const media = (soma / alunosComNota.length).toFixed(2);
    const quantidadeAlunos = alunosComNota.length;

    const soma2 = alunosComNota2.reduce((total, aluno) => total + aluno.nota, 0);
    const media2 = (soma2 / alunosComNota2.length).toFixed(2);

    elementoResultado.innerHTML = `
        <strong>Média geral da turma:</strong> ${media}<br>
        <small>Calculada com base em ${quantidadeAlunos} </small>
        <br>
        <small>Média de idade dos aluno(s) ${media2}</small>
    `;
    
    return parseFloat(media);
}

document.addEventListener('DOMContentLoaded', carregarDados);

window.carregarDados = carregarDados;
window.mostrarInfo = mostrarInfo;
window.mediaDaTurma = mediaDaTurma;

function mediaDaIdade(){
        const elementoResultado = document.getElementById("conteudo2");
    
    if (!Array.isArray(alunos) || alunos.length === 0) {
        elementoResultado.textContent = "Não há alunos cadastrados para calcular a média";
        return null;
    }

    const alunosComNota = alunos.filter(aluno => 
        typeof aluno.idade === 'number' && !isNaN(aluno.idade)
    );
    
    if (alunosComNota.length === 0) {
        elementoResultado.textContent = "Nenhum aluno com nota válida encontrada";
        return null;
    }

    const soma = alunosComNota.reduce((total, aluno) => total + aluno.nota, 0);
    const media = (soma / alunosComNota.length).toFixed(2);
    const quantidadeAlunos = alunosComNota.length;

 

    elementoResultado.innerHTML = `
        <strong>Média de idade dos aluno(s) ${media}</strong>
        <br>
        <small>Total arrecadado dos aluno(s) ${quantidadeAlunos}</small>

    `;
    
    return parseFloat(media);
}

// Dica: Sempre espere o DOM carregar para garantir que os elementos existem.
document.addEventListener('DOMContentLoaded', () => {
     // 1) Evento de clique (click)
    const btnClick = document.getElementById('btnClick');
    const clickResult = document.getElementById('clickResult');

      // Quando o botão for clicado, muda o texto
    btnClick.addEventListener('click', () => {
        clickResult.textContent = 'Você clicou no botão!';
        clickResult.style.color = '#22c55e';
    });


// 2) Evento de digitação (input)
  const nomeInput = document.getElementById('nomeInput');
  const nomeResult = document.getElementById('nomeResult');

  nomeInput.addEventListener('input', () => {
    if (nomeInput.value.trim() === "") {
      nomeResult.textContent = "Nada digitado ainda.";
      nomeResult.style.color = "#94a3b8"; // cinza
    } else {
      nomeResult.textContent = `Você digitou: ${nomeInput.value}`;
      nomeResult.style.color = "#38bdf8"; // azul
    }
  });

// 3) Evento de mouse (mouseover / mouseout)
  const caixaHover = document.getElementById('caixaHover');
  const hoverResult = document.getElementById('hoverResult');

  caixaHover.addEventListener('mouseover', () => {
    caixaHover.classList.add('active'); // muda estilo
    hoverResult.textContent = "Você passou o mouse sobre a caixa!";
    hoverResult.style.color = "#f59e0b"; // amarelo
  });

  caixaHover.addEventListener('mouseout', () => {
    caixaHover.classList.remove('active'); // volta ao normal
    hoverResult.textContent = "O mouse saiu da caixa.";
    hoverResult.style.color = "#94a3b8"; // cinza
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // 4) Evento de mudança (change)
  const corSelect = document.getElementById('corSelect');
  const corResult = document.getElementById('corResult');

  corSelect.addEventListener('change', () => {
    if (corSelect.value === "") {
      corResult.textContent = "Nenhuma cor escolhida ainda.";
      corResult.style.color = "#94a3b8"; // cinza
    } else {
      corResult.textContent = `Você escolheu: ${corSelect.value}`;
      if (corSelect.value === "vermelho") corResult.style.color = "red";
      if (corSelect.value === "azul") corResult.style.color = "blue";
      if (corSelect.value === "verde") corResult.style.color = "green";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // 5) Evento de teclado (keydown)
  const teclaInput = document.getElementById('teclaInput');
  const teclaResult = document.getElementById('teclaResult');

  teclaInput.addEventListener('keydown', (event) => {
    teclaResult.textContent = `Você pressionou a tecla: ${event.key}`;
    teclaResult.style.color = "#38bdf8"; // azul para destaque

    // Exemplo extra: se pressionar Enter, muda a cor para verde
    if (event.key === "Enter") {
      teclaResult.textContent = "Você pressionou ENTER!";
      teclaResult.style.color = "#22c55e"; // verde
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // 6) Alterar texto existente
  const textoOriginal = document.getElementById('textoOriginal');
  const btnMudarTexto = document.getElementById('btnMudarTexto');

  btnMudarTexto.addEventListener('click', () => {
    textoOriginal.textContent = "O texto foi alterado com sucesso!";
    textoOriginal.style.color = "#22c55e"; // verde para destacar
    textoOriginal.style.fontWeight = "bold"; // deixa em negrito
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // 7) Mini Chat Bot simples
  const chatArea = document.getElementById('chatArea');
  const chatInput = document.getElementById('chatInput');

  chatInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter" && chatInput.value.trim() !== "") {
      const userMsg = chatInput.value.trim();

      // Adiciona mensagem do usuário
      const userItem = document.createElement('li');
      userItem.className = "list-item";
      userItem.textContent = `👤 Você: ${userMsg}`;
      chatArea.appendChild(userItem);

      // Resposta simples do "bot"
      const botItem = document.createElement('li');
      botItem.className = "list-item";

      if (userMsg.toLowerCase().includes("oi")) {
        botItem.textContent = "🤖 Bot: Oi! Como você está?";
      } else if (userMsg.toLowerCase().includes("js")) {
        botItem.textContent = "🤖 Bot: JavaScript é incrível para interatividade!";
      } else {
        botItem.textContent = "🤖 Bot: Não entendi, mas estou aprendendo! 🙂";
      }

      chatArea.appendChild(botItem);

      // Limpa o campo
      chatInput.value = "";
    }
  });
});
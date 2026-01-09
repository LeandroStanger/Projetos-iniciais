// =========================================================
// Exemplo básico de fetch()
// =========================================================
// Este script faz uma requisição a um arquivo JSON local
// e exibe os dados na tela quando o usuário clica no botão.
// =========================================================

// Seleciona os elementos da página
const btn = document.getElementById("btnCarregar");
const divResultado = document.getElementById("resultado");

// Adiciona evento de clique no botão
btn.addEventListener("click", () => {
  // Mostra mensagem de carregamento
  divResultado.textContent = "Carregando dados...";

  // Faz a requisição usando fetch()
  //fetch("data.json")  // Pode ser qualquer URL ou arquivo local
  fetch("https://dog.ceo/api/breed/hound/images")
    .then((response) => {
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados!");
      }
      // Converte a resposta em JSON
      return response.json();
    })
    .then((dados) => {
      // Manipula o JSON recebido
  //    divResultado.innerHTML = `
   //     <strong>Nome:</strong> ${dados.nome} <br>
   //     <strong>Idade:</strong> ${dados.idade} <br>
   //     <strong>Cidade:</strong> ${dados.cidade}
  //    `;
  divResultado.innerHTML = `
  <img src="${dados.icon_url}" width="50" alt="Chuck Norris"><br>
  <strong>Piada:</strong> ${dados.value}
`;
    })
    .catch((erro) => {
      // Captura erros e exibe mensagem
      divResultado.textContent = "Ocorreu um erro: " + erro.message;
    });
});
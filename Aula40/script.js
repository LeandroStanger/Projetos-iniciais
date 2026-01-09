/*// =========================================================
// Exemplo de uso do fetch() — Lista de raças de gatos
// =========================================================
// Este script busca dados da API TheCatAPI e exibe uma
// lista com nome, origem, temperamento e expectativa de vida
// de várias raças de gatos.
// =========================================================

// Seleciona os elementos da página
const btn = document.getElementById("btnCarregar");
const divResultado = document.getElementById("resultado");

// Evento de clique no botão
btn.addEventListener("click", () => {
  divResultado.textContent = "Carregando raças de gatos...";

  // Faz a requisição para a API pública
  fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados!");
      }
      return response.json();
    })
    .then((dados) => {
      // Limita a exibição para as 10 primeiras raças (para não sobrecarregar a tela)
      const racas = dados.slice(0, 10);

      // Monta o HTML dinamicamente
      let html = "<h3>🐱 Lista de Raças de Gatos:</h3>";
      html += "<ul>";

      racas.forEach((gato) => {
        html += `
          <li style="margin-bottom: 15px;">
            <strong>${gato.name}</strong> <br>
            🌍 <b>Origem:</b> ${gato.origin} <br>
            💬 <b>Temperamento:</b> ${gato.temperament} <br>
            ⏳ <b>Expectativa de vida:</b> ${gato.life_span} anos
          </li>
        `;
      });

      html += "</ul>";

      // Exibe tudo na página
      divResultado.innerHTML = html;
    })
    .catch((erro) => {
      divResultado.textContent = "Ocorreu um erro: " + erro.message;
    });
});*/
// =========================================================
// Exemplo de uso do fetch() — Lista de raças de cachorros
// =========================================================
// Este script busca dados da API TheDogAPI e exibe uma
// lista com nome, origem, temperamento e expectativa de vida
// de várias raças de cães.
// =========================================================

/*// Seleciona os elementos da página
const btn = document.getElementById("btnCarregar");
const divResultado = document.getElementById("resultado");

// Evento de clique no botão
btn.addEventListener("click", () => {
  divResultado.textContent = "Carregando raças de cachorros...";

  // Faz a requisição para a API pública de raças de cachorros
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados!");
      }
      return response.json();
    })
    .then((dados) => {
      // Limita para as 10 primeiras raças
      const racas = dados.slice(0, 10);

      // Monta o HTML dinamicamente
      let html = "<h3>🐶 Lista de Raças de Cachorros:</h3>";
      html += "<ul>";

      racas.forEach((dog) => {
        html += `
          <li style="margin-bottom: 15px;">
            <strong>${dog.name}</strong><br>
            🐾 <b>Usado para:</b> ${dog.bred_for || "Informação não disponível"} <br>
            💬 <b>Temperamento:</b> ${dog.temperament || "Não informado"} <br>
            ⏳ <b>Expectativa de vida:</b> ${dog.life_span} <br>
            🌍 <b>Origem:</b> ${dog.origin || "Desconhecida"} <br>
        `;

        // Se houver imagem, exibe também
        if (dog.image && dog.image.url) {
          html += `<img src="${dog.image.url}" width="220" style="border-radius:8px;margin:8px 0"><br>`;
        }

        html += `</li>`;
      });

      html += "</ul>";

      // Exibe o conteúdo na página
      divResultado.innerHTML = html;
    })
    .catch((erro) => {
      divResultado.textContent = "Ocorreu um erro: " + erro.message;
    });
});
*/

// =========================================================
// Exemplo de uso do fetch() — Lista de raças de cachorros
// =========================================================
// Este script busca dados da API TheDogAPI e exibe uma
// lista com nome, origem, temperamento e expectativa de vida
// de várias raças de cães.
// =========================================================

// Seleciona os elementos da página
const btn = document.getElementById("btnCarregar");
const divResultado = document.getElementById("resultado");

// Evento de clique no botão
btn.addEventListener("click", () => {
  divResultado.textContent = "Carregando raças de cachorros...";

  // Faz a requisição para a API pública de raças de cachorros
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados!");
      }
      return response.json();
    })
    .then((dados) => {
      // Limita para as 10 primeiras raças
      const racas = dados.slice(0, 10);

      // Monta o HTML dinamicamente
      let html = "<h3>🐶 Lista de Raças de Cachorros:</h3>";
      html += "<ul>";

      racas.forEach((dog) => {
        html += `
          <li style="margin-bottom: 15px;">
            <strong>${dog.name}</strong><br>
            🐾 <b>Usado para:</b> ${dog.bred_for || "Informação não disponível"} <br>
            💬 <b>Temperamento:</b> ${dog.temperament || "Não informado"} <br>
            ⏳ <b>Expectativa de vida:</b> ${dog.life_span} <br>
            🌍 <b>Origem:</b> ${dog.origin || "Desconhecida"} <br>
        `;

        // Se houver imagem, exibe também
        if (dog.image && dog.image.url) {
          html += `<img src="${dog.image.url}" width="220" style="border-radius:8px;margin:8px 0"><br>`;
        }

        html += `</li>`;
      });

      html += "</ul>";

      // Exibe o conteúdo na página
      divResultado.innerHTML = html;
    })
    .catch((erro) => {
      divResultado.textContent = "Ocorreu um erro: " + erro.message;
    });
});
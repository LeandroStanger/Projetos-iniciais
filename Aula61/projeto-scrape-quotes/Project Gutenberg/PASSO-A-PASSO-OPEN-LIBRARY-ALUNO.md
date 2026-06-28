# Passo a passo: buscar livros na Open Library (bem explicado)

Este guia é para quem está **começando**. Você não precisa saber nada de “API” antes de ler: tudo está explicado por baixo.

---

## 1. O que você vai fazer (em uma frase)

Você vai rodar um **programinha no computador** que **pergunta** para o site **Open Library** (“Biblioteca Aberta”) quais livros existem sobre um assunto — por exemplo *programação* ou *engenharia* — e o site **responde em formato JSON** (dados organizados). O programa só **mostra** essa resposta no terminal.

Isso **não é raspagem de HTML** (não usamos Cheerio aqui). É uso da **API oficial**: o jeito correto e estável de obter dados.

---

## 2. Palavras que valem a pena saber

| Palavra | Significado simples |
|--------|----------------------|
| **Terminal** | Janela de texto onde você digita comandos (no Windows costuma ser **PowerShell** ou **Prompt de Comando**). |
| **Pasta do projeto** | A pasta onde estão `package.json`, `buscar-openlibrary.js`, etc. |
| **Node.js** | Programa que entende JavaScript fora do navegador; usamos o comando `node`. |
| **npm** | Ferramenta que vem com o Node; usamos `npm run ...` para rodar scripts definidos no projeto. |
| **API** | “Cardápio” oficial do site: você pede uma URL especial e recebe **dados** (JSON), não a página bonita do navegador. |
| **JSON** | Texto com chaves `{ }` e listas `[ ]` — fácil de ler no programa e no terminal. |

---

## 3. O que precisa estar instalado

1. **Node.js** na versão **18 ou mais nova**.  
   - Site: https://nodejs.org/ (baixe a opção **LTS**).  
2. Depois de instalar, abra o **PowerShell** e teste:

```text
node -v
```

Tem que aparecer algo como `v18.x` ou `v20.x`. Se der erro “comando não encontrado”, o Node não foi instalado ou o terminal precisa ser **fechado e aberto de novo**.

---

## 4. Onde fica o seu projeto

Você deve ter uma **pasta** com os arquivos da aula, por exemplo:

- `package.json`
- `buscar-quotes.js`, `buscar-books.js`, etc.
- O arquivo novo: **`buscar-openlibrary.js`**
- Este guia: **`PASSO-A-PASSO-OPEN-LIBRARY-ALUNO.md`**

Se o professor te mandou um **ZIP** ou um link (**GitHub**), descompacte ou clone tudo **dentro de uma pasta** e use **essa pasta** nos próximos passos.

---

## 5. Abrir o terminal **dentro da pasta do projeto**

No Windows, um jeito simples:

1. Abra o **Explorador de Arquivos** e entre na pasta do projeto.  
2. Clique na **barra de endereço** (onde aparece o caminho), digite `powershell` e pressione **Enter**.  
   - Abre o PowerShell **já na pasta certa**.

Outro jeito: abra o PowerShell e use o comando **`cd`** com o **caminho completo** da sua pasta (o professor pode te passar o caminho). Exemplo (o **seu** caminho será diferente):

```powershell
cd "C:\Users\SEU_NOME\Documents\projeto-aula-scrape"
```

---

## 6. Instalar dependências (só se ainda não fez)

Na pasta do projeto:

```powershell
npm install
```

Isso é necessário para os outros scripts que usam **Cheerio**. O script da Open Library **não precisa** de biblioteca extra (só o `fetch` do Node), mas **`npm install`** não atrapalha e deixa o projeto inteiro pronto.

---

## 7. Rodar a busca na Open Library

### Opção A — comando curto (recomendado)

Busca com texto **padrão** (o programa já escolhe um assunto se você não escrever nada):

```powershell
npm run openlibrary
```

Busca com **suas palavras** (use **aspas** se tiver espaços):

```powershell
npm run openlibrary -- "engenharia de software" 10
```

- Depois do `--`, o **primeiro** texto é o que você quer procurar.  
- O **número** (ex.: `10`) é **quantos resultados** no máximo (até 50).

### Opção B — chamar o Node direto

```powershell
node buscar-openlibrary.js "javascript" 5
```

Se tudo der certo, aparece no terminal um **JSON** com título, autores, ano, editora (quando existir), assuntos e link da obra na Open Library.

---

## 8. O que significa a saída (para você explicar na apresentação)

Cada bloco no JSON é um **livro (obra)** que bateu com a busca:

- **titulo** — nome do livro.  
- **autores** — nomes que o catálogo tem para os autores.  
- **ano** — ano da primeira publicação **conhecida** pelo catálogo (pode faltar).  
- **editora** — às vezes vem, às vezes não.  
- **assuntos** — palavras-chave (ex.: “Computer programming”).  
- **link** — página na Open Library sobre aquela obra (abre no navegador).

**Importante:** a Open Library é um **catálogo**. Nem todo livro está inteiro para “baixar” ali; muitos só têm **ficha** e link para empréstimo/compra/outros sites. Isso é normal e ensina diferença entre **metadado** e **arquivo PDF**.

---

## 9. Por que isso é diferente do `buscar-books.js`?

| | **books.toscrape.com** (`buscar-books.js`) | **Open Library** (`buscar-openlibrary.js`) |
|---|---------------------------------------------|---------------------------------------------|
| O que o programa baixa | **Página HTML** de mentirinha para aula | **JSON** oficial da API |
| Ferramenta extra | **Cheerio** (ler HTML) | Nenhuma (só `fetch`) |
| Site | Fictício, para treino | Catálogo real, milhões de registros |
| Uso na vida real | Só educação | Modelo parecido com integrações reais |

---

## 10. Ideias de busca (TI / programação / engenharia)

Troque o texto entre aspas:

```powershell
npm run openlibrary -- "computer networks" 8
npm run openlibrary -- "engenharia civil" 8
npm run openlibrary -- "algoritmos estruturas de dados" 8
npm run openlibrary -- "machine learning" 8
```

---

## 11. Problemas comuns (e o que fazer)

| Problema | O que pode ser |
|----------|----------------|
| `node` não é reconhecido | Node não instalado ou terminal aberto **antes** de instalar — feche e abra de novo. |
| `npm` não é reconhecido | Mesma coisa do Node. |
| Erro ao falar com a Open Library / timeout | Internet instável, firewall ou bloqueio temporário. Tente de novo em outra rede. |
| `Cannot find module` ao rodar outro script | Rode `npm install` na pasta do projeto. |
| O `npm run openlibrary -- "texto"` não funciona | No PowerShell, as **aspas** devem envolver o texto inteiro; o `--` é **obrigatório** depois de `npm run openlibrary` para passar argumentos ao script. |

---

## 12. Resumo em 4 passos (para colar no caderno)

1. Instalar **Node 18+**.  
2. Abrir o terminal **na pasta do projeto**.  
3. Rodar **`npm install`** (uma vez, se precisar).  
4. Rodar **`npm run openlibrary -- "sua busca" 10`**.

---

## 13. Link oficial para estudar mais

- API de busca: https://openlibrary.org/dev/docs/api/search  
- Página inicial do projeto: https://openlibrary.org/

Bons estudos.

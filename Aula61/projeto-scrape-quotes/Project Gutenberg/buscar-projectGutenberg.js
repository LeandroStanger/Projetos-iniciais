/**
 * Busca livros na Open Library usando a API pública (JSON).
 * Documentação: https://openlibrary.org/dev/docs/api/search
 *
 * Uso:
 *   node buscar-openlibrary.js
 *   node buscar-openlibrary.js "python programação" 10
 *
 * Argumento 1: texto da busca (opcional; tem um padrão se omitir)
 * Argumento 2: quantidade máxima de resultados (opcional; padrão 8; máximo 50)
 */

const query = process.argv[2] || "programação computadores";
const limit = Math.min(
  50,
  Math.max(1, Number(process.argv[3]) || 8)
);

const url = new URL("https://www.gutenberg.org/ebooks/search/?query=");
url.searchParams.set("q", query);
url.searchParams.set("limit", String(limit));

const res = await fetch(url, {
  headers: {
        accept: "text/html,appication/xhtml+.xml",
  },
});

if (!res.ok) {
  console.error("Erro ao falar com a Project Gutenberg:", res.status, await res.text());
  process.exit(1);
}

const data = await res.json();
const docs = data.docs || [];

const itens = docs.map((d) => {
  const autores = Array.isArray(d.author_name)
    ? d.author_name.join(", ")
    : d.author_name || "(sem autor listado)";
  const assuntos = Array.isArray(d.subject)
    ? d.subject.slice(0, 5).join(", ")
    : "";


  return {
    titulo: d.title || "(sem título)",
    subtitle: d.subtitle ?? null,
    baixados: d.extra ?? null,
    link,
  };
});

console.log(`Busca: "${query}" — ${itens.length} resultado(s)\n`);
console.log(JSON.stringify(itens, null, 2));

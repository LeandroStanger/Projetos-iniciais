/**
 * Busca livros na Open Library usando a API pública (JSON).
 * Documentação: https://openlibrary.org/dev/docs/api/search
 *
 * Por que alguns campos vêm null no JSON (mas o site mostra dados)?
 * - /search.json devolve um "resumo" por obra; editora, ISBN e páginas
 *   costumam estar nas EDIÇÕES, não em cada hit da busca.
 * - A página https://openlibrary.org/works/... junta obra + edições.
 * - Para aproximar do site: use a API da obra (/works/....json) e de
 *   edições (/works/.../editions.json) — ver buscar-openlibrary-professor.js --enriquecer.
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

const url = new URL("https://openlibrary.org/search.json");
url.searchParams.set("q", query);
url.searchParams.set("limit", String(limit));

const res = await fetch(url, {
  headers: {
    accept: "application/json",
    "user-agent":
      "AulaScrapeAluno/1.0 (uso educacional; Node.js; ver openlibrary.org/dev/docs/api)",
  },
});

if (!res.ok) {
  console.error("Erro ao falar com a Open Library:", res.status, await res.text());
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

  let link = null;
  if (typeof d.key === "string" && d.key.startsWith("/works/")) {
    link = `https://openlibrary.org${d.key}`;
  }

  return {
    titulo: d.title || "(sem título)",
    autores,
    ano: d.first_publish_year ?? null,
    editora: d.publisher?.[0] ?? null,
    assuntos: assuntos || null,
    link,
  };
});

console.log(`Busca: "${query}" — ${itens.length} resultado(s)\n`);
console.log(JSON.stringify(itens, null, 2));

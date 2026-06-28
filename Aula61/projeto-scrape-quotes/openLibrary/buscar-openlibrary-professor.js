/**
 * Referencia do professor: Open Library com os desafios 1-8 integrados.
 * O arquivo buscar-openlibrary.js permanece simples (baseline para o aluno).
 *
 * Uso (apos parsear flags):
 *   Legado (como o script do aluno):
 *     node buscar-openlibrary-professor.js "python" 10
 *   Modo explicito:
 *     node buscar-openlibrary-professor.js busca "python" 10
 *     node buscar-openlibrary-professor.js assunto "Computer programming" 8
 *
 * Flags (qualquer ordem, no fim ou no meio se nao ambiguos):
 *   --salvar resultado.json     Desafio 3: grava JSON na raiz do projeto
 *   --offset 20                 Desafio 5: paginacao (com busca/assunto + limite)
 *   --ano-min 2015              Desafio 6: filtra por first_publish_year
 *   --relatorio relatorio.txt   Desafio 7: relatorio legivel em texto
 *   --enriquecer                Chama /works/...json + editions.json por resultado
 *                               (preenche assuntos, descricao, editora/paginas/isbn
 *                               de uma edicao escolhida — explica null da busca).
 *
 * Desafio 1: campos extras no objeto (isbn, idiomas, paginas_mediana).
 * Desafio 2: mensagem se docs vazio.
 */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const UA =
  "ProfessorAulaScrape/1.0 (referencia didatica; Node.js; openlibrary.org)";

function parseAnoPublicacao(s) {
  const m = String(s ?? "").match(/\b(18|19|20)\d{2}\b/);
  return m ? parseInt(m[0], 10) : null;
}

async function fetchOlJson(path) {
  const url = path.startsWith("http") ? path : `https://openlibrary.org${path}`;
  const res = await fetch(url, {
    headers: { accept: "application/json", "user-agent": UA },
  });
  if (!res.ok) return null;
  return res.json();
}

/**
 * Entre edicoes com ano proximo ao da obra (janela curta), prefere mais paginas.
 * Janela +/- 2 evita saltar para reedicao bem mais nova (ex.: 2001) quando o site
 * destaca a edicao classica (ex.: 1998 com 776 p.).
 */
function escolherEdicao(entries, anoAlvo) {
  if (!Array.isArray(entries) || entries.length === 0) return null;
  const meta = entries.map((e) => {
    const y = parseAnoPublicacao(e.publish_date);
    const pages = Number(e.number_of_pages) || 0;
    const dist =
      anoAlvo != null && y != null ? Math.abs(y - anoAlvo) : null;
    return { e, pages, dist };
  });
  let cand = meta;
  if (anoAlvo != null) {
    const close = meta.filter((x) => x.dist != null && x.dist <= 2);
    if (close.length) cand = close;
  }
  cand.sort((a, b) => {
    if (b.pages !== a.pages) return b.pages - a.pages;
    const ya = parseAnoPublicacao(a.e.publish_date);
    const yb = parseAnoPublicacao(b.e.publish_date);
    if (ya != null && yb != null) return ya - yb;
    return 0;
  });
  return cand[0]?.e ?? null;
}

function textoDescricao(work) {
  const d = work?.description;
  if (d == null) return null;
  if (typeof d === "string") {
    return d.replace(/\s+/g, " ").trim().slice(0, 650);
  }
  if (typeof d === "object" && d.value) {
    return String(d.value).replace(/\s+/g, " ").trim().slice(0, 650);
  }
  return null;
}

async function enriquecerObraEEdicao(item) {
  const key = item._workKey;
  if (!key || typeof key !== "string") return;

  const work = await fetchOlJson(`${key}.json`);
  if (!work) return;

  if (Array.isArray(work.subjects) && work.subjects.length) {
    item.assuntos = work.subjects.slice(0, 10).join(", ");
  }
  const desc = textoDescricao(work);
  if (desc) item.descricao = desc;

  const anoAlvo =
    typeof item.ano === "number"
      ? item.ano
      : parseAnoPublicacao(work.first_publish_date);

  const edJson = await fetchOlJson(`${key}/editions.json?limit=100`);
  const edition = escolherEdicao(edJson?.entries, anoAlvo);
  if (edition) {
    const pub = edition.publishers?.[0];
    if (pub) item.editora = pub;
    if (edition.number_of_pages) {
      item.paginas_edicao_representativa = edition.number_of_pages;
    }
    const isbn =
      edition.isbn_13?.[0] ?? edition.isbn_10?.[0] ?? item.isbn;
    if (isbn) item.isbn = isbn;
    const yEd = parseAnoPublicacao(edition.publish_date);
    if (yEd != null) item.ano_publicacao_edicao = yEd;
  }
}

function parseArgs(argv) {
  const opts = {
    salvar: null,
    offset: 0,
    anoMin: null,
    relatorio: null,
    enriquecer: false,
  };
  const pos = [];
  for (let i = 0; i < argv.length; ) {
    const a = argv[i];
    if (a === "--enriquecer") {
      opts.enriquecer = true;
      i += 1;
      continue;
    }
    if (a === "--salvar") {
      opts.salvar = argv[i + 1] || null;
      i += 2;
      continue;
    }
    if (a === "--offset") {
      opts.offset = Math.max(0, Number(argv[i + 1]) || 0);
      i += 2;
      continue;
    }
    if (a === "--ano-min") {
      const n = Number(argv[i + 1]);
      opts.anoMin = Number.isFinite(n) ? n : null;
      i += 2;
      continue;
    }
    if (a === "--relatorio") {
      opts.relatorio = argv[i + 1] || null;
      i += 2;
      continue;
    }
    pos.push(a);
    i += 1;
  }

  let modo = "busca";
  let query;
  let limit = 8;

  if (pos[0] === "busca" || pos[0] === "assunto") {
    modo = pos[0];
    query = pos[1];
    if (pos[2] !== undefined) limit = Number(pos[2]) || limit;
  } else {
    query = pos[0] || "programação computadores";
    if (pos[1] !== undefined) limit = Number(pos[1]) || limit;
  }

  limit = Math.min(50, Math.max(1, limit));
  return { opts, modo, query, limit };
}

const raw = process.argv.slice(2);
const { opts, modo, query, limit } = parseArgs(raw);

if ((modo === "busca" || modo === "assunto") && !query) {
  console.error('Informe o texto apos "busca" ou "assunto".');
  process.exit(1);
}

const url = new URL("https://openlibrary.org/search.json");
if (modo === "assunto") {
  url.searchParams.set("subject", query);
} else {
  url.searchParams.set("q", query);
}
url.searchParams.set("limit", String(limit));
url.searchParams.set("offset", String(opts.offset));

const res = await fetch(url, {
  headers: {
    accept: "application/json",
    "user-agent": UA,
  },
});

if (!res.ok) {
  console.error("Erro HTTP:", res.status, await res.text());
  process.exit(1);
}

const data = await res.json();
const docs = data.docs || [];

if (docs.length === 0) {
  console.log(
    `Nenhum resultado encontrado (${modo === "assunto" ? "assunto" : "busca"}: "${query ?? ""}").`
  );
  console.log("Tente outros termos ou use ingles para assuntos.");
  process.exit(0);
}

let itens = docs.map((d) => {
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

  const isbn = Array.isArray(d.isbn)
    ? d.isbn[0] ?? null
    : d.isbn ?? null;
  const idiomas = Array.isArray(d.language)
    ? d.language.join(", ")
    : d.language ?? null;

  const item = {
    titulo: d.title || "(sem título)",
    autores,
    ano: d.first_publish_year ?? null,
    editora: d.publisher?.[0] ?? null,
    assuntos: assuntos || null,
    link,
    isbn,
    idiomas,
    paginas_mediana: d.number_of_pages_median ?? null,
  };

  if (opts.enriquecer && typeof d.key === "string") {
    item._workKey = d.key;
  }
  return item;
});

if (opts.enriquecer) {
  for (const item of itens) {
    if (item._workKey) {
      await enriquecerObraEEdicao(item);
      await new Promise((r) => setTimeout(r, 200));
    }
    delete item._workKey;
  }
}

if (opts.anoMin !== null) {
  itens = itens.filter(
    (x) => typeof x.ano === "number" && x.ano >= opts.anoMin
  );
}

const rotulo =
  modo === "assunto"
    ? `Assunto: "${query}" | offset ${opts.offset} | limite ${limit}`
    : `Busca: "${query}" | offset ${opts.offset} | limite ${limit}`;

const modoExtra = opts.enriquecer ? " | enriquecido (work + edicoes)" : "";
console.log(`${rotulo}${modoExtra} — ${itens.length} resultado(s) apos filtros\n`);
console.log(JSON.stringify(itens, null, 2));

if (opts.salvar) {
  const caminho = join(__dirname, opts.salvar);
  writeFileSync(caminho, JSON.stringify(itens, null, 2), "utf8");
  console.log("\n[Desafio 3] JSON salvo em:", caminho);
}

if (opts.relatorio) {
  const caminho = join(__dirname, opts.relatorio);
  const linhas = itens.map(
    (x, i) =>
      `${i + 1}. ${x.titulo}\n   Autores: ${x.autores}\n   Ano: ${x.ano ?? "-"}\n   Editora: ${x.editora ?? "-"}\n   Paginas (edicao): ${x.paginas_edicao_representativa ?? "-"}\n   ISBN: ${x.isbn ?? "-"}\n   Link: ${x.link ?? "-"}\n`
  );
  writeFileSync(caminho, linhas.join("\n"), "utf8");
  console.log("\n[Desafio 7] Relatorio salvo em:", caminho);
}

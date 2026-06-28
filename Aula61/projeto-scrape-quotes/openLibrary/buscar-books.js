/**
 * Runner: https://books.toscrape.com/ (site de prática, como o quotes).
 * Uso: node buscar-books.js [numeroDaPagina]
 */

import * as cheerio from "cheerio";

const base = "https://books.toscrape.com";
const pagina = Math.max(1, parseInt(process.argv[2] || "1", 10) || 1);

const url =
  pagina === 1
    ? `${base}/`
    : `${base}/catalogue/page-${pagina}.html`;

const res = await fetch(url, {
  headers: {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    accept: "text/html,application/xhtml+xml",
  },
});

if (!res.ok) {
  console.error("Erro HTTP:", res.status, url);
  process.exit(1);
}

const html = await res.text();
const $ = cheerio.load(html);

const estrelas = ["One", "Two", "Three", "Four", "Five"];

const itens = [];
$("article.product_pod").each((_, el) => {
  const root = $(el);
  const link = root.find("h3 a");
  const href = link.attr("href")?.trim() || "";
  const titulo =
    link.attr("title")?.trim() || link.text().replace(/\s+/g, " ").trim();
  const preco = root.find("p.price_color").text().trim();
  const classes = (root.find("p.star-rating").attr("class") || "").split(
    /\s+/
  );
  const avaliacao = classes.find((c) => estrelas.includes(c)) || null;
  const estoque = root.find("p.instock.availability").text().replace(/\s+/g, " ").trim();

  const linkAbs = href ? new URL(href, base + "/").href : null;

  if (titulo) {
    itens.push({
      titulo,
      preco,
      avaliacao_estrelas: avaliacao,
      estoque,
      link: linkAbs,
    });
  }
});

console.log(`Fonte: ${url}\n${itens.length} livro(s)\n`);
console.log(JSON.stringify(itens, null, 2));

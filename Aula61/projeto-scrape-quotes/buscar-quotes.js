import* as cheerio from "cheerio";

const pagina = Math.max(1, parseInt(process.argv[2] || "1", 10) || 1);

const base = "https://quotes.toscrape.com";
const url = pagina === 1 ? `${base}/` : `${base}/page/${pagina}/`;

const res = await fetch(url, {
    headers: {
        "user-agent":
        "Mozila/5.0 (Windows NT 10.0; Win64; x64) AppleWebkit/537.36",
        accept: "text/html",
    },
});

if(!res.ok){
    console.error("Erro HTML:", res.status);
    process.exit(1);
}

const html = await res.text();
const $ = cheerio.load(html);

const itens = [];

$(".quote").each((_, el) => {
    const root = $(el);

    const texto = root.find("span.text").text().trim();
    const autor = root.find("small.author").text().trim();

    const tags = root
    .find("div.tags a.tag")
    .map((_, a) => $(a).text().trim())
    .get();

    if(texto){
        itens.push({texto, autor, tags});
    }
});

console.log(`Fonte: ${url}`);
console.log(`${itens.length} citação(ões)\n`);

console.log(JSON.stringify(itens, null, 2));
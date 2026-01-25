const produtos = [
{ nome: "Notebook Dell", vendidos: 1200, avaliacao: 4.7, preco: 4500 },
{ nome: "Smartphone Samsung", vendidos: 2500, avaliacao: 4.5, preco: 3500 },
{ nome: "iPhone 14", vendidos: 1800, avaliacao: 4.8, preco: 7200 },
{ nome: "Monitor LG", vendidos: 900, avaliacao: 4.3, preco: 1200 },
{ nome: "Headset HyperX", vendidos: 1500, avaliacao: 4.6, preco: 600 },
{ nome: "Tablet Lenovo", vendidos: 800, avaliacao: 4.2, preco: 2000 },
{ nome: "Smartwatch Apple", vendidos: 1100, avaliacao: 4.9, preco: 3200 },
{ nome: "Placa de Vídeo RTX 4090", vendidos: 400, avaliacao: 4.9, preco: 15000 },
{ nome: "Teclado Mecânico Razer", vendidos: 700, avaliacao: 4.4, preco: 800 },
{ nome: "HD Externo Seagate", vendidos: 1300, avaliacao: 4.5, preco: 500 }
];

function top5MaisVendidos(lista){
    const ranking = [...lista].sort((x, y) => y.vendidos - x.vendidos);

    console.log("Aqui estão os 5 produtos mais vendidos, que conquistaram o público:");

    ranking.slice(0, 5).forEach((v, i) => {
        console.log(`${i + 1}. ${v.nome} - Vendidos: ${v.vendidos}`);
    });
}

function top5MaisBemAvaliados(lista){
    const ranking = [...lista].sort((x, y)=> y.avaliacao - x.avaliacao);

    console.log("\nConfira os 5 produtos mais bem avaliados pelos usuários:");

    ranking.slice(0,5).forEach((a, i) => {
        console.log(`${i + 1}. ${a.nome} - Nota: ${a.avaliacao}`);
    });
}

function top3MaisCaros(lista){
    const ranking = [...lista].sort((x, y)=> y.preco - x.preco);

    console.log("\nAqui estão os 3 produtos mais caros:");

    ranking.slice(0, 3).forEach((p, i) => {
        console.log(`${i + 1}. ${p.nome} - R$: ${p.preco}`);
    });
}

top5MaisVendidos(produtos);
top5MaisBemAvaliados(produtos);
top3MaisCaros(produtos);
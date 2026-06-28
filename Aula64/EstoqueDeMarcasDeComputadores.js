const marcas = [
    { nome: "Dell", estoque: 5 },
    { nome: "Apple", estoque: 3 },
    { nome: "Lenovo", estoque: 7 },
    { nome: "Asus", estoque: 4 },
    { nome: "HP", estoque: 2 },
    { nome: "Acer", estoque: 6 },
    { nome: "Samsung", estoque: 3 },
    { nome: "Microsoft", estoque: 5 },
    { nome: "Razer", estoque: 2 },
    { nome: "MSI", estoque: 4 }
];

let marcasSalvas = marcas.slice();

console.log("Utilize map() para criar uma nova array com os estoques atualizados.");

let remessaNova = marcas.map(x => {
    if(x.nome == "Dell"){
        x.estoque += 2;
    }
    if(x.nome == "Apple"){
        x.estoque += 1;
    }
    if(x.nome == "Lenovo"){
        x.estoque += 3;
    }
    if(x.nome == "Asus"){
        x.estoque += 2;
    }
    if(x.nome == "HP"){
        x.estoque += 4;
    }
    if(x.nome == "Acer"){
        x.estoque += 1;
    }
    if(x.nome == "Samsung"){
        x.estoque += 2;
    }
    if(x.nome == "Microsoft"){
        x.estoque += 3;
    }
    if(x.nome == "Razer"){
        x.estoque += 5;
    }
    if(x.nome == "MSI"){
        x.estoque += 2;
    }
})

console.log(marcas);

console.log("Utilize filter() para selecionar apenas as marcas com estoque maior ou igual a 7.");

let maiorOuIgualA7 = marcas.filter(x => x.estoque >= 7);
console.log(maiorOuIgualA7);

console.log("Utilize join() para exibir os nomes dessas marcas em uma única string separados por vírgula.");

let marcasComJoin = marcas.map(x => x.nome);
marcasComJoin = marcasComJoin.join(", ");
console.log(marcasComJoin);

console.log("Após atualizar os estoques com map(), utilize reduce() para calcular o estoque total de todas as marcas.");

let estoqueTotal = marcas.reduce((x, y) => x + y.estoque, 0);
console.log("Estoque Total: " + estoqueTotal);

console.log("No final, utilize push() para adicionar uma nova marca ao array atualizado. Para isso, faça um map() \nextra que simule a entrada de uma nova remessa e depois use push() para incluir a marca 'Huawei' com estoque inicial 5.");

let novaMarca = marcas.push({nome: "Huawei", estoque: 5});
console.log(marcas);
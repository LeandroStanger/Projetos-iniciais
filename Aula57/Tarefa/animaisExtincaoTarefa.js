const animaisExtincao = [
    {
        nome: 'Mico-leão-dourado',
        bioma: 'Mata Atlântica',
        quantidade: 3200,
        anoAnalise: 2025,
        percaPorAno: '320',
        quantosRestam: '2880',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Arara-azul',
        bioma: 'Pantanal',
        quantidade: 6500,
        anoAnalise: 2025,
        percaPorAno: '650',
        quantosRestam: '5850',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Lobo-guará',
        bioma: 'Cerrado',
        quantidade: 17000,
        anoAnalise: 2025,
        percaPorAno: '1700',
        quantosRestam: '15300',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Onça-pintada',
        bioma: 'Amazônia',
        quantidade: 15000,
        anoAnalise: 2025,
        percaPorAno: '1500',
        quantosRestam: '13500',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Tartaruga-de-couro',
        bioma: 'Oceano',
        quantidade: 900,
        anoAnalise: 2025,
        percaPorAno: '90',
        quantosRestam: '810',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Baleia-azul',
        bioma: 'Oceano',
        quantidade: 12000,
        anoAnalise: 2025,
        percaPorAno: '1200',
        quantosRestam: '10800',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Gorila-da-montanha',
        bioma: 'Floresta',
        quantidade: 1063,
        anoAnalise: 2025,
        percaPorAno: '106',
        quantosRestam: '957',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Tigre-de-bengala',
        bioma: 'Floresta',
        quantidade: 3900,
        anoAnalise: 2025,
        percaPorAno: '390',
        quantosRestam: '3510',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Elefante-asiático',
        bioma: 'Floresta',
        quantidade: 40000,
        anoAnalise: 2025,
        percaPorAno: '4000',
        quantosRestam: '36000',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Leopardo-das-neves',
        bioma: 'Montanhas',
        quantidade: 6500,
        anoAnalise: 2025,
        percaPorAno: '650',
        quantosRestam: '5850',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Condor-da-califórnia',
        bioma: 'Montanhas',
        quantidade: 560,
        anoAnalise: 2025,
        percaPorAno: '56',
        quantosRestam: '504',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Panda-gigante',
        bioma: 'Floresta',
        quantidade: 1864,
        anoAnalise: 2025,
        percaPorAno: '186',
        quantosRestam: '1678',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Tamanduá-bandeira',
        bioma: 'Cerrado',
        quantidade: 6000,
        anoAnalise: 2025,
        percaPorAno: '600',
        quantosRestam: '5400',
        riscoMaisGrave: '10'
    },
    {
        nome: 'Peixe-boi-amazônico',
        bioma: 'Amazônia (Rios)',
        quantidade: 8000,
        anoAnalise: 2025,
        percaPorAno: '400',
        quantosRestam: '7600',
        riscoMaisGrave: '5'
    },
    {
        nome: 'Ariranha',
        bioma: 'Pantanal',
        quantidade: 5000,
        anoAnalise: 2025,
        percaPorAno: '250',
        quantosRestam: '4750',
        riscoMaisGrave: '5'
    },
    {
        nome: 'Muriqui-do-norte',
        bioma: 'Mata Atlântica',
        quantidade: 1000,
        anoAnalise: 2025,
        percaPorAno: '50',
        quantosRestam: '950',
        riscoMaisGrave: '8'
    },
    {
        nome: 'Jacaré-do-pantanal',
        bioma: 'Pantanal',
        quantidade: 100000,
        anoAnalise: 2025,
        percaPorAno: '5000',
        quantosRestam: '95000',
        riscoMaisGrave: '3'
    },
    {
        nome: 'Tucano-toco',
        bioma: 'Cerrado',
        quantidade: 25000,
        anoAnalise: 2025,
        percaPorAno: '1250',
        quantosRestam: '23750',
        riscoMaisGrave: '4'
    },
    {
        nome: 'Pinguim-de-Magalhães',
        bioma: 'Costas Marítimas',
        quantidade: 1200000,
        anoAnalise: 2025,
        percaPorAno: '60000',
        quantosRestam: '1140000',
        riscoMaisGrave: '6'
    },
    {
        nome: 'Lobo-marinho',
        bioma: 'Costas Rochosas',
        quantidade: 300000,
        anoAnalise: 2025,
        percaPorAno: '15000',
        quantosRestam: '285000',
        riscoMaisGrave: '4'
    },
    {
        nome: 'Harpia',
        bioma: 'Amazônia',
        quantidade: 50000,
        anoAnalise: 2025,
        percaPorAno: '2500',
        quantosRestam: '47500',
        riscoMaisGrave: '7'
    },
    {
        nome: 'Sauim-de-coleira',
        bioma: 'Amazônia',
        quantidade: 2500,
        anoAnalise: 2025,
        percaPorAno: '125',
        quantosRestam: '2375',
        riscoMaisGrave: '9'
    },
    {
        nome: 'Cervo-do-pantanal',
        bioma: 'Pantanal',
        quantidade: 40000,
        anoAnalise: 2025,
        percaPorAno: '2000',
        quantosRestam: '38000',
        riscoMaisGrave: '5'
    },
    {
        nome: 'Gavião-real',
        bioma: 'Amazônia',
        quantidade: 20000,
        anoAnalise: 2025,
        percaPorAno: '1000',
        quantosRestam: '19000',
        riscoMaisGrave: '6'
    },
    {
        nome: 'Macaco-prego',
        bioma: 'Mata Atlântica',
        quantidade: 150000,
        anoAnalise: 2025,
        percaPorAno: '7500',
        quantosRestam: '142500',
        riscoMaisGrave: '3'
    },
    {
        nome: 'Boto-cor-de-rosa',
        bioma: 'Amazônia (Rios)',
        quantidade: 10000,
        anoAnalise: 2025,
        percaPorAno: '500',
        quantosRestam: '9500',
        riscoMaisGrave: '7'
    }
]

let floresta = animaisExtincao.filter((x) => x.bioma.toUpperCase() === "FLORESTA");
console.log(`A quantidade de animais filtrados`)
console.log(floresta)
console.log(`_________________________________`);

let busque = animaisExtincao.map(x => x.nome.toUpperCase());
busque = busque.includes("LEÃO");
console.log(`o resultado da verificação com includes`)
console.log(busque);
console.log(`_________________________________`);

animaisExtincao.push(    {
        nome: 'Peixe-boi-marinho',
        bioma: 'Oceano',
        quantidade: 1100,
        anoAnalise: 2026,
        percaPorAno: '150',
        quantosRestam: '950',
        riscoMaisGrave: '8'
    })
    console.log(`o nome do animal adicionado`)
    let i = animaisExtincao.length
    console.log(animaisExtincao.length);
    console.log(`_________________________________`);

    console.log(`O ano da análise desse novo registro.`);
    let anos = animaisExtincao.filter(x => x.anoAnalise === 2026);
    console.log(anos);
    console.log(`_________________________________`);

    let animais = floresta.length
    console.log(`A quantidade de animais filtrados`)
    console.log(animais);
    console.log(`_________________________________`);


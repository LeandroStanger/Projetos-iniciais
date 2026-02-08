const pets = [
    { nome: "Rex", especie: "cachorro", idade: 5, peso: 20, energia: 80 },
    { nome: "Mimi", especie: "gato", idade: 3, peso: 4, energia: 60 },
    { nome: "Thor", especie: "cachorro", idade: 8, peso: 25, energia: 90 },
    { nome: "Lola", especie: "coelho", idade: 2, peso: 2, energia: 50 },
    { nome: "Bidu", especie: "cachorro", idade: 10, peso: 18, energia: 70 }
];

function maisNovo(lista) {
    const ranking = [...lista].sort((x, y) => x.idade - y.idade);

    console.log("Aqui estão os animais mais novo!");

    ranking.forEach((id, i) => {
        console.log(`${i + 1}. Nome: ${id.nome} - Idade: ${id.idade}`);
    })
}

function maisVelho(lista) {
    const ranking = [...lista].sort((x, y) => y.idade - x.idade);

    console.log("\n\nAqui estão os animais mais velhos!");

    ranking.forEach((id, i) => {
        console.log(`${i + 1}. Nome: ${id.nome} - Idade: ${id.idade}`);
    })
}

function pesoCrescente(lista) {
    const ranking = [...lista].sort((x, y) => x.peso - y.peso);

    console.log("\n\nAqui estão os animais ordem crescente");

    ranking.forEach((c, i) => {
        console.log(`${i + 1}. Nome: ${c.nome} - Peso: ${c.peso}Kg`);
    })
}

function pesoDecrescente(lista) {
    const ranking = [...lista].sort((x, y) => y.peso - x.peso);

    console.log("\n\nAqui estão os animais ordem decrescente");

    ranking.forEach((d, i) => {
        console.log(`${i + 1}. Nome: ${d.nome} - Peso: ${d.peso}Kg`);
    })
}

function ordemAfabetica(lista) {
    const ranking = [...lista].sort((x, y) => x.nome.localeCompare(y.nome));

    console.log("\n\nAqui estão os animais ordem alfabética!");

    ranking.forEach((a, i) => {
        console.log(`${i + 1}. Nome: ${a.nome}`);
    })
}

function caoEnergia(lista) {
    const ranking = lista.filter(cao => cao.especie === "cachorro").sort((x, y) => y.energia - x.energia);

    console.log("\n\nAqui estão apenas os cachorros e ordene-os por nível de energia!");

    ranking.forEach((c, i) => {
        console.log(`${i + 1}. Nome: ${c.nome} - Energia: ${c.energia}`);
    })
}

function totalDeEngergia(lista) {
    const ranking = lista.reduce((total, y) => total + y.energia, 0);

    console.log("\n\nAqui estão apenas o total de energia!");

    console.log(`Total: ${ranking}`);

}

function mediaDeEngergia(lista) {
    const ranking = lista.reduce((total, y) => total + y.energia, 0);
    const soma = ranking / lista.length;

    console.log("\n\nAqui estão apenas o media de energia!");

    console.log(`Media: ${soma}`);
}

function animalEPeso(lista) {
    console.log("\n\nAqui estão apenas o animal e peso!");

    const ranking = lista.reduce((total, y) => {
        total[y.nome] = y.peso;
        return total
    }, {});

    console.log(ranking)
}

function primeiraLetra(lista) {
    const ranking = lista.forEach((x, i) => {
        const letras = x.nome.charAt(i[0]);
        console.log("\n\nAqui estão apenas a primeira letra!");
        console.log(`Letra: ${letras}`);
    })
}

function animalComO(lista) {
    const ranking = lista.filter(a => a?.nome?.toLowerCase().includes('o')).sort((x, y) => x.nome.localeCompare(y.nome));

    console.log("\n\nAqui estão apenas o animal com a litra O!");

    ranking.forEach((a, i) => {
        console.log(`${i + 1}. ${a.nome}`);
    })
}

function usandoTrim(lista) {
    const ranking = lista.sort((x, y) => x.nome.localeCompare(y.nome));

    console.log("\n\nAqui estão apenas usando trim!");

    ranking.forEach((t, i) => {
        let espacos = "    " + t.nome + "     "
        console.log(`\n${i + 1}. Nome: (${espacos}) - Com espaços`);
        console.log(`${i + 1}. Nome: (${espacos.trim()}) - Sem espaços`);
    })
}

function usandoSlice(lista) {
    const ranking = lista.sort((x, y) => x.nome.localeCompare(y.nome));

    console.log("\n\nAqui estão apenas usando Slice!");

    ranking.slice(0, 3).forEach((s, i) => {
        console.log(`${i + 1}. Nome: ${s.nome}`)
    })
}

function usandoLocaleCompare(lista) {
    const ranking = [...lista].sort((x, y) => x.nome.localeCompare(y.nome));

    console.log("\n\nAqui estão apenas usando localeCompare!");

    ranking.forEach((l, i) => {
        console.log(`${i + 1}. Nomes: ${l.nome}`)
    })
}

function usandopopEPush(lista) {
    const ranking = [...lista].sort((x, y) => x.nome.localeCompare(y.nome));

    console.log("\n\nAqui estão apenas usando pop e push!");

    let usandopop = ranking.pop();
    console.log(usandopop);

    let usandoPush = ranking.push({ nome: "Luna", especie: "gato", idade: 4, peso: 5, energia: 75 },
        { nome: "Bob", especie: "hamster", idade: 1, peso: 0.3, energia: 40 },
        { nome: "Nemo", especie: "peixe", idade: 2, peso: 0.2, energia: 30 },
        { nome: "Kiara", especie: "cachorro", idade: 6, peso: 22, energia: 85 },
        { nome: "Mel", especie: "gato", idade: 2, peso: 3.5, energia: 65 },
        { nome: "Jack", especie: "papagaio", idade: 15, peso: 0.8, energia: 70 },
        { nome: "Bolinha", especie: "cachorro", idade: 7, peso: 12, energia: 88 })

    console.log(`Add mais ${usandoPush}!\n`);
    console.log(ranking);
}

maisNovo(pets);
maisVelho(pets);
pesoCrescente(pets);
pesoDecrescente(pets);
ordemAfabetica(pets);
caoEnergia(pets);
totalDeEngergia(pets);
mediaDeEngergia(pets);
animalEPeso(pets);
primeiraLetra(pets);
animalComO(pets);
usandoTrim(pets);
usandoSlice(pets);
usandoLocaleCompare(pets);
usandopopEPush(pets);
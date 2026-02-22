const estacoesDoAno = [
    "Primavera",
    "Verão",
    "Outono",
    "Inverno"
];

if (estacoesDoAno.find((x) => x.toUpperCase() === "VERÃO") &&
    estacoesDoAno.find((x) => x.toUpperCase() === "OUTONO") &&
    estacoesDoAno.find((x) => x.toUpperCase() === "PRIMAVERA") &&
    estacoesDoAno.find((x) => x.toUpperCase() === "INVERNO")
) {
    console.log(`🌞 Verão aquece os dias, 🍂 Outono colore as folhas, 🌸 Primavera floresce os campos e ❄ Inverno traz
aconchego.`);
} else {
    console.log(`Cada estação revela um capítulo encantador no livro da natureza.`)
};
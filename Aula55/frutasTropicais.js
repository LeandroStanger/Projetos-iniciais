const frutasTropicais = [
  "Abacaxi",
  "Manga",
  "Maracujá",
  "Caju",
  "Goiaba",
  "Acerola",
  "Coco",
  "Jabuticaba",
  "Pitanga",
  "Graviola",
  "Fruta-do-conde",
  "Carambola",
  "Cupuaçu",
  "Açaí",
  "Pitaya",
  "Lichia",
  "Rambutã",
  "Mangostin",
  "Jaca",
  "Pupunha",
  "Bacuri",
  "Murici",
  "Buriti",
  "Pequi",
  "Umbu",
  "Siriguela",
  "Cajarana",
  "Jenipapo",
  "Araçá",
  "Guaraná",
  "Banana"
];



if (frutasTropicais.find((x) => x.toUpperCase() === "MANGA") &&
  frutasTropicais.find((x) => x.toUpperCase() === "ABACAXI") &&
  frutasTropicais.find((x) => x.toUpperCase() === "BANANA")) {
  console.log(`A combinação de Manga, Abacaxi e Banana forma um banquete tropical cheio de frescor e alegria.`)
}else(
  console.log(`Cada fruta escolhida traz sua própria doçura e encanto para a mesa.`)
);
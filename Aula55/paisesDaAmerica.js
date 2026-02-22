const paisesDaAmerica = [
    "Antígua e Barbuda",
    "Argentina",
    "Bahamas",
    "Barbados",
    "Belize",
    "Bolívia",
    "Brasil",
    "Canadá",
    "Chile",
    "Colômbia",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "El Salvador",
    "Equador",
    "Estados Unidos",
    "Granada",
    "Guatemala",
    "Guiana",
    "Haiti",
    "Honduras",
    "Jamaica",
    "México",
    "Nicarágua",
    "Panamá",
    "Paraguai",
    "Peru",
    "República Dominicana",
    "Santa Lúcia",
    "São Cristóvão e Neves",
    "São Vicente e Granadinas",
    "Suriname",
    "Trinidad e Tobago",
    "Uruguai",
    "Venezuela"
];

if (paisesDaAmerica.find((x) => x.toUpperCase() === "BRASIL") &&
    paisesDaAmerica.find((x) => x.toUpperCase() === "ARGENTINA") &&
    paisesDaAmerica.find((x) => x.toUpperCase() === "CHILE") &&
    paisesDaAmerica.find((x) => x.toUpperCase() === "URUGUAI") &&
    paisesDaAmerica.find((x) => x.toUpperCase() === "PARAGUAI")
) {
    console.log(`Brasil, Argentina, Chile, Uruguai e Paraguai: uma jornada completa pela alma vibrante da América do Sul.`)
} else {
    console.log(`Cada país escolhido revela culturas únicas e paisagens inesquecíveis.`)
}
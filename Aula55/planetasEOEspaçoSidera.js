let planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão", "Lua"];



if(planetas.find((x) => x.toUpperCase().includes("TERRA")) &&
planetas.find((x) => x.toUpperCase().includes("MARTE")) &&
planetas.find((x) => x.toUpperCase().includes("JÚPITER"))){
    console.log(`Terra, Marte e Júpiter brilham como joias no infinito, revelando a grandeza do universo.`);
}else{
    console.log(`Cada planeta guarda mistérios que inspiram sonhos e descobertas.`);
}
let minusculas = planetas.map(x => x.toLowerCase());

console.log(`\n\n ${minusculas.toString()}`);
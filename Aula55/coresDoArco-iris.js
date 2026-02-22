const coresArcoIris = [
  "Vermelho",
  "Laranja",
  "Amarelo",
  "Verde",
  "Azul",
  "Anil",
  "Violeta"
];

if(coresArcoIris.find((x) => x.toUpperCase() === "VERMELHO") && 
coresArcoIris.find((x) => x.toUpperCase() === "LARANJA") && 
coresArcoIris.find((x) => x.toUpperCase() === "VERDE") && 
coresArcoIris.find((x) => x.toUpperCase() === "AZUL")){
    console.log(`As cores Vermelho, Laranja, Verde e Azul se unem em um arco-íris que ilumina o horizonte.`);
}else{
    console.log(`Cada cor escolhida pinta o mundo com sua própria beleza e intensidade.`)
};
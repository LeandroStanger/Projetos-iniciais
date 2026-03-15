const dados = [
  { cidade: "São Paulo", temperatura: 26 },
  { cidade: "Rio de Janeiro", temperatura: 28 },
  { cidade: "Curitiba", temperatura: 22 },
  { cidade: "Manaus", temperatura: 30 }
];

console.log("Celsius para Fahrenheit");

let temperatura = dados.map(x => (x.temperatura * (9/5) + 32).toFixed(2));

console.log(temperatura);

console.log(`___________________________________________`);

console.log("Calcular a média geral das temperaturas em Celsius.");

let media = dados.reduce((x, y) => x + y.temperatura, 0);
media = media / dados.length
console.log(media)

console.log(`___________________________________________`);

console.log("Verificar se alguma cidade específica está presente na lista.")

let busca = dados.map(x => x.cidade.toUpperCase())
busca = busca.includes("SÃO PAULO")

if(busca === true){
  console.log(`A cidade de São Paulo foi encontrada.`)
}else{
  console.log(`A cidade de São Paulo não foi encontrada.`)
}

console.log(`___________________________________________`);

console.log(`Se a média geral for maior que 25°C, mostre "Aquecimento global em alerta!".`)
if(media > 25){
  console.log(`Aquecimento global em alerta!`)
}else{
  console.log(`Temperatura dentro da média`)
}
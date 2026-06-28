const peixesCapturados = [
  { nome: "Tilápia", peso: 1.2 },
  { nome: "Tucunaré", peso: 2.5 },
  { nome: "Pintado", peso: 3.8 },
  { nome: "Dourado", peso: 4.2 },
  { nome: "Piraíba", peso: 15.0 },
  { nome: "Matrinxã", peso: 0.9 },
  { nome: "Traíra", peso: 1.5 },
  { nome: "Cachorra", peso: 2.1 },
  { nome: "Jurupensém", peso: 3.0 }
];

console.log(`Verificar se o peixe "Tucunaré" está na lista usando .includes().`);
let busca = peixesCapturados.map(x => x.nome.toUpperCase());
console.log(busca);
let busca2 = busca.includes("TUCUNARÉ");
console.log(busca2);
console.log(`_________________________________`);

console.log(`Usar .reduce() para calcular o peso total da pescaria.`);
let pesoTotal = peixesCapturados.reduce((x, y) => x + y.peso, 0);
console.log(`Peso Total: ${pesoTotal} Kg`);
console.log(`_________________________________`);

console.log(`Criar um array vazio e ir adicionando novos peixes com .push().`);
let novosPeixes = peixesCapturados.push( { nome: "Pirapitinga", peso: 2.3 },
  { nome: "Surubim", peso: 5.1 },
  { nome: "Corvina", peso: 1.8 },
  { nome: "Pacu", peso: 2.7 },
  { nome: "Barbado", peso: 4.5 },
  { nome: "Jundiá", peso: 1.1 },
  { nome: "Curimatã", peso: 0.6 },
  { nome: "Cascudo", peso: 0.8 });
  console.log(peixesCapturados);
  console.log(`_________________________________`);

pesoTotal = peixesCapturados.reduce((x, y) => x + y.peso, 0);

console.log(`Peso Total: ${pesoTotal} Kg`);

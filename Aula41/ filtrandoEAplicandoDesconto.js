let precos = [25, 55, 78, 32, 100];

let maiorDe50 = precos.filter(x => x > 50);
let desconto10 = maiorDe50.map(x => x * 0.9);

console.log(desconto10)
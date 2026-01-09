
function calcularMedia(){
let avaliacoes = [8, 9, 7, 10, 6, 9];

let notas = avaliacoes.reduce((acumulador, valor) => acumulador + valor, 0)
let soma = (notas / avaliacoes.length).toFixed(2)

if(soma >= 8){
    console.log( "Atendimento excelente! Clientes muito satisfeitos.")
}else if(soma <= 7.99){
    console.log("Atendimento bom, mas pode melhorar.")
}else if(soma < 6){
    console.log("Atenção! É necessário melhorar a qualidade do atendimento.")
}

let clientes = avaliacoes.length

console.log(soma)
}

calcularMedia()
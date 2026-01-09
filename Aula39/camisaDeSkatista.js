let carteiraCliente = 400
let quantidadeDeCamisa = 2
let valor_Camisa = 200
let valorTroco = carteiraCliente - (valor_Camisa * quantidadeDeCamisa)
let estoque = 3

if(carteiraCliente >= (valor_Camisa * quantidadeDeCamisa) && estoque >= quantidadeDeCamisa && (valorTroco >= 1)){
    console.log(`O cliente tem dinheiro suficente mais tem troco R$: ${valorTroco}. Tem no estoque!`)
}else if((valor_Camisa * quantidadeDeCamisa) - carteiraCliente == 0 && estoque >= quantidadeDeCamisa){
    console.log(`O cliente tem dinheiro suficente mais não tem troco. Tem no estoque!`)
}else if(carteiraCliente < (valor_Camisa * quantidadeDeCamisa)){
    console.log(`O cliente não tem dinheiro suficiente.`)
}else if(carteiraCliente >= (valor_Camisa * estoque) && estoque < quantidadeDeCamisa){
    console.log(`O cliente tem dinheiro suficente, mas não há estoque suficiente.`)
}else{
    console.log(`Digite valores validos!`)
}
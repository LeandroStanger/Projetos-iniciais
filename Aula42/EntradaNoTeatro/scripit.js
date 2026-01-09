document.addEventListener(`DOMContentLoaded`, () => {
    const btnClick = document.getElementById('button');
});

const idade = parseFloat(document.getElementById("entradaNoTeatro").value);
const ingresso = parseFloat.getElementById("ingresso").value ==="true";
const adulto = parseFloat.getElementById("adulto").value ==="true";
const menores = parseFloat.getElementById("menores").value ==="true";

let recomendacaoFinal = "";


    if(ingresso === false){
      recomendacaoFinal = "Entrada não permitida. É necessário possuir ingresso.";
    }else if(ingresso === true && idade < 12){
        recomendacaoFinal = "Entrada permitida apenas acompanhado de um responsável.";
    }else if(ingresso === true && idade >= 12 && idade <= 17){
        recomendacaoFinal = "Entrada permitida para menores, aproveite o espetáculo!";
    }else if(ingresso === true && idade >= 18){
        recomendacaoFinal = "Entrada liberada. Boa sessão!"
}

const saida = document.getElementById("saida");
saida.innerHTML = `${recomendacaoFinal}`;

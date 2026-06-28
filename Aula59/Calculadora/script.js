let tela = document.getElementById("tela");

function adicionar(valor){
if(tela.value === "Erro"){
    limpar()
}

if(valor === '%'){
    aplicarPorcentagem();
    return;
}

const ultimoChar = tela.value.slice(-1);
const operadores = ['+', '-', '*', '/'];

if(operadores.includes(ultimoChar) && operadores.includes(valor)){
    tela.value = tela.value.slice(0, -1) + valor;
    return;
}

tela.value += valor;
}

function calcular(){
let expressao = tela.value;

if(expressao === "" || expressao === "Erro"){
    tela.value = "Erro";
    return;
}

const operadores = ['+', '-', '*', '/'];
let ultimo = expressao.slice(-1);

if(operadores.includes(ultimo)){
    expressao = expressao.slice(0, -1);
}

try{
    let resultado = eval(expressao);
    if(isNaN(resultado) || !isFinite(resultado)){
        tela.value = "Erro";
    }else{
        if(Number.isInteger(resultado)){
            tela.value = resultado;
        }else{
            tela.value = parseFloat(resultado.toFixed(8));
        }
    }
} catch(erro){
    tela.value = "Erro";
}
}

function limpar(){
tela.value = "";
}

function apagarUltimo(){
    if(tela.value === "Erro"){
        limpar()
        return;
    }
    tela.value = tela.value.slice(0, -1);
}

function aplicarPorcentagem(){
    let expressao = tela.value;
    if(expressao === "" || expressao === "Erro") return;

    let match = expressao.match(/([\d\.]+)(?!.*[\d\.])/);
    if(!match) return;

    let ultimoNumero = parseFloat(match[1]);
    if(isNaN(ultimoNumero)) return;

    let partes = expressao.split(/([+\-*/])/);
    let ultimoOperador = null;
    for(let i = partes.length - 2; i >= 0; i--){
        if(partes[i] === '+' || partes[i] === '-' || partes[i] === '*' || partes[i] === '/'){
            ultimoOperador = partes[i];
            break;
        }
    }

    let resultadoPorcentagem;
    if(ultimoOperador === '+' || ultimoOperador === '-'){
        let primeiroNumeroMatch = expressao.match(/(\d+\.?\d*)/);
        let primeiroNumero = primeiroNumeroMatch ? parseFloat(primeiroNumeroMatch[1]) : 0;
        resultadoPorcentagem = (primeiroNumero * ultimoNumero) / 100;
    }else if(ultimoOperador === '*' || ultimoOperador === '/'){
        resultadoPorcentagem = ultimoNumero / 100;
    }else{
        resultadoPorcentagem = ultimoNumero / 100;
    }

    let ultimoNumeroStr = match[1];
    let novoValor = resultadoPorcentagem.toString();
    tela.value = expressao.slice(0, match.index) + novoValor + expressao.slice(match.index + ultimoNumeroStr.length);
}
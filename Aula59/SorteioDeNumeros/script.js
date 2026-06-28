let sortearBtn = document.getElementById("sortearBtn");
let outputEl = document.getElementById("output");
let form = document.getElementById("numeroDoUsuario");
let numero = document.getElementById("numero");


form.addEventListener("submit", function (event) {
    event.preventDefault();
})

sortearBtn.addEventListener("click", () => {
    outputEl.textContent = "";


    let valorDigitado = parseInt(numero.value, 10);

    let sorteio = Math.floor(Math.random() * (valorDigitado + 1 || 100 + 1));
    outputEl.textContent = sorteio;
})

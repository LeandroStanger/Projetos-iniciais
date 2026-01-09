let animais = JSON.parse(localStorage.getItem('animais')) || [];

document.getElementById("addBtn").addEventListener("click", function() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;


    if(nome === "" || idade === "") {
        alert("Preencha os dois campos!");
        return;
    }

    animais.push({nome: nome, idade: idade});

    localStorage.setItem("animais", JSON.stringify(animais));

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    
    alert("Animal adicinado!");
});

document.getElementById("mostrarBtn").addEventListener("click",
    function(){
        let texto = "Lista de animais:\n";
        animais.forEach(a => {
            texto +=`Nome: ${a.nome} - Idade: ${a.idade} anos\n`;
        });
        document.getElementById("saida").textContent = texto;
    });
        document.getElementById("resetBtn").addEventListener("click", function()
        {
        animais = [];
        localStorage.removeItem("animais");
        document.getElementById("saida").textContent = "";
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        alert(`Dados removidos!`)
    });
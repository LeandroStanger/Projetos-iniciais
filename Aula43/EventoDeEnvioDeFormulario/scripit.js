function evento() {
    let evento = JSON.parse(localStorage.getItem('evento')) || [];

    document.getElementById("button1").addEventListener("click", function () {
        let nomeinput = document.getElementById("nome");
        let emailinput = document.getElementById("email");

        let nome = nomeinput.value.trim();
        let email = emailinput.value.trim();

        if (nome === "" || email === "") {
            alert(`Preencha os dois campos!`)
            return;
        }
        evento.push({ nome: nome, email: email });

        localStorage.getItem("evento", JSON.stringify(evento));

        nomeinput.value = "";
        emailinput.value = "";

        alert("Formulário evialdo!");

        atualizarLista(evento);

        if(evento.length > 0){
            atualizarLista(evento)
        }
function atualizarLista(evento){
        let texto = (`Lista:\n`);
        evento.forEach(e => {
            texto += `Nome: ${e.nome}, E-mail: ${e.email}`

            document.getElementById("saida").textContent = texto;
        });
    }
    });

}
evento()
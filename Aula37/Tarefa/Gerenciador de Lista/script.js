let registros = JSON.parse(localStorage.getItem('registros')) || [];

function atualizarLista() {
    let lista = document.getElementById('saida');
    lista.innerHTML = '';
    
    if (registros.length === 0) {
        lista.innerHTML = '<p class="sem-registros">Nenhum registro cadastrado.</p>';
        return;
    }
    
    registros.forEach((registro, index) => {
        let divRegistro = document.createElement('div');
        divRegistro.className = 'registro';
        
        let divInfo = document.createElement('div');
        divInfo.className = 'registro-info';
        
        let nome = document.createElement('div');
        nome.className = 'registro-nome';
        nome.textContent = registro.nome;
        
        let detalhes = document.createElement('div');
        detalhes.className = 'registro-detalhes';
        detalhes.textContent = `E-mail: ${registro.email} | Idade: ${registro.idade} | Cidade: ${registro.cidade} | Telefone: ${registro.telefone}`;
        
        divInfo.appendChild(nome);
        divInfo.appendChild(detalhes);
        
        let divAcoes = document.createElement('div');
        divAcoes.className = 'registro-acoes';
        
        let btnEditar = document.createElement('button');
        btnEditar.className = 'btn-editar';
        btnEditar.textContent = 'Editar';
        btnEditar.addEventListener('click', () => editarRegistro(index));
        
        let btnRemover = document.createElement('button');
        btnRemover.className = 'btn-remover';
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', () => removerRegistro(index));
        
        divAcoes.appendChild(btnEditar);
        divAcoes.appendChild(btnRemover);
        
        divRegistro.appendChild(divInfo);
        divRegistro.appendChild(divAcoes);
        
        lista.appendChild(divRegistro);
    });
}

function editarRegistro(index) {
    let registro = registros[index];
    
    let novoNome = prompt('Editar nome:', registro.nome);
    if (novoNome === null) return; 
    
    let novoEmail = prompt('Editar e-mail:', registro.email);
    if (novoEmail === null) return;
    
    let novaIdade = prompt('Editar idade:', registro.idade);
    if (novaIdade === null) return;
    
    let novaCidade = prompt('Editar cidade:', registro.cidade);
    if (novaCidade === null) return;
    
    let novoTelefone = prompt('Editar telefone:', registro.telefone);
    if (novoTelefone === null) return;
    
    registros[index] = {
        nome: novoNome,
        email: novoEmail,
        idade: novaIdade,
        cidade: novaCidade,
        telefone: novoTelefone
    };
    
    localStorage.setItem('registros', JSON.stringify(registros));
    
    atualizarLista();
    
    alert('Registro atualizado com sucesso!');
}

function removerRegistro(index) {
    let confirmacao = confirm('Tem certeza que deseja remover este registro?');
    
    if (confirmacao) {
        registros.splice(index, 1);
        
        localStorage.setItem('registros', JSON.stringify(registros));
        
        atualizarLista();
        
        alert('Registro removido com sucesso!');
    }
}

document.getElementById("addBtn").addEventListener("click", function(){
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = document.getElementById("idade").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let telefone = document.getElementById("telefone").value.trim();

    if(nome === "" || email === "" || idade === "" || cidade === "" || telefone === ""){
        alert("Preencha todos os cinco campos!");
        return;
    }

    registros.push({
        nome: nome, 
        email: email, 
        idade: idade, 
        cidade: cidade, 
        telefone: telefone
    });

    localStorage.setItem("registros", JSON.stringify(registros));

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("telefone").value = "";

    alert("Registro cadastrado com sucesso!");

    atualizarLista();
});

document.addEventListener('DOMContentLoaded', atualizarLista);
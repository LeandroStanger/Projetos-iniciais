document.getElementById('evento04').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        document.getElementById('resultado2').textContent = `Você clicou no: ${event.target.textContent}`;
    };
});

document.getElementById('evento04').addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'LI') {
        document.getElementById('resultado').textContent = `Você está pasando o mause aqui!!!`;
    };
});


let posicao = 0;
let movimento;

function mover(){
    if(!movimento){
        movimento = setInterval(() => {
            posicao += 5;
            document.getElementById("carro").style.left = posicao + "px";

            if(posicao > window.innerWidth){
                posicao = -100;
            }
        }, 20);
    }
}
function parar() {
    clearInterval(movimento);
    movimento = null;
}

document.getElementById('contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        window.location.href = 'obrigado.html#obrigado';
    }).catch(error => {
        console.error('Erro:', error);
    });
});
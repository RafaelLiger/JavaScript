let idade = document.querySelector('#idade')
let nome = document.querySelector('#nome')

function confirmar() {
    
    if (idade.value.length == 0 || nome.value.length == 0) {
        alert('Digite seu nome e sua idade!')

    }
}
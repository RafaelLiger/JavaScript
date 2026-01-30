let idade = document.querySelector('#idade')
let nome = document.querySelector('#nome')
let res = document.querySelector('#res')
function confirmar() {
    
    if (idade.value.length == 0 || nome.value.length == 0) {
        alert('Digite seu nome e sua idade!')

    }else{
        let n = nome.value
        let id = Number(idade.value)
        res.innerHTML = `Olá ${n} você tem ${id} anos de idade`
    }
}
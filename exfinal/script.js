let num = document.querySelector('#txtnum')
let add = document.querySelector('#adicionar')
let caixa = document.querySelector('#caixanum')
let final = document.querySelector('#finalizar')
let res = document.querySelector('#res')
add.addEventListener('click', adicionar)
final.addEventListener('click', finalizar)
let valores = []

function isnumber(n){
    if(Number(n) >=1  && Number(n) <=100 ) {
        return true
    } else {
        return false
    }    
}
function incaixa (n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}    




function adicionar(){
    if(isnumber(num.value) && !incaixa(num.value, valores)) {
        valores.push(Number(num.value))
        //adiciona o valor na lista
         let item = document.createElement('option')
         item.text = `Valor ${num.value} adicionado.`
         caixa.appendChild(item)
         res.innerHTML = ''

    }else{
        alert('valor inválido ou já foi encontrado na lista')
    }
}
function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    

    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior)
        maior = valores[pos]
      if (valores[pos] < menor)
        menor = valores[pos]
    }
    num.value = ''
    num.focus()

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
  }
}

let vet = [3, 2 , 5 , 7, 8, 4]
console.log(vet.length)
vet.sort((a, b) => a - b)
console.log(vet)
let soma = 0

let maior =  vet[0]
let menor = vet[0]

for (let pos in vet){
    soma += vet[pos]
    if ( vet[pos] > maior){
        maior = vet[pos]   
    }
    if( vet[pos] < menor ) {
        menor = vet[pos]    
    }
}
let media = soma / vet.length

console.log(`O valor maior foi ${maior}`)
console.log(`O valor menor foi ${menor}`)
console.log(`O valor da soma foi ${soma}`)
console.log(`O valor da media foi ${media.toFixed(2)}`)


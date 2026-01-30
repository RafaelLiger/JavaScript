let vet = [1, 2 ,3 , 5, 8]
console.log(vet)
console.log(vet.length)

let maior =  vet[0]

for (let pos =0; pos < vet.length; pos++){
    if ( pos > maior){
        maior = pos
    }    
}
console.log
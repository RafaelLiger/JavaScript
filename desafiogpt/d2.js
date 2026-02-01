
function parimpar (vet) {
    let par = 0
    let impar = 0
    for(let pos in vet) {
        if(vet[pos]%2 == 0){
            par++
        }else{
            impar++
        }

    }
    
    
    return{
        par : par,
        impar : impar
        
    }
}
let vet = [1,2,3,44,5,6]
let resultado = parimpar(vet)

console.log(resultado)
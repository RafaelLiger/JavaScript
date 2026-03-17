/* Livro JS - Capítulo 1

let y = 3
function plus1 (x) {
    return x + 1
}
let square = function (x) {
    return x * x
}
console.log(square(plus1(y)))
*/

//  Aqui temos o mesmo codigo que o de cima mas está simplificado usando funções setas (arrow function) 
let y = 3
const plus1 = x => x + 1
const square = x => x * x
console.log(square(plus1(y))) 
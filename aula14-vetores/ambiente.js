let num = [5,8,2,9,3,40]
num.push(1)
/*Se o resultado da função for negativo (), significa que  deve vir antes de .
• 	Se o resultado for positivo (), significa que  deve vir depois de .
• 	Se o resultado for zero (), significa que são considerados iguais e não muda a ordem.

num.sort(function(a, b){
    return a - b 
}) */
//abaixo a mesma função em arrow function
num.sort((a, b) => a - b)
console.log(num)
console.log(`O valor tem ${num.length} posições`)
console.log (`O primeiro valor do vetor é ${num[0]}`)
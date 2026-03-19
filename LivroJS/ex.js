let contagem = {}
let texto = "banana"

for (let letra of texto) {
    if (contagem[letra]) {
        contagem[letra]++
    }else {
        contagem[letra] = 1 
    }
}
for (let letra in contagem) {
    console.log(letra + ":" + "#".repeat(contagem[letra]))
}

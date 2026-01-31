
function analisar(vet) {
    let soma = 0
    let maior = vet[0]
    let menor = vet[0]

    for (let pos in vet) {
        soma += vet[pos]

        if (vet[pos] > maior) {
            maior = vet[pos]
        }

        if (vet[pos] < menor) {
            menor = vet[pos]
        }
    }

    let media = soma / vet.length

    return {
        maior: maior,
        menor: menor,
        soma: soma,
        media: media.toFixed(2)
    }
}
let numeros = [3, 2, 5, 7, 8, 4]
let resultado = analisar(numeros)

console.log(resultado)

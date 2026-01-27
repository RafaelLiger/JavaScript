let valores = [9,4,3,8,1]

/*for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */


// versão simplificada, só funcina em vetores e objetos    
for(let pos in valores) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let pos = valores.indexOf(9) //retorna a posição do valor selecionado
console.log(`O valor esta na posição ${pos} `)
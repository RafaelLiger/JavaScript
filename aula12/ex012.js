var agora = new Date() //pega infomaçoes do relogo e calendario do sistema
var hs = agora.getHours()// seleciona a hora do sistema
console.log(`Agora são exatamente ${hs} horas.`)
if (hs < 12) {
    console.log('Bom dia!')
}else if (hs <= 18) {
    console.log('Boa tarde!')
}else {
    console.log('Boa noite!')
}
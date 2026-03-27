let tdado = document.querySelector("#tdado")
let resul = document.querySelector("#resul")
let heroi = document.querySelector("#heroi")
let boss =  document.querySelector("#inimigo")
let turno = "jogador"
let critico = 4

const jogador = {
    nome: "heroi",
    vida: 100,
    ataque: 10

}
const inimigo =  {
    nome: "inimigo",
    vida: 100,
    ataque: 20
}
function atualizarTela() {
  heroi.innerHTML = `😬 = ${jogador.vida.toFixed()}`
  boss.innerHTML = `👿 = ${inimigo.vida.toFixed()}`
}
function atacar() {
    tdado.innerHTML = ""
    if(jogador.vida <= 0 || inimigo.vida <= 0) {
        resul.innerHTML = "O jogo acabou"
        return
    }

    let dano = Math.floor(Math.random()*10) + 1;

    if(dano === 5){
        dano *= critico
        tdado.innerHTML = `DANO CRÍTICO!`
    }
    
    if(turno === "jogador"){
        inimigo.vida -= dano
        turno = "inimigo"
        resul.innerHTML = `<p> heroi deu ${dano.toFixed()} de dano!`
    }else {
        jogador.vida -= dano
        turno = "jogador"
        resul.innerHTML = `<p> inimigo deu ${dano.toFixed()} de dano!`
    }
    atualizarTela()

    if(jogador.vida <= 0){
        heroi.innerHTML = `💀 = ${jogador.vida.toFixed()} => Você se fodeu!`
    }
    if(inimigo.vida <= 0) {
        boss.innerHTML = `💀 = ${inimigo.vida.toFixed()} => Você fodeu ele!`
    }
}     

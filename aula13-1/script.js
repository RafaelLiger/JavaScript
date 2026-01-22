function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    
    if (fano.value.length == 0 || Number(fano.value) < 1900 || Number(fano.value) > ano) {
        res.innerHTML = 'Esta tentando me tapear?'
        var img =document.createElement('img') // cria uma img no html
        img.setAttribute('id', 'foto')// cria um id="foto" no img
        img.setAttribute('src', 'imagens/erro.gif')
        document.body.style.background ='black'
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img =document.createElement('img') // cria uma img no html
        img.setAttribute('id', 'foto')// cria um id="foto" no img
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.png')// adiciona a imagem
            }else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mjovem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menina.png')
            }else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/fjovem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        res.appendChild(img)
        document.body.style.background ='#09678b'
    }
    res.appendChild(img)
    
}
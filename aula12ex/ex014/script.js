function carregar() {
var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('foto')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

msg.innerHTML = `Agora: ${hora}:${min.toString().padStart(2, '0')}` // converte o numero em string e depois adiciona um 0 na frente dele se for menor que 2 casas

if (hora >= 6 && hora < 12){
    // BOM DIA
    imagem.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18){
    // BOA TARDE
    imagem.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
} else if (hora >= 18 && hora < 23){
    // BOA NOITE
    imagem.src = 'fotonoite.png'
    //document.body.style.background = '#000000'
    document.body.style.background = '#515154'
} else {
    // BOA MADRUGADA
    imagem.src = 'fotomadrugada.png'
    document.body.style.background = '#000000'
}
}

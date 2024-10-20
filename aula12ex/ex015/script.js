res.style.textAlign = 'center'

function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   

   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    //window.alert('Tudo ok!')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    //res.innerHTML = `Idade calculada ${idade}`
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src', 'meninonene.png')
        }else if(idade < 21){
            // Jovem
            img.setAttribute('src', 'homenjovem.png')
        }else if(idade < 50){
            // Adulto
            img.setAttribute('src', 'homenadulto.png')
        }else{
            // Idoso
            img.setAttribute('src', 'homenidoso.png')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src', 'meninanene.png')
        }else if(idade < 21){
            // Jovem
            img.setAttribute('src', 'mulherjovem.png')
        }else if(idade < 50){
            // Adulto
            img.setAttribute('src', 'mulheradulta.png')
        }else{
            // Idoso
            img.setAttribute('src', 'mulheridosa.png')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.</p>`
    res.appendChild(img)
   }
}
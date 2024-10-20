var inicio = window.document.getElementById('inicio');
var contador = window.document.getElementById('intervalo');
var final = window.document.getElementById('final');
var res = window.document.getElementById('resultado');


function contar(){
    var ini = Number(inicio.value)
    var cont = Number(contador.value)
    var fim = Number(final.value)

    if (ini == null || cont == null || fim == null) {
        alert("[ERRO] PREENCHA TODOS OS CAMPOS!")
    }
    
    else if(ini > fim){
        alert('[ERRO] Valor inicial maior que o valor final!')
    }
    
    else if(ini < 0){
        alert('[ERRO] Valor inicial deve ser maior ou igual a 0!')
    }
    
    else if(cont <= 0){
        alert('[ERRO] O intervalo de contagem deve ser maior que 0!')
        alert('[ERRO] Vamos considerar o intervalo como 1')

        res.innerHTML = "<p> O resultado da sua contage: </p>"
        let c = ini
        let soma = ini
        var cont = 1

        while(c <= fim){
            res.innerHTML += `Passo ${soma}...<br>`
            soma = soma + cont
            c = c + cont
        }
    }
    
    else if(cont >= fim){
        alert('[ERRO] O intervalo de contagem deve ser diferente e menor que o valor final')

    }else{
        res.innerHTML = "<p> O resultado da sua contage: </p>"
        let c = ini
        let soma = ini

        while(c <= fim){
            res.innerHTML += `Passo ${soma}...<br>`
            soma = soma + cont
            c = c + cont
        }
    }

    
}

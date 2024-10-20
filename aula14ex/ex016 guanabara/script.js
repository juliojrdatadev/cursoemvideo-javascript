function contar(){
    let inicio = document.getElementById('inicio') // importação do input html id inicio
    let intervalo = document.getElementById('intervalo') // importação do input html id intervalo
    let final = document.getElementById('final') // importação do input html id final
    let res = document.getElementById('resultado') // input do paragrafo html id resultado

    // conferindo SE todos os inputs estão preenchidos (valores maiores que 0)
    if(inicio.value.length == 0 || intervalo.value.length == 0 || final.value.length == 0){
        // SE NÃO - alerta para preencher todos os campos
        res.innerHTML = `Impossivel contar...`
        window.alert('[ERRO!] Preencha TODOS os campos para prosseguir...')
    }else{
        // se todos os inpits estiverem preenchidos...
        res.innerHTML = `Contando: <br>` // adiciona a palavra no paragrafo html resultado importado para o js com a variavel "res"
        let ini = Number(inicio.value) 
        let int = Number(intervalo.value)
        let fim = Number(final.value)
        // trazendo os valores inseridos nos inputs html e declarando que são do tipo number

        if(int <= 0){ // SE o intervalo for menor ou = a 0
            window.alert('[ATENÇÃO!] Intervalo invalido, vamos considerar como valor 1...')
            int = 1 // intervalo recebe o valor 1
        }

        if(ini < fim){ // Contagem crescente - SE valor inicial MAIOR que valor final
            for(var c = ini; c <= fim; c += int) { // para(variavel c =recebe= valor inicial; enquanto var c <menor ou igual= ao valor final; então var c =recebe= soma var c + valor intervalo )
                res.innerHTML += `${c} \u{1F449} ` // apresenta o valor sa soma a cada looping
            }
            res.innerHTML += `\u{1F3C1}`
        }else if(ini > fim){ // Contagem decrescente - SENÃO SE valor inicial MENOR que valor final
            for(var c = ini; c >= fim; c -= int) { // para(variavel c =recebe= valor inicial; enquanto var c >maior ou igual= ao valor final; então var c =recebe= subtração var c - valor intervalo )
                res.innerHTML += `${c} \u{1F449} ` // apresenta o resultado da subtração a cada looping
            }
            res.innerHTML += `\u{1F3C1}`
        }else{ // Erro
            window.alert('[ERRO!] O valor inicial deve ser diferente do valor final!') // SENÃO - valor inicial igual ao valor final.
        }
    }

}
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    // se o valor (n) for maior igual a 1 ee menor igual a 100
    // ok, valido, verdadeiro, está valore entre 1 e 100
    // senão, invalido, falso, valor não está na escala entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
         return true
    } else {
        return false
    }
}

function inLista(n, l) {
    // se na lista (l) a posição do valor (n) for diferente de -1 (fora do intervalo 0 a 100)
    // ok, invalido, verdadeiro, valor já existe na lista
    // senao, valido, falso, valor ainda não existe na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {

    if(isNumero(num.value) && !inLista(num.value, valores)){
        //se o teste da função siNumero der true e o teste da função inLista for diferente de true(no caso false), segue o codigo...

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        //se o teste da função siNumero der false e o teste da função inLista for true,... 
        window.alert('Valor invalido ou já presente na lista.')
    }
    num.value = ''
    num.focus() //dá foco para o cursor de texo para o item ou campo
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione algum valor antes de finalizar!')
    } else {
        let tot = valores.length
        //let maior = Number(Math.max(...valores))
        //let menor = Number(Math.min(...valores))
        //let soma = valores.reduce((contador, valorAtual) => contador+valorAtual, 0)
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma = soma + valores[pos]
            media = soma / tot
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${tot} números cadastrados.<br>`
        res.innerHTML += `O Maior valor cadastrado é ${maior}<br>`
        res.innerHTML += `O Menor valor cadastrado é ${menor}<br>`
        res.innerHTML += `A soma de todos os valores é ${soma}<br>`
        res.innerHTML += `A média dos valores informados é ${media}<br>`

    }

}

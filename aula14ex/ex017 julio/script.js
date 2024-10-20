function calcular(){
    
    const valor = document.getElementById('tabuada')
    const res = document.getElementById('resultado')
    var cont = 1

    let num = (valor.value)

    res.innerHTML = `` //limpar tela

    while(cont <= 10){
        var calc = Number(num*cont)
        res.innerHTML += `${cont} x ${num} = ${calc}<br>`
        cont = cont + 1
    }
}
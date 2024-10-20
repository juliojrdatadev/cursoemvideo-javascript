
function limpaTela() {
    document.getElementById('divResFim').innerHTML = ' '
}

// função para finalizar e mostrar resultados

function finalizar() {

    limpaTela()

    if(numLista.length == 0){
        window.alert('[ERRO!] Não á valores informados ainda...')
    } else {
    var p1 = document.createElement('p')
    p1.setAttribute('id','p1')
    divResFim.appendChild(p1)
    p1.textContent = `Ao todo, temos ${numLista.length} números cadastrados.`
    //mostra a quandidade de valores armazenados dentro do array
    
    var p2 = document.createElement('p')
    p2.setAttribute('id','p2')
    divResFim.appendChild(p2)
    let maiorValor = Number(Math.max(...numLista)) // mostra o valor maior
    p2.textContent = `O MAIOR valor informado foi ${maiorValor}.`
    
    var p3 = document.createElement('p')
    p3.setAttribute('id','p3')
    divResFim.appendChild(p3)
    let menorValor = Number(Math.min(...numLista)) // mostra o valor menor
    p3.textContent = `O MENOR valor informado foi ${menorValor}.`

    var p4 = document.createElement('p')
    p4.setAttribute('id','p4')
    divResFim.appendChild(p4)    
    let somaTotal = numLista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) // faz a soma total dos valores
    p4.textContent = `A soma total de todos os valores informados é ${somaTotal}.`

    var p5 = document.createElement('p')
    p5.setAttribute('id','p5')
    divResFim.appendChild(p5)    
    let mediaValores = somaTotal/numLista.length //faz amedia dos valores
    p5.textContent = `A média dos valores digitados é ${mediaValores}.`
    }
    
}

// função para adicionar os valores no array e depois dentro do select
var numLista = []

function analisar() {

    var numInput = document.getElementById('numInput').value
    var res = document.getElementById('resultado')
    
    if(numInput.length == 0){
        window.alert('[ERRO!] Informe um numero...')
    } else if(numInput < 1 || numInput > 100){
        window.alert('[ERRO!] Informe um numero entre 1 e 100...')
    } else if(numLista.includes(Number(numInput))){
        window.alert('[ERRO!] O valor digitado já existe na lista...')
    } else {
        numInput = Number(numInput) //converte o valor do input em number
        numLista.push(numInput) //adiciona o valor captado dentro do input na ultima posição do array
        var listaNum = document.getElementById('listaNum') //traz para a função o campo select com id listaNum

        var option = document.createElement('option') //cria o elemento option com o valor dentro do select listaNum
        option.setAttribute(`value`,`${numLista.indexOf(numInput)}`)
        option.text += `Valor ${numInput} adicionado;` 
        listaNum.appendChild(option) // adicionad o elementro criado com o valor do array numLista = numInput

    }            
    document.getElementById('numInput').value = '' //limpa o campo do numInput
    limpaTela()
}


// função de inicialização para carregar os elementos, tag e atributos no html

function carregar() {
    window.alert("#[ BEM VINDO AO ANALISADOR DE NUMEROS ]#")

    /* 
        o java script carrega de baixo pra cima
        portanto, deve criar primeiro os elementos de baixo, depois do meio e por fim os de cima.
    */

    //----- rodapé -----//

    // criando a tag <footer> dentro do <body> - rodapé
    var footer = document.createElement('footer')
    document.body.prepend(footer)

    var direitos = document.createElement('p')
    direitos.textContent = `Julio C. S. Junior - Des. Sistemas SENAI - São José SC - 2024`
    footer.appendChild(direitos)

    //----- main section -----//
    
    // criando a tag <section> dentro do <body> - centro
    var section = document.createElement('section')
    document.body.prepend(section)

    // criando a tag <div> que vai conter os <inputs> e adicionando dentro da <section>
    var div = document.createElement('div')
    section.appendChild(div)
    div.style.marginTop = '10px'

    var span1 = document.createElement('span')
    div.appendChild(span1)
    span1.textContent = 'Numero (entre 1 e 100): '
    span1.style.margin = '5px'

    var inputNumber = document.createElement('input')
    inputNumber.setAttribute('type', 'number')
    inputNumber.setAttribute('name', 'numero')
    inputNumber.setAttribute('id', 'numInput')
    div.appendChild(inputNumber)
    inputNumber.style.margin = '5px'

    var btnAnalisar = document.createElement('input')
    btnAnalisar.setAttribute('type','button')
    btnAnalisar.setAttribute('value','Analisar')
    btnAnalisar.setAttribute('onclick','analisar()')
    div.appendChild(btnAnalisar)
    btnAnalisar.style.margin = '5px'

    var divRes = document.createElement('div')
    divRes.setAttribute('id','resultado')
    section.appendChild(divRes)
    divRes.style.margin = '5px'
    //divRes.textContent = 'Teste'

    var select = document.createElement('select')
    select.setAttribute('name','resultado')
    select.setAttribute('id','listaNum')
    select.setAttribute('size', '10')
    select.style.width = '150px'
    divRes.appendChild(select)
    
    var divFim = document.createElement('div')
    divFim.setAttribute('id','resFim')
    section.appendChild(divFim)
    divFim.style.margin = '5px'
    
    var fimBtn = document.createElement('input')
    fimBtn.setAttribute('type','button')
    fimBtn.setAttribute('value','Finalizar')
    fimBtn.setAttribute('onclick','finalizar()')
    divFim.appendChild(fimBtn)

    var divResFim = document.createElement('div')
    divResFim.setAttribute('id','divResFim')
    section.appendChild(divResFim)
    divResFim.style.margin = '5px'

    //----- cabeçalho -----//

    // criando a tag <header> dentro do <body> - cabeçalho
    var header = document.createElement('header')
    document.body.prepend(header)

    // criando a tag <h1> e colocando o titulo dentor da tag <header>
    var h1 = document.createElement('h1')
    h1.textContent = 'ANALISANDO NUMEROS'
    header.appendChild(h1)
}
    
//----- função que calcula a tabuada e gera o <select> com as <options> dentro da <div> com id "resultado"

function calcular(){ // criação da função
    const tabuada = document.getElementById('tabuada') // faz o link do <input#tabuada>
    const res = document.getElementById('resultado') // faz o link da <div#resultado>
    
    if(tabuada.value.length == 0){ // confere se o <input#tabuada> está com valor = a 0 e executa a mensagem de alerta
        window.alert('[ERRO!] Informe algum valor..')
    }else{
        // senão se o <input#tabuada> tiver um valor maior que 0 executa o seguinte código:

        res.innerHTML = `` // comando usado para limpar a <div#resultado>
        let tab = (tabuada.value) // pega o valor digitado dentro do <input#tabuada>

        var cont = 1 //declara variavel contadora para iniciar em 1
        
        let select = document.createElement('select') // cria o elemento <select>
        select.setAttribute('name', 'resultado') // declara atributos do select
        select.setAttribute('id', 'resultado')// declara atributos do select
        select.setAttribute('size', 10)// declara atributos do select
        res.appendChild(select) // adiciona o elemento <select> com os atributos dentro da <div#resultado>

        while(cont <= 10){ // enquanto o contador for menor ou igual a 10 (valor máximo da tabuada) executa o seguinte codigo:
            var option = document.createElement('option'); // cria o elemento <option>
            option.setAttribute(`value`, `tab${cont}`); // declara atributo de <option>
            option.text += `${cont} x ${tab} = ${cont*tab}` // acrescenta texto dentro do <otpion>
            select.appendChild(option) // adiciona o elemento <option> dentro do <select>
        
            cont = cont + 1 // faz a contagem de vezes que vai se repetir á ação acima
        }
    }
} // fim da função calcular()


// função de inicialização para carregar os elementos, tag e atributos no html

function carregar() {
    window.alert("#[ BEM VINDO A CALCULADORA DE TABUADA ]#")

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

    // adicionando texto dentro da <div>
    div.textContent = 'Numero: '

    // criando o <input> 'number' e os atributos dentro da tag <div>
    var inputTab = document.createElement('input')
    inputTab.setAttribute('type', 'number')
    inputTab.setAttribute('name', 'tabuada')
    inputTab.setAttribute('id', 'tabuada')
    div.appendChild(inputTab) // adicionado o input number dentro da <div>   

    // criand o <input> 'button' e os atributos dentro da tag <div>
    var calcBtn = document.createElement('input')
    calcBtn.setAttribute('type', 'button')
    calcBtn.setAttribute('value', 'Gerar Tabuada')
    calcBtn.setAttribute('onclick', 'calcular()')
    div.appendChild(calcBtn) // adicionando o input button dentro da <div>

    // criando a tag <div> que vai conter o resultado da tabuada e adicionando dentro da <section>
    let divRes = document.createElement('div')
    divRes.setAttribute('id', 'resultado')
    section.appendChild(divRes)
    
    //----- cabeçalho -----//

    // criando a tag <header> dentro do <body> - cabeçalho
    var header = document.createElement('header')
    document.body.prepend(header)

    // criando a tag <h1> e colocando o titulo dentor da tag <header>
    var h1 = document.createElement('h1')
    h1.textContent = 'TABUADA'
    header.appendChild(h1)
}
    
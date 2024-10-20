function aoIniciar() {
    //window.alert('Carregou!')

    // Criação do <footer> e do paragrafo <p> com os créditos

    let footer = document.createElement('footer')
    document.body.prepend(footer)

    let credit = document.createElement('p')
    credit.textContent = 'Julio C. S. Junior - Des. Sistemas - SENAI São José SC - 2024'
    footer.appendChild(credit)
    
    // Criação do <main> e do paragrafo <p> do conteúdo

    let section = document.createElement('section')
    document.body.prepend(section)

    
    function calcular() {
        // Criação da <div> id='resultado' dentro da <section>
        let resultado = document.createElement('div')
        resultado.setAttribute('id', 'resultado')
        section.appendChild(resultado)
    
        let res = document.getElementById('resultado')
    
        var valorInput = document.getElementById('valor')
        var valor = Number(valorInput.value)
        res.innerHTML = `Valor é ${valor}`
        }
        
    //------ inicio das funções de interação com usuário -------//

    let parag = document.createElement('span')
    parag.textContent = `Valor: `
    parag.setAttribute('class', 'lab')
    parag.style.fontWeight = 'bolder'
    parag.style.margin = '5px'
    section.appendChild(parag)

    let inputValor = document.createElement('input')
    inputValor.setAttribute('type', 'number')
    inputValor.setAttribute('name', 'valor')
    inputValor.setAttribute('id', 'valor')
    inputValor.style.margin = '5px'
    inputValor.style.padding = '5px'
    section.appendChild(inputValor)

    let inputBtn = document.createElement('input')
    inputBtn.setAttribute('type', 'button')
    inputBtn.setAttribute('name', 'calcular')
    inputBtn.setAttribute('id', 'calcular')
    inputBtn.setAttribute('onclick', 'calcular()')
    inputBtn.setAttribute('value', 'Calcular')
    inputBtn.style.margin = '5px'
    inputBtn.style.padding = '5px'
    inputBtn.style.fontWeight = 'bolder'
    section.appendChild(inputBtn)

    

    // Criação do <header> e do titulo <h1> do topo

    let header = document.createElement('header')
    document.body.prepend(header)

    let titHead = document.createElement('h1')
    titHead.textContent = 'Titulo do Topo'
    header.appendChild(titHead)
}
function calcular(){
    const tabuada = document.getElementById('tabuada')
    const res = document.getElementById('resultado')
    
    if(tabuada.value.length == 0){
        window.alert('[ERRO!] Informe algum valor..')
    }else{
        res.innerHTML = ``
        let tab = (tabuada.value)
        var cont = 1
        
        let select = document.createElement('select')
        select.setAttribute('name', 'resultado')
        select.setAttribute('id', 'resultado')
        select.setAttribute('size', 10)
        res.appendChild(select)

        while(cont <= 10){
            var option = document.createElement('option');
            option.setAttribute(`value`, `tab${cont}`);
            option.text += `${cont} x ${tab} = ${cont*tab}` 
            select.appendChild(option)
        
            cont = cont + 1
        }
    }

    
}
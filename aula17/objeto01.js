let num = [5,8,4]
console.log(num)

//--

let amigo = {
    nome:'José',
    sexo:'M',
    peso:85.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso = amigo.peso + p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)


var idade = 66

if(idade < 16){
    console.log('Não vota!')
}else if(idade < 18 || idade > 65){ //menor que 18 ou acima de 65 anos
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatório!')
}
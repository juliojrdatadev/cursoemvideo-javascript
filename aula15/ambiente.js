let num = [4,9,7,6,1,8,2,10,5,3]

console.log(`Nosso vetor é ${num}`)


/*
for(var c = 0; c < num.length;c++){
    console.log(num[c])
}
*/

/*for(let c in num){
    console.log(num[c])
}*/

let pos = num.indexOf(13)

if(pos == -1){
    pos = 'Não encontrado'
}

console.log(pos)
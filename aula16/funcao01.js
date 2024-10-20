/*
function parIMp(num){
   if(num % 2 == 0){
      var res = 'Este numero é PAR!'
   } else {
      var res = 'Este numero é IMPAR!'
   }   
   console.log(res)
}
parIMp(3)
*/

function parIMp(num){
   if(num % 2 == 0){
      return 'PAR!'
   } else {
      return 'IMPAR!'
   }
}
let res = parIMp(2)
console.log(`O numero é ${res}`)
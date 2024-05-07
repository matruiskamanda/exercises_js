//un nunmero y decir si es primo o no es primo ( divisible por 1 y el mismo)
const primo = [2];
let cont = 0;
for(i=0; i<= primo; i++){
   if(primo%i === 0){
       cont ++;
   }
}

if (cont === 2){
   console.log('el número', primo, 'es primo');
}else{
   console.log('el numero', primo, 'no es primo');
}
const numeros = [23,45,23,-13,42,56,44,52,0]
let pos  = 0;
let neg = 0;
let cero = 0;

function posNegCero(n1){
    return n1>0 ? 1 : n1<0 ? -1 : 0;
}

for(i=0; i < numeros.length; i++){
   if(posNegCero(numeros[i]) === 1){
    pos++
   }else{
    if(posNegCero(numeros[i]) === 0){
        cero++
        }else{
            neg++
        }
   }
}   
console.log(`total de positivos ${pos},total de negativos ${neg},total de ceros ${cero}`)
//10 numeros encontrar el minimo y la posicion en la que se encontro (lo voy a hacer con array maxPos)

let minimo = maxPos[0];
let pos = 0;

for(i=0;i<= maxPos.length; i++){
   if(maxPos[i]< minimo){
       minimo = maxPos[i];
       pos = i +1;
   }
}
console.log('el menor es',minimo,'en la posicion', pos);
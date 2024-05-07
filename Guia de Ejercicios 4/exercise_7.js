// 10 numeros, el maximo de ellos y la pusicion en la que fue ingresado
const maxPos = [73,84,892,84,765,74,8294,274,724,24];
let maximo = maxPos[0];
let indice = 0;

for(i=0;i<10;i++){
   if(maxPos[i]> maximo){
       if(maxPos[i]> maximo){
           maximo = maxPos[i];
           indice = i+1;
       }
   }
}
console.log('el maximo es', maximo,'en la posicion', indice);
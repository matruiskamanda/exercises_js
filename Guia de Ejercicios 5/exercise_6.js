//de un numero saber si es primo 
let contar = 1;
const numeros = [26,34,8,36,27,47,7,64,33,25,28,36,35,37,42,35,53,56,13,0,23];
const posNeg = [24,56,-34,56,-46,-75,-34,65,-36,-26,84,92,34,-3,43,0];

console.log('ejercicio 6');
contar = 13;
i = 0;
let cont = 0;
while(i <= contar){
          i++;
   cont += contar % i === 0? 1 : 0;
}
   console.log(cont === 2 ? 'primo': 'no primo');
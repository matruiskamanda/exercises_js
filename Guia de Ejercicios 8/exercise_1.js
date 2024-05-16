const numeros = [23,34,12,56,34,12,58];
const copia =[];
let acumulador = 0;

for(let i=0; i<numeros.length; i++){
    copia[i] = numeros[i];
    acumulador += copia[i]; 
}
console.log(acumulador, copia)
//programa de edades, que ingresen edades hasta que se ingrese una edad menor a 18, debe mostrar cuantas personas mayores se registraron
let contar = 1;
const numeros = [26,34,8,36,27,47,7,64,33,25,28,36,35,37,42,35,53,56,13,0,23];
const posNeg = [24,56,-34,56,-46,-75,-34,65,-36,-26,84,92,34,-3,43,0];
console.log('ejercicio 3');
    contar = 0;
    let i=0;
    while(numeros[i]>18){
        i++
        contar++
    }
 
console.log(contar);
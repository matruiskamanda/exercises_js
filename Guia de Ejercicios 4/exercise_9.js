//programa con 20 edades, calcular el promedio de las personas mayores de 18 años 

const edad = [11,53,9,54,72,3,13,45,23,12,15,16,13,18,25,28,53,42,60,47];
let contE = 0;
let acuE =0;

for(i=0;i<=edad.length;i++){
    if(edad[i]> 18){
    acuE += edad[i];
    contE++;
    }
}
const proEdad = acuE / contE;
console.log('el promedio de personas mayores a 18', proEdad.toFixed(2));
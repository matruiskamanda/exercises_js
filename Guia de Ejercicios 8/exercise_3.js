const numero = [12,35,22,44,13,45,24,65,42,67,23,21]
let acumulador = 0;
let promedio = 0;
const mayoresAlPromedio = [];
let j=0;

for(let i=0;i<numero.length;i++){
    acumulador+=numero[i];
}
promedio = acumulador/numero.length


for(let i=0;i<numero.length;i++){
    if(numero[i] > promedio){
        mayoresAlPromedio[j] = numero[i];
        j++;
    }
}
console.log(`los numeros mayores al promedio : ${promedio} son ${mayoresAlPromedio}`)
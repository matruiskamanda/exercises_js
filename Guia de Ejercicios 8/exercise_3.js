const numero = [12,35,22,44,13,45,24,65,42,67,23,21]
//let acumulador = 0;
//let promedio = 0;
const mayoresquePromedio = [];
//let j=0;
// new way
const promedio = (a,b,c) => {
    for(let i=0;i<a.length;i++){
        b+=a[i];
    }
    c = b/a.length
    return c;
}

const mayoresAlPromedio = (a,b,c) => {
    for(let i=0;i<a.length;i++){
        if(a[i] > b){
            c[i] = a[i];
        }
    }
    return c;    
}
console.log(`los numeros mayores al promedio : ${promedio(numero,0,0)} son ${mayoresAlPromedio(numero,promedio(numero,0,0),mayoresquePromedio)}`)

/* for(let i=0;i<numero.length;i++){
    acumulador+=numero[i];
}
promedio = acumulador/numero.length */


/* for(let i=0;i<numero.length;i++){
    if(numero[i] > promedio){
        mayoresAlPromedio[j] = numero[i];
        j++;
    }
} */
//console.log(`los numeros mayores al promedio : ${promedio} son ${mayoresAlPromedio}`)
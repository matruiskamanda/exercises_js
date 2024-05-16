const numeros = [12,23,22,42,34,33,,21]
let maximo = 0;
let posicion = 0;
for( let i=0;i<numeros.length;i++){
    if(numeros[i]> maximo){
        maximo = numeros[i];
        posicion = i+1;
    }
}

console.log(`el maximo es ${maximo} en la posicion ${posicion}`);
const numeros = [12,34,56,23,43,6,44,22,32];
let banderaRepetidos = true;

for(let i=0;i<numeros.length;i++){
    for(let j=[i+1];j<numeros.length;j++){
        if(numeros[i] === numeros[j]){
            banderaRepetidos = false;
        }
    }
}

banderaRepetidos ? console.log('no hay valores repetidos') : console.log('hay valores repetidos');
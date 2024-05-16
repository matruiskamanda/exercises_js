const numeros = [12,34,56,23,43,56,44,22,32];
let banderaNoRepetidos = true;

for(let i=0;i<numeros.length;i++){
    for(let j=i+1;j<numeros.length;j++){
        if(numeros[i] === numeros[j]){
            banderaNoRepetidos = false;
        }
    } 
    //banderaNoRepetidos = numeros.includes(numeros[i])
   
    //banderaNoRepetidos = numeros.some(n => n=== numeros[i])
    //console.log(banderaNoRepetidos, numeros[i])
}


//banderaNoRepetidos ? console.log('no hay valores repetidos') : console.log('hay valores repetidos');
console.log( banderaNoRepetidos ? "no hay valores repetidos" : "hay valores repetidos");
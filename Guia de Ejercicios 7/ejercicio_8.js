const numeros = [42,33,12,54,65,77,24,35,7];
let mayorPar = 0;
let contImpares = 0;
let menorPrimos = null;
function par(a){
    if(a % 2 === 0){
        return 1;
    }else{
        return 0;
    } 
    // return a % 2 === 0 
}
function primos(numero){
    let cont = 0;
    for(let i=1 ;i <= numero; i++){
        if(numero % i === 0){
            cont++;
        }
    }
   
    return cont === 2;
}

for( let i=0;i < numeros.length;i++){
    if(par(numeros[i])){
        if(numeros[i] > mayorPar){
            mayorPar = numeros[i];
        }
    }else{
        contImpares++;
    }

    if(primos(numeros[i])){
        menorPrimos = menorPrimos === null ? numeros[i] : menorPrimos > numeros[i] ? numeros[i] : menorPrimos;
    }
}

console.log(`el mayor de numeros pares es ${mayorPar} el menor de los primos es ${menorPrimos} la cantidad de numeros impares es ${contImpares}`)
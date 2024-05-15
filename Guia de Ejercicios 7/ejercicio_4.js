const numerosPrimos = [33,24,53,11,61,73];
let contadorPrimos = 0;
function primos(numero){
    let cont = 0;
    for(let i=1;i <= numero; i++){
        if(numero % i === 0){
            cont++;
        }
    }
    /* if(cont === 2){
        return 1;
    }else{
        return 0;
    }  */
    return cont === 2;
}


for(i=0; i< numerosPrimos.length; i++){
   contadorPrimos += primos(numerosPrimos[i])
}
console.log(contadorPrimos)
console.log("el procentaje de primos es", (contadorPrimos*100)/numerosPrimos.length)

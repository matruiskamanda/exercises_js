//de 20 nnumeros el maximo de los # pares y el minimo de los impares
let banderaP = false;
let banderaI = false;
let maxPar = 0;
let minImpar = 0;
for(i=0; i<= edad.length; i++){
    if(edad[i]% 2 === 0){
        if (banderaP === false ){
             maxPar = edad[i];
            banderaP = true;
        }else{
            if(edad[i] > maxPar){
                maxPar = edad[i];
            }
        }
    }else{
        if(banderaI === false){
            minImpar = edad[i];
            banderaI = true;
        }else{
            if(edad[i] < minImpar){
                minImpar = edad[1];
            }
        }
    }
}
console.log('el mayor par es', maxPar, 'el menor impar es', minImpar);
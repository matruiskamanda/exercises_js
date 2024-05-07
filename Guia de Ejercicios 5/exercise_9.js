// lista de numeros que corte en 0, mostrar el maximo positivo y el minimo negativo
let contar = 1;
const numeros = [26,34,8,36,27,47,7,64,33,25,28,36,35,37,42,35,53,56,13,0,23];
const posNeg = [24,56,-34,56,-46,-75,-34,65,-36,-26,84,92,34,-3,43,0];

console.log('ejercio 10')

let maxP = null;
men1 = null;
i = 0;
 while(posNeg[i] != 0){
    maxP = posNeg[i] > 0 ? (maxP === null ? posNeg[i] : posNeg[i] > maxP ? posNeg[i] : maxP) : maxP
    men1 = posNeg[i] < 0 ? (men1 === null ? posNeg[i] : men1 < posNeg[i] ? posNeg[i] : men1 ): men1
    i++;
}

/* while(posNeg[i] != 0){
    if(posNeg[i] > 0){
        if(maxP === null){
            maxP = posNeg[i];
        }else{
            if(posNeg[i] > maxP){
                maxP = posNeg[i];
            }
        }
    }else{
        if(men1 === null){
            men1 = posNeg[i];
        }else{
            if(posNeg[i] < men1){
                men1 = posNeg[i];
            }
        }
    }
    i++
} */
console.log('maximo positivo', maxP, 'minimo negativo', men1);
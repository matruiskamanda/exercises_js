// de una lista de numeros mostrar la cantidad de primos, la cantidad de pares y la cantidad de positivos y la cantidad de negativos 
let contar = 1;
const numeros = [26,34,8,36,27,47,7,64,33,25,28,36,35,37,42,35,53,56,13,0,23];
const posNeg = [24,56,-34,56,-46,-75,-34,65,-36,-26,84,92,34,-3,43,0];

console.log( 'ejercicio 11');

let conPar = 0;
let conPri = 0;
let conPos = 0;
let conNeg = 0;
cont = 0;
i = 0;
let y = 1;
while(posNeg[i] !== 0){
    if(posNeg[i] > 0){
        conPos++;
    }else{
        conNeg++;
    }

    conPar = posNeg[i] % 2 === 0 ? conPar+1 : conPar;

    while(y <= posNeg[i]){
        if(y % posNeg[i] === 0){
            cont++;
        }
        conPri = cont++ === 2 ? conPri+1 : conPri;
        y++;
    }
    i++;
} 
console.log('positivos:', conPos, 'negativos:', conNeg, 'Pares:', conPar, 'primos:', conPri);
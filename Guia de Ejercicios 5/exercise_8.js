//corta en 0 mostrar el menos y el segundo menor
//mimso ejercicio 8 pero ahora devolver ademas la posicion
let contar = 1;
const numeros = [26,34,8,36,27,47,7,64,33,25,28,36,35,37,42,35,53,56,13,0,23];
const posNeg = [24,56,-34,56,-46,-75,-34,65,-36,-26,84,92,34,-3,43,0];


console.log('ejercicio 8')
i = 0;
let men1 = null;
let men2 = null;
let pos1 = null;
let pos2 = null;

while(numeros[i] != 0){
    if(i== 0){
        men1 = numeros[i];
        pos1 = i+1;
    }else{
        if(numeros[i]< men1){
            men2 = men1;
            pos2 = pos1;
            men1 = numeros[i];
            pos1 = i+1;
        }else{
            if(men2 === null){
                men2 = numeros[i];
                pos2 = i+1;
            }else{
                if(numeros[i]< men2){
                    men2 = numeros[i];
                    pos2 = i+1;
                }
            }
        }
    }
    i++
}
console.log('el primer minimo',men1,'posicion', pos1, 'el segundo minimo',men2, 'en la posicion', pos2);
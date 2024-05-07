//lista de numeros que corta con 0, mostrar el mayor y la posicion
let contar = 1;
const numeros = [26,34,8,36,27,47,7,64,33,25,28,36,35,37,42,35,53,56,13,0,23];
const posNeg = [24,56,-34,56,-46,-75,-34,65,-36,-26,84,92,34,-3,43,0];

console.log('ejercicio 7');
i=0;
cont = 0;
contar=numeros[0];
while(numeros[i] != 0){
    i++;
    cont = numeros[i] > contar ? i+1 : cont
    contar = numeros[i] > contar ? numeros[i] : contar 

} 

console.log('el mayor es',contar,'en la posicion', cont);
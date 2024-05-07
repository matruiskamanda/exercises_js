// ingresar 10numeros y mostrar el mayor de ellos en pantalla 
const array = [2,6,78,93,82,39,74,64,2,40];
let mayor = array[0];
for(i = 0; i<10; i++){
    if(array[i] > mayor){
        mayor = array[i];
    }
}
console.log(mayor);
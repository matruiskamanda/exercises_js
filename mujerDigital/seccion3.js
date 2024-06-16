const prompt = require('prompt-sync')();
// calcular la edad de x persona en 10 años 
const nombre =  prompt('ingresa tu nombre');
const apellido = prompt('ingresa tu apellido');
const edad = parseInt(prompt('ingresa tu edad'));

const edadFutura = edad + 10;

console.log(`Hola ${nombre} ${apellido} tu edad futura será ${edadFutura}`);
// calcular area de triangulo
let base = prompt('ingresa la base del triangulo');
let alto = prompt('ingresa la altura del triangulo');
let area = base * alto;

console.log('El area del triangulo es', area);

//crear un array y sumar todos los numeros 
const myArray = [1,2,3,4,5]
let cont = 0;
myArray.forEach((elemento) =>{
    return cont+= elemento;
})
console.log('La suma de todos los elementos del array es', cont);

// crear una matriz 

const myMatriz = [
    [1,2],
    [2,3]
];

console.log(myMatriz[0][0],myMatriz[0][1],myMatriz[1][0],myArray[1][1]);
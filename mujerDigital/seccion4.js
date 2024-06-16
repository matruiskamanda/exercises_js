/* const prompt = require('prompt-sync')();
const numero = parseInt(prompt('ingresa un numero'));
 numero % 2 === 0 ? console.log('Es par') : console.log('Es impar'); */

// las tablas
 for(let i=1; i<=10; i++){
    console.log('tabla del ' + i + ':');
    for(let j= 1; j<=10; j++){
        console.log(i + 'x' + j + ' = ' + (i*j));
    }
 }

 //calcular factorial sin recursividad

 function factorial(num){
    let resultado = 1;
    for(let i =1; i<= num; i++){
        resultado *= i
    }
    return resultado
 }
 console.log(factorial(5));

 // calcular factorial usando recursividad

 function factorialRecursividad(num){
    if(num <= 0){
        return 1
    }else{
        return num * factorialRecursividad(num -1)
    }
 }

 console.log(factorialRecursividad(5));

 // mostrar n cantidad de numeros de la serie fiboncci con recursividad

 function fibonacci(num){
    if(num === 0){
        return 0;
    }else if(num === 1){
        return 1;
    }else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
 }

 function mostrarSerieFibonacci(n){
    for(i = 0; i< n; i++)
        console.log(fibonacci(i));
 }

 mostrarSerieFibonacci(10);


const prompt = require('prompt-sync')();
let numero = prompt('ingresa un numero');
let contador = 0;
let promedio = 0;
let i = 0;
while(numero > 0){
    i++;
    contador+= Number(numero);
    promedio = contador / i;
    console.log(promedio);
    numero = prompt('ingresa numero');
};


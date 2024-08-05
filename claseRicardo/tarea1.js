const prompt = require('prompt-sync')();
let numero = prompt('ingresa numero');
let lista = [];
let i = 0;
let par = 0;
let impar = 0;
while(numero > 0){
    i++
    lista.push(Number(numero));
    numero = prompt('ingresa otro');
};

lista.sort((a,b)=> a<b ? -1 : 1);

if(i % 2 === 0){
    par = (lista[i/2] + lista[i/2 -1]) / 2; 
    console.log('par mediana',par);
}else{
    impar = lista[Math.ceil(i/2)-1];
    console.log(i)
    console.log('mediana impar', impar);
}

//de 20 numeros cuantos son positivos 
const positivos = [28,-82,-28,76,82,-53,88,62,-56,-98,-86,-73,96,-54,-1,62,73,-4,32,-43];
let contador = 0;

for(i=0; i<20; i++){
    if(positivos[i] > 0){
        contador++;
    }
}
console.log('hay',contador, 'positivos');
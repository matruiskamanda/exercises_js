const numeros = [23,34,12,56,34,12,58];
//const copia =[];
//let acumulador = 0;

function acumulador(n,c){
    for(let i=0; i<n.length; i++){
        c += n[i]; 
    }
    return c;
}

console.log(acumulador(numeros,0));

// New way Es6
const acumuladora = (n,c) => {
    for(let i=0; i<n.length; i++){
        c += n[i]; 
    }
    return c;
}
console.log(acumuladora(numeros,0));


// manera sin funcion
/* for(let i=0; i<numeros.length; i++){
    copia[i] = numeros[i];
    acumulador += copia[i]; 
}
console.log(acumulador, copia) */

// del texto el primer caracter New Way

const letra = a => a.charAt(0);

console.log(letra('tu si sabes'));
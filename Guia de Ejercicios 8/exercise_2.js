const numeros = [12,23,22,42,34,33,21]
//let maximo = 0;
//let posicion = 0;

// old wey
function mayoryindice(a,b,c){
    for( let i=0;i<a.length;i++){
        if(a[i]> b){
            b = a[i];
            c = i+1;
            //posicion = i+1;
        }
    }
    return {b,c};
}

console.log("el mayor es" ,mayoryindice(numeros,0,0));

// new way 
const maximoyindice = (a,b,c) => {
    for( let i=0;i<a.length;i++){
        if(a[i]> b){
            b = a[i];
            c = i+1;
            //posicion = i+1;
        }
    }
    return {b,c};
}

console.log("el maximo es", maximoyindice(numeros,0,0));



/* for( let i=0;i<numeros.length;i++){
    if(numeros[i]> maximo){
        maximo = numeros[i];
        posicion = i+1;
    }
}

console.log(`el maximo es ${maximo} en la posicion ${posicion}`); */
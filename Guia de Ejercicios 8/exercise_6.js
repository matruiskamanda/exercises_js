const numeros = [12,34,56,23,43,44,22,32];
//Array de elementos en este caso numeros 

const repetidos = a =>{
// creamos una constante llamada repetidos y le asignamos el valor de una funcion que acepta un argumento en este caso a
    for(let i=0;i<a.length;i++){
    // dentro de la funcion creamos un ciclo for donde declaramos la variable i con valor de 0 y iteraremos mientas i sea menor que a y en cada vuelta aumentamos el valor de i
        for(let j=i+1;j<a.length;j++){
        // creamos otro ciclo for declarando la variable j que tendra el vamor de i+1  
            if(a[i] === a[j]){
            // preguntamos si a[i] es === a a[j] si es cierto y son iguales nos va a regresar un false
                return false;
            }
        } 
    }
    // en caso contrario nos regresa un true
    return true;
}

/* Mandamos a llamar a una funcion para imprimir el resultados y llamamos a la funcion repetidos pasando como argumento nuestro array numeros 
Y con la condición de que si el resultado de la funcion es verdadero es porque no encontro numeros repetidos por lo que nos mostrará "No hay repetidos"
en caso contrario nos imprime "Si hay repetidos" */
console.log( repetidos(numeros) ? "No hay repetidos" : "Si hay repetidos");



/* for(let i=0;i<numeros.length;i++){
    for(let j=i+1;j<numeros.length;j++){
        if(numeros[i] === numeros[j]){
            banderaNoRepetidos = false;
        }
    } 
    //banderaNoRepetidos = numeros.includes(numeros[i])
   
    //banderaNoRepetidos = numeros.some(n => n=== numeros[i])
    //console.log(banderaNoRepetidos, numeros[i])
} */


//banderaNoRepetidos ? console.log('no hay valores repetidos') : console.log('hay valores repetidos');
//console.log( banderaNoRepetidos ? "no hay valores repetidos" : "hay valores repetidos");
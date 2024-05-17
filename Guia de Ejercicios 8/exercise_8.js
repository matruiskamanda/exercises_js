const numerosOriginales = [12,35,3,56,24];
const posiciones=[1,2,3,4,5];
//let auxiliar = 0;
//let auxiliarPosicion = 0;

const mayoraMenor = (a,b) => {
    let auxiliar = 0;
    let auxiliarPosicion = 0;
    for(let i=0;i< a.length;i++){
        for(let j=i+1;j < a.length;j++){
            if(a[i] < a[j]){
                auxiliar = a[j];
                a[j] = a[i];
                a[i] = auxiliar;
                auxiliarPosicion = b[j];
                b[j] = b[i];
                b[i] = auxiliarPosicion;
    
            }
        }
    
    }
    return {a,b}
}


console.log(mayoraMenor(numerosOriginales,posiciones));
/* for(let i=0;i< numerosOriginales.length;i++){
    for(let j=i+1;j < numerosOriginales.length;j++){
        if(numerosOriginales[i] < numerosOriginales[j]){
            auxiliar = numerosOriginales[j];
            numerosOriginales[j] = numerosOriginales[i];
            numerosOriginales[i] = auxiliar;
            auxiliarPosicion = posiciones[j]
            posiciones[j] = posiciones[i]
            posiciones[i] = auxiliarPosicion

        }
    }

}
console.log(numerosOriginales,posiciones); */
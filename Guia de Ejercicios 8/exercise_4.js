const numero = [12,24,35,44,57,78];
//let ordenado = true;

const ordenado = a =>{
    for(i=0;i<a.length;i++){
        if(a[i] > a[i+1]){
            return false;
        }
    }
    return true;
}

console.log(ordenado(numero) ? "estan ordenados" : "no estan ordenados")

/* for(i=0;i<numero.length;i++){
    if(numero[i]> numero[i+1]){
        ordenado = false;
    }
}

//ordenado ? console.log("ordenados") : console.log("desordenados");
console.log(ordenado ? "ordenados" : "no ordenados"); */
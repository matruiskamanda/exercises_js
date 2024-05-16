const numero = [12,24,35,4,57,78];
let ordenado = true;

for(i=0;i<numero.length;i++){
    if(numero[i]> numero[i+1]){
        ordenado = false;
    }
}

//ordenado ? console.log("ordenados") : console.log("desordenados");
console.log(ordenado ? "ordenados" : "no ordenados");
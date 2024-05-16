const numero = [12,24,35,46,57,78];
let ordenado = true;

for(i=0;i<numero.length;i++){
    if(numero[i]> numero[i+1]){
        ordenado = false;
    }
}

//console.log = ordenado ? ("estan ordenados") : ("no estan ordenados");
ordenado ? console.log("ordenados") : console.log("desordenados");
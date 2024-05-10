const camiones = {
    'camion1': 121,
    'camion2': 234,
    
}

// accedo a lo valores de un objeto mediante '.' (punto) o corchetes []

/* 
let camion = null;
let mayor = 0;
for(const key of Object.keys(camiones)){
    if(camiones[key] > mayor){
        mayor = camiones[key];
        camion = key
    }
}

console.log(camion, mayor); 
*/
let mayor = 0;
let camion = null;
for(let i = 1; i <= Object.keys(camiones).length; i++){
    if(camiones[`camion${i}`] > mayor){
        mayor = camiones[`camion${i}`];
        camion = `camion${i}`
    }
}
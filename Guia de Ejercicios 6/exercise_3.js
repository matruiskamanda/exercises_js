const peso = [24,37,130,120,48,36,77,41,79,66,44,66,33,68,10,190,30,20];
let camiones = {};
let camion = 0;
let mayor = 0;

for(let i=0; i<peso.length;i++){
    let pesoActual = 0;

    while(peso[i]+pesoActual < 200){
        pesoActual+= peso[i];
        i++;
    }
    i--;
    camion++;
    camiones[`camion${camion}`] = pesoActual;   
}

for(let i = 1; i <= Object.keys(camiones).length; i++){
    if(camiones[`camion${i}`] > mayor){
        mayor = camiones[`camion${i}`];
        camion =`camion${i}`;
    }  
}
console.log('el camion con más peso es',camion,'con',mayor,'kg');
console.log(camiones);
console.log('loa cantidad totales de camiones son',Object.keys(camiones).length);
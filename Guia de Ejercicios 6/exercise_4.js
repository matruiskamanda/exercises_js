const paquetes = {
   montana:{ 
        '4020':{
            cantidadPersonas: 5,
            precioxpersona: 120,
            horastotales: 5,
        },
        '4152': {
            cantidadPersonas: 8,
            precioxpersona: 112,
            horastotales: 2,   
        },
        '3620': {
            cantidadPersonas: 3,
            precioxpersona: 230,
            horastotales: 6,
        }
   },
   trekking:{
        '1255' :{
            cantidadPersonas: 1,
            precioxpersona: 200,
            horastotales: 2,
        },
        '2613': {
            cantidadPersonas: 10,
            precioxpersona: 200,
            horastotales: 8,   
        },
        '2433': {
            cantidadPersonas: 7,
            precioxpersona: 130,
            horastotales: 4,
        }
    },
    Bicicleta :{
            '1022' :{
                cantidadPersonas: 12,
                precioxpersona: 150,
                horastotales: 5,
            },
            '5632': {
                cantidadPersonas: 8,
                precioxpersona: 214,
                horastotales: 6,   
            },
            '1056': {
                cantidadPersonas: 9,
                precioxpersona: 145,
                horastotales: 6,
            }
}
}

// inciso a cuantos paquetes por actividad
let totalPersonas = 0;
let recaudadoxVenta = 0;
let menorHoras = null;
let actividadmenosHoras = null;
for(const key of Object.keys(paquetes)){
    console.log(key,Object.keys(paquetes[key]).length)
    // calcular el total de personas que disfrutaron las vacaciones 
    for(const subkey of Object.keys(paquetes[key])){
        totalPersonas+= paquetes[key][subkey].cantidadPersonas;
        // recaudado por cada venta
        recaudadoxVenta = paquetes[key][subkey].cantidadPersonas * paquetes[key][subkey].precioxpersona;
            // paquete con menos horas y en que actividad fue
            if(menorHoras === null){
                menorHoras = paquetes[key][subkey].horastotales
                actividadmenosHoras = key
                }else{
                    if(paquetes[key][subkey].horastotales < menorHoras){
                        menorHoras = paquetes[key][subkey].horastotales;
                        actividadmenosHoras = key; 
                }    
        }
        
         
        console.log('total recaudado por cada venta',recaudadoxVenta);
    }  
    

}
console.log('Total de personas que disfrutaron las vacaciones', totalPersonas);
console.log('menor hora es', menorHoras,'en el paquete', actividadmenosHoras);




const articulos = {
    articulo1 :{
        venta1 : 24,
        venta2 : 33,
        venta3 : 12,
    },
    articulo2:{
        venta1 : 67,
        venta2 : 3,
        venta3 : 8,
    },
    articulo3:{
        venta1 : 0,
        venta2 : 0,
        venta3 : 0,
    },
    articulo4:{
        venta1 : 6,
        venta2 : 83,
        venta3 : 4,
    }    
}

let acumulador = 0;
let mayorVenta = 0;
let articulomayorVenta = 0;
let numeroArticulosinVentas = 0;
let cantidadVendidaArticulo2 = 0;
for(key of Object.keys(articulos)){
    acumulador = 0;
    
    for(subkey of Object.keys(articulos[key])){
        acumulador+= articulos[key][subkey];

        if(articulos[key][subkey] === 0){
            numeroArticulosinVentas = [key]; 
        }

        if(articulos[key] === articulos.articulo2){
            cantidadVendidaArticulo2 += articulos[key][subkey];
        }

    }
    if(acumulador > mayorVenta){
        mayorVenta = acumulador;
        articulomayorVenta = [key];
    }

}

console.log(`el numero de articulo que más se vendio fue ${articulomayorVenta} con la cantidad ${mayorVenta} el numero de articulo sin ventas es ${numeroArticulosinVentas}`);
console.log(`la cantidad vendida para el articulo 2 es ${cantidadVendidaArticulo2}`);
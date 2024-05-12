const compras = {
    4052: {
        compra1: {
            dia: 13,
            mes: 8,
            tipofactura: 'A',
            nuProducto: 239,
            cantidad: 25,
            precioUnitario: 6,
        },
        compra2: {
            dia: 8,
            mes: 3,
            tipofactura: 'B',
            nuProducto: 145,
            cantidad: 270,
            precioUnitario: 4,
        },
        compra3: {
            dia: 9,
            mes: 12,
            tipofactura: 'A',
            nuProducto: 635,
            cantidad: 220,
            precioUnitario: 12,
        }

    },
    3084: {
        compra1: {
            dia: 23,
            mes: 9,
            tipofactura: 'C',
            nuProducto: 230,
            cantidad: 253,
            precioUnitario: 5,
        },
        compra2: {
            dia: 24,
            mes: 8,
            tipofactura: 'B',
            nuProducto: 260,
            cantidad: 190,
            precioUnitario: 4,
        },
        compra3: {
            dia: 17,
            mes: 8,
            tipofactura: 'C',
            nuProducto: 278,
            cantidad: 122,
            precioUnitario: 3,
        }
    },
    2056: {
        compra1: {
            dia: 2,
            mes: 7,
            tipofactura: 'C',
            nuProducto: 140,
            cantidad: 115,
            precioUnitario: 14,
        },
        compra2: {
            dia: 9,
            mes: 8,
            tipofactura: 'B',
            nuProducto: 190,
            cantidad: 2,
            precioUnitario: 4,
        },
        compra3: {
            dia: 13,
            mes: 5,
            tipofactura: 'B',
            nuProducto: 786,
            cantidad: 354,
            precioUnitario: 1,
        } 
    }       
}
//monto maximo registrado en una compra por cada proveddor y el numero de provedor
let montoMaximo = 0;
let montoCompra = 0;
let kyeActual = 0;
for(const key of Object.keys(compras)){
    montoCompra = compras[key].cantidad * compras[key].precioUnitario
    kyeActual = key
    if(montoCompra > montoMaximo){
        montoMaximo = montoCompra
        console.log(montoMaximo, kyeActual)
    }
    
  /*   console.log(montoMaximo, kyeActual)
    while(key === kyeActual){
        //console.log(compras[key])
    if(montoCompra > montoMaximo){
        montoMaximo = montoCompra
        console.log(montoMaximo, kyeActual)
        continue
    }
    }
     */
}
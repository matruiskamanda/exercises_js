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

const MES_AGOSTO = 8;
let montoMaximo = 0;
let montoCompra = 0;
let kyeActual = 0;
let tipoFacA = 0;
let tipoFacB = 0;
let tipoFacC = 0;
let menorCompraAgosto = null;
let nuProductoAgosto = 0;
let maxCantidadComp = 0;
let nuProductomaxCompra = 0;
let provedorMayorcantidadComprada = 0;

for(const key of Object.keys(compras)){
    for(const subkey of Object.keys(compras[key])){
        montoCompra = compras[key][subkey].precioUnitario * compras[key][subkey].cantidad
        // la compra con menor monto registrada en el mes de Agosto y el numero de producto comprado
        if(compras[key][subkey].mes === MES_AGOSTO){
            if(menorCompraAgosto === null || (menorCompraAgosto && montoCompra < menorCompraAgosto)){
                menorCompraAgosto = montoCompra
                nuProductoAgosto = compras[key][subkey].nuProducto
            }
            /* 
            if(menorCompraAgosto === null){
                menorCompraAgosto = montoCompra
                nuProductoAgosto = compras[key][subkey].nuProducto
            }else{
                if(montoCompra < menorCompraAgosto){
                    menorCompraAgosto = montoCompra
                    nuProductoAgosto = compras[key][subkey].nuProducto
                }
            } 
            */
        }
        // el numero de producto con mayor cantidad comprada y a que proveedor
        if(compras[key][subkey].cantidad > maxCantidadComp){
            maxCantidadComp = compras[key][subkey].cantidad
            nuProductomaxCompra = compras[key][subkey].nuProducto
            provedorMayorcantidadComprada = key
        }



        // total comprado por tipo de Factura
        switch (compras[key][subkey].tipofactura) {
            case 'A':{
                tipoFacA += montoCompra
                break;
            }
            case 'B':{
                tipoFacB += montoCompra
                break;
            }
            case 'C':{
                tipoFacC += montoCompra
                break;
            }
        }
        //monto maximo registrado en una compra por cada proveddor y el numero de provedor
        if(montoCompra > montoMaximo){
            montoMaximo = montoCompra
            kyeActual = key
        }
    }
    console.log('el monto maximo es',montoMaximo,'del numero de proveedor', kyeActual);
    // la cantidad de compras que se le realizo a cada proveedor
    console.log('del proveedor', key, 'se realizaron', Object.keys(compras[key]).length, 'compras')
}    

console.log('tipo de factura A total',tipoFacA,'tipo de factura B total',tipoFacB,'tipo de factura C total',tipoFacC);
console.log('la menor compra de Agosto fue de', menorCompraAgosto, 'del producto', nuProductoAgosto);
console.log('el producto con mayor cantidad comprada es', nuProductomaxCompra, 'al numero de proveedor', provedorMayorcantidadComprada);
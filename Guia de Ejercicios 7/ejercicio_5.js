const ventas = [{
    venta: 1,
    monto: 20000,
    pagos: 5
},{
    venta: 2,
    monto: 60000,
    pagos: 3
}];

function pagosPlazos(monto,pagos){
    return monto/pagos;
}

for(let i=0; i< ventas.length; i++){
    console.log(pagosPlazos(ventas[i].monto, ventas[i].pagos));
}
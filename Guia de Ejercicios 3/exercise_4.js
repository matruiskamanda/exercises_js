//negocio de venta de litros( dependiendo la cantidad de litros es el descuento aplicado) mostrar total a pagar con el descuento aplicado en caso de aplicar
const litros = 241;
const precio = 673;
const descto = 0.75;
if(litros>500){
    console.log(precio * descto);
}else{
    if(litros>300){
        console.log(precio * descto + 0.10);
    }else{
        if(litros>100){
            console.log(precio * descto + 0.15);
        }else{
            console.log('no aplica descuento');
        }
    }
}

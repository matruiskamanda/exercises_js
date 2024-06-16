const precioBase = 4.56;
let impuesto = 0.07;
let montoFinal = (precioBase * impuesto) + precioBase;

console.log(montoFinal);

let precioBase2 = 4.56;
let impuesto2 = 1.07;
precioBase2 *= impuesto2;
let descuento = 0.85
let precioDescuento = precioBase2 * descuento

console.log(precioBase2, precioDescuento);

let cine = [
    [peli1,peli2,peli3,peli4,peli5,peli6,peli7],
    [20,20,20,10,10,10,10],
    ['L','M','Mi','J','V','S','D']
];
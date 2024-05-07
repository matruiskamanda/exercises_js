//25 pesos por litros hasta 50L, 20 por L hasta 200L, 15 por L hasta 500L, 10 x L si es más 500L 
// si paga en efectivo descuento 10% (ingresa 1 para descuento, 0 no descuento)

const litrosP = 350;
const pagoEfect = 1;
let montoP = null;

if(litrosP > 500){
    montoP = litrosP * 10
}else{
    if(litrosP > 200){
        montoP = litrosP *15;
    }else{
        if( litrosP < 50){
            montoP = litrosP * 25;
        }else{
            montoP = litrosP * 20;
        }
    }
}
const totalPagar = pagoEfect === 1 ? console.log(montoP * 0.90) : console.log('no aplica descuento', montoP)
//de 10 numeros el mayor de los numeros primos y si no hay aclararlo con cartel
let primoC = 0;
let mayorP = 0;
let bandePri = false;
for(i=0; i<= maxPos.length; i++){
    primoC = 0;
    for(x=1; x <= maxPos[i]; x++){
        if(maxPos[i] % x === 0){
            primoC++;;
        }
    }
    if(primoC === 2){
        if(bandePri === false){
            mayorP = maxPos[i];
            bandePri = true;
        }else{
           if(maxPos[i]> mayorP){
            mayorP = maxPos[i];
           }
        }
    } 
}
console.log('el mayor primo es', mayorP);
const listaN = [4,3,2,1,0,8,34,35,4,7,84,0,26,19,12,0];
const listaG =[1,2,3];
let nuActual = 0;
let posAnterior = 0;
let porImpar = 0;
let posGrupo= 0;
let totalOrdenados = 0;
 for(i = 0; i< listaG.length; i++){
    let imPar = 0;
    let uPrimo = 0;
    let posPrimo = 0;
    let indexNumeros = 0;
    let banOrdenados = false;
    
    while(listaN[nuActual] !== 0){

        if(listaN[nuActual] % 2 !==0){
            imPar++;
        } 
        let isPrimo =0;
        let cont =0;
        while(isPrimo<= listaN[nuActual]){
            isPrimo++;
            cont += listaN[nuActual] % isPrimo === 0 ? 1: 0
        }

        if(cont === 2){
            uPrimo = listaN[nuActual];
            posPrimo = indexNumeros;
        }
        
        console.log('current', listaN[nuActual], 'prev', listaN[posAnterior], listaN[posAnterior] > listaN[nuActual]);
        if(listaN[posAnterior] > listaN[nuActual]){
            banOrdenados = true;
        }
        
        posAnterior = nuActual; 
        nuActual++;
        indexNumeros++;
    }
    // console.log('group', i, 'banOrdenados', banOrdenados)
    posAnterior = nuActual;
    nuActual++;
    
    totalOrdenados += banOrdenados  ? 1 : 0
    //console.log(uPrimo === 0 ? 'no hay primo' :'el ultimo primo es', uPrimo, 'posicion', posPrimo)
    let pImpar = (imPar * 100)/indexNumeros;
    if(pImpar > porImpar){
        porImpar = pImpar;;
    }

 }
 //console.log(porImpar, posGrupo)
 //console.log('la cantidad de grupos ordenados es', totalOrdenados)
const listNumber = [23,35,12,45,67,0,24,34,65,77,87,0,33,22,11,0];
let group = 0;
let higheroddGroup = 0;
let indicatorGroup = 0;
let indicatorNumber = 0;
let sortedGru = 0;
for(let i = 0; i < listNumber.length; i++){
    let sumOdd = 0;
    let indicatorNumbergroup =0 ;
    let lastPrimeGroup = null;
    let posPrimegroup = null;
    let flagOrdenados = true;
    while(listNumber[indicatorNumber] !== 0){
        i++;
        let j = 0;
        let contPrime = 0;
        indicatorNumbergroup++;
        if(listNumber[indicatorNumber] % 2 !=0){
            sumOdd++;
        }
            while( j < listNumber[indicatorNumber]){
                j++;
                contPrime+= listNumber[indicatorNumber] % j === 0 ? 1 : 0  
            }

        if(contPrime === 2){
            if(listNumber[indicatorNumber] > lastPrimeGroup){
                lastPrimeGroup = listNumber[indicatorNumber];
                posPrimegroup = indicatorNumbergroup;
            }
        }

        if(listNumber[indicatorNumber]< listNumber[indicatorNumber-1]){
            flagOrdenados = false;
        }

        indicatorNumber++;
    }

    indicatorNumber++;
    let porcentageOdd = (sumOdd * 100)/ indicatorNumbergroup;
    group++;

    if(porcentageOdd > higheroddGroup){
        higheroddGroup = porcentageOdd;
        indicatorGroup = group;
        }
    
    sortedGru += flagOrdenados? 1 :0


    console.log(lastPrimeGroup === null ? 'no hay primos' : `el ultimo primo es ${lastPrimeGroup} en la posicion ${posPrimegroup}`);

}
console.log('el grupo con mayor porcentage de impares es', indicatorGroup);
console.log('cantidad de grupos ordenados', sortedGru);
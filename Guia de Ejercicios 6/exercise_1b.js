const listNumber = [23,35,12,45,67,0,24,34,65,77,0,33,22,11,0];
let group = 1;
let higheroddGroup = 0;
let indexnumbergroup = 0;
let percentageOddGroup = null;
let contOdd = 0;
let contPrime = 0;
let j = 0;
let lastPrime = 0;
let posPrimeGroup =0;
let sortedGrup = 0;
let flagSorted = true;
for(let i = 0; i< listNumber.length; i++){

    if(listNumber[i] === 0){
        let percentageOdd = (contOdd * 100)/ indexnumbergroup;
        percentageOddGroup = percentageOdd > higheroddGroup ? group : percentageOddGroup;
        higheroddGroup = percentageOdd > higheroddGroup ? percentageOdd : higheroddGroup;

        console.log(lastPrime === 0 ? 'no hay primos' : 'el ultimo primo', lastPrime, 'en la posicion', posPrimeGroup)

        sortedGrup += flagSorted ? 1 : 0

        contOdd = 0;
        indexnumbergroup= 0;
        group++;
        lastPrime=0;
        flagSorted = true
        continue
    }

    j = 0;
    contPrime =0;
    while( j < listNumber[i]){
        j++;
        contPrime += listNumber[i]%j === 0 ? 1 : 0
    }
    lastPrime = contPrime === 2 ? listNumber[i]: lastPrime
    posPrimeGroup = indexnumbergroup + 1
    
    if(listNumber[i] < listNumber[i+1]){
             flagSorted = false;
        }

    indexnumbergroup++
    contOdd+= listNumber[i] % 2 !== 0 ? 1 : 0
   
}
console.log('grupos Ordenados', sortedGrup)
console.log('grupo con mayorporcentaje de impar', percentageOddGroup, 'porcentaje de ese grupo',higheroddGroup)
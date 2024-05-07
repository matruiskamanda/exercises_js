/* Operadores Logicos 
    And 
    Or
    Nor (!)
Operadores Aritmeticos
    +,-,*,/,%,<,>
Estructuras de Control
    If, For, While,Switch
Tipos de Datos
    Enteros, bool,  Char, String, Float */

const listaN = [20,56,73,12,2,35,87,4,56,24,0,8,34,35,4,7,84,0];
const listaG =[1,2]

let groupId = 0 // group id of lista numbers
let nIndex = 0; // index of lista numbers to iterate with.
let countOddNumbers = 0;
let totalNumbersInGroup = 0;
let maxPercentageOddsInGroup = 0;
let maxPercentageOddsInGroupId = 0;
let lastPrimeNumber = 0;
let lastPrimeIndexNumber = 0;
for(i = 0; i< listaG.length; i++){
    groupId = listaG[i];

    // obtener los numeros del grupo
    
    
    let indexInGroup = 0;
    while(listaN[nIndex] !== 0){
        let currentNumber = listaN[nIndex];
        // find odd numbers
        if(currentNumber > 0 && currentNumber % 2 !== 0){
            countOddNumbers++;
        }

        // find last prime number in a group
        let j = 1;
        let isPrime = 0;
        while(j <= currentNumber){
            isPrime += currentNumber % j === 0 ? 1 : 0
            j++
        }
        // if isPrime eq 2 means that is a prime number and its position.
        if(isPrime === 2){
            lastPrimeNumber = currentNumber;
            lastPrimeIndexNumber = indexInGroup;
        }

        nIndex++;
        totalNumbersInGroup++;
        indexInGroup++;
    }
    indexInGroup = 0;
    nIndex += 1;
    // calculate max percentage odd numbers in a group by id
    let percentageOdds = (countOddNumbers * 100)/ totalNumbersInGroup 
    if(percentageOdds > maxPercentageOddsInGroup){
        maxPercentageOddsInGroup = percentageOdds;
        maxPercentageOddsInGroupId = groupId;
    }

    if(lastPrimeNumber > 0){
        console.log('lastPrimeNumber', lastPrimeNumber, 'at position', lastPrimeIndexNumber+1)
    }

    totalNumbersInGroup = 0;
    countOddNumbers = 0;
    lastPrimeNumber = 0;
    lastPrimeIndexNumber = 0;
    
 }
console.log('maxPercentageOddsInGroup', maxPercentageOddsInGroupId, maxPercentageOddsInGroup)
const numerosEntero = [33,24,53,12,56]

function par(a){
    if(a % 2 === 0){
        return 1;
    }else{
        return 0;
    } 

    // return a % 2 === 0 
}

for(i=0; i<numerosEntero.length; i++){
    console.log(par(numerosEntero[i]));
}
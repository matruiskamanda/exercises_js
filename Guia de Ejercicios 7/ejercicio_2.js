const n1 = 24;
const n2 = 33;
function mayor(n1,n2){
    if(n1>n2){
        return `el mayor es${n1}`;
    }else if(n2===n1){
            return "son iguales";
    }else{
        return `el mayor es ${n2}`;
    }

}

    
console.log(mayor(n1,n2));


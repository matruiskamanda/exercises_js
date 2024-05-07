//3 numeros y mostrarlos ordenados de menor a mayor

let z = 30;
let y = 40;
let x = 10;
let aux = null
// valida si z es mayor a x
if(z>x && z>y ){
    aux = x;
    x = z;
    z = aux;
}else{
    if(y>z && y>x){
        aux =y;
        y = x;
        x = aux;
        aux =z;
        z = y;
        y = aux;
    }
}
if(z>y){
    aux = y;
    y = z;
    z = aux;
}

    console.log(z,y,x);
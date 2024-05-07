//4 numeros saber si estan de forma decreciente (de mayor a menor)
const decre ={
    g : 33,
    h : 27,
    i : 13,
    j : 10,
}
let boolean = 1
let mayor = decre.g
if(mayor> decre.h){
   mayor = decre.h
   }else{
   boolean = 0;
}
if(mayor> decre.i){
   mayor = decre.i
   }else{
   boolean = 0;
}
if(mayor>decre.j){
   mayor = decre.j
   }else{
   boolean = 0;
}
const respuesta = boolean ? console.log ('decreciente') : console.log ('desordenados')
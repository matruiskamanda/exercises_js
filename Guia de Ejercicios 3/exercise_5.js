//de dos notas de una alumna, decir si tiene 8 o mas en ambas "aprobacion directa", si tiene aprobados ambos con mas de 6 "rinde examen final"
// si no tiene aprobado uno de los dos "debe recuperar "

const nota1 = 4;
const nota2 = 9;
const nota = nota1>= 8 && nota2 >= 8 ? 'aprobada': nota1 > 6 && nota2 > 6 ? 'examen' : 'recuperar'
console.log(nota);

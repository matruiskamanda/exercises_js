/* 
2 numeros y luego calcular 
a) la resta si el 1ro es mayor que el 2do
b)la suma si son iguales
c)el producto si el primero es menor  
*/

const b = 26;
const c = 26;
if (b > c) {
  console.log(b - c);
} else {
  if (b === c) {
    console.log(b + c);
  } else {
    console.log(b * c);
  }
}
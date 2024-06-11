//Convierte un arreglo de temperaturas en Celsius a Fahrenheit.
const celsius = [0, 20, 30, 40];
const fahrenheit = celsius.map((elemento) => elemento * 1.8 + 32);
console.log(fahrenheit); // [32, 68, 86, 104]
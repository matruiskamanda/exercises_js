/* 

        1 numero
        2 String
        3 Boolean
        4 undefined
        5 null// Vacio
        6 Symbol

        7 Arrays// []
        8 Object
        9 Set
        10 maps
 */

   //String para buscar su char:     
   let nombre = 'casa';
   console.log(nombre.charAt(0), nombre.charAt(3));
   console.log(nombre[0], nombre[3]);
   console.log(nombre.length-1, nombre.charAt(nombre.length-1))
   console.log(nombre[nombre.length-1])
   console.log(nombre.charAt(nombre.length-2) );
   console.log(nombre[nombre.length-2]);
   
   // Symbol lo que hace es esconder el valor de varabiable y darle un identificar unico
   //objetos
   const login = {
       nombre: 'Xoch',
       usuario: 'Xoch',
       contrasena: 123,
   }
   console.log(login.nombre);
   console.log(login.contrasena);
   
//de un string quiero tener el primer caracter y el ultimo calculado .. salida el primer carracter es... y el ultimo carracter es ...
//de una palabra decir el total de string
// juntar ambos strings y que ambos tengan un espacio en medio
// convertir a mayusculas
//poner solo la primer letra en mayuscula
//


let palabra = "comelones"
console.log('La palabra tiene',palabra.length, 'carracter');

let frase = "Somos todos unos"
console.log("en la frase el primer carracter es", palabra[0], "el ultimo carracter es", palabra.charAt(palabra.length-1));

console.log(frase,palabra);

console.log(palabra.toUpperCase());

console.log(palabra.charAt(0).toUpperCase()+palabra.slice(1));

//let Array = palabra.split('');
console.log(palabra.split(''));
console.log(frase.split(" "));    
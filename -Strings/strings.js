const texto = "En JavaScript, una string es un tipo de dato que se utiliza para representar texto. Básicamente, una string es una secuencia de caracteres, como letras, números, símbolos y espacios, encerrados entre comillas.Puedes manipular strings en JavaScript de diversas maneras, como concatenarlas, dividirlas, extraer partes de ellas, entre otras operaciones. Las strings son inmutables, lo que significa que una vez creadas, no se pueden modificar directamente; sin embargo, puedes crear nuevas strings a partir de operaciones en las existentes. Puedes manipular strings en JavaScript de diversas maneras, como concatenarlas, dividirlas, extraer partes de ellas, entre otras operaciones. Las strings son inmutables, lo que significa que una vez creadas, no se pueden modificar directamente; sin embargo, puedes crear nuevas strings a partir de operaciones en las existentes.";
// .chartAt me pide ingresar un index ej: .chartAt(3) y me regresa la letra correspondiente a ese indice en este caso "J"
const indice = texto.charAt(3);
// .charCodeAt me pide un indice ej: .charCodeAt(3) y me regresa el UniCode del caracter correspondiente en este caso 0 que es E me regresa 69
const charCodeAt = texto.charCodeAt(0);



const prueba = "Este es un mensaje de prueba para aprender Strings y de sus funciones/"
/*
 indexOf es para buscar el indice de un caracter o palabra dentro de mi string y me regresa su indice dentro de este, tambien puedo indicarle a partir de que indice quiero 
 que busque dentro de mi string ( siempre me va a devolver el indice del primer match que tenga o en caso de no encontrar me regresara -1)

*/
// busca en todo el string el caracter 'a' y en la primera que encuentra me dice su posicion dentro del string
let indexOf1 = prueba.indexOf('a');
console.log(indexOf1);
/* 
busca en el string el caracter 'a' y le indico a paratir de que indice buscar( es decir busca el carracter 'a' en el string a partir del indice 20 de mi string y me regresa
 la primera 'a' que encuentra)
*/ 
let indexOf2 = prueba.indexOf('a',20);
console.log(indexOf2);
// busca si dentro de mi string encuentra la palabra 'casa' como no existe la palabra en el string me regresa un -1
let indexOf3 =prueba.indexOf('casa');
console.log(indexOf3);
// si la palabra existe en mi string me regresa el indice de inicio de esta palabra
let indexOf4 = prueba.indexOf('aprender');
console.log(indexOf4);
//me busca la palabra a partir del indice que yo le indico del string y me dice en que index se encuentra
let indexOf5 = prueba.indexOf('de',20);
console.log(indexOf5);


//me da el indice del ultimo caracter 'a' de mi string
let lastIndexOf1 = prueba.lastIndexOf('a');
console.log(lastIndexOf1);
//busca en el string a partir del indice que le señalo la primera 'e' que encuentra *******(del 21-------- a la primera 'e' que encuentre)
let lastIndexOf2 = prueba.indexOf('e',21);
console.log(lastIndexOf2);
//busca la palabra en el string si no existe me devuelve -1
let lastIndexof3 = prueba.lastIndexOf('casa');
console.log(lastIndexof3);
//busca en mi string y me devuelve la ultima palabra 'de' y su ultimo indice( en el que termina la palabra)
let lastIndexOf4 = prueba.lastIndexOf('de');
console.log(lastIndexOf4)
//me busca en mi string desde el princio hasta el indice que le indico y si dentro de ese rando (inicio-----20) se encuentra 'de' *****
let lastIndexOf5 = prueba.lastIndexOf('de',25);
console.log(lastIndexOf5);


/* 
    con replace, si no existe la palabra en mi string o esta escrita de otra manera con minusculadas y la estoy buscando en mayuscula no la encontrara y por lo tanto 
    no la sustituirá. 
*/
// le indico que palabra de mi string quiero sustituir , y por cual
 let replace1 = prueba.replace('mensaje','ejercicio');
 console.log(replace1);
//en este caso me remplasa todas la palabras 'de' de mi estring( puedo sustituir todas las 'a', o lo que quiera y cambiarlo por lo que quiera) es global g
let replace2 = prueba.replace(/de/g,'');
console.log(replace2);


/* 
.slice me devuelve un pedaso de mi estring basandose en los indices de inicio y final que yo le indique
*/
// le indico que del indice 3 al 10 me imprima lo que dice mi string
let slice1 = prueba.slice(3,10);
console.log(slice1);
// Si no le indico ambos indices me imprimira mi estring a partir del indice que le indico. Es decir que el indice 0 será 10 e imprimirá del 10 en adelante
let slice2 = prueba.slice(10);
console.log(slice2);
// si el indice es negativo comienza a imprimir desde el final del string
let slice3 = prueba.slice(-10);
console.log(slice3);
// me imprime igual contando desde el final del string y el segundo indice es para quitar desde el final 
let slice4 = prueba.slice(-14,-10);
console.log(slice4);

/* 
.split combierte el string a un array tengo que pasarle un caracter (',')('.')('a')('') para indicarle donde cortar
(' ') separa el string por espacios en un array
('') separa el string por letras en un array
() devuelve el string tal cual a un array
('a') corta el string por las 'a' y no muestra esta letra en el array
*/

let split1 = prueba.split(' ');
console.log(split1);

/* 
.trim remueve los espacios en blanco que tine de más del texto
 */
// acá trim quita los epacios de el inicio y del final 
const pruebaTrim = '           si tu tienes espacios de más en el principio y final de tu string trim lo resuelve.          '
let trim = pruebaTrim.trim();
console.log(trim);
// aca solo quita los espacios en blaco del inicio
let trimStar = pruebaTrim.trimStart()
console.log(trimStar)
// aca solo los del final 
let trimEnd = pruebaTrim.trimEnd()
console.log(trimEnd);


/* string.concat combina uno o mas string los concatena sin modificar los originales*/

let concat = prueba.concat(pruebaTrim,' probando concat');
console.log(concat);

// aplicando lo aprendido para que no tengan espacios
let concat1 = prueba.concat(pruebaTrim.trim, 'ahora si queda mejor');
console.log(concat1);

/*
.includes busca en el string una palabra de nustra elección y nos regresa true o si no existe la palabra en mi string o esta escrita de otra manera con minusculadas y 
la estoy buscando en mayuscula no la encontrara y por lo tanto me dirá false  
 */

let include = prueba.includes('mensaje');
console.log(include);
     //
let includes = prueba.includes('Mensaje');
console.log(includes);     

/* 
.toUpperCase me devuelve todo el string en Mayusculas
*/

let toUpperCase = prueba.toUpperCase();
console.log(toUpperCase);

/* 
.toLowerCase me regresa todo el String en minusculas
*/

let toLowerCase = prueba.toLowerCase();
console.log(toLowerCase);

/* 
.endsWith regresa verdadero o falso lo usamos para buscar o confirmar con que palabra termina nuestro String
*/

let endsWith = prueba.endsWith('/');
console.log(endsWith);
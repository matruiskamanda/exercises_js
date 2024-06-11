const texto = "La inteligencia artificial (IA) es una rama de la informática que se ocupa de crear sistemas que pueden realizar tareas que requieren inteligencia humana. Estos sistemas pueden incluir desde algoritmos simples hasta redes neuronales complejas.La IA se utiliza en una amplia gama de aplicaciones, como reconocimiento de voz, procesamiento de lenguaje natural, visión por computadora, robótica, juegos y mucho más. Con el avance de la tecnología, la IA está cada vez más presente en nuestra vida cotidiana, desde los asistentes virtuales en nuestros teléfonos inteligentes hasta los sistemas de conducción autónoma en los automóviles.A medida que la IA continúa desarrollándose, surgen preguntas importantes sobre ética, privacidad y seguridad. Es crucial abordar estos problemas para garantizar que la IA se utilice de manera responsable y beneficiosa para la sociedad en su conjunto"
console.log(texto.charAt(50));
console.log(texto.toUpperCase().slice(0,50));
console.log(texto.toLowerCase().slice(0,50));
console.log(texto.indexOf('sistemas')); // busca la primera palabra 'sistemas'
console.log(texto.indexOf('a',50)); // busca la primera ´a´ que aparece a partir del indice 50
console.log(texto.lastIndexOf('la',50)); // me dice la primera que aparece del 0 al 50
console.log(texto.lastIndexOf('la')); // me dice la ultima
console.log(texto.lastIndexOf('a',10)); // me dice la prima del 0 al 10
console.log(texto.replace('crear', 'cagar').slice(0,100)); // me remplaza la primera palabra crear
console.log(texto.replace(/sistemas/g,'kjaeugdauegdfiw').slice(0,200)); // me remplasa todas las palabras sistemas
console.log(texto.slice(0,50)); // me imprime solo los 50 primeros caracteres
console.log(texto.slice(-50)); // me imprime los ultimos 50 caracteres
console.log(texto.slice(-50,-10)); // me imprime los caracteres desde el final del 50 al 10
console.log(texto.slice(0,10).split()); // me pone todo el texto en un array
console.log(texto.split('').slice(0,50));// me corta cada letra 
console.log(texto.split(' ').slice(0,50));// me corta por palabra
console.log(texto.slice(0,80).trim())// me quita los espacios vacios del inicio y final del texto
console.log(texto.slice(0,80).trimStart()) // me quita los espacios en blanco del principio del texto
console.log(texto.slice(0,80).trimEnd()) // me quita los espacios en blanco del final del texto
console.log(texto.slice(0,80).concat(' provando concatenar')) // es para concatenar varios textos sin modificarlos
console.log(texto.includes('tareas')); // regresa true or false
console.log(texto.endsWith('conjunto'))// regresa true or false para confirmar como termina el texto






const texto2 = '   esta es una cadena de texto más chiquita para provar texto cada uno de los que recuerde    '
console.log(texto2.toUpperCase());// todas mayusculas
console.log(texto2.toLowerCase());// todas minusculas
console.log(texto2.charAt('6'));// la letra de ese indice
console.log(texto2.indexOf('a'));//indice de la primera 'a'
console.log(texto2.indexOf('a',15));// me dice del 15 en adelante la primera 'a'
console.log(texto2.indexOf('de')); // me dice el indice del primde 'de'
console.log(texto2.indexOf('de',10));// me dice el primer 'de' que encuentre luego del indice 10
console.log(texto2.lastIndexOf('a')); // me dice la ultima 'a' del string
console.log(texto2.lastIndexOf('a',10));// me dice la primera 'a' que encuentre hasta el indice 10
console.log(texto2.lastIndexOf('de'));// me dice el ultimo 'de' del string
console.log(texto2.lastIndexOf('de', 30));// me dice la pocision de 'de' antes del indice 30 si hay
console.log(texto2.slice(50));// me muestra el texto del caracter 50 en adelante (del caracter 0...50-----> muestra hasta el final)
console.log(texto2.slice(5,15));// me muestra los carracteres del 5 al 15
console.log(texto2.slice(-50));// me muestra los ultimos 50 caractares ( 50 <------- final )
console.log(texto2.slice(-30,-10));// me muestras los ultimos caractereres del 30 al 10 (30 <-muestra-> 10<----final)
console.log(texto2.split());// me pone el string completo en un array
console.log(texto2.split(''));// me divide por letra 
console.log(texto2.split(' '));// me divide por palabras
console.log(texto2.trim());// me elimina los espacios del principio y el final del string
console.log(texto2.trimStart());// me elimina los espacios del principio del string
console.log(texto2.trimEnd());// me elimina los espacios del final del string
console.log(texto2.concat('otro texto para concatenar con el texto2'));// me une un texto con otro o con varios textos sin modificar los originales
console.log(texto2.replace('cadena','string'));// me replasa la primera palabra 'cadena' del string por 'string'
console.log(texto2.replace(/texto/g, 'global'));// me replasa todas las palabras del string 'texto' por 'global'
console.log(texto2.endsWith('recuerde'));// me regresa true o false si la palabtra se encuntra dentro del string o no
console.log(texto2.includes('chiquita'));// me resgresa un true o false para confirmar en que termina el string







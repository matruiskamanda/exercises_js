// 1.- sola responsabilidad
// 2.- retornan preferentemente un sólo valor (output)
// 3.- best practice
//      los menos parámetros posibles (Input)

// sintáxis de las funciones es (declarativo): >>>> OLD SCHOOL <<<
/*
// ECMas5
function nombre(argumento1, argumento2, etc){
    // lexical scope

    // return (output)
}

// sintáxis de las funciones es (declarativo): >>>> NEW COOL WAY <<<
// ejemplo 1 ECMas6:
const nombre = (argumento1, argumento2, etc) => argumento1 + argumento2 ;

// ejemplo 2 ECMAs6
const nombre_dos = (argumento1, argumento2) => {
    // lexical scope
    return ; 
}

*/

/*
    CALL STACK (llamar o invocar a una función)
     sintáxis de las funciones "llamadas" (call stack)
     console.log() << esto es un call stack
     function test(){ return 1; } // function de prueba sólo para ejemplo.
     console.log(test()); << llamas primero a la función console.log y después (dentro) llamas a la función "test" y el resultado de la función "test" será el argumento de la función console.log
*/

/* -------------- ECMAs5 OLD WAY o VanillaJS -------------- */
function suma(n1, n2){
    return n1 + n2;
}

function formateaResultado(resultado){
    return `el resultado es ${resultado}`;
}
const resultadoSuma = suma(1,2);
const resultadoFormateado = formateaResultado(resultadoSuma);
console.log(resultadoFormateado);

console.log(formateaResultado(suma(1,2))); /// 

function imprimeSuma(){
    console.log() // esto no es buena práctica. Las funciones deben retornar un propósito.
}


function reverseText(texto){
    // lexical scope
    const split = texto.split('').reverse().join('') // chanining
    return split;
}



console.log(reverseText('hola')); // callstack de 2 funciones 1. console.log(), reverseText()


/* -------------- ECMAs6 NEW WAY o ESM -------------- ESM === EcmasModule */ 

const sumaNewWay = (num1, num2) => num1 + num2;
const resNWay = sumaNewWay(1,2); // call stack 
console.log('resltado newWay', resNWay); // call stack de console.log, pasándole como argumento el valor de resNWay
const sumaNWayConsole = (num1, num2) => console.log(num1 + num2);
sumaNWayConsole(3,4);
const sumaNWayLexicalScope = (num1, num2) => {
    return { total: num1 + num2, numero_uno: num1, numero_dos: num2} // regreamos un objeto con varios valores, PERO siempre es un único return 
}

const resultadoN = sumaNWayLexicalScope(5,6)
console.log(resultadoN.total);

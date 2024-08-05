const numeros =[21,22,23,24,25,34,22];
//.map a cada elemento de mi arrey le suma,resta, multiplica etc
console.log(numeros.map(Element => Element * 2));
//.filter recorre el artray y retorna un nuevo array con los elementos que pasen una determinada condicion
console.log(numeros.filter(Element => Element > 23 && Element < 40))
console.log(numeros.filter(Element => Element === 22 || Element === 25))
//.forEach itera en el array por cada uno de los elementos y callback funcción que toma los parametros
numeros.forEach(function(element,i,a){
    if(element > 23){
        console.log(element,i,a);
    }
});
//.find() recorre el array y retorna la primera coincidencia del array que coincida con la busqueda 
console.log(numeros.find(element => element > 20));
//.sort() ordenas los elementos del array.Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto. o bien por las condiciones
// descendente ( mayor a menor)
console.log(numeros.sort((a,b) => a > b ? -1 : 1));
// ascendente (menor a mayor)
console.log('sort',numeros.sort((a,b) => a < b ? -1 : 1));
//.some regresa un true or false si uno de los elementos del array pasa un acondicion determinada 
console.log(numeros.some(element => element === 23));
//.every igual regresa un true o false pero para un true deben cumplir la condicion todos los elementos del array 
console.log(numeros.every(element => element < 50));
//. concat se utiliza para unir uno o más array 
const nunmeros2 = [12,34,23,44]
console.log(numeros.concat(nunmeros2));
//.include determina si en un array existe cierto elemento y regresa true or false
console.log('include',numeros.includes(22));
console.log(numeros.includes(80));
//.join une elementos en un array y puedo indicarle un parametro de separacion
console.log('join',nunmeros2.join(''));
console.log('join',numeros.join('-'));
//.reduce transforma un array en lo que quiera 
console.log(numeros.reduce((acumulador,current) => acumulador + current))
// .indexOf retorna el indice donde se encuentra un elemento dado 
console.log('indexOf',numeros.indexOf(22));
//findIndex Retorna el índice del primer elemento de un array que cumpla con la función
console.log(numeros.findIndex(element => element === 22));
//.fill cambia los elemtos de un array por un valor estatico desde el inicio hasta el final del array
console.log(numeros.fill(10,2));
console.log(numeros.fill(1,3,5));
//.push añade nuevo elemmento al array al fnal de este 
const frutas = ['piña','mango','uva','limon'];
console.log(frutas.push('platano')); // me dice el nuevo indice del array con el nuevo elemento añadido
console.log(frutas);// me muestra todos los elementos
//.pop me elimina un elemento en el ultimo indice de mi array
console.log(frutas.pop());// me muestra el elemento eliminado 
console.log(frutas);// me muestra todos los elementos que quedan 
//.shift Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
console.log(frutas.shift());
console.log(frutas);// me muestra todos los elementos que quedan 
//.unshift agrega un nuevo elemento al inicio del array y me regresa la nueva longitud del array 
console.log(frutas.unshift('pera'));
console.log(frutas.unshift('manzana', 'fresa'));
//.slice me hace un nuevo array con la selecion que le indique sin modificar el original 
console.log(frutas.slice(2,4));
//.reverse invierte el orden de un array( el primero pasa a hacer el ultimo y el utimo pasa a ser el primero)
console.log(frutas.reverse());
//.splice cambia el contenido de mi array liminando elementos o agregando nuevos elementos si elimino algun elemento me regresa el elemento eliminado
console.log(frutas.splice(1,0,'cereza'));
console.log(frutas);
//.lastIndexOf() : Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.
//.flat() : Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
const array = ['amarillos',['platano','manzana','piña'],'verdes',['limon','uva','aguacate'], 'rosados',['fresa','ceresa','frambuesa']];
console.log(array.flat());
//.isArray() : Determina si el valor pasado es un Array.
console.log(Array.isArray([7,4,3,2]));
console.log(Array.isArray('manzana','pera'));
//.from() : Crea una nueva instancia de Array a partir de un objeto iterable.
console.log(Array.from('tunosabenaa'));
const frutas1 = ['piña','mango','uva','limon'];
console.log(frutas1.slice(2));




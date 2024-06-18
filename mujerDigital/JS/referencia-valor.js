let a = 10;
let b = a;
a = 30; // no modifica el valor de b, b sige siendo 10
console.log(a,b);

const pepe = {nombre: 'Pepe'}
const ana = pepe
console.log(pepe,ana)
ana.nombre = 'Ana' // modifica tanto a Ana como a Pepe
console.log(pepe,ana) 
// para romper esa vinculo por referencia es:
const laura = {...ana};
laura.nombre = 'Laura'; 
console.log(ana, laura); // ana sigue conservando Ana como valor de su propiedad nombre y solo modifique el valor de la propiedad nombre de Laura

// mismo ejemplo con Array
const frutas = ['uva', 'piña', 'manzana'];
const otrasfrutas = frutas; 
otrasfrutas.push('mango');
console.log(frutas, otrasfrutas); // se agrega mango tambien a frutas 
// ejemplo rompiedo esa dependencia de 2 maneras con slice y spread

// ejemplo slice
console.time('slice'); // para comparar cuanto tiempo demora en comparacion con spread
let otrasFrutas1 = otrasfrutas.slice();
console.timeEnd('slice');// para comparar cuanto tiempo demora en comparacion con spread
otrasFrutas1.push('fresa');
console.log(otrasfrutas, otrasFrutas1); // se agrego fresa solamente a otrasFrutas1 y no a otrasfrutas

// ejemplo spread
console.time('spread') // para comparar cuanto tiempo demora en comparacion con slice
let otrasfrutas2 = [...otrasFrutas1]
console.timeEnd('spread');// para comparar cuanto tiempo demora en comparacion con slice
otrasfrutas2.push('limon');
console.log(otrasFrutas1, otrasfrutas2); // se agrego limon solo a otrasFrutas2

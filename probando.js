/* const lala = ['lily', 'lukas', 'coco', 'diego', 'manuel', 'patricia']
const lili = ['coco', 'lukas']
console.log(lala.indexOf(lili[0]))


const numeros = '1234'
const numeros1 = 567

let prueba = numeros +numeros1;
let prueba1 = (+prueba)

console.log(typeof(prueba1));

const numeroo = 14.7789
console.log(numeroo.toFixed(2));

const pangram = 'tu tieNes Que estudiar';
console.log(pangram.includes('e','N'))
 */

const l = '1 2 3 \n 4 5 \n 6 7'
const t = l.trim()
const mi = t.split('\n')
const me = mi.map(e => {
  m = e.split(',')
  m.map(x => x.split(' '));
});
console.log (me)


/* const m2 = mi.map(e => 
  e.split(',')
);
console.log(m2)
 */
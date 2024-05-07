//5 numeros, mostrar el mayor y el menor de ellos
const r = 15;
const t = 73;
const u = 92;
const i = 28;
const j = 4;
let mayor = null;
let menor = null;
if (r > t) {
  mayor = r;
  menor = t;
} else {
  mayor = t;
  menor = r;
}
if (u > mayor) {
  mayor = u;
} else {
  if (u < menor) {
    menor = u;
  }
}
if (i > mayor) {
  mayor = i;
} else {
  if (i < menor) {
    menor = i;
  }
}
if (j > mayor) {
  mayor = j;
} else {
  if (j < menor) {
    menor = j;
  }
}

console.log(mayor, menor);
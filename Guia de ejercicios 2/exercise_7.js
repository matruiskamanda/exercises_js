//4 numeros distintos mostrar el mayor de ellos
const x = 66;
const z = 54;
const y = 98;
const w = 7;
if (x > z && x > y && x > w) {
  console.log("el mayor es", x);
} else {
  if (z > x && z > y && z > w) {
    console.log("el mayor es:", z);
  } else {
    if (y > w) {
      console.log("el mayor es:", y);
    } else {
      console.log("el mayor es:", w);
    }
  }
}
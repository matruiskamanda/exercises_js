//la longitud de 3 lados de un triangulo, 3 lados iguales equilatero, 2 lados isosceles, 0 escaleno
const longLadoa = 42;
const longLadob = 37;
const longLadoc = 42;
const triangulo = longLadoa === longLadob && longLadob === longLadoc ? 'equilatero': longLadoa != longLadob && longLadoa != longLadoc ? 'escaleno' : 'isosceles'
console.log(triangulo);
// para hacer un objeto por que si
const trian ={
    ladoA : 42,
    ladoB : 37,
    ladoC : 42,
}
const eso = trian.ladoA === trian.ladoB && trian.ladoB === trian.ladoC ? 'equilateto' : trian.ladoB != trian.ladoA && trian.ladoB != trian.ladoC ? 'escaleno' : 'isosceles'
console.log(trian);
const nota = 55;
const grado = (nota > 95) ? 'A+' :
              (nota > 80) ? 'A'  :
              (nota > 70) ? 'B+' :
              (nota > 65) ? 'B'  :
              (nota > 60) ? 'C'  : 'F';

    console.log(nota, grado);

function crearPersona(caca, apellido){
    return {
        caca,
        apellido,
    }
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});

console.log(crearPersona('Amanda', 'Torres')); 
console.log(crearPersona2('Amanda', 'Torres'));

const imprimeArgumento = (edad, ...args) => {
    return args;
}
// desagrupo los argumentos de la funcion
const[nombre,edad,casado,vive] = imprimeArgumento(22,'Amanda',28, false, true);
console.log(nombre, casado, vive, edad);

// desagrupo el objeto que me rotorna la funcion crear persona
const crearPersona3 = crearPersona('Amanda', 'Torres');
// pongo el nombre de la propiedad que me interesa
const {apellido} = crearPersona('Amanda', 'Torres');
console.log({apellido});
//o
const {apellido: nuevoApellido} = crearPersona('Amanda', 'Correa')
console.log({nuevoApellido});

// DESTRUCTURACION DE ARGUMENTOS
const personaje = {
    nombre: 'Iron Man',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}
// imprimiria 15 en la edad en caso de que sea undefined o null la inicializa
const imprimePropiedades = ({nombre, edad = 15,trajes}) =>{
    console.log(edad);
}

imprimePropiedades(personaje);
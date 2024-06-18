const personaje = {
    nombre: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
}

console.log('numeros de trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[2], 'o', personaje.trajes[personaje.trajes.length-1])

const x = 'vivo';

console.log('Vivo', personaje[x])

// borrar propiedad de un objeto
delete personaje.edad;
console.log(personaje);

// crear una nueva propiedad en el objeto
personaje.casado = true;

// para convertir mi objeto en un array
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// para conjelar el objeto y no pueda ser editables su propiedades
Object.freeze(personaje);
// tratar de ingresar una nueva propiedad una vez conjelado
personaje.salario = 10000;
// pero si puedo cambiar el valor de las propiedades del objeto direccion por ejemplo.
// si quiero conjelar ese objeto puedo hacer un Object.freeze(personaje.direccion)
personaje.direccion.ubicacion = 'Xalapa';
console.log(personaje);

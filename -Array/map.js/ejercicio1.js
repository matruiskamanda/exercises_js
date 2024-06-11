// Toma un arreglo de números y crea un nuevo arreglo donde cada número esté duplicado.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((elemento)=> elemento * 2);
console.log(doubled); // [2, 4, 6, 8]





const arr = [1, 6, 7, 7, 2, 1]
let index = 0;
arr.forEach((number)=> number === 7 ? index++ : index)
console.log(index);

console.log(arr[arr.length-1]);



const playlist = [
    'tu eres - bonita',
    'tu eres - inteligente',
    'tu eres - fuerte'
]
function listArtists(playlist) {
    const mySet = new Set(playlist);
    mySet.forEach((artista) => {
      const [,pipa] = (artista.split('-'));
        console.log(pipa)
      
    });
    
  }

  console.log(listArtists(playlist));



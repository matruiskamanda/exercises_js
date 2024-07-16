const arr = ['coco', 'narcizo', 'lukas', 'negro', 'diego']

// for in 
console.warn('For in')
for( let i in arr){
    console.log(arr[i]);
};


// for of 
console.warn('For of')
for(let mascota of arr){
    console.log(mascota);
};


const m = 'tu sabes?'
console.log(m.endsWith('?'));
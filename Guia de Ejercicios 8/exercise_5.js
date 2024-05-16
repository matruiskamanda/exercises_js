const frase = ['h','o','l','a','a','m','a','n','d','a','c','o','m','o','e','s','t','a','s','.'];
const fraseCambiada =[];
let i = 0;
while(frase[i] !== '.'){
    fraseCambiada[i] = frase[i];
    if(fraseCambiada[i] === 'a'){
        fraseCambiada[i] = 'e';
    }
    i++;
}
console.log(frase);
console.log(fraseCambiada);
const frase = ['h','o','l','a','a','m','a','n','d','a','c','o','m','o','e','s','t','a','s','.'];
//const fraseCambiada =[];
//let i = 0;


const cambiarFrase = (a,b) =>{
    let i = 0;
    while(a[i] !== '.'){
        b[i] = a[i];
        if(a[i] === 'a'){
            b[i] = 'e';
        }
        i++
    }
    return b;
}
console.log(cambiarFrase(frase, []).join(""));
/* while(frase[i] !== '.'){
    fraseCambiada[i] = frase[i];
    if(fraseCambiada[i] === 'a'){
        fraseCambiada[i] = 'e';
    }
    i++;
}
console.log(frase.join(""));
console.log(fraseCambiada.join("")); */
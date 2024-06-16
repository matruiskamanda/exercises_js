const promesa = new Promise((resolve, reject) => {
    resolve('hola')
})

//promesa.then(t => console.log('resolve', t)).catch(err => console.error('error', err))
(async() => {
        try{
            const m = await promesa;
            console.log(m);
        }catch(error){
            console.error(error)
        }
})()
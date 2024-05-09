let objecto = {
    
}
objecto['zona1'] = {}
objecto['zona1']['total_kvs'] = 888;
objecto['zona1']['clientes'] = {}
objecto['zona1']['clientes']['0001'] = [];
objecto['zona1']['clientes']['0004'] =  0;

//console.log(Object.keys(objecto.zona1.clientes).length);
objecto.zona1.clientes['0001'].push(1)
objecto.zona1.clientes['0001'].push(2)
console.log(JSON.stringify(objecto, null, 4));


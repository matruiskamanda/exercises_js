/* const zona1 =[23,24,25,26,27,28,29,0]
const clientNumber =[7428,8313,7428,7428,7678,8313,78496, 7428,8313,7678,]
const Kw =[46,78,74,24,45,55,32,78,54,22]
 */
const registroCFE = [
    {
        zona: 1,
        numero_cliente: '1001',
        kv: 200,
    },{
        zona: 1,
        numero_cliente: '1002',
        kv: 100,
    },{
        zona: 2,
        numero_cliente: '2001',
        kv:99,
    },{
        zona: 3,
        numero_cliente:'2463',
        kv: 230,
    },{
        zona: 1,
        numero_cliente: '1006',
        kv: 150,
    },{
        zona: 2,
        numero_cliente:'1003',
        kv: 99,
    },{
        zona: 3,
        numero_cliente: '1005',
        kv: 239,
    },{
        zona: 1,
        numero_cliente: '1002',
        kv: 243,
    },{
        zona: 3,
        numero_cliente: '2463',
        kv: 134,
    },{
        zona: 2,
        numero_cliente: '1003',
        kv: 324,
    }
]
let resultado = {};
let currentZone = null;
let totalFacturado = 0;
let nuClientes = null;
for(i=0; i< registroCFE.length; i++){
    currentZone = `zona${registroCFE[i].zona}`
    nuClientes = `nucliente${registroCFE[i].numero_cliente}`
    if(!resultado[currentZone]){
        resultado[currentZone] = {totalFacturado: 0, clientes: {}}
        resultado[currentZone]['clientes'][`${registroCFE[i].numero_cliente}`] = 0; //{'nuClientes' : [registroCFE[i].numero_cliente]}
     
    }
     
    resultado[currentZone]['clientes'][`${registroCFE[i].numero_cliente}`] =0;

    if(registroCFE[i].kv > 200){
        totalFacturado+=registroCFE[i].kv*0.15;
    }else{
        if(registroCFE[i].kv > 100){
        totalFacturado+=registroCFE[i].kv*0.12;
         }else{
            totalFacturado+=registroCFE[i].kv*0.10;
        }
    }
    resultado[currentZone]['totalFacturado'] = totalFacturado

}

for (let i = 0; i < resultado[currentZone].length; i++) {
    console.log(Object.keys(resultado[currentZone][i]['clientes']).length);
}
//console.log(Object.keys(resultado[currentZone].clientes.length))
//console.log(resultado);
//console.log(JSON.stringify(resultado, null, 4))





const arbolGenealogico = {
    milagros: {
        edad: 87,
        hijos: {
            marilyn: {
                edad: 58,
                hijos: {
                    yusy: {
                        edad: 42,
                        hijos: null
                    },
                    amanda: {
                        edad: 20,
                        hijos: {
                            lukas: {
                                edad: 2,
                                hijos: null
                            }
                        }
                    }
                }  
            },
            yamile: {
                edad: 55,
                hijos: {
                    isabella: {
                        edad: 24,
                        hijos: null
                    }
                }
            }
        }
        
    },
    pucha: {
        edad: 79,
        hijos: {
            maribel: {
                edad: 40,
                hijos: {
                    gabriela: {
                        edad: 24,
                        hijos: {
                            xoch: {
                                edad: 4,
                                hijos: null
                            }
                        }
                    }
                }
            },
            isabel: {
                edad: 51,
                hijos: null
            } 
        }
    },
    tai: {
        edad: 69,
        hijos: null
    }
}

//console.log(Object.keys(arbolGenealogico.milagros.hijos))

for(const abuela of Object.keys(arbolGenealogico)){
    console.log(abuela)
    if(arbolGenealogico[abuela].hijos !== null){
        
        for(const madre of Object.keys(arbolGenealogico[abuela].hijos)){
            console.log(`--> ${madre}`)

            if(arbolGenealogico[abuela].hijos[madre].hijos !== null){
                for(const hija of Object.keys(arbolGenealogico[abuela].hijos[madre].hijos)){
                    console.log(`----> ${hija}`)
                    if(arbolGenealogico[abuela].hijos[madre].hijos[hija].hijos !== null){
                        for(const bisnieto of Object.keys(arbolGenealogico[abuela].hijos[madre].hijos[hija].hijos)){
                            console.log(`------> ${bisnieto}`)
                        }
                    }else{
                        console.log('------> no tiene hijos')
                    }
                }
            }else{
                console.log('----> no tiene hijos')
            }
        }    
     }else{
        console.log('--> no tiene hijos')
    }  
}

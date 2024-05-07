//configuración equipo a comprar i5,i7,i9 para cada uno 8ram, 16 ram, 32 ram. si añade disco duro 1t $300

let cpU = 7;
let raM = 8;

switch (cpU) {
    case 5: {
        switch (raM) {
            case 8: {
                console.log(800)
                break;
            }
            case 16:{
                console.log(900)
                break;
            }                
            case 32:{
                console.log(1000)
                break;
            }   
            default:{
                console.log('error')
                break;
            }
        }
        break;
    }
        
    case 7: {
        switch (raM) {
            case 8:{
                console.log(900)
                break;
            } 
                
            case 16:{
                console.log(1000)
                break;
            }
                
            case 32:{
                console.log(1400)
                break;   
            }
            default:{
                console.log('error')
            }
        }
        break;
    }
        
    case 9:{
        switch (raM) {
            case 8: {
                console.log(1200)
                break;
            }
                
            case 16: {
                console.log(1400)
                break;
            }
                
            case 32:{
                console.log(2000)
                break;
            }
                
    
            default:{
                console.log('error')
            }
        }
        break
    }
        
    default:{
        console.log('error')
    }
}
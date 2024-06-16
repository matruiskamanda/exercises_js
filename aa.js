class ApiService {
    algo;
    constructor(algo){
        this.algo = algo
    }

    imprime(){
        return this.algo
    }
    ladra(){
        return 'guau guau'
    }
}

class Logger {
    constructor(){

    }

    log(msg){
        console.log(msg)
    }
}

class TranslationService{
    api ; 

    constructor(api, logger){
        this.api = api
        this.logger = logger
    }


    free(text){
        this.logger.log("feee method")
        return text
    }

    batch(strings){
        this.logger.log("batch method")
        return this.api.imprime()
    }
}

const api = new ApiService('hola')
const logger = new Logger()
const service = new TranslationService(api, logger)
const actual = service.batch(['aaaa','bbb'])
service.api.imprime()


const array1 = [1, 2, 3];
console.log(array1.map(n => n*2))

function testMe(text, callback){
    callback(text === 'xoch' ? undefined : new Error('invalid input'));
}

const m = () =>  new Promise((resolve, reject) => {
    testMe('xoch', (e) => {
        if(!e) resolve(undefined)
        reject(e);
    })
})

m().then(r => console.log('resultado', r)).catch(e => console.error('error',e));



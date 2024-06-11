class Size{
    whith;
    heigth;

    constructor(whith=80, heigth=60){
      this.whith = whith;
      this.heigth = heigth;
     }

     resize(newWidth, newHeigth){
      this.whith = newWidth;
      this.heigth = newHeigth
    }
    
    getSize(){
        return {}
    }
    get heigth(){
        return this.heigth;
    }

  }
  
  const prueba = new Size(1080,640);
  console.log(prueba.whith)
  //prueba.resize(1900,109990)
 console.log(prueba.heigth);

 const pepe  = 23
 const pepe2 = 44

 function sumar4(pepe,pepe2){
    return{pepe,pepe2}
 
 }
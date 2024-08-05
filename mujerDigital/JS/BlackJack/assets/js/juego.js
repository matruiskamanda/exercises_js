// funcion anonima que se auto invoca por eso los parentesis extras
(()=> {
    'use strict'
    let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
let puntosComputadora = 0;

// referencias del html 
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');

const idJugadorCartas = document.querySelector('#jugador-cartas');
const idComputadoraCartas = document.querySelector('#computadora-cartas');
const smalls = document.querySelectorAll('small');

// esta funcion crea un nuevo deck 
const crearDeck = () => {
    for(let i =2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo)
        }
    }

   deck = _.shuffle(deck);
   return deck;
}

crearDeck();

// funcion para permitirme tomar carta 
const pedirCarta = () => {
    if(deck.length === 0){
        throw ('No hay cartas en el deck')
    }
    const carta = deck.pop();
    return carta;
}

// pedir carta
const valorcarta = (carta) => {
    const valor = carta.substring(0,carta.length -1);
    return (!isNaN(valor)) ?
            Number(valor)  : valor === 'A' ? 11 : 10;
   /*  if( !isNaN(valor)){
        puntos+= Number(valor);
        console.log(puntos)
    }else{
        puntos+= valor === 'A' ? 11 : 10
    } */
}

// logica computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();

    puntosComputadora += valorcarta(carta);
    smalls[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `./cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    idComputadoraCartas.append(imgCarta);

    if(puntosMinimos > 21){
        break;
    }
        
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
    
            puntosComputadora > puntosMinimos ? alert('Perdiste, suerte en la próxima ronda :( '): 
            puntosComputadora < puntosMinimos ? alert('Ganaste, Genial! <3') : alert('Nadie Gana!')
}

// eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador += valorcarta(carta);
    smalls[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `./cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    idJugadorCartas.append(imgCarta);

    if(puntosJugador > 21){
        console.warm("Lo siento perdiste")
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador)
    }else if(puntosJugador === 21){
        console.warm("21 Genial")
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador)
    }
})



btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;

    turnoComputadora(puntosJugador);
})

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    smalls[0].innerText = 0;
    smalls[1].innerText = 0;

    idComputadoraCartas.innerHTML = '';
    idJugadorCartas.innerHTML = '';

    btnDetener.disabled = false;
    btnPedir.disabled = false;
});
})();




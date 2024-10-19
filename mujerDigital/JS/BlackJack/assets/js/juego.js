// funcion anonima que se auto invoca por eso los parentesis extras
(()=> {
        'use strict'
        let deck = [];
        const tipos = ['C','D','H','S'],
            especiales = ['A', 'J', 'Q', 'K'];

   /*  let puntosJugador = 0,
        puntosComputadora = 0; */

        let puntosJugadores = [];

    // referencias del html 
    const btnPedir = document.querySelector('#btnPedir'),
          btnNuevo = document.querySelector('#btnNuevo'),
          btnDetener = document.querySelector('#btnDetener');

    const divCartasJugador = document.querySelectorAll('.divCartas')
          smalls = document.querySelectorAll('small');

    // esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
            deck = crearDeck();

            puntosJugadores = [];
            for(i = 0; i < numJugadores; i++){
                puntosJugadores.push(0)
            };

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugador.forEach(elem => elem.innerHTML = '');

        btnDetener.disabled = false;
        btnPedir.disabled = false;
        }

    // esta funcion crea un nuevo deck 
    const crearDeck = () => {

        deck = [];

        for(let i = 2; i <= 10; i++){
            for(let tipo of tipos){
                deck.push(i + tipo);
            }
        }

        for(let tipo of tipos){
            for(let esp of especiales){
                deck.push(esp + tipo)
            }
        }
    return _.shuffle(deck);
    }

    // funcion para permitirme tomar carta 
    const pedirCarta = () =>  deck.length === 0 ?  'No hay cartas en el deck' : deck.pop()  

    // pedir carta
    const valorcarta = (carta) => {
        const valor = carta.substring(0, carta.length -1);
        return (isNaN(valor)) ?
               (valor === 'A') ? 11 : 10
               : valor * 1;
    }

    // turno: 0 es el primer jugador y el ultimo es la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorcarta(carta);
        smalls[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `./cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador[turno].append(imgCarta);

    }

    const determinarGanador = () => {
       const [puntosMinimos, puntosComputadora] = puntosJugadores;
        
        setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
    }

    // logica computadora
    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1);
            crearCarta(carta, puntosJugadores.length -1);
            
            
        } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

        determinarGanador()
        
    }

    // eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0)


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

        turnoComputadora(puntosJugadores[0]);
    })

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
        
});

    return {
        nuevoJuevo : inicializarJuego

    };
})();




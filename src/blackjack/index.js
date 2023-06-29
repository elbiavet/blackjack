
import { crearDeck, pedirCarta, valorCarta, determinarGanador } from './usecases';

const miModulo = (()=>{
  'use strict'
  
  /* constantes para crear la baraja */
  let deck =[];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  /* array para almacenar puntos */
  let puntosJugadores = [];

  /* referencias html */
  const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo = document.querySelector("#btnNuevo"),
        puntosHTML = document.querySelectorAll("span"),
        divCartasJugadores = document.querySelectorAll(".divCartas");


  /* iniciar juego */
  const iniciarJuego = ( numJugadores = 2 ) =>{

      deck = crearDeck(tipos, especiales)

      /* inicio un array con posiciones segun numero de jugadores, cuyo valor de inicio, puntos, es 0 */
      puntosJugadores = [];
      for( let i = 0; i< numJugadores; i++ ) {
          puntosJugadores.push(0);
      }
      
      puntosHTML.forEach( elem => elem.innerText = 0 );
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );

      btnPedir.disabled   = false;
      btnDetener.disabled = false;
  
      }
   iniciarJuego();


  /* Turno: 0 (primer jugador), Último turno (computadora) */
  const acumularPuntos = ( carta, turno ) =>{
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      puntosHTML[turno].innerText = puntosJugadores[turno] // aqui estoy poniendo el resultado al lado de la palabra jugador
      return puntosJugadores[turno]
  }

  //mostrar cartas en pantalla
  const crearCarta = ( carta, turno ) =>{
      const imgCarta= document.createElement('img');
      imgCarta.src=`./assets/cartas/${carta}.png`;
      imgCarta.classList.add("carta");
      divCartasJugadores[turno].append(imgCarta)
  }

  //turno de la computadora
  const turnoComputadora = ( puntosMinimos )=>{

      let puntosComputadora = 0;

      do{
          const carta = pedirCarta( deck );
          puntosComputadora = acumularPuntos( carta, puntosJugadores.length-1)
          crearCarta( carta, puntosJugadores.length-1)
          
      } while(
          (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)
      )
      determinarGanador( puntosMinimos, puntosComputadora )
  }

  /* eventos */
  btnPedir.addEventListener("click", ()=>{
      const carta = pedirCarta( deck );
      const puntosJugador = acumularPuntos( carta, 0)
      
      crearCarta( carta, 0 )

      //determinar si el jugador gana o pierde

      if(puntosJugador > 21){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador)

      } else if (puntosJugador === 21){
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador)
      } 
  })

  btnDetener.addEventListener("click", ()=>{
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0])
  })

  btnNuevo.addEventListener("click", ()=>{

      iniciarJuego();
  })

return{
  nuevoJuego: iniciarJuego
}

})();
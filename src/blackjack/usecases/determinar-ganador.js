import Swal from 'sweetalert2';

/**
 * Esta funcion determina quien gana
 * @param { NUmber } puntosMinimos 
 * @param { NUmber } puntosComputadora 
 */
export const determinarGanador = ( puntosMinimos, puntosComputadora ) =>{

    setTimeout(() => {
        if(puntosMinimos === puntosComputadora) {
            Swal.fire({icon: "warning", title: "¡Vaya! Nadie gana, hay un empate"})
        } else if( puntosMinimos > 21){
            Swal.fire({icon: "error", title: "Oh! La computadora gana. ¡Prueba de nuevo!"})
        } else if( puntosComputadora > 21 ){
            Swal.fire({icon: "success", title: "¡Enhorabuena, has ganado!"})
        } else {
            Swal.fire({icon: "error", title: "Oh! La computadora gana. ¡Prueba de nuevo!"})
        }
    }, 100);
}
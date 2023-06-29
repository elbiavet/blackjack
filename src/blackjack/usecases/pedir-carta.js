/**
 * Esta funcion me permite pedir una carta 
 * @param { Array<String>} deck es un arreglo de string
 * @returns { String } retorna la carta
 */

  export const pedirCarta = ( deck ) =>{
    if(deck.length === 0) {
        throw new Error("No hay cartas en la baraja")
    } 
    return deck.pop()
}

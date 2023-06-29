
/**
 * Esta funcion crea una nueva baraja
 * @param { Array<String> } tiposCarta Ejemplo: ['C', 'D', 'H', 'S'],
 * @param { Array<String> } tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K'];
 * @returns { Array<String> } retorna una nueva baraja
 */

  export const crearDeck = ( tiposCarta, tiposEspeciales )=>{

    if( !tiposCarta || tiposCarta.length === 0 ) throw new Error('tiposCarta es obligatorio como un arreglo de strings')
    if( !tiposEspeciales || tiposCarta.length === 0 ) throw new Error('tiposEspeciales es obligatorio como un arreglo de strings')


    let deck = [];
    for (let i = 2; i <=10; i++) {
        for (let tipo of tiposCarta) {
            deck.push(i + tipo) 
        }
    }

    for (let especial of tiposEspeciales) {
        for (let tipo of tiposCarta) {
            deck.push(especial + tipo)
        }
    }

    /* array ordenado aleatoriamente */
    return deck.sort( () => Math.random() - 0.5 )
    
}
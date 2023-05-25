/*
    El método substring() devuelve la parte de la cadena desde el índice
    inicial hasta el índice final y excluyendolo, o hasta el final de la
    cadena si no se proporciona un índice final.
    Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
    Se comporta como el método slice() o como el deprecado substr().
*/

const texto = "La programación Backend es lo más. I Love Backend";

// Crea un nuevo texto y le agrega los caracteres del texto original
// a partir del índice 3 hasta el índice 15.
const textoExtraido = texto.substring(3, 15); // Imprime "programación"

console.log("EJEMPLO: Uso de substring");
console.log(textoExtraido);
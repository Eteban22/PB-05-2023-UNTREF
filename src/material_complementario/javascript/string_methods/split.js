/*
    El método split() divide un objeto de tipo String en un array
    de cadenas mediante la separación de la cadena en subcadenas.
    Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/

const texto = "La programación Backend es lo más";

console.log("EJEMPLO: Uso de split");
const arrayDePalabras = texto.split(" ");
console.log(arrayDePalabras);   // Imprime [ 'La', 'programación', 'Backend', 'es', 'lo', 'más' ]
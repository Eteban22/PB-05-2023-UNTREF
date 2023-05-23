/*
    El método replaceAll() devuelve una nueva cadena con todas
    las coincidencias de un patrón reemplazadas por un reemplazo.
    La cadena original se deja sin cambios.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
    Cabe aclarar que, todas las coincidencias serán reemplazadas.
*/

const texto = "La programación Backend es lo más. I Love Backend";

console.log("EJEMPLO: Uso de replaceAll");
let textoReemplazado = texto.replaceAll("Backend", "Frontend");
console.log(textoReemplazado);   // Imprime true (significa que lo incluye)
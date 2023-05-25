/*
    El método replace() devuelve una nueva cadena con algunas o todas las
    coincidencias de un patrón, siendo cada una de estas coincidencias
    reemplazadas por el valor de remplazo.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
    Cabe aclarar que, solo la primera coincidencia será reemplazada.
*/

const texto = "La programación Backend es lo más. I Love Backend";

console.log("EJEMPLO: Uso de replace");
let textoReemplazado = texto.replace("Backend", "Frontend");
console.log(textoReemplazado);   // Imprime true (significa que lo incluye)
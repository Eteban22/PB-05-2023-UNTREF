/*
    El método includes() determina si una cadena de texto puede ser
    encontrada dentro de otra cadena de texto, devolviendo true o false
    según corresponda.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
*/

const texto = "La programación Backend es lo más";

console.log("EJEMPLO: Uso de includes");
let textoIncluyeEsteValor = texto.includes("Backend");
console.log(textoIncluyeEsteValor);   // Imprime true (significa que lo incluye)
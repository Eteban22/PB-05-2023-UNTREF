/*
    El método indexOf() devuelve el índice, dentro del objeto String que
    realiza la llamada, de la primera ocurrencia del valor especificado,
    comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra
    dicho valor.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
*/

const texto = "La programación Backend es lo más";

console.log("\nEJEMPLO N°1: Uso de indexOf");
let indiceDeUnValorBuscadoA = texto.indexOf("Backend");
console.log(indiceDeUnValorBuscadoA);   // Imprime 16 (significa que lo encontro)

console.log("\nEJEMPLO N°2: Uso de indexOf");
let indiceDeUnValorBuscadoB = texto.indexOf("backend");
console.log(indiceDeUnValorBuscadoB);   // Imprime -1 (significa que no lo encontro)

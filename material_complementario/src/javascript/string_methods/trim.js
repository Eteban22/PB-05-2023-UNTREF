/*
    El método trim( ) elimina los espacios en blanco en ambos
    extremos del string. Los espacios en blanco en este contexto,
    son todos los caracteres sin contenido (espacio, tabulación,
    etc.) y todos los caracteres de nuevas lineas.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trim
*/

const texto = "     La programación Backend es lo más    ";
console.log(texto);

console.log("\nEJEMPLO: Uso de trim");
let textoSinEspaciosInicialesNiFinales = texto.trim();
console.log(textoSinEspaciosInicialesNiFinales);
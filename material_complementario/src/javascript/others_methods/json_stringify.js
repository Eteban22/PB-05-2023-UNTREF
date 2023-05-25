/*
    El método JSON.stringify() convierte un objeto o valor de JavaScript
    en una cadena de texto JSON, opcionalmente reemplaza valores si se
    indica una función de reemplazo, o si se especifican las propiedades
    mediante un array de reemplazo.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
*/

let saludo = "Hola";
const numeros = [10, 20, 30];
const cosas = { a: "A", b: true };

const stringJSON = JSON.stringify({ saludo, numeros, cosas });
console.log("EJEMPLO 1: Uso estandar de JSON.stringify");
console.log(stringJSON);

const stringIndentadoJSON = JSON.stringify({ saludo, numeros, cosas }, null, "\t");
console.log("EJEMPLO 2: Uso indentado de JSON.stringify");
console.log(stringIndentadoJSON);
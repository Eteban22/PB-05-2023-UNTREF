/*
    El método JSON.parse() analiza una cadena de texto como JSON,
    transformando opcionalmente el valor producido por el análisis.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
*/
const stringJSON = '{ "saludo": "Hola", "numeros": [10, 20, 30], "cosas": { "a": "A", "b": true } }';

const objetoJSON = JSON.parse(stringJSON);
console.log("EJEMPLO: Uso de JSON.parse");
console.log(objetoJSON);
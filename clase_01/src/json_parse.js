const stringJSON = '{ "saludo": "Hola", "numeros": [10, 20, 30], "cosas": { "a": "A", "b": true } }';

// Convierte JSON a object
const objetoJSON = JSON.parse(stringJSON);
console.log(objetoJSON);
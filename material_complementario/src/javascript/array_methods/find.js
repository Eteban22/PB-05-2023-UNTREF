/*
    El método find() devuelve el valor del primer elemento del array
    que cumple la función de prueba proporcionada.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/

// Uso de find con primitivos
const numeros = [11, 20, 32, 15, 8, 9, 24];
const argumento = 11;
const numeroEncontrado = numeros.find((valor) => valor === argumento, argumento);

console.log("EJEMPLO: Uso de find con primitivos");
console.log(numeroEncontrado);

// Uso de find con objetos
const personas = [
    { id: 1, nombre: "Juan", apellido: "Pérez" },
    { id: 2, nombre: "Mariana", apellido: "Páez" },
    { id: 3, nombre: "Lorena", apellido: "Medina" }
];

const id = 2;
const personaEncontrado = personas.find((objeto) => objeto.id === id, id);

console.log("EJEMPLO: Uso de find con objetos");
console.log(personaEncontrado);
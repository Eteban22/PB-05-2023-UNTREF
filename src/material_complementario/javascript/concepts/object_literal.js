/*
    La clase Object representa uno de los tipos de datos en Javascript.
    Es usado para guardar una colección de datos definidos y entidades
    más complejas.

    Los objetos pueden ser creados utilizando el constructor "new" o la
    sintaxis literal.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

    Dato extra: Se permite agregar o quitar miembros de manera dinámica.
*/

// Declaración e instanciación o creación de un objeto persona.
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 21,
    telefonos: {
        movil: 123456789,
        oficina: 321456987,
        casa: 987456321
    },
    numerosFavoritos: [7, 10, 22],
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};

console.log(persona.nombre);                // Imprime Juan
console.log(persona.telefonos.movil);       // Imprime 123456789
console.log(persona.numerosFavoritos[1]);   // Imprime 10
console.log(persona.saludar());             // Imprime 10

console.log("\nEJEMPLO N°1: Objeto Literal");
console.log(persona);

// Se agrega una nueva propiedad
persona.pais = "Argentina";

// Se quita la propiedad edad
delete persona.edad;

console.log("\nEJEMPLO N°2: Objeto Literal modificado dinámicamente");
console.log(persona);
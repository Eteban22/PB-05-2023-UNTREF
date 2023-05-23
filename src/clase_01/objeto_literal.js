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
console.log(persona);

// Se agrega una nueva propiedad
persona.pais = "Argentina";
console.log(persona);

// Se quita la propiedad edad
delete persona.edad;
console.log(persona);

// Array de objetos literales
const personas = [
    {
        nombre: "Lorena",
        apellido: "Páez",
        edad: 18
    },
    {
        nombre: "Pablo",
        apellido: "Medina",
        edad: 25
    }
];

console.log(personas);

// Se accede a la edad de Pablo Medina
console.log(personas[1].edad);  // Imprime 25

// Se modifica la edad de Lorena Páez
personas[0].edad = 30;
console.log(personas[0].edad);  // Imprime 30

// Se agrega el objeto persona al array de personas
personas.push(persona);
console.log(personas);
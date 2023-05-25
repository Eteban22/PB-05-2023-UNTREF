/*
    La declaración class crea una nueva clase con el nombre proporcionado
    utilizando la herencia basada en prototipos. También se puede definir
    una clase usando una expresión de clase. Pero a diferencia de las
    clases expresadas, la declaración de clases no permite que una clase
    existente sea declarada de nuevo y en caso de hacerse, lanzará un
    error de tipo.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/class

    Dato extra: Se permite agregar o quitar miembros de manera dinámica.
*/

// Ejemplo N°1: Clase declarada (recomendada)
// eslint-disable-next-line max-classes-per-file
class Persona {

    // Propiedades privadas
    #nombre;
    #apellido;

    constructor(nombre, apellido, apodo, numeroFavorito) {
        this.#nombre = nombre;
        this.#apellido = apellido;

        // Propiedades públicas
        this.apodo = apodo;
        this.numeroFavorito = numeroFavorito;
    }

    // Método público
    saludar() {
        return `Hola. Soy ${this.#nombre} pero me dicen ${this.apodo}`;
    }

    // Getter & Setter
    get apellido() {
        return this.#apellido;
    }

    set apellido(apellido) {
        this.#apellido = apellido.toUpperCase();
    }
}

// Instanciación o creación de un objeto de la clase Persona
const martin = new Persona("Martín", "Pérez", "Tincho", 14);

console.log("\nEJEMPLO N°1: Clase declarada");
console.log(martin);            // Imprime solo las propiedades públicas
console.log(martin.saludar());  // Imprime "Hola. Soy Martín pero me dicen Tincho"

// Ejemplo N°2: Clase expresada
const Estudiante = class {

    // Propiedades privadas
    #nombre;
    #apellido;

    constructor(nombre, apellido, carrera) {
        this.#nombre = nombre;
        this.#apellido = apellido;

        // Propiedad pública
        this.carrera = carrera;
    }

    // Método público
    saludar() {
        return `Hola. Soy ${this.#nombre} y estoy estudiando ${this.carrera}`;
    }

    // Getter & Setter
    get apellido() {
        return this.#apellido;
    }

    set apellido(apellido) {
        this.#apellido = apellido.toUpperCase();
    }
};

// Instanciación o creación de un objeto de la clase Estudiante
const lorena = new Estudiante("Lorena", "Páez", "BackEnd");

console.log("\nEJEMPLO N°2: Clase expresada");
console.log(lorena);            // Imprime solo la propiedad pública
console.log(lorena.saludar());  // Imprime "Hola. Soy Lorena y estoy estudiando BackEnd"

console.log("\nEJEMPLO N°3: Clase expresada - Uso de getter & Setter");
lorena.apellido = "Romero";     // Setter: Modifica el apellido
console.log(lorena.apellido);   // Getter: Imprime "Romero"
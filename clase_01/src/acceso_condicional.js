// Declaración e instanciación o creación de un objeto persona.
const persona = {
    nombre: "Juan",
    apellido: "Medina",
    numerosPreferidos: {
        a: 7,
        b: 10
    }
};

console.log(persona.numerosPreferidos?.a);  // Imprime 7

console.log(persona.coloresPreferidos?.c);  // Imprime undefined
// console.log(persona.coloresPreferidos.c);  // Rompe Todo. Descomentar para probar
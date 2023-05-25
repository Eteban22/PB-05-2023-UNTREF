/*
    La Function Constructor es técnicamente una función normal. Aunque
    hay dos convenciones:
        1). Son nombradas con la primera letra mayúscula.
        2). Sólo deben ejecutarse con el operador "new".
    Fuente: https://es.javascript.info/constructor-new
*/

function Producto(nombre, costo) {
    // Propiedades públicas
    this.nombre = nombre;
    this.costo = costo;

    // Métodos públicos
    this.obtenerPrecio = () => this.costo * 1.30;

    this.obtenerMargenDeGanancia = () => this.costo * 0.30;
}

// Instanciación o creación de un objeto
const producto = new Producto('TV Smart 32"', 78000);

console.log("\nEJEMPLO N°1: Uso de function constructor");
console.log(producto);

console.log("\nEJEMPLO N°2: Uso de function constructo - Métodos");
console.log(producto.obtenerPrecio());              // Imprime 101400
console.log(producto.obtenerMargenDeGanancia());    // Imprime 23400

function Producto(nombre, costo) {
    // Propiedades públicas
    this.nombre = nombre;
    this.costo = costo;

    // Método público
    this.obtenerPrecio = () => this.costo * 1.30;
}

// Instanciación o creación de objetos
const producto1 = new Producto('Teclado', 2700);
const producto2 = new Producto('Mouse', 1500);

console.log(producto1);
console.log(producto2);
console.log(producto2.obtenerPrecio());
/*
    El operador in devuelve true si la propiedad especificada está en
    el objeto especificado o su prototipo.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/in
*/

const coche = {
    marca: "Chevrolet",
    modelo: "S10",
    anio: 2013
};

if ("modelo" in coche) {
    console.log("El objeto 'coche' si tiene una propiedad denominada 'modelo'.");
} else {
    console.log("El objeto 'coche' no tiene una propiedad denominada 'modelo'.");
}
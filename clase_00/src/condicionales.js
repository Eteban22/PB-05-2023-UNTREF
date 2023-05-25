let nombre = "Juan";
let edad = 22;

if (nombre) {
    if (edad >= 21) {
        console.log(`${nombre} es mayor de edad`);
    } else {
        console.log(`${nombre} es menor de edad`);
    }
} else {
    console.log("Falta el nombre");
}
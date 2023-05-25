/*
    EJEMPLO EN VIVO: Consola web (pág.37)
                     Consola CLI en Visual Studio Code (pág.38)
*/

// La función "console.log" de JavaScript se usa para imprimir
// un mensaje genérico en la consola local o web.
console.log("Probando console.log");
console.log(100);
console.log({ nombre: "Juan", edad: 21, esMayorDeEdad: true });
console.log([10, 20, 30]);
console.table([10, 20, 30]);

/*  Las siguientes tres variantes de "console" solo muestran
    diferencias en la consola web:
        • console.info()    -> es un mensaje de información.
        • console.warn()    -> es un mensaje de advertencia.
        • console.error()   -> es un mensaje de error.
*/

console.info("Probando console.info");
console.warn("Probando console.warn");
console.error("Probando console.error");

// La función "console.clear" de JavaScript se usa limpiar los
// mensajes de la consola local o web (descomentar L20 para probar).
// console.clear(); //Console was cleared
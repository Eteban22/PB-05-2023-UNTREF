/*
    El objeto Promise representa la eventual finalización (o falla) de
    una operación asincrónica y su valor resultante.

    Estados de una Promise:
        • pending (pendiente): estado inicial, ni cumplido ni rechazado.
        • fulfilled (cumplida): la operación se completó con éxito.
        • rejected (rechazada): la operación falló.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

    Métodos	de una Promise:
        .then(result)           Ejecuta la función callback "result" (resolve)
                                cuando la promesa se cumple.
        .catch(error)	        Ejecuta la función callback "error" (reject)
                                cuando la promesa se rechaza.
        .finally(always)	    Ejecuta la función callback "always" tanto si se
                                cumple como si se rechaza.

    Dato extra: resolve y reject son callbacks, es decir, funciones.
*/

function obtenerUnNumeroAleatorioParEntre1y10() {
    console.log("Procesando...");

    return new Promise((resolve, reject) => {
        const numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10);

        // Se usa setTimeout solo para simular la demora que puede tener una petición
        setTimeout(() => {
            if (numeroAleatorioEntre1y10 % 2 === 0) {
                resolve(numeroAleatorioEntre1y10);
            } else {
                // Es un buena práctica manejar los errores con Error()
                reject(new Error(`Error al obtener el número aleatorio. ${numeroAleatorioEntre1y10}`));
            }
        }, 1000);
    });
}

obtenerUnNumeroAleatorioParEntre1y10()
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Proceso terminado"));

// El siguiente consolo.log está mal definido. Esto imprimiría
// Promise { <pending> } y no nos arrojaría un error.
// console.log(obtenerDatos());
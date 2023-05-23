/*
    La declaración de función "async" define una función como asíncrona.

    Cuando se llama a una función async, esta devuelve un elemento
    Promise. Cuando la función async devuelve un valor, Promise se
    resolverá con el valor devuelto. Si la función async genera una
    excepción o algún valor, Promise se rechazará con el valor generado.

    Una función async puede contener una expresión await, la cual pausa
    la ejecución de la función asíncrona y espera la resolución de la
    Promise pasada y, a continuación, reanuda la ejecución de la función
    async para devolver el valor resuelto.
*/

// a). Función asincrónica que retorna un número aleatorio por medio de
// una Promise. Tiene una demora de 1seg en procesarse.
function obtenerUnNumeroAleatorioParEntre1y10ConDemora() {
    return new Promise((resolve, reject) => {
        const numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10);

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

// b). Función asincrónica que invoca y espera por el resultado de la
// función "obtenerUnNumeroAleatorioParEntre1y10ConDemora()".
async function obtenerUnNumeroAleatorioParEntre1y10() {
    console.log("Procesando...");

    // Se recomienda el uso de try-catch para controlar un posible error
    try {
        let datos = await obtenerUnNumeroAleatorioParEntre1y10ConDemora();
        return datos;
    } catch (error) {
        return error.message;
    }
}

// c). La solución es colocar el console.log dentro de una
// función asíncrona junto con await.
const imprimirDato = async () => console.log(await obtenerUnNumeroAleatorioParEntre1y10());

imprimirDato();

// El siguiente consolo.log está mal definido. Esto imprimiría
// Promise { <pending> } y no nos arrojaría un error.
// console.log(obtenerUnNumeroAleatorioParEntre1y10());
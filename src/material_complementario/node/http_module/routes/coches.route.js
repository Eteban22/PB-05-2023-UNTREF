const cochesRouter = (request, response, url, coches) => {
    if (url.pathname === "/coches") {
        // La propiedad method indica el método HTTP que se utilizó
        // en la solicitud HTTP. Por ejemplo, GET, POST, DELETE, etc.
        if (request.method === "GET") {
            // La propiedad searchParams devuelve un objeto URLSearchParams
            // que permite el acceso a los argumentos de una solicitud HTTP.
            const id = url.searchParams.get('id');

            if (id) {
                const coche = coches.find((elemento) => elemento.id === Number(id));

                if (coche) {
                    response.writeHead(200, { "Content-Type": "application/json" });
                    // Alternativa: El método write() permite agregar contenido
                    // dentro de la respuesta HTTP. El cual será enviado por medio
                    // del método end(). Esto se puede simplificar colocando el
                    // contenido dentro del método end().
                    return response.write(JSON.stringify({ data: coche }, null, "\t"));
                }
            } else {
                response.writeHead(200, { "Content-Type": "application/json" });
                return response.end(JSON.stringify({ data: coches }, null, "\t"));
            }
        }

        if (request.method === "DELETE") {
            const id = url.searchParams.get('id');

            if (id) {
                const indice = coches.findIndex((elemento) => elemento.id === Number(id));

                if (indice >= 0) {
                    coches.splice(indice, 1);
                    response.writeHead(200, { "Content-Type": "text/plain" });
                    return response.write(`El coche id: ${id} se ha eliminado`);
                }
            }
        }

        if (request.method === "POST") {
            // Esto comprueba que venga codificado el form-data.
            if (request.headers["content-type"] === "application/x-www-form-urlencoded") {
                let body = null;

                // El método on() permite establecer un controlador de eventos
                // para el servidor. La bandera data, representa los datos
                // enviados en el Form-encode. El parámetro chunk, es un Buffer
                // que almacena tales datos. La bandera end, representa lo que
                // tiene que suceder cuando se ejecuta el método end().
                request.on('data', (chunk) => {
                    body = chunk.toString();
                });

                request.on('end', () => {
                    const datosJSON = `{"${body.replaceAll("&", "\",\"").replaceAll("=", "\":\"")}"}`;
                    const datosObject = JSON.parse(datosJSON);
                    const { marca, modelo, anio } = datosObject;

                    if (marca && modelo && anio) {
                        const cocheNuevo = {
                            id: Math.floor(Math.random() * 999999),
                            ...datosObject
                        };

                        coches.push(cocheNuevo);
                    }
                });
            }
        }

        if (request.method === "PUT") {
            if (request.headers["content-type"] === "application/x-www-form-urlencoded") {
                let body = null;

                request.on('data', (chunk) => {
                    body = chunk.toString();
                });

                request.on('end', () => {
                    const datosJSON = `{"${body.replaceAll("&", "\",\"").replaceAll("=", "\":\"")}"}`;
                    const datosObject = JSON.parse(datosJSON);
                    const { id, marca, modelo, anio } = datosObject;

                    if (id && marca && modelo && anio) {
                        datosObject.id = Number(id);
                        const indice = coches.findIndex((elemento) => elemento.id === Number(datosObject.id));
                        coches[indice] = datosObject;
                    }
                });
            }
        }
    }
};

export default cochesRouter;
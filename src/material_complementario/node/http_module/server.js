import http from "http";
import cochesRouter from "./routes/coches.route.js";

const PORT = 8080;
const HOST = "127.0.0.1";

const coches = [
    { id: 1, marca: "Ford", modelo: "Fiesta", anio: 2020 },
    { id: 2, marca: "Chevrolet", modelo: "S10", anio: 2013 },
    { id: 3, marca: "Fiat", modelo: "Palio", anio: 2022 }
];

// El método createServer() crea un nuevo servidor HTTP.
const server = http.createServer((request, response) => {
    // El constructor URL() devuelve un objeto URL que representa la
    // URL definida por parámetro. La propiedad request.url contiene
    // la URL solicitada.
    const url = new URL(request.url, `http://${request.headers.host}`);

    // La propiedad pathname representa la ubicación de la URL.
    if (url.pathname === "/ejemplo/html") {
        // El método writeHead() permite escribir el encabezado de la
        response.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
        response.end("<div><h1>Bienvenidos</h1><p>Esto es una demostración</p></div>");
    } else if (url.pathname === "/ejemplo/json") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(coches, null, "\t"));
    } else if (url.pathname === "/ejemplo/csv") {
        response.writeHead(200, {
            "Content-Type": "application/json",
            "Content-Disposition": "attachment; filename=planilla.csv"
        });

        const titulos = Object.keys(coches[0]).join(";");
        let contenido = `${titulos}\n`;

        coches.forEach((coche) => {
            const tupla = Object.values(coche).join(";");
            contenido += `${tupla}\n`;
        });

        response.end(contenido);
    } else if (cochesRouter(request, response, url, coches)) {
        response.end();
    } else {
        response.writeHead(404, { "Content-Type": "text/html; charset=utf8" });
        response.end(`<h1>${http.STATUS_CODES[404]}</h1><p>Probando el módulo HTTP</p>`);
    }
});

// El método listen() le permite al servidor escuchar las solicitudes
// HTTP en un host y puerto específico.
server.listen(PORT, HOST, () => console.log(`run en http://${HOST}:${PORT}`));
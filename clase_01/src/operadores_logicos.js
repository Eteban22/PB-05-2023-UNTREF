const persona = {
    nombre: "Juan",
    apellido: "Medina",
    edad: 17,
    esCiudadanoArgentino: false,
    esCiudadanoNaturalizado: true
};

if (persona.esCiudadanoArgentino === true || persona.esCiudadanoNaturalizado === true) {
    console.log(`${persona.nombre} es argentino`);
} else {
    console.log(`${persona.nombre} no es argentino`);
}

if (persona.edad >= 10 && persona.edad <= 19) {
    console.log(`${persona.nombre} es adolescente`);
} else {
    console.log(`${persona.nombre} no es adolescente`);
}

if ((persona.esCiudadanoArgentino === true || persona.esCiudadanoNaturalizado === true)
    && persona.edad >= 18) {
    console.log(`${persona.nombre} es argentino y es mayor de edad`);
} else {
    console.log(`${persona.nombre} no es argentino o no es mayor de edad`);
}
let edadDeLaPersona = 22;

let esMayorDeEdad = (edadDeLaPersona >= 18) ? "Si" : "No";
console.log(esMayorDeEdad);

let esMenorDeEdad = (edadDeLaPersona < 18)
    ? `Es menor de edad. Actualmente tiene ${edadDeLaPersona} años`
    : `Es mayor de edad. Actualmente tiene ${edadDeLaPersona} años`;
console.log(esMenorDeEdad);
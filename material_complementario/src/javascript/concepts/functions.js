// Función declarada (tradicional)
function sumarConFuncionDeclarada(numeroA, numeroB) {
    return numeroA + numeroB;
}

console.log("\nEJEMPLO: Uso de función declarada (tradicional)");
console.log(sumarConFuncionDeclarada(3, 5));

// Función expresada con estructura nombrada (No se recomienda)
const sumarConFuncionExpresadaNombrada = function sumar(numeroA, numeroB) {
    return numeroA + numeroB;
};

console.log("\nEJEMPLO: Uso de función expresada (nombrada)");
console.log(sumarConFuncionExpresadaNombrada(3, 5));

// Función expresada con estructura anónima
const sumarConFuncionExpresadaAnonima = function (numeroA, numeroB) {
    return numeroA + numeroB;
};

console.log("\nEJEMPLO: Uso de función expresada (anónima)");
console.log(sumarConFuncionExpresadaAnonima(3, 5));

// Función expresada con estructura de flecha
const sumarConFuncionExpresadaArrowFunction = (numeroA, numeroB) => numeroA + numeroB;

console.log("\nEJEMPLO: Uso de función expresada (arrow function)");
console.log(sumarConFuncionExpresadaArrowFunction(3, 5));
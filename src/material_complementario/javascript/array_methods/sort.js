/*
    El método sort() ordena los elementos de un arreglo (array) localmente
    y devuelve el arreglo ordenado. La ordenación no es necesariamente
    estable. El modo de ordenación por defecto responde a la posición del
    valor del string de acuerdo a su valor unicode.
        • Si el callback(varA, varB) retorna un valor menor que 0, entonces,
          se coloca varA en un índice menor que varB.
        • Si el callback(varA, varB) retorna un valor mayor que 0, entonces,
          se coloca varB en un índice menor que varA.
        • Si el callback(varA, varB) retorna un valor igual a 0, entonces,
          varA y varB se deja en los indices que actualmente están.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

const frutas = ["Manzana", "Naranja", "Banana", "Uva", "Ananá"];

console.log("\nEJEMPLO 1: Uso de sort con texto ascendente (valor unicode)");
frutas.sort((a, b) => a.localeCompare(b));
console.log(frutas);

console.log("\nEJEMPLO 2: Uso de sort con texto descendente (valor unicode)");
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas);

const numeros = [11, 15, 8, 9, 24];

console.log("\nEJEMPLO 3: Uso de sort con números de menor a mayor");
numeros.sort((a, b) => a - b);
console.log(numeros);

console.log("\nEJEMPLO 4: Uso de sort con números de mayor a menor");
numeros.sort((a, b) => {
    if (b > a) return 1;
    else if (b < a) return -1;
    return 0;
});
console.log(numeros);

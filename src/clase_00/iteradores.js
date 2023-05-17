const letras = ["A", "B", "C", "D"];

console.log("\nIterador for");
for (let i = 0; i < letras.length; i++) {
    console.log(letras[i]);
}

console.log("\nIterador while");
let auxiliar = 0;
while (auxiliar < letras.length) {
    console.log(letras[auxiliar]);
    auxiliar++;
}

console.log("\nIterador do-while");
do {
    letras.push("E");
    console.log(letras);
} while (letras.length < 3);
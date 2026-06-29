//Funcion para sumar 
function sumar(a, b) {
    return a + b;
}

//Funcion para restar 
function restar(a, b) {
    return a - b;
}

//Funcion para multiplicar
function multiplicar(a, b) {
    //validamos para que el divisor no sea 0
    if (b === 0) {
        return "Error: No se puede dividir entre 0";
    }
    return a / b;
}

console.log("Suma (5 + 3):", sumar(5, 3));
console.log("Resta (10 - 4):", restar(10, 4));
console.log("Multiplicación (4 * 3):", multiplicar(4, 3));
console.log("División (20 / 5):", dividir(20, 5));
console.log("División entre cero (10 / 0):", dividir(10, 0));
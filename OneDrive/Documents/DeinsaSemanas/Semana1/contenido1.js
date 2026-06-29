//variables y tipos de datos

/*
Vairables: Son contenedores donde se guarda informacion, Se utiliza const para valores fijos o que en la ejecucion del programa se mantedran estaticos,
y let para valores dinamicos o que en la ejecucion del programa pueden modificarse. 
*/

//Tipos de datos: Es el formato en el que se guarda la informacion que metes en esos contenedores. Pueden ser textos, numeros, verdadero/falso.

//Ejemplo
let nombre = 'Jaime'; //Tipo String
let edad = 22; //Tipo Int
let activo = true; //Tipo Boolean

//Condicionales 
if (edad >= 18) {
    console.log("Es mayor de edad");
}

//Ciclos
for (let i = 0; i<5; i++) {
    console.log("Numero: ", i);
}

//Funciones 
function sumar(a, b) {
    return a+b;
}

const restar = (a, b) => a - b;

//Tareas Obligatorias 
/* 
1. Resolver ejercicios basicos. 
Crear variables. 
Operaciones matematicas y 
condiciones simples
*/

//Creacion de variables usando const y let

//Utilizamos const ya que sera variables fijas o estaticas
const nombreUsuario = "Jaime"
const anioNacimiento = 2004;

//Utilizamos Let ya que son variables que se cambiaran durante la ejecucion del programa
let edadCalculada = 0;
let activo = true;

console.log("Usuario: ", nombreUsuario, "| Activo", activo);

//Operaciones Matematicas. Operadores Basicos +, -, *, / con variables.
const precioProducto = 50;
const cantidad = 3;
const descuento = 15;

// multiplicacion y resta
let totalSinDescuento = precioProducto * cantidad;
let totalConDescuento = totalSinDescuento - descuento;

console.log("Total a Pagar: ", totalConDescuento);

//condiciones simples tomar una decision basada en una condicion usando if y else
const saldoDisponible = 100;
const costoSuscripcion = 120;

//Evaluamos si alcanza el dienro
if (saldoDisponible >= costoSuscripcion) {
    console.log("!Suscripcion pagada con exito!");
} else {
    console.log("Fondos insuficientes. Recarga tu cuenta.");
}






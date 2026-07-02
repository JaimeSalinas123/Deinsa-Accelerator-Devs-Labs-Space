//Manipulacion del DOM y Primeros Interacciones
//DOM: Funciona como un puente o mapap estructural que permite a js contectarse con la pagina
//Interacciones de paginas web

//Seleccion de elementos
const titulos = document.querySelector("h1");
const items = document.querySelectorAll(".item");

//Modificar Contenido
titulos.textContent = "Nuevo Titulo Dinamico"

//Modificar Estilo
titulos.style.color = "red";
titulos.style.fontSize = "32px";

//Escuchar Eventos 
button.addEventListener("click", () => {
    console.log("Botón presionado");
});

//Crear Elementos Dinamicamente
const li = document.createElement("li");
li.textContent = "Nuevo Elemento";
lista.appendChild(li);

//Eliminar Elementos 
lista.removeChild(lista.firstElementChild);

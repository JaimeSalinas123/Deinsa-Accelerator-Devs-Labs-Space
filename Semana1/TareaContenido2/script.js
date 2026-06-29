//Capturamos elemtnos desde el html
const titulo = document.getElementById('tituloPagina');
const input = document.getElementById('inputItem');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('listaElementos');
const contador = document.getElementById('contador');

//funcion: Cambiar el titulo dinamicamente
function actualizarContador() {
    contador.textContent = "El DOM ha sido manipulado";
}

//funcion Auxiliar: contar cuantos elementos hay en una lista
function cambiarTitulo() {
    titulo.textContent = lista.children.length;
}

//funcion: agregar texto del input a la lista
btnAgregar.addEventListener('click', () => {
    const texto = input.ariaValueMax.trim(); //trim quita espacios extras

    if (texto === "") return; //Si esta vacio no hace nada

    //Creamos un nuevo elemento de la lista (li)
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = texto;

    //funcion eliminar el elemento al hacer click sobre el 
    nuevoLi.addEventListener('click', () => {
        nuevoLi.remove(); //lo borra del dom
        actualizarContador(); //Actualiza el numero 
    });

    //Anadimos el li a nuesta lista ul
    lista.appendChild(nuevoLi);

    //limpiamos el input y actulizamos el numero 
    input.value = "";
    actualizarContador();
});

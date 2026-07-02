// 1. Capturar elementos del DOM
const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const btnEliminarTodo = document.getElementById('btnEliminarTodo');
const listaTareas = document.getElementById('listaTareas');
const contador = document.getElementById('contador');
const contenedor = document.getElementById('contenedor');

// 2. Inicializar el estado (Local Storage)
// Intentamos traer las tareas guardadas. Si no hay nada (null), iniciamos un arreglo vacío [].
// JSON.parse convierte el texto guardado de vuelta a un arreglo de JavaScript.
let tareas = JSON.parse(localStorage.getItem('tareasPersistentes')) || [];

// 3. Función Maestra: Renderizar la Interfaz
function actualizarUI() {
    // A) Limpiar la lista visual antes de repintar
    listaTareas.innerHTML = '';

    // B) Repintar cada tarea del arreglo
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;
        
        // Botón individual para borrar esta tarea específica
        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = 'X';
        btnBorrar.className = 'btn-eliminar';
        btnBorrar.onclick = () => eliminarTareaIndividual(index);

        li.appendChild(btnBorrar);
        listaTareas.appendChild(li);
    });

    // C) Actualizar el contador
    const total = tareas.length;
    contador.textContent = total;

    // D) Cambio automático de color según cantidad de tareas
    contenedor.className = ''; // Limpiamos clases previas
    if (total <= 2) {
        contenedor.classList.add('verde');
    } else if (total > 2 && total <= 5) {
        contenedor.classList.add('amarillo');
    } else {
        contenedor.classList.add('rojo'); // Demasiadas tareas pendientes
    }

    // E) Guardar en LocalStorage para persistencia
    // JSON.stringify convierte el arreglo en texto para que el navegador lo pueda guardar.
    localStorage.setItem('tareasPersistentes', JSON.stringify(tareas));
}

// 4. Agregar Tarea
btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    if (texto !== '') {
        tareas.push(texto); // Agregamos al arreglo
        inputTarea.value = ''; // Limpiamos el input
        actualizarUI(); // Repintamos la pantalla
    }
});

// 5. Eliminar Tarea Individual
function eliminarTareaIndividual(index) {
    tareas.splice(index, 1); // Sacamos 1 elemento en la posición 'index'
    actualizarUI();
}

// 6. Eliminar Todo
btnEliminarTodo.addEventListener('click', () => {
    tareas = []; // Vaciamos el arreglo
    actualizarUI();
});

// 7. Arrancar la aplicación al inicio
actualizarUI();
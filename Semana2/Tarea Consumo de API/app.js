//Consumo de API
//Poke API

//Seleccionamos el contenedor HTML donde se inyectara la informacion
const container = document.querySelector("#resultado");

//Seleccionamos el boton de nuestro HTML para poder escuchar cuando den CLICK
const btn = document.querySelector("#btnRecargar");

//Defincion de una funcion asincrona (async) por que consumo de api le toma su tiempo
async function obtenerPokemon() {
    // Generacion numero del 1 al 150 para elegir un Pokemon distinto cada vez
    const randomId = Math.floor(Math.random() * 150) + 1;

    try {
        // Usamos fetch para llamar a la PokeAPI; await pausa la ejecución hasta recibir la respuesta
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

        //Convertimos la respuesta cruda del servidor en un formato JSON (objeto legible)
        const data = await res.json();

        //Enviamos los datos obtenido a nuestra funcion de renderizado
        renderPokemon(data);
    } catch (error) {
        //Si hay un error mostramos mensaje de error
        container.innerHTML =  `<p>¡Error al atrapar el Pokémon! Intenta de nuevo.</p>`;
    }
}

//Funcion encargada exclusivamente de pintar los datos en el DOM
function renderPokemon(p) {

    // Si algún dato falla, pondremos un "N/A" en lugar de romper toda la página
    const nombre = p.name ? p.name.toUpperCase() : "Desconocido";
    const tipo = (p.types && p.types.length > 0) ? p.types[0].type.name : "Sin tipo";

    //Usamos Template Literals o comillas invertidas para insertar los 5 datos solicitados
    container.innerHTML = `
        <img src="${p.sprites.front_default}" alt="${p.name}" style="width: 200px;">
        <h2>Nombre: ${nombre}</h2>
        <p>ID: ${p.id}</p>
        <p>Tipo principal: ${tipo}</p>
        <p>Experiencia base: ${p.base_experience}</p>
    `;
}

//Agregamos un escuchador al boton. Como decir, cuando detecte un click, ejecuta esta funcion
btn.addEventListener("click", obtenerPokemon);

//LLamamos a la funcion una vez al cargar la pagina para no mostrar el contenedor vacio
obtenerPokemon();